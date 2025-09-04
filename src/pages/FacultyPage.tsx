import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card } from '@/components/ui/card';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

// Hook to fetch alumni members
const useAlumniMembers = () => {
  return useQuery({
    queryKey: ['alumni-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('alumni_members')
        .select('*')
        .eq('active', true)
        .order('graduation_year', { ascending: false, nullsFirst: false })
        .order('name', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });
};

const FacultyPage = () => {
  const { data: facultyMembers, isLoading, error } = useAlumniMembers();

  if (isLoading) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-12 text-center">Alumni</h1>
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
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-12 text-center">Alumni</h1>
            <div className="text-center text-red-500">Error loading alumni members</div>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Define gradient colors for dynamic background
  const gradients = [
    'from-blue-600 to-cyan-500',
    'from-purple-600 to-indigo-500',
    'from-green-600 to-emerald-500',
    'from-orange-600 to-red-500',
    'from-teal-600 to-blue-500',
    'from-pink-600 to-purple-500'
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">Alumni</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers?.map((member, index) => (
              <Card key={member.id} className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden group">
                <div className={`relative h-64 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-cyan-300 font-medium text-sm">
                      {member.job_title}
                      {member.company && ` at ${member.company}`}
                    </p>
                    {member.graduation_year && (
                      <p className="text-cyan-200 text-xs mt-1">Class of {member.graduation_year}</p>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {member.linkedin_url && (
                      <a
                        href={member.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.twitter_url && (
                      <a
                        href={member.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.github_url && (
                      <a
                        href={member.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FacultyPage;