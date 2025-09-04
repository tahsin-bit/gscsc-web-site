import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Rocket, 
  Users, 
  Calendar, 
  ShoppingBag, 
  UserPlus, 
  Phone,
  Clock,
  MapPin,
  Mail,
  Star,
  Award,
  Target,
  FlaskConical,
  Microscope,
  Atom,
  BookOpen,
  User,
  Book,
  GraduationCap,
  Briefcase,
  Medal,
  NetworkIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Eye,
  Lightbulb
} from 'lucide-react';

interface PageContentProps {
  page: string;
  onPageChange: (page: string) => void;
}

const PageContent = ({ page, onPageChange }: PageContentProps) => {
  const renderContent = () => {
    switch (page) {
      case 'club-history':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Club History</h2>
              <p className="text-gray-300 text-lg">From humble beginnings to a thriving scientific community.</p>
            </div>
            <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-text space-y-6">
                <h3 className="futuristic-title text-2xl text-primary">Our Founding</h3>
                <p className="text-gray-300 leading-relaxed">
                  In 2010, five students with a shared passion for science started meeting weekly in the university library to discuss recent scientific discoveries. These informal gatherings quickly attracted more participants, leading to the official formation of the Science Club.
                </p>
                <h3 className="futuristic-title text-2xl text-primary">Key Milestones</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong>2012:</strong> Won our first inter-university science competition</p>
                  <p><strong>2014:</strong> Launched our first high-altitude balloon experiment</p>
                  <p><strong>2016:</strong> Established the robotics division</p>
                  <p><strong>2018:</strong> First research paper published by club members</p>
                  <p><strong>2020:</strong> Opened our dedicated club laboratory space</p>
                </div>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Early Club Days" 
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        );

      case 'mission-vision':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Mission & Vision</h2>
              <p className="text-gray-300 text-lg">Guiding principles that drive our scientific exploration.</p>
            </div>
            <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Mission and Vision" 
                  className="rounded-lg shadow-2xl hover-lift"
                />
              </div>
              <div className="about-text space-y-6">
                <h3 className="futuristic-title text-2xl text-primary">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To foster a community of curious minds dedicated to scientific exploration, innovation, and education. We provide resources, mentorship, and collaborative opportunities to turn theoretical knowledge into practical applications.
                </p>
                <h3 className="futuristic-title text-2xl text-primary">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  We envision a world where scientific literacy is universal, where young minds are empowered to ask questions and seek answers through rigorous experimentation and collaboration. Our goal is to inspire the next generation of scientists, engineers, and innovators.
                </p>
              </div>
            </div>
          </div>
        );

      case 'executive-panel':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Executive Panel</h2>
              <p className="text-gray-300 text-lg">The leadership team guiding our club's vision and activities.</p>
            </div>
            <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Michael Chen', position: 'President', description: 'Oversees all club operations and strategic direction', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Priya Patel', position: 'Vice President', description: 'Manages daily operations and committee coordination', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'David Kim', position: 'Treasurer', description: 'Manages club finances and funding opportunities', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Alex Morgan', position: 'Secretary', description: 'Maintains records and communications', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Jamal Williams', position: 'Events Coordinator', description: 'Plans and executes all club events', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Sophia Rodriguez', position: 'Outreach Director', description: 'Manages community engagement and partnerships', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }
              ].map((member, index) => (
                <Card key={index} className="science-card hover-lift">
                  <CardHeader className="text-center">
                    <div className="team-image mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <CardTitle className="futuristic-title text-primary">{member.name}</CardTitle>
                    <p className="text-science-cyan font-medium">{member.position}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'alumni':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Alumni & Hall of Fame</h2>
              <p className="text-gray-300 text-lg">Celebrating the achievements of our former members.</p>
            </div>
            <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Dr. Emily Zhang', class: 'Class of 2014', achievement: 'Research Scientist at NASA JPL', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Mark Thompson', class: 'Class of 2016', achievement: 'Founder of Quantum Robotics', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Lisa Park', class: 'Class of 2018', achievement: 'Lead Engineer at SpaceX', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
                { name: 'Carlos Mendez', class: 'Class of 2019', achievement: 'PhD Candidate at MIT', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }
              ].map((alumni, index) => (
                <Card key={index} className="science-card hover-lift">
                  <CardHeader className="text-center">
                    <div className="team-image mb-4">
                      <img 
                        src={alumni.image} 
                        alt={alumni.name} 
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                    </div>
                    <CardTitle className="futuristic-title text-primary">{alumni.name}</CardTitle>
                    <p className="text-science-cyan font-medium">{alumni.class}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300">{alumni.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'upcoming-events':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Upcoming Events</h2>
              <p className="text-gray-300 text-lg">Mark your calendars for these exciting opportunities.</p>
            </div>
            <div className="events-timeline space-y-8">
              {[
                { date: 'September 12, 2023', title: 'Robotics Workshop', description: 'Hands-on introduction to robotics for beginners. No experience required - all materials provided.', location: 'Engineering Lab 204', time: '2:00 PM - 5:00 PM' },
                { date: 'October 3, 2023', title: 'Astronomy Night', description: 'Join us for an evening of stargazing with high-powered telescopes. Weather permitting.', location: 'Observatory Hill', time: '7:30 PM - 10:00 PM' },
                { date: 'November 15, 2023', title: 'Science Career Fair', description: 'Meet representatives from top tech companies and research institutions.', location: 'Student Union Ballroom', time: '10:00 AM - 3:00 PM' }
              ].map((event, index) => (
                <Card key={index} className="science-card hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <span className="text-primary font-orbitron font-bold">{event.date}</span>
                    </div>
                    <CardTitle className="futuristic-title text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      <p className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        <strong>Location:</strong> {event.location}
                      </p>
                      <p className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        <strong>Time:</strong> {event.time}
                      </p>
                    </div>
                    <Button className="btn-primary">Register Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'past-events':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Past Events</h2>
              <p className="text-gray-300 text-lg">Relive our most memorable gatherings and achievements.</p>
            </div>
            <div className="events-timeline space-y-8">
              {[
                { date: 'May 20, 2023', title: 'Science Olympiad', description: 'Our team placed 2nd in the regional competition, with special recognition for our robotics demonstration.', highlights: 'Won awards in 5 categories including Chemistry Lab and Engineering Design' },
                { date: 'April 8, 2023', title: 'Mars Rover Challenge', description: 'Hosted our annual competition where teams design and program rovers to navigate Martian terrain simulations.', highlights: 'Winning Team: "Red Planet Explorers" from Engineering Department' },
                { date: 'March 3, 2023', title: 'Women in STEM Panel', description: 'Inspiring discussion with female leaders in science and technology fields.', highlights: 'Featured Speakers: Dr. Lisa Wong (Neuroscience), Sarah Chen (Tech Entrepreneur), Maria Gonzalez (NASA Engineer)' }
              ].map((event, index) => (
                <Card key={index} className="science-card hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <span className="text-primary font-orbitron font-bold">{event.date}</span>
                    </div>
                    <CardTitle className="futuristic-title text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-primary">Highlights:</strong> {event.highlights}
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">View Photos</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'current-projects':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Current Projects</h2>
              <p className="text-gray-300 text-lg">Ongoing research and experiments we're actively working on.</p>
            </div>
            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'High-Altitude Balloon Experiment', description: 'Phase 3 of our ongoing project to study atmospheric conditions at altitudes up to 100,000 feet. Current focus is on cosmic radiation measurement.', lead: 'Priya Patel', nextLaunch: 'August 20, 2023', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                { title: 'AI-Powered Plant Monitoring', description: 'Developing neural networks to predict plant health issues from leaf images and environmental sensor data. Currently achieving 89% accuracy.', lead: 'David Kim', nextLaunch: 'Field Testing: Campus Greenhouse', image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                { title: 'Water Purification System', description: 'Developing a low-cost, solar-powered water purification system for developing communities. Currently in prototype phase.', lead: 'Jamal Williams', nextLaunch: 'Partners: Engineers Without Borders', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
              ].map((project, index) => (
                <Card key={index} className="science-card hover-lift">
                  <div className="project-image mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="futuristic-title text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <p className="text-primary"><strong>Team Lead:</strong> {project.lead}</p>
                      <p className="text-primary"><strong>Status:</strong> {project.nextLaunch}</p>
                    </div>
                    <span className="inline-block mt-4 px-3 py-1 bg-green-600 text-white text-sm rounded-full">Active</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'completed-projects':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Completed Projects</h2>
              <p className="text-gray-300 text-lg">Successful projects that have made an impact.</p>
            </div>
            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: '3D Printed Rocket Engine', description: 'Successfully designed, printed, and tested a small-scale rocket engine capable of 500N thrust. Project won 2nd place at National Engineering Expo.', duration: '8 months', teamSize: '6 members', image: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                { title: 'Autonomous Campus Rover', description: 'Developed a self-navigating rover that can deliver small packages across campus. Served as prototype for university\'s current delivery robot program.', duration: '10 months', teamSize: 'ROS, LIDAR, Computer Vision', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
                { title: 'Solar-Powered Weather Station', description: 'Designed and deployed 5 solar-powered weather stations across campus that provide real-time microclimate data to the meteorology department.', duration: '6 months', teamSize: 'Operational for 2 years', image: 'https://images.unsplash.com/photo-1535378917046-79ae16b80769?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
              ].map((project, index) => (
                <Card key={index} className="science-card hover-lift">
                  <div className="project-image mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="futuristic-title text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="space-y-2">
                      <p className="text-primary"><strong>Duration:</strong> {project.duration}</p>
                      <p className="text-primary"><strong>Details:</strong> {project.teamSize}</p>
                    </div>
                    <span className="inline-block mt-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Completed</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'shop':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Science Club Shop</h2>
              <p className="text-gray-300 text-lg">Show your club pride with our exclusive merchandise.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Science Club T-Shirt', price: '$25', image: '🚀' },
                { name: 'Space Explorer Hoodie', price: '$45', image: '🌌' },
                { name: 'Club Logo Mug', price: '$15', image: '☕' },
                { name: 'Rocket Model Kit', price: '$35', image: '🛸' },
                { name: 'Science Sticker Pack', price: '$10', image: '⭐' },
                { name: 'Lab Notebook', price: '$20', image: '📓' }
              ].map((item, index) => (
                <Card key={index} className="science-card hover-lift">
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{item.image}</div>
                    <CardTitle className="futuristic-title">{item.name}</CardTitle>
                    <p className="text-2xl text-primary font-bold">{item.price}</p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full btn-primary">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Membership Information</h2>
              <p className="text-gray-300 text-lg">Everything you need to know about joining our club.</p>
            </div>
            <div className="about-content grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="about-text space-y-8">
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Membership Benefits</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <FlaskConical className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Access to our fully-equipped laboratory space
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Priority registration for workshops and events
                    </li>
                    <li className="flex items-start">
                      <ShoppingBag className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Discounts on club merchandise and event tickets
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Mentorship from senior members and faculty
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Opportunities to lead projects and gain leadership experience
                    </li>
                    <li className="flex items-start">
                      <NetworkIcon className="w-5 h-5 mr-3 mt-0.5 text-primary" />
                      Networking with industry professionals and researchers
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Requirements</h3>
                  <p className="text-gray-300">Open to all currently enrolled students in good academic standing. No specific GPA or major requirements.</p>
                </div>
                
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Fees</h3>
                  <p className="text-gray-300">
                    Annual membership: $25 (includes club t-shirt)<br/>
                    Project fees: Vary by project (typically $0-$50, scholarships available)
                  </p>
                </div>
                
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Time Commitment</h3>
                  <p className="text-gray-300">
                    Minimum: Attend at least 3 events per semester<br/>
                    Recommended: 5-10 hours per week for active participation
                  </p>
                </div>
                
                <Button 
                  onClick={() => onPageChange('contact-form')}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Apply Now
                </Button>
              </div>
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Club Members Working" 
                  className="rounded-lg shadow-2xl hover-lift w-full"
                />
              </div>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Benefits of Joining</h2>
              <p className="text-gray-300 text-lg">How being a Science Club member can enhance your academic and professional journey.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: GraduationCap, title: 'Academic Growth', description: 'Complement your coursework with practical, hands-on experience that brings classroom concepts to life.' },
                { icon: Briefcase, title: 'Career Preparation', description: 'Develop skills and experiences that employers value, with opportunities to work on real-world projects.' },
                { icon: NetworkIcon, title: 'Professional Network', description: 'Connect with alumni, faculty, and industry partners who can provide mentorship and opportunities.' },
                { icon: Medal, title: 'Competition Experience', description: 'Participate in regional and national competitions that challenge your skills and look great on your resume.' },
                { icon: Microscope, title: 'Research Opportunities', description: 'Get involved in meaningful research projects, with chances to co-author papers and present at conferences.' },
                { icon: Users, title: 'Community', description: 'Join a supportive community of like-minded individuals who share your passion for science and discovery.' }
              ].map((feature, index) => (
                <Card key={index} className="science-card hover-lift text-center">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="futuristic-title text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="page-header text-center mb-12">
              <h3 className="futuristic-title text-3xl text-primary">Hear From Our Members</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-image">
                <img 
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Student Working" 
                  className="rounded-lg shadow-2xl hover-lift w-full"
                />
              </div>
              <div className="space-y-8">
                <blockquote className="border-l-4 border-primary pl-6 italic text-gray-300">
                  <p className="mb-4">"Joining Science Club was the best decision I made in college. The hands-on projects gave me practical skills that helped me land my dream job at a aerospace company."</p>
                  <cite className="text-primary font-medium">- Lisa Park, Class of 2018</cite>
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-6 italic text-gray-300">
                  <p className="mb-4">"Through the club, I discovered my passion for research and made connections that led to my current PhD program. The mentorship I received was invaluable."</p>
                  <cite className="text-primary font-medium">- Carlos Mendez, Class of 2019</cite>
                </blockquote>
                <Button 
                  onClick={() => onPageChange('contact-form')}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Ready to Join?
                </Button>
              </div>
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Contact Us</h2>
              <p className="text-gray-300 text-lg">Have questions or want to join? Send us a message!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Get in Touch</h3>
                  <p className="text-gray-300 mb-6">We'd love to hear from you! Whether you're interested in joining, have questions about our projects, or want to collaborate, our team is here to help.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-300">contact@scienceclub.edu</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <p className="text-gray-300">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white">Location</h4>
                        <p className="text-gray-300">Science Building, Room 205<br/>University Campus</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-4">Office Hours</h3>
                  <p className="text-gray-300">
                    Monday-Friday: 10:00 AM - 4:00 PM<br/>
                    Weekend: Closed
                  </p>
                </div>
              </div>
              
              <Card className="science-card">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Full Name</label>
                      <Input className="bg-background/50 border-primary/30 focus:border-primary" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Email</label>
                      <Input type="email" className="bg-background/50 border-primary/30 focus:border-primary" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Subject</label>
                      <Input className="bg-background/50 border-primary/30 focus:border-primary" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Message</label>
                      <Textarea rows={6} className="bg-background/50 border-primary/30 focus:border-primary" required />
                    </div>
                    <Button type="submit" className="w-full btn-primary">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'contact-info':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Contact Information</h2>
              <p className="text-gray-300 text-lg">Reach out to us through any of these channels.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-6">Our Location</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white mb-2">Address</h4>
                        <p className="text-gray-300">
                          Science Building, Room 205<br/>
                          123 University Avenue<br/>
                          College Town, ST 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white mb-2">Email</h4>
                        <p className="text-gray-300">contact@scienceclub.edu</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white mb-2">Phone</h4>
                        <p className="text-gray-300">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium text-white mb-2">Office Hours</h4>
                        <p className="text-gray-300">Monday-Friday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="futuristic-title text-2xl text-primary mb-6">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Facebook className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Twitter className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Instagram className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Youtube className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449241646!3d40.74844047138971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623861257896!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <Button 
                  onClick={() => onPageChange('contact-form')}
                  className="btn-primary w-full"
                >
                  Send Us a Message
                </Button>
              </div>
            </div>
          </div>
        );

      case 'membership-info':
        return (
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Card className="science-card hover-lift">
              <CardHeader className="text-center">
                <CardTitle className="futuristic-title text-3xl mb-4">
                  <UserPlus className="w-8 h-8 mx-auto mb-4 text-primary" />
                  Join Our Science Club
                </CardTitle>
                <p className="text-gray-300 text-lg">
                  Become part of our innovative scientific community and unlock your potential in research and discovery.
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="futuristic-title text-xl text-primary">Membership Benefits</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center"><FlaskConical className="w-5 h-5 mr-3 text-blue-400" /> Access to research laboratories</li>
                      <li className="flex items-center"><Microscope className="w-5 h-5 mr-3 text-green-400" /> Participate in cutting-edge projects</li>
                      <li className="flex items-center"><Users className="w-5 h-5 mr-3 text-purple-400" /> Mentorship from senior researchers</li>
                      <li className="flex items-center"><BookOpen className="w-5 h-5 mr-3 text-cyan-400" /> Access to scientific journals and resources</li>
                      <li className="flex items-center"><Award className="w-5 h-5 mr-3 text-yellow-400" /> Participate in competitions and conferences</li>
                      <li className="flex items-center"><Rocket className="w-5 h-5 mr-3 text-pink-400" /> Network with like-minded scientists</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h3 className="futuristic-title text-xl text-primary">Requirements</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>• Currently enrolled college student</li>
                      <li>• Interest in science and research</li>
                      <li>• Commitment to club activities</li>
                      <li>• Collaborative spirit</li>
                      <li>• No membership fees required</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-6">
                  <Button 
                    size="lg" 
                    onClick={() => onPageChange('contact-form')}
                    className="btn-primary text-lg px-8 py-4 orbitron"
                  >
                    Apply for Membership <Atom className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'publications':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Publications</h2>
              <p className="text-gray-300 text-lg">Research papers, articles, and blogs by our members.</p>
            </div>
            
            <Tabs defaultValue="research" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="blogs">Blogs</TabsTrigger>
                <TabsTrigger value="rocketry">Rocketry</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="research" className="space-y-6">
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"Atmospheric Data Analysis from High-Altitude Balloon Experiments"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Priya Patel, Michael Chen</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> March 2023</span>
                      <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Journal of Atmospheric Sciences</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Analysis of atmospheric data collected during our 2022 high-altitude balloon launches, revealing interesting patterns in upper atmospheric conditions.</p>
                    <Button className="btn-primary">Read Paper</Button>
                  </CardContent>
                </Card>
                
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"Machine Learning Approaches for Early Plant Disease Detection"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> David Kim, Sophia Rodriguez</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> January 2023</span>
                      <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Agricultural Technology Conference Proceedings</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Our novel approach using convolutional neural networks to detect plant diseases from leaf images with 92% accuracy under controlled conditions.</p>
                    <Button className="btn-primary">Read Paper</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="blogs" className="space-y-6">
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"The Physics Behind Amateur Rocketry"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Michael Chen</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> May 15, 2023</span>
                      <span className="text-science-cyan">Rocketry, Physics</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">A beginner's guide to understanding the basic physics principles that make model rockets work, from thrust to aerodynamics.</p>
                    <Button className="btn-primary">Read Blog</Button>
                  </CardContent>
                </Card>
                
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"My Journey into Robotics Programming"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Alex Morgan</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> April 2, 2023</span>
                      <span className="text-science-cyan">Robotics, Programming</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">How I went from knowing nothing about robotics to leading our autonomous rover project in just one year.</p>
                    <Button className="btn-primary">Read Blog</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rocketry" className="space-y-6">
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"3D Printing Rocket Components: Lessons Learned"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Rocketry Team</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> February 2023</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Detailed report on our experiences with various materials and designs for 3D printed rocket components, including failure analysis and success stories.</p>
                    <Button className="btn-primary">Read Report</Button>
                  </CardContent>
                </Card>
                
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">"Altitude Prediction Models for Amateur Rockets"</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Priya Patel</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> November 2022</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Developing and testing mathematical models to predict amateur rocket altitude based on design parameters and motor specifications.</p>
                    <Button className="btn-primary">Read Report</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">National Science Competition Winners 2023</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> May 2023</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Our team won first place in the Engineering Design category and second place overall at the National Collegiate Science Competition with our autonomous water sampling device.</p>
                    <Button className="btn-primary">View Photos</Button>
                  </CardContent>
                </Card>
                
                <Card className="science-card hover-lift">
                  <CardHeader>
                    <CardTitle className="futuristic-title text-2xl">University Research Grant Awarded</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> March 2023</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">Received $25,000 grant from the University Research Office to continue development of our low-cost water purification system.</p>
                    <Button className="btn-primary">Read Announcement</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      case 'research':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Research Publications</h2>
              <p className="text-gray-300 text-lg">Peer-reviewed papers and conference proceedings by our members.</p>
            </div>
            <div className="space-y-8">
              <Card className="science-card hover-lift">
                <CardHeader>
                  <CardTitle className="futuristic-title text-2xl">"Atmospheric Data Analysis from High-Altitude Balloon Experiments"</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Priya Patel, Michael Chen</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> March 2023</span>
                    <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Journal of Atmospheric Sciences</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">This paper presents findings from our series of high-altitude balloon launches conducted between June 2022 and February 2023. We collected comprehensive atmospheric data including temperature, pressure, humidity, and cosmic radiation levels at altitudes up to 95,000 feet. Our analysis reveals previously undocumented micro-fluctuations in upper atmospheric conditions that may have implications for climate modeling.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Keywords:</strong> high-altitude balloons, atmospheric science, climate research</p>
                  <Button className="btn-primary">Download Full Paper (PDF)</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <CardHeader>
                  <CardTitle className="futuristic-title text-2xl">"Machine Learning Approaches for Early Plant Disease Detection"</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> David Kim, Sophia Rodriguez</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> January 2023</span>
                    <span className="flex items-center"><Book className="w-4 h-4 mr-1" /> Agricultural Technology Conference Proceedings</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">We developed and compared three machine learning models for early detection of common plant diseases from leaf images. Our custom convolutional neural network architecture achieved 92% accuracy in controlled conditions and 87% accuracy in field tests, outperforming existing solutions. The system can detect diseases an average of 3.2 days before visible symptoms appear to human observers.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Keywords:</strong> plant pathology, machine learning, precision agriculture</p>
                  <Button className="btn-primary">Download Full Paper (PDF)</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'blogs':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Club Blogs</h2>
              <p className="text-gray-300 text-lg">Insights, stories, and tutorials from our members.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Blog" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">"The Physics Behind Amateur Rocketry"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Michael Chen explains the fundamental physics principles that make model rockets work, from thrust equations to stability calculations.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Published:</strong> May 15, 2023</p>
                  <Button className="btn-primary">Read More</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613651-eb47d6f295bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Blog" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">"My Journey into Robotics Programming"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Alex Morgan shares how he went from knowing nothing about robotics to leading our autonomous rover project in just one year.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Published:</strong> April 2, 2023</p>
                  <Button className="btn-primary">Read More</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Blog" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">"Women in STEM: Breaking Barriers"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Priya Patel interviews three female scientists about their experiences and advice for young women entering STEM fields.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Published:</strong> March 8, 2023</p>
                  <Button className="btn-primary">Read More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'rocketry':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Rocketry Division</h2>
              <p className="text-gray-300 text-lg">Documentation, guides, and reports from our rocketry projects.</p>
            </div>
            <div className="space-y-8">
              <Card className="science-card hover-lift">
                <CardHeader>
                  <CardTitle className="futuristic-title text-2xl">"3D Printing Rocket Components: Lessons Learned"</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Rocketry Team</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> February 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Comprehensive technical report detailing our 18-month journey experimenting with 3D printed rocket components. Includes material comparisons (PLA vs. ABS vs. Nylon), design considerations for structural integrity, and thermal performance under various conditions. Our final design achieved a 30% weight reduction compared to traditional manufacturing while maintaining safety margins.</p>
                  <Button className="btn-primary">Download Full Report</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <CardHeader>
                  <CardTitle className="futuristic-title text-2xl">"Altitude Prediction Models for Amateur Rockets"</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Priya Patel</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> November 2022</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">This technical paper presents three mathematical models for predicting amateur rocket altitude based on design parameters and motor specifications. We compare the accuracy of each model against actual flight data from 27 launches, with our modified "hybrid" model showing the best performance (average error of 4.2% compared to 8.7% for standard models).</p>
                  <Button className="btn-primary">Download Full Paper</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <CardHeader>
                  <CardTitle className="futuristic-title text-2xl">"Beginner's Guide to Model Rocketry"</CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> Michael Chen</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Ongoing</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">A living document covering everything you need to know to get started with model rocketry, from basic safety procedures to your first launch. Regularly updated with new tips and lessons from our team's experiences.</p>
                  <Button className="btn-primary">Read Guide</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="page-header text-center mb-12">
              <h2 className="futuristic-title text-4xl mb-4">Our Achievements</h2>
              <p className="text-gray-300 text-lg">Celebrating our milestones and successes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Achievement" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">National Science Competition Winners 2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">First place in Engineering Design category and second place overall at the National Collegiate Science Competition with our autonomous water sampling device.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Date:</strong> May 2023</p>
                  <Button className="btn-primary">View Photos</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Achievement" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">University Research Grant Awarded</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Received $25,000 grant from the University Research Office to continue development of our low-cost water purification system.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Date:</strong> March 2023</p>
                  <Button className="btn-primary">Read Announcement</Button>
                </CardContent>
              </Card>
              
              <Card className="science-card hover-lift">
                <div className="project-image mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1524179091875-b494986b6107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Achievement" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="futuristic-title text-xl">International Rocketry Challenge Finalists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">Our rocketry team placed in the top 10 at the 2022 International Collegiate Rocketry Challenge, competing against 85 teams from 23 countries.</p>
                  <p className="text-gray-300 mb-4"><strong className="text-primary">Date:</strong> October 2022</p>
                  <Button className="btn-primary">View Photos</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
               style={{
                 backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
               }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-4 py-8 relative z-10">
              <div className="page-header text-center mb-12">
                <h2 className="futuristic-title text-4xl mb-4 text-white">Our Vision</h2>
                <p className="text-gray-300 text-lg">Shaping the future through scientific excellence and innovation</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Card className="science-card hover-lift bg-black/40 border-primary/30">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <Eye className="w-8 h-8 text-primary" />
                        <CardTitle className="futuristic-title text-2xl text-white">Our Vision</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        The Government Science College Science Club aims to create a vibrant community of passionate students and faculty dedicated to science and discovery. We strive to be a hub of knowledge and innovation, promoting curiosity, critical thinking, and ethical values.
                      </p>
                      <p className="text-gray-300 leading-relaxed text-lg mt-4">
                        Our mission is to empower members to become future leaders and innovators who contribute to scientific progress and societal development. Through collaboration and outreach, we aim to connect science with society, fostering a culture that prioritizes research, creativity, and responsible scientific practice for the greater good.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="science-card bg-black/40 border-primary/30 text-center p-4">
                      <Lightbulb className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="futuristic-title text-white">Innovation</h4>
                      <p className="text-gray-400 text-sm">Fostering creativity and breakthrough discoveries</p>
                    </Card>
                    <Card className="science-card bg-black/40 border-primary/30 text-center p-4">
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="futuristic-title text-white">Community</h4>
                      <p className="text-gray-400 text-sm">Building connections across scientific disciplines</p>
                    </Card>
                    <Card className="science-card bg-black/40 border-primary/30 text-center p-4">
                      <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="futuristic-title text-white">Excellence</h4>
                      <p className="text-gray-400 text-sm">Pursuing the highest standards in research</p>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Scientific Innovation and Discovery" 
                    className="rounded-lg shadow-2xl hover-lift w-full"
                  />
                  <Button 
                    onClick={() => onPageChange('contact-form')}
                    className="btn-primary text-lg px-8 py-4 w-full"
                  >
                    Join Our Vision
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-bg min-h-screen pt-24 pb-12">
      {renderContent()}
    </div>
  );
};

export default PageContent;
