
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Rocket, ExternalLink, Github } from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Projects</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Rocket className="w-8 h-8" />
                Our Research Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Explore our diverse portfolio of research projects spanning various areas of computer science, 
                from cutting-edge AI research to practical software engineering solutions.
              </p>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center text-gray-200">Loading projects...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/50 transition-colors">
                  {project.cover_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={project.cover_image_url} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-cyan-400 text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.description && (
                      <p className="text-gray-200">{project.description}</p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.demo_url && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                          onClick={() => window.open(project.demo_url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.repo_url && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                          onClick={() => window.open(project.repo_url, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Repository
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
