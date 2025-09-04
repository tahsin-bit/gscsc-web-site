
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const PublicationsPage = () => {
  const [publications, setPublications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .eq('active', true)
        .order('year', { ascending: false });
      
      if (error) throw error;
      setPublications(data || []);
    } catch (error) {
      console.error('Error fetching publications:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'research_paper':
        return 'bg-blue-600/20 text-blue-400 border-blue-400/30';
      case 'journal_article':
        return 'bg-green-600/20 text-green-400 border-green-400/30';
      case 'conference_paper':
        return 'bg-purple-600/20 text-purple-400 border-purple-400/30';
      default:
        return 'bg-gray-600/20 text-gray-400 border-gray-400/30';
    }
  };

  const formatType = (type: string) => {
    return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Publications</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <BookOpen className="w-8 h-8" />
                Our Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Explore our extensive collection of research publications, including peer-reviewed 
                papers, journal articles, and conference presentations by our members.
              </p>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center text-gray-200">Loading publications...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((publication) => (
                <Card key={publication.id} className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/50 transition-colors">
                  {publication.cover_image_url && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={publication.cover_image_url} 
                        alt={publication.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-cyan-400 text-xl">{publication.title}</CardTitle>
                    <div className="flex items-center justify-between">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs border ${getTypeColor(publication.type)}`}>
                        {formatType(publication.type)}
                      </div>
                      {publication.year && (
                        <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {publication.year}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {publication.abstract && (
                      <p className="text-gray-200 text-sm">{publication.abstract}</p>
                    )}
                    {publication.authors && (
                      <p className="text-gray-300 text-sm">
                        <span className="text-cyan-400">Authors:</span> {publication.authors}
                      </p>
                    )}
                    {publication.published_in && (
                      <p className="text-gray-300 text-sm">
                        <span className="text-cyan-400">Published in:</span> {publication.published_in}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {publication.doi_url && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                          onClick={() => window.open(publication.doi_url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          DOI
                        </Button>
                      )}
                      {publication.pdf_url && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                          onClick={() => window.open(publication.pdf_url, '_blank')}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          PDF
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

export default PublicationsPage;
