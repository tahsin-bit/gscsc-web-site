
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const CompletedProjectsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Completed Projects</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Successfully Finished Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Browse our portfolio of successfully completed projects that have made 
                significant contributions to computer science research and applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default CompletedProjectsPage;
