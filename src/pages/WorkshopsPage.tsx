
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Code, Database, Brain } from 'lucide-react';

const WorkshopsPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Workshops</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Wrench className="w-8 h-8" />
                Hands-on Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Our workshops provide practical, hands-on experience with cutting-edge technologies 
                and research methodologies. Learn from experts and apply your knowledge immediately.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Code className="w-6 h-6" />
                  Programming Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Learn advanced programming techniques, new languages, and development frameworks 
                  through interactive coding sessions and real-world projects.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Python for Data Science</li>
                  <li>• Advanced JavaScript & Node.js</li>
                  <li>• Go Programming Language</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  AI/ML Workshops
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Dive deep into artificial intelligence and machine learning with practical 
                  implementations and real-world case studies.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Neural Network Implementation</li>
                  <li>• Computer Vision with OpenCV</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Database className="w-6 h-6" />
                  Data & Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Master data management, distributed systems, and cloud computing technologies 
                  through hands-on exercises and system design sessions.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Database Design & Optimization</li>
                  <li>• Cloud Architecture</li>
                  <li>• Distributed Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-xl flex items-center gap-3">
                  <Wrench className="w-6 h-6" />
                  Research Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Learn essential research methodologies, paper writing techniques, and 
                  presentation skills to excel in your academic journey.
                </p>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Research Paper Writing</li>
                  <li>• Statistical Analysis</li>
                  <li>• Conference Presentations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WorkshopsPage;
