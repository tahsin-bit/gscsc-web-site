import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      console.log("Submitting contact message:", { name, email, subject, message });

      const { error } = await supabase.from('contact_messages').insert({
        name,
        email,
        subject: subject || null,
        message,
      });

      if (error) {
        console.error("Contact message insert error:", error);
        toast({
          title: "Message failed",
          description: "Could not send your message. Please try again.",
        });
      } else {
        toast({
          title: "Message sent",
          description: "Thank you! We will get back to you soon.",
        });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Contact Us</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <MessageCircle className="w-8 h-8" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Have questions about our organization, want to collaborate, or interested in joining? 
                We'd love to hear from you! Reach out to us through any of the following channels.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-200">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>gscsc.official@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>01889934482, 01979464857</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-200">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Govt. Science College, Tejgaon, Dhaka-1205, Bangladesh</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-200 space-y-2">
                  <p><strong>Sunday - Thursday:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                  <p><strong>Friday:</strong> Closed</p>
                  <p className="mt-4 text-sm text-gray-300">
                    *During academic breaks and holidays, hours may vary. 
                    Please check our website for updates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/60 border-cyan-400/30">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-black/40 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black/40 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                    required
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-black/40 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black/40 border border-cyan-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none resize-none"
                  required
                ></textarea>
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
