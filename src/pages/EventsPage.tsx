import React, { useState, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Eye, UserPlus, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [registrationData, setRegistrationData] = useState<Record<string, string | string[]>>({});
  const [events, setEvents] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [registrationForm, setRegistrationForm] = useState<any>(null);
  const [availableCategories, setAvailableCategories] = useState<any[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
    fetchCategories();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('active', true)
        .order('starts_at', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: "Error",
        description: "Failed to load events",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('event_categories')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchAvailableCategories = async (eventId: string) => {
    try {
      const { data, error } = await supabase
        .from('event_registration_forms')
        .select(`
          id,
          category_id,
          form_fields,
          event_categories (
            id,
            name,
            description
          )
        `)
        .eq('event_id', eventId)
        .eq('active', true);

      if (error) throw error;
      
      const categoriesWithForms = data?.map(item => ({
        id: item.category_id,
        name: item.event_categories.name,
        description: item.event_categories.description,
        form_fields: item.form_fields
      })) || [];
      
      setAvailableCategories(categoriesWithForms);
    } catch (error) {
      console.error('Error fetching available categories:', error);
      setAvailableCategories([]);
    }
  };

  const fetchRegistrationForm = async (eventId: string, categoryId: string) => {
    try {
      console.log('Fetching form for event:', eventId, 'category:', categoryId);
      
      const { data, error } = await supabase
        .from('event_registration_forms')
        .select('form_fields')
        .eq('event_id', eventId)
        .eq('category_id', categoryId)
        .eq('active', true)
        .single();

      if (error) throw error;
      
      console.log('Raw form data:', data);
      
      if (data && data.form_fields && Array.isArray(data.form_fields)) {
        // Transform form fields to ensure proper structure
        const transformedFields = data.form_fields.map((field: any, index: number) => {
          // Generate field name from question or use index
          const fieldName = field.name || 
            (field.question ? field.question.toLowerCase().replace(/[^a-z0-9]/g, '_') : `field_${index}`);
          
          return {
            name: fieldName,
            label: field.label || field.question || `Field ${index + 1}`,
            type: field.type || 'text',
            placeholder: field.placeholder || `Enter ${field.label || field.question || 'value'}`,
            required: field.required !== undefined ? field.required : false,
            options: field.options || []
          };
        });
        
        console.log('Transformed fields:', transformedFields);
        
        setRegistrationForm({ form_fields: transformedFields });
      } else {
        console.log('No valid form fields found or form_fields is not an array');
        setRegistrationForm(null);
      }
    } catch (error) {
      console.error('Error fetching registration form:', error);
      setRegistrationForm(null);
    }
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent || !selectedCategory) return;

    try {
      const selectedCategoryData = availableCategories.find(cat => cat.name.toLowerCase() === selectedCategory);
      
      const { error } = await supabase
        .from('event_registrations')
        .insert({
          event_id: selectedEvent.id,
          category_id: selectedCategoryData?.id,
          registration_data: registrationData
        });

      if (error) throw error;

      toast({
        title: "Registration Submitted!",
        description: "Thank you for registering. We'll contact you soon with further details.",
      });
      
      // Reset form and close modal
      setRegistrationData({});
      setSelectedCategory('');
      setRegistrationForm(null);
      setShowRegistrationModal(false);
      setSelectedEvent(null);
    } catch (error) {
      console.error('Error submitting registration:', error);
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (fieldName: string, file: File | undefined) => {
    if (!file || !selectedEvent) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedEvent.id}/${fieldName}_${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('leader-uploads')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('leader-uploads')
        .getPublicUrl(fileName);

      handleInputChange(fieldName, publicUrl);
      
      toast({
        title: "File uploaded successfully",
        description: "Your file has been uploaded.",
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload failed",
        description: "Failed to upload file. Please try again.",
        variant: "destructive"
      });
    }
  };

  const openGoogleDrive = (driveLink: string) => {
    window.open(driveLink, '_blank');
  };

  const openRegistrationModal = async (event: any) => {
    setSelectedEvent(event);
    setShowRegistrationModal(true);
    await fetchAvailableCategories(event.id);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Events</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Our Events Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Discover our exciting events, workshops, and activities. Register for active events or explore photos from past events.
              </p>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-300">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-300">No events available at the moment.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map(event => (
                <Card key={event.id} className="bg-black/40 border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                  {event.cover_image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={event.cover_image_url} 
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <Badge variant={event.photos_url ? "secondary" : "default"}>
                        {event.photos_url ? "Past" : "Upcoming"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                      {event.starts_at && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.starts_at).toLocaleDateString()}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{event.description}</p>
                    
                    {event.photos_url ? (
                      <Button 
                        onClick={() => openGoogleDrive(event.photos_url)}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Album
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => openRegistrationModal(event)}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white flex items-center gap-2"
                      >
                        <UserPlus className="w-4 h-4" />
                        Register Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Registration Modal */}
          <Dialog open={showRegistrationModal} onOpenChange={setShowRegistrationModal}>
            <DialogContent className="w-[95vw] max-w-2xl max-h-[90vh] bg-black/90 border-gray-700 overflow-y-auto">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-cyan-400 text-lg">
                  Register for {selectedEvent?.title}
                </DialogTitle>
              </DialogHeader>
              
              {/* Check if Google Form is configured */}
              {selectedEvent?.google_form_mode === 'embed' && selectedEvent?.google_form_url ? (
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-cyan-400">Registration Form</h3>
                    <p className="text-gray-300 text-sm">Please fill out the registration form below</p>
                  </div>
                  
                  {/* Custom UI for Google Form */}
                  {availableCategories.length > 0 && (
                    <form onSubmit={handleRegistration} className="space-y-4">
                      <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg p-4 border border-cyan-400/30">
                        <Label htmlFor="category" className="text-cyan-400 font-medium">Select Category</Label>
                        <Select value={selectedCategory} onValueChange={async (value) => {
                          setSelectedCategory(value);
                          if (selectedEvent) {
                            const category = availableCategories.find(cat => cat.name.toLowerCase() === value);
                            if (category) {
                              await fetchRegistrationForm(selectedEvent.id, category.id);
                            }
                          }
                        }}>
                          <SelectTrigger className="mt-2 bg-black/50 border-cyan-400/50 text-white h-12 hover:border-cyan-400 transition-colors">
                            <SelectValue placeholder="Choose your category" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-cyan-400/50">
                            {availableCategories.map(category => (
                              <SelectItem key={category.id} value={category.name.toLowerCase()} className="text-white hover:bg-cyan-900/30">
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedCategory && registrationForm && registrationForm.form_fields.length > 0 && (
                        <div className="space-y-4">
                          {registrationForm.form_fields.map((field: any, index: number) => (
                            <div key={index} className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 rounded-lg p-4 border border-gray-600/50 hover:border-gray-500 transition-colors">
                              <Label htmlFor={field.name} className="text-white font-medium mb-2 block">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                              </Label>
                              
                              {(field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number') ? (
                                <Input
                                  id={field.name}
                                  type={field.type}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-500 text-white h-12 text-base focus:border-cyan-400 focus:ring-cyan-400/20"
                                  placeholder={field.placeholder}
                                  required={field.required}
                                />
                              ) : (field.type === 'date' || field.type === 'time' || field.type === 'datetime-local') ? (
                                <Input
                                  id={field.name}
                                  type={field.type}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-500 text-white h-12 text-base focus:border-cyan-400 focus:ring-cyan-400/20"
                                  required={field.required}
                                />
                              ) : field.type === 'textarea' ? (
                                <Textarea
                                  id={field.name}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-500 text-white text-base min-h-[100px] resize-none focus:border-cyan-400 focus:ring-cyan-400/20"
                                  placeholder={field.placeholder}
                                  required={field.required}
                                />
                              ) : (field.type === 'select' || field.type === 'dropdown') ? (
                                <Select 
                                   value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] as string : ''}
                                  onValueChange={(value) => handleInputChange(field.name, value)}
                                >
                                  <SelectTrigger className="bg-black/50 border-gray-500 text-white h-12 focus:border-cyan-400">
                                    <SelectValue placeholder={field.placeholder || 'Select an option'} />
                                  </SelectTrigger>
                                  <SelectContent className="bg-black border-gray-500">
                                    {field.options?.map((option: string, optionIndex: number) => (
                                      <SelectItem key={optionIndex} value={option} className="text-white hover:bg-cyan-900/30">
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (field.type === 'radio' || field.type === 'multiple_choice') ? (
                                <div className="space-y-3">
                                  {field.options?.map((option: string, optionIndex: number) => (
                                    <div key={optionIndex} className="flex items-center space-x-3">
                                      <input
                                        type="radio"
                                        id={`${field.name}_${optionIndex}`}
                                        name={field.name}
                                        value={option}
                                        checked={registrationData[field.name] === option}
                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                        className="w-4 h-4 text-cyan-600 bg-black/50 border-gray-500 focus:ring-cyan-500 focus:ring-2"
                                        required={field.required}
                                      />
                                      <label htmlFor={`${field.name}_${optionIndex}`} className="text-white text-sm">
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : (field.type === 'checkbox' || field.type === 'checkboxes') ? (
                                <div className="space-y-3">
                                  {field.options?.map((option: string, optionIndex: number) => (
                                    <div key={optionIndex} className="flex items-center space-x-3">
                                      <input
                                        type="checkbox"
                                        id={`${field.name}_${optionIndex}`}
                                        value={option}
                                        checked={Array.isArray(registrationData[field.name]) ? registrationData[field.name].includes(option) : false}
                                        onChange={(e) => {
                                          const currentValues = Array.isArray(registrationData[field.name]) ? registrationData[field.name] : [];
                                          if (e.target.checked) {
                                            handleInputChange(field.name, [...currentValues, option]);
                                          } else {
                                            handleInputChange(field.name, (currentValues as string[]).filter((v: string) => v !== option));
                                          }
                                        }}
                                        className="w-4 h-4 text-cyan-600 bg-black/50 border-gray-500 rounded focus:ring-cyan-500 focus:ring-2"
                                      />
                                      <label htmlFor={`${field.name}_${optionIndex}`} className="text-white text-sm">
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : (field.type === 'file' || field.type === 'image') ? (
                                <div className="space-y-2">
                                  <Input
                                    id={field.name}
                                    type="file"
                                    onChange={(e) => handleFileUpload(field.name, e.target.files?.[0])}
                                    className="bg-black/50 border-gray-500 text-white h-12 file:bg-cyan-600 file:text-white file:rounded file:border-0 file:px-4 file:py-2 file:mr-4 hover:file:bg-cyan-700"
                                    accept={field.type === 'image' ? 'image/*' : undefined}
                                    required={field.required && !registrationData[field.name]}
                                  />
                                  {registrationData[field.name] && (
                                    <p className="text-green-400 text-sm">✓ File uploaded successfully</p>
                                  )}
                                </div>
                              ) : (
                                <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-3">
                                  <p className="text-red-400 text-sm">
                                    Unsupported field type: {field.type}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}
                          
                          <div className="flex gap-3 pt-4">
                            <Button 
                              type="submit" 
                              className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white h-12 font-medium"
                            >
                              Submit Registration
                            </Button>
                            <Button 
                              type="button"
                              variant="outline"
                              onClick={() => window.open(selectedEvent.google_form_url, '_blank')}
                              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 h-12"
                            >
                              Open Original Form
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  )}
                </div>
              ) : selectedEvent?.google_form_mode === 'redirect' && selectedEvent?.google_form_url ? (
                <div className="space-y-4 text-center">
                  <p className="text-gray-300 text-sm">Click the button below to open the registration form:</p>
                  <Button 
                    onClick={() => window.open(selectedEvent.google_form_url, '_blank')}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                  >
                    Open Registration Form
                  </Button>
                </div>
              ) : (
                /* Built-in Form */
                <div className="space-y-3">
                  {availableCategories.length === 0 ? (
                    <div className="text-center py-6">
                      <p className="text-gray-300 text-sm">No registration forms available for this event.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleRegistration} className="space-y-3">
                      <div>
                        <Label htmlFor="category" className="text-white text-sm">Select Category</Label>
                        <Select value={selectedCategory} onValueChange={async (value) => {
                          setSelectedCategory(value);
                          if (selectedEvent) {
                            const category = availableCategories.find(cat => cat.name.toLowerCase() === value);
                            if (category) {
                              await fetchRegistrationForm(selectedEvent.id, category.id);
                            }
                          }
                        }}>
                          <SelectTrigger className="bg-black/50 border-gray-600 text-white h-9">
                            <SelectValue placeholder="Choose your category" />
                          </SelectTrigger>
                          <SelectContent className="bg-black border-gray-600 z-50">
                            {availableCategories.map(category => (
                              <SelectItem key={category.id} value={category.name.toLowerCase()} className="text-white">
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedCategory && registrationForm && registrationForm.form_fields.length > 0 ? (
                        <div className="space-y-3">
                          {registrationForm.form_fields.map((field: any, index: number) => (
                            <div key={index} className="space-y-1">
                              <Label htmlFor={field.name} className="text-white text-sm">
                                {field.label}
                                {field.required && <span className="text-red-400 ml-1">*</span>}
                              </Label>
                              
                              {(field.type === 'text' || field.type === 'email' || field.type === 'tel' || field.type === 'number') ? (
                                <Input
                                  id={field.name}
                                  type={field.type}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-600 text-white h-9 text-sm focus:border-cyan-400"
                                  placeholder={field.placeholder}
                                  required={field.required}
                                />
                              ) : (field.type === 'date' || field.type === 'time' || field.type === 'datetime-local') ? (
                                <Input
                                  id={field.name}
                                  type={field.type}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-600 text-white h-9 text-sm focus:border-cyan-400"
                                  required={field.required}
                                />
                              ) : field.type === 'textarea' ? (
                                <Textarea
                                  id={field.name}
                                  value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] : ''}
                                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                                  className="bg-black/50 border-gray-600 text-white text-sm min-h-[80px] resize-none focus:border-cyan-400"
                                  placeholder={field.placeholder}
                                  required={field.required}
                                />
                              ) : (field.type === 'select' || field.type === 'dropdown') ? (
                                <Select 
                                   value={typeof registrationData[field.name] === 'string' ? registrationData[field.name] as string : ''}
                                  onValueChange={(value) => handleInputChange(field.name, value)}
                                >
                                  <SelectTrigger className="bg-black/50 border-gray-600 text-white h-9 focus:border-cyan-400">
                                    <SelectValue placeholder={field.placeholder || 'Select an option'} />
                                  </SelectTrigger>
                                  <SelectContent className="bg-black border-gray-600 z-50">
                                    {field.options?.map((option: string, optionIndex: number) => (
                                      <SelectItem key={optionIndex} value={option} className="text-white hover:bg-cyan-900/30">
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (field.type === 'radio' || field.type === 'multiple_choice') ? (
                                <div className="space-y-2">
                                  {field.options?.map((option: string, optionIndex: number) => (
                                    <div key={optionIndex} className="flex items-center space-x-2">
                                      <input
                                        type="radio"
                                        id={`${field.name}_${optionIndex}`}
                                        name={field.name}
                                        value={option}
                                        checked={registrationData[field.name] === option}
                                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                                        className="w-3 h-3 text-cyan-600 bg-black/50 border-gray-600 focus:ring-cyan-500"
                                        required={field.required}
                                      />
                                      <label htmlFor={`${field.name}_${optionIndex}`} className="text-white text-sm">
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : (field.type === 'checkbox' || field.type === 'checkboxes') ? (
                                <div className="space-y-2">
                                  {field.options?.map((option: string, optionIndex: number) => (
                                    <div key={optionIndex} className="flex items-center space-x-2">
                                      <input
                                        type="checkbox"
                                        id={`${field.name}_${optionIndex}`}
                                        value={option}
                                        checked={Array.isArray(registrationData[field.name]) ? registrationData[field.name].includes(option) : false}
                                        onChange={(e) => {
                                          const currentValues = Array.isArray(registrationData[field.name]) ? registrationData[field.name] : [];
                                          if (e.target.checked) {
                                            handleInputChange(field.name, [...currentValues, option]);
                                          } else {
                                            handleInputChange(field.name, (currentValues as string[]).filter((v: string) => v !== option));
                                          }
                                        }}
                                        className="w-3 h-3 text-cyan-600 bg-black/50 border-gray-600 rounded focus:ring-cyan-500"
                                      />
                                      <label htmlFor={`${field.name}_${optionIndex}`} className="text-white text-sm">
                                        {option}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              ) : (field.type === 'file' || field.type === 'image') ? (
                                <div className="space-y-1">
                                  <Input
                                    id={field.name}
                                    type="file"
                                    accept={field.type === 'image' ? 'image/*' : undefined}
                                    onChange={(e) => handleFileUpload(field.name, e.target.files?.[0])}
                                    className="bg-black/50 border-gray-600 text-white file:bg-cyan-600 file:text-white file:rounded file:border-0 file:px-2 file:py-1 file:mr-2 hover:file:bg-cyan-700 h-9 text-sm"
                                    required={field.required && !registrationData[field.name]}
                                  />
                                  {registrationData[field.name] && (
                                    <p className="text-xs text-green-400">
                                      ✓ File uploaded successfully
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div className="bg-red-900/20 border border-red-500/50 rounded p-2">
                                  <p className="text-red-400 text-xs">
                                    Unsupported field type: {field.type}
                                  </p>
                                </div>
                              )}
                            </div>
                          ))}

                          <Button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 h-9 text-sm mt-4">
                            Submit Registration
                          </Button>
                        </div>
                      ) : selectedCategory ? (
                        <div className="text-center py-4">
                          <p className="text-gray-300 text-sm">No registration form configured for this category.</p>
                        </div>
                      ) : null}
                    </form>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </PageLayout>
  );
};

export default EventsPage;