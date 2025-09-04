
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

const UpcomingEventsPage = () => {
  const upcomingEvents = [
    {
      title: "AI Research Symposium 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "University Conference Center",
      description: "Join us for a comprehensive symposium featuring the latest in AI research and applications.",
      attendees: "150+ expected"
    },
    {
      title: "Machine Learning Workshop",
      date: "March 22, 2024", 
      time: "2:00 PM - 6:00 PM",
      location: "CS Building Room 301",
      description: "Hands-on workshop covering advanced machine learning techniques and practical implementations.",
      attendees: "50 participants"
    },
    {
      title: "Industry Panel Discussion",
      date: "April 5, 2024",
      time: "3:00 PM - 5:00 PM", 
      location: "Virtual Event",
      description: "Panel discussion with industry leaders about career opportunities and emerging trends.",
      attendees: "200+ expected"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Upcoming Events</h1>
          
          <Card className="bg-black/60 border-cyan-400/30 mb-12">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-3xl flex items-center gap-3">
                <Clock className="w-8 h-8" />
                What's Coming Up
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 text-lg leading-relaxed">
                Stay updated with our upcoming events and don't miss opportunities to learn, 
                network, and advance your research and career.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-black/60 border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-cyan-400 text-2xl">{event.title}</CardTitle>
                    <Button className="bg-green-600 hover:bg-green-700">Register</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-6">{event.description}</p>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UpcomingEventsPage;
