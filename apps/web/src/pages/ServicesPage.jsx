import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  Users,
  Globe,
  TrendingUp,
  BarChart3,
  Palette,
  Video,
  Smartphone,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      id: 'seo',
      icon: Search,
      name: 'SEO',
      fullName: 'Search Engine Optimization',
      description: 'Dominate search rankings with our proven SEO strategies. We optimize your website to rank higher on Google and drive organic traffic that converts.',
      features: ['Keyword Research', 'On-Page Optimization', 'Link Building', 'Technical SEO', 'Local SEO'],
    },
    {
      id: 'google-ads',
      icon: Target,
      name: 'Google Ads & PPC',
      fullName: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with targeted Google Ads campaigns. Our PPC experts create high-converting ads that reach your ideal customers at the right time.',
      features: ['Campaign Strategy', 'Ad Copywriting', 'Bid Management', 'A/B Testing', 'Conversion Tracking'],
    },
    {
      id: 'social-media',
      icon: Share2,
      name: 'Social Media Marketing',
      fullName: 'Social Media Strategy & Management',
      description: 'Build engaged communities and drive sales through strategic social media marketing across Facebook, Instagram, LinkedIn, and more.',
      features: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Influencer Partnerships', 'Analytics'],
    },
    {
      id: 'content-marketing',
      icon: FileText,
      name: 'Content Marketing',
      fullName: 'Strategic Content Creation',
      description: 'Create compelling content that attracts, engages, and converts your target audience. From blog posts to whitepapers, we craft content that drives results.',
      features: ['Blog Writing', 'Ebooks & Guides', 'Case Studies', 'Infographics', 'Content Strategy'],
    },
    {
      id: 'email-marketing',
      icon: Mail,
      name: 'Email Marketing',
      fullName: 'Email Campaign Management',
      description: 'Nurture leads and boost sales with personalized email campaigns. Our data-driven approach ensures your messages reach the right people at the right time.',
      features: ['Campaign Design', 'List Segmentation', 'Automation', 'A/B Testing', 'Performance Analytics'],
    },
    {
      id: 'influencer-marketing',
      icon: Users,
      name: 'Influencer & Affiliate Marketing',
      fullName: 'Influencer Partnerships & Affiliate Programs',
      description: 'Leverage the power of influencers and affiliates to expand your reach and drive sales. We connect you with the right partners for maximum impact.',
      features: ['Influencer Outreach', 'Campaign Management', 'Affiliate Program Setup', 'Performance Tracking', 'ROI Analysis'],
    },
    {
      id: 'web-design',
      icon: Globe,
      name: 'Web Design & Development',
      fullName: 'Custom Website Solutions',
      description: 'Create stunning, high-performing websites that convert visitors into customers. Our designs are beautiful, functional, and optimized for results.',
      features: ['Responsive Design', 'UX/UI Optimization', 'E-commerce Solutions', 'CMS Integration', 'Website Maintenance'],
    },
    {
      id: 'cro',
      icon: TrendingUp,
      name: 'CRO',
      fullName: 'Conversion Rate Optimization',
      description: 'Turn more visitors into customers with our CRO strategies. We analyze user behavior and optimize every element of your website for maximum conversions.',
      features: ['User Testing', 'Heatmap Analysis', 'Landing Page Optimization', 'Form Optimization', 'Multivariate Testing'],
    },
    {
      id: 'analytics',
      icon: BarChart3,
      name: 'Digital Analytics & Reporting',
      fullName: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics and reporting. We track, measure, and analyze every aspect of your digital marketing performance.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Performance Reports', 'Data Visualization', 'Actionable Insights'],
    },
    {
      id: 'brand-strategy',
      icon: Palette,
      name: 'Brand Strategy & Identity',
      fullName: 'Brand Development & Positioning',
      description: 'Build a powerful brand that resonates with your audience. From strategy to visual identity, we create brands that stand out and drive loyalty.',
      features: ['Brand Positioning', 'Visual Identity', 'Brand Guidelines', 'Messaging Strategy', 'Brand Audits'],
    },
    {
      id: 'video-production',
      icon: Video,
      name: 'Video Production & YouTube Marketing',
      fullName: 'Video Content & YouTube Strategy',
      description: 'Engage audiences with professional video content and YouTube marketing. We produce videos that tell your story and drive engagement.',
      features: ['Video Production', 'YouTube SEO', 'Channel Management', 'Video Ads', 'Analytics & Optimization'],
    },
    {
      id: 'tiktok-strategy',
      icon: Smartphone,
      name: 'TikTok & Short-Form Video Strategy',
      fullName: 'TikTok Marketing & Short-Form Content',
      description: 'Reach younger audiences with viral TikTok and short-form video strategies. We create content that captures attention and drives engagement.',
      features: ['TikTok Strategy', 'Content Creation', 'Trend Analysis', 'Influencer Collaboration', 'Performance Tracking'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Dime Solutions | Digital Marketing Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive digital marketing services: SEO, PPC, Social Media, Content Marketing, and more. Tailored solutions for business growth."
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
              Our <span className="text-[#00E5FF]">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            >
              Comprehensive digital marketing solutions designed to grow your business and maximize ROI
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl border-0 bg-card">
                    <CardContent className="p-8 flex-grow flex flex-col">
                      <div className="w-16 h-16 mb-6 bg-[#0A2540] rounded-xl flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                        <service.icon className="h-8 w-8 text-[#00E5FF]" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                      <p className="text-sm text-[#00E5FF] font-bold mb-4">{service.fullName}</p>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-2 mb-8 flex-grow">
                        <p className="text-sm font-semibold">Key Features:</p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full mr-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,229,255,0.8)]" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button asChild variant="premium" className="w-full mt-auto">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <Button
              asChild
              variant="premium"
              size="lg"
            >
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;