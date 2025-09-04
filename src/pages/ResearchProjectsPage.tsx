
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Brain, Shield, Database } from 'lucide-react';

const ResearchProjectsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Research Projects</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Search className="w-8 h-8" />
                Cutting-Edge Research
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our research projects push the boundaries of computer science knowledge, 
                addressing real-world challenges and advancing the state of the art in various domains.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Explainable AI Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Developing transparent and interpretable artificial intelligence systems 
                  that can explain their decision-making processes to human users.
                </p>
                <div className="text-sm text-gray-300">
                  <p><strong>Lead:</strong> Dr. Sarah Johnson</p>
                  <p><strong>Duration:</strong> 2023-2025</p>
                  <p><strong>Funding:</strong> NSF Grant $500K</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Shield className="w-6 h-6" />
                  Privacy-Preserving Computing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Researching advanced cryptographic techniques and secure multi-party 
                  computation protocols for privacy-sensitive applications.
                </p>
                <div className="text-sm text-gray-300">
                  <p><strong>Lead:</strong> Prof. Maria Garcia</p>
                  <p><strong>Duration:</strong> 2024-2026</p>
                  <p><strong>Funding:</strong> Industry Partnership</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Database className="w-6 h-6" />
                  Distributed Graph Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Optimizing large-scale graph processing algorithms for distributed 
                  systems and cloud computing environments.
                </p>
                <div className="text-sm text-gray-300">
                  <p><strong>Lead:</strong> Dr. Kevin Liu</p>
                  <p><strong>Duration:</strong> 2023-2024</p>
                  <p><strong>Funding:</strong> University Grant</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Quantum Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Exploring the intersection of quantum computing and machine learning 
                  to develop next-generation algorithms and applications.
                </p>
                <div className="text-sm text-gray-300">
                  <p><strong>Lead:</strong> Prof. Robert Anderson</p>
                  <p><strong>Duration:</strong> 2024-2027</p>
                  <p><strong>Funding:</strong> DOE Research Grant</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResearchProjectsPage;
