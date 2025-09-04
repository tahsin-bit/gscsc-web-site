import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Facebook, Instagram, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ClubPartnerPage = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const { data, error } = await supabase
          .from('club_partners')
          .select('*')
          .eq('active', true)
          .order('display_order', { ascending: true });

        if (error) throw error;
        setPartners(data || []);
      } catch (error) {
        console.error('Error fetching club partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Club Partners</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Users className="w-8 h-8" />
                Our Club Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our valued club partners who contribute to the success and growth of our organization 
                through collaboration, support, and shared vision for excellence in science and technology.
              </p>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : partners.length === 0 ? (
            <div className="text-center text-gray-400">No club partners found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <Card key={partner.id} className="bg-black/60 border-cyan-400/30 hover:bg-black/80 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full mb-6 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/30 flex items-center justify-center overflow-hidden">
                        {partner.image_url ? (
                          <img 
                            src={partner.image_url} 
                            alt={partner.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Users className="w-12 h-12 text-cyan-400" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                      
                      {partner.organization && (
                        <p className="text-cyan-400 text-sm mb-2">{partner.organization}</p>
                      )}
                      
                      {partner.role_title && (
                        <p className="text-gray-300 text-sm mb-4">{partner.role_title}</p>
                      )}
                      
                      {partner.bio && (
                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{partner.bio}</p>
                      )}
                      
                      <div className="flex flex-wrap gap-3 justify-center">
                        {partner.email && (
                          <a href={`mailto:${partner.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                        {partner.website_url && (
                          <a href={partner.website_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Globe className="w-5 h-5" />
                          </a>
                        )}
                        {partner.facebook_url && (
                          <a href={partner.facebook_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Facebook className="w-5 h-5" />
                          </a>
                        )}
                        {partner.instagram_url && (
                          <a href={partner.instagram_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Instagram className="w-5 h-5" />
                          </a>
                        )}
                        {partner.linkedin_url && (
                          <a href={partner.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {partner.twitter_url && (
                          <a href={partner.twitter_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            <Twitter className="w-5 h-5" />
                          </a>
                        )}
                      </div>
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

export default ClubPartnerPage;