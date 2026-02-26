import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Target, Users, MapPin, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const milestones = [
    { year: '2012', title: 'Founded', description: 'Dime Solutions was born in Mombasa with a vision to transform digital marketing in Kenya' },
    { year: '2015', title: 'Expanded to Nairobi', description: 'Opened our second office to serve clients across East Africa' },
    { year: '2018', title: '500+ Projects', description: 'Reached a major milestone of successfully completing 500 digital marketing campaigns' },
    { year: '2021', title: 'Award Recognition', description: 'Named Best Digital Marketing Agency in East Africa' },
    { year: '2024', title: 'Global Reach', description: 'Now serving clients across 15 countries with 150+ team members' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of digital trends and continuously innovate our strategies to deliver cutting-edge solutions.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and honesty guide every client relationship. We deliver on our promises and build trust through results.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure success by the tangible impact we create for our clients\' businesses and their bottom line.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We believe diverse perspectives drive better solutions. Our team and approach embrace inclusivity at every level.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
      bio: '15+ years in digital marketing with a passion for data-driven strategies',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Strategy',
      image: 'https://images.unsplash.com/photo-1575383596664-30f4489f9786',
      bio: 'Former Google strategist specializing in performance marketing',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Amina Hassan',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e',
      bio: 'Award-winning designer with expertise in brand storytelling',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'David Omondi',
      role: 'Head of SEO',
      image: 'https://images.unsplash.com/photo-1585066039196-e30d097340be',
      bio: 'SEO expert who has ranked 100+ websites on page one of Google',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'Lisa Martinez',
      role: 'Social Media Lead',
      image: 'https://images.unsplash.com/photo-1544212408-c711b7c19b92',
      bio: 'Social media strategist with viral campaign experience',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'James Kimani',
      role: 'Analytics Director',
      image: 'https://images.unsplash.com/photo-1575383596664-30f4489f9786',
      bio: 'Data scientist turning insights into actionable marketing strategies',
      linkedin: 'https://linkedin.com',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Retention' },
    { value: '12+', label: 'Years Experience' },
    { value: '150+', label: 'Team Members' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Dime Solutions | Digital Marketing Experts</title>
        <meta
          name="description"
          content="Learn about Dime Solutions - East Africa's leading digital marketing agency. Our story, values, and the team driving business transformation."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-[#00E5FF]">Dime Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-10"
            >
              We transform businesses through data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild variant="premium" size="lg">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From a small startup to East Africa's leading digital marketing agency
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-12 border-l-4 border-[#00E5FF] last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-[#00E5FF] rounded-full -translate-x-[10px] shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                  <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-[#00E5FF]/20">
                    <div className="text-2xl font-bold text-[#0A2540] dark:text-[#00E5FF] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl border-0 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#0A2540] rounded-xl flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                        <value.icon className="h-8 w-8 text-[#00E5FF]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate experts dedicated to your success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden border-0">
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 relative bg-card">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-[#00E5FF] font-bold mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>
                      <Button
                        asChild
                        variant="secondary-premium"
                        className="w-full"
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-2" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold mb-2 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Offices</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Serving clients across East Africa and beyond
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-2xl transition-shadow duration-300 rounded-xl border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-[#0A2540] rounded-xl flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                    <MapPin className="h-8 w-8 text-[#00E5FF]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Mombasa Office</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Nyali, Mombasa</p>
                    <p>Kenya</p>
                    <p className="font-medium text-foreground mt-4">+254 712 345 678</p>
                    <p className="font-medium text-[#00E5FF]">mombasa@dimesolutions.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300 rounded-xl border-0 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-[#0A2540] rounded-xl flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                    <MapPin className="h-8 w-8 text-[#00E5FF]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nairobi Office</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Westlands, Nairobi</p>
                    <p>Kenya</p>
                    <p className="font-medium text-foreground mt-4">+254 722 345 678</p>
                    <p className="font-medium text-[#00E5FF]">nairobi@dimesolutions.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;