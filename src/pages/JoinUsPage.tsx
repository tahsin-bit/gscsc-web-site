import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UserPlus, Heart, Star, Users, Calculator } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const JoinUsPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    collegeRoll: '',
    email: '',
    phone: '',
    section: '',
    bloodGroup: '',
    departments: [] as string[],
    paymentType: '',
    accountName: '',
    accountNumber: '',
    transactionId: ''
  });

  const departments = [
    'Project display and research paper',
    'Wall magazine and scrapbook',
    'Press and Publications',
    'Photography and media',
    'Quizzing Circuit',
    'Olympiad circuit',
    'Robotics and Rocketry',
    'Public relations',
    'IT',
    'Gaming affairs'
  ];

  // Map UI labels to enum values in public.department_type
  const departmentEnumMap: Record<string, string> = {
    'Project display and research paper': 'project_display_research_paper',
    'Wall magazine and scrapbook': 'wall_magazine_scrapbook',
    'Press and Publications': 'press_publications',
    'Photography and media': 'photography_media',
    'Quizzing Circuit': 'quizzing_circuit',
    'Olympiad circuit': 'olympiad_circuit',
    'Robotics and Rocketry': 'robotics_rocketry',
    'Public relations': 'public_relations',
    'IT': 'it',
    'Gaming affairs': 'gaming_affairs',
  };

  const handleDepartmentChange = (department: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        departments: [...prev.departments, department]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        departments: prev.departments.filter(d => d !== department)
      }));
    }
  };

  const totalAmount = 200;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const mappedDepartments = formData.departments
        .map((d) => departmentEnumMap[d])
        .filter(Boolean) as any;

      console.log("Submitting join request:", {
        full_name: formData.name,
        college_roll: formData.collegeRoll,
        email: formData.email,
        phone: formData.phone,
        section: formData.section,
        blood_group: formData.bloodGroup,
        departments: mappedDepartments,
        account_name: formData.accountName,
        account_number: formData.accountNumber,
        transaction_id: formData.transactionId,
      });

      const { error } = await supabase.from('join_requests').insert({
        full_name: formData.name,
        college_roll: formData.collegeRoll,
        email: formData.email,
        phone: formData.phone,
        section: formData.section,
        blood_group: formData.bloodGroup,
        departments: mappedDepartments as any,
        payment_type: formData.paymentType,
        total_amount: totalAmount,
        account_name: formData.paymentType === 'online' ? formData.accountName : null,
        account_number: formData.paymentType === 'online' ? formData.accountNumber : null,
        transaction_id: formData.paymentType === 'online' ? formData.transactionId : null,
      } as any);

      if (error) {
        console.error("Join request insert error:", error);
        toast({
          title: "Submission failed",
          description: "Please try again later.",
        });
      } else {
        toast({
          title: "Application submitted",
          description: "We received your details. You'll be contacted soon.",
        });
        setFormData({
          name: '',
          collegeRoll: '',
          email: '',
          phone: '',
          section: '',
          bloodGroup: '',
          departments: [],
          paymentType: '',
          accountName: '',
          accountNumber: '',
          transactionId: ''
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Join Us</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <UserPlus className="w-8 h-8" />
                Become a Member
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Why Join Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-200 space-y-3">
                  <li>• Access to exclusive research resources</li>
                  <li>• Networking with industry professionals</li>
                  <li>• Professional development workshops</li>
                  <li>• Research collaboration opportunities</li>
                  <li>• Mentorship programs</li>
                  <li>• Conference presentation opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-200 space-y-3">
                  <li>• Priority access to workshops and events</li>
                  <li>• Research funding opportunities</li>
                  <li>• Industry internship connections</li>
                  <li>• Academic writing support</li>
                  <li>• Career guidance and placement assistance</li>
                  <li>• Alumni network access</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Joining Form */}
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <UserPlus className="w-8 h-8" />
                Join Our Organization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-black/40 border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="collegeRoll" className="text-gray-200">College Roll</Label>
                    <Input
                      id="collegeRoll"
                      type="text"
                      value={formData.collegeRoll}
                      onChange={(e) => setFormData(prev => ({ ...prev, collegeRoll: e.target.value }))}
                      className="bg-black/40 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-black/40 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-200">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-black/40 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="section" className="text-gray-200">Section</Label>
                    <Input
                      id="section"
                      type="text"
                      value={formData.section}
                      onChange={(e) => setFormData(prev => ({ ...prev, section: e.target.value }))}
                      className="bg-black/40 border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup" className="text-gray-200">Blood Group</Label>
                    <Input
                      id="bloodGroup"
                      type="text"
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData(prev => ({ ...prev, bloodGroup: e.target.value }))}
                      className="bg-black/40 border-gray-600 text-white"
                      placeholder="e.g., A+, B-, O+, AB+"
                      required
                    />
                  </div>
                </div>

                {/* Department Selection */}
                <div className="space-y-4">
                  <Label className="text-gray-200 text-lg">Select Departments (Fixed 200 TK total)</Label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {departments.map((department) => (
                      <div key={department} className="flex items-center space-x-3 p-3 rounded-lg bg-black/20 border border-gray-700">
                        <Checkbox
                          id={department}
                          checked={formData.departments.includes(department)}
                          onCheckedChange={(checked) => handleDepartmentChange(department, checked as boolean)}
                          className="border-cyan-400 data-[state=checked]:bg-cyan-400"
                        />
                        <Label htmlFor={department} className="text-gray-200 text-sm cursor-pointer">
                          {department}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Calculation */}
                {formData.departments.length > 0 && (
                  <Card className="bg-gradient-to-r from-green-900/40 to-cyan-900/40 border-green-400/50">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-xl flex items-center gap-3">
                        <Calculator className="w-6 h-6" />
                        Payment Calculation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-gray-200 space-y-2">
                        <p>Selected Departments: {formData.departments.length}</p>
                        <p className="text-xl font-bold text-green-400">
                          Total Amount: {totalAmount} TK (Fixed Fee)
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Payment Information */}
                {formData.departments.length > 0 && (
                  <div className="space-y-4">
                    <Label className="text-gray-200 text-lg">Payment Type</Label>
                    
                    <RadioGroup 
                      value={formData.paymentType} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, paymentType: value }))}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" className="border-cyan-400 text-cyan-400" />
                        <Label htmlFor="cash" className="text-gray-200 cursor-pointer">Cash Payment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="online" id="online" className="border-cyan-400 text-cyan-400" />
                        <Label htmlFor="online" className="text-gray-200 cursor-pointer">Online Payment</Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentType === 'online' && (
                      <div className="space-y-4 mt-6">
                        <Label className="text-gray-200 text-lg">Online Payment Details</Label>
                        
                        <div className="space-y-2">
                          <Label htmlFor="accountName" className="text-gray-200">Account Name</Label>
                          <Input
                            id="accountName"
                            type="text"
                            value={formData.accountName}
                            onChange={(e) => setFormData(prev => ({ ...prev, accountName: e.target.value }))}
                            className="bg-black/40 border-gray-600 text-white"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="accountNumber" className="text-gray-200">Account Number</Label>
                          <Input
                            id="accountNumber"
                            type="text"
                            value={formData.accountNumber}
                            onChange={(e) => setFormData(prev => ({ ...prev, accountNumber: e.target.value }))}
                            className="bg-black/40 border-gray-600 text-white"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="transactionId" className="text-gray-200">Transaction ID</Label>
                          <Input
                            id="transactionId"
                            type="text"
                            value={formData.transactionId}
                            onChange={(e) => setFormData(prev => ({ ...prev, transactionId: e.target.value }))}
                            className="bg-black/40 border-gray-600 text-white"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg"
                  disabled={formData.departments.length === 0 || !formData.paymentType || submitting}
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </PageLayout>
  );
};

export default JoinUsPage;
