import React, { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trophy, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const CampusAmbassadorPage = () => {
  const [ambassadors, setAmbassadors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAmbassadors = async () => {
      try {
        const { data, error } = await supabase
          .from('campus_ambassadors')
          .select('*')
          .eq('active', true)
          .order('points', { ascending: false });

        if (error) throw error;
        setAmbassadors(data || []);
      } catch (error) {
        console.error('Error fetching campus ambassadors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAmbassadors();
  }, []);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Campus Ambassador Leaderboard</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Trophy className="w-8 h-8" />
                Top Campus Ambassadors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our dedicated campus ambassadors who represent and promote our organization across different institutions, ranked by their contribution points.
              </p>
            </CardContent>
          </Card>

          {loading ? (
            <div className="text-center text-white">Loading...</div>
          ) : ambassadors.length === 0 ? (
            <div className="text-center text-gray-400">No campus ambassadors found.</div>
          ) : (
            <Card className="bg-black/60 border-cyan-400/30">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="border-cyan-400/30 hover:bg-cyan-400/10">
                      <TableHead className="text-cyan-400 font-bold">CA Number</TableHead>
                      <TableHead className="text-cyan-400 font-bold">Name</TableHead>
                      <TableHead className="text-cyan-400 font-bold text-right">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ambassadors.map((ambassador, index) => (
                      <TableRow 
                        key={ambassador.id} 
                        className="border-cyan-400/20 hover:bg-cyan-400/5 transition-colors"
                      >
                        <TableCell className="text-white font-medium">
                          <div className="flex items-center gap-2">
                            {index < 3 && (
                              <Trophy className={`w-4 h-4 ${
                                index === 0 ? 'text-yellow-400' : 
                                index === 1 ? 'text-gray-300' : 
                                'text-amber-600'
                              }`} />
                            )}
                            #{ambassador.ca_number}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-200">
                          <div className="flex items-center gap-3">
                            {ambassador.image_url ? (
                              <img 
                                src={ambassador.image_url} 
                                alt={ambassador.name}
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                <Users className="w-4 h-4 text-cyan-400" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium">{ambassador.name}</div>
                              {ambassador.institution && (
                                <div className="text-sm text-gray-400">{ambassador.institution}</div>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span className={`font-bold text-lg ${
                            index === 0 ? 'text-yellow-400' : 
                            index === 1 ? 'text-gray-300' : 
                            index === 2 ? 'text-amber-600' : 
                            'text-cyan-400'
                          }`}>
                            {ambassador.points}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default CampusAmbassadorPage;