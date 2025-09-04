
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

// Hook to fetch team members
const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true, nullsFirst: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });
};

const TeamPage = () => {
  const { data: teamMembers, isLoading, error } = useTeamMembers();

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Team</h1>
            <div className="text-center text-white">Loading...</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-screen">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Team</h1>
            <div className="text-center text-red-500">Error loading team members</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Team</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                All Team Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our team consists of dedicated individuals including executive committee members, 
                faculty advisors, coordinators, volunteers, and active participants who work together 
                to create an exceptional learning and research environment in science and technology.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers?.map((member) => (
              <div key={member.id} className="group relative">
                <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-md border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image_url || "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=500&fit=crop&crop=face"} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-3">{member.role_title}</p>
                    
                    <div className="flex gap-3">
                      {member.facebook_url && (
                        <a 
                          href={member.facebook_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.instagram_url && (
                        <a 
                          href={member.instagram_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-colors"
                        >
                          <Instagram className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-cyan-400/20 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TeamPage;
