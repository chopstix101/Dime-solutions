import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service_interest: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await pb.collection('contacts').create(formData, { $autoCancel: false });
      toast({
        title: 'Success!',
        description: 'Your message has been sent. We\'ll get back to you soon!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'SEO',
    'Google Ads & PPC',
    'Social Media Marketing',
    'Content Marketing',
    'Email Marketing',
    'Influencer Marketing',
    'Web Design & Development',
    'CRO',
    'Digital Analytics',
    'Brand Strategy',
    'Video Production',
    'TikTok Strategy',
  ];

  const offices = [
    {
      name: 'Mombasa Office',
      address: 'Nyali, Mombasa, Kenya',
      phone: '+254 712 345 678',
      email: 'mombasa@dimesolutions.com',
    },
    {
      name: 'Nairobi Office',
      address: 'Westlands, Nairobi, Kenya',
      phone: '+254 722 345 678',
      email: 'nairobi@dimesolutions.com',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Dime Solutions | Get in Touch</title>
        <meta
          name="description"
          content="Contact Dime Solutions for digital marketing services. Offices in Mombasa and Nairobi. Get a free consultation today!"
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
              Get in <span className="text-[#00E5FF]">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
            >
              Let's discuss how we can help grow your business
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="rounded-xl shadow-xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 text-gray-900 dark:text-white focus-visible:ring-[#00E5FF]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 text-gray-900 dark:text-white focus-visible:ring-[#00E5FF]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 text-gray-900 dark:text-white focus-visible:ring-[#00E5FF]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1 text-gray-900 dark:text-white focus-visible:ring-[#00E5FF]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service_interest">Service Interest</Label>
                        <Select value={formData.service_interest} onValueChange={handleSelectChange}>
                          <SelectTrigger className="mt-1 focus:ring-[#00E5FF]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="mt-1 text-gray-900 dark:text-white focus-visible:ring-[#00E5FF]"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        disabled={isLoading}
                        className="w-full"
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                  <div className="space-y-6">
                    {offices.map((office) => (
                      <Card key={office.name} className="rounded-xl hover:shadow-xl transition-shadow duration-300 border-0 group">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4 text-[#0A2540] dark:text-[#00E5FF]">{office.name}</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{office.address}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-[#00E5FF] flex-shrink-0" />
                              <a
                                href={`tel:${office.phone.replace(/\s/g, '')}`}
                                className="text-muted-foreground hover:text-[#00E5FF] transition-colors"
                              >
                                {office.phone}
                              </a>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-[#00E5FF] flex-shrink-0" />
                              <a
                                href={`mailto:${office.email}`}
                                className="text-muted-foreground hover:text-[#00E5FF] transition-colors"
                              >
                                {office.email}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="rounded-xl bg-[#0A2540] text-white border-0 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-8 w-8 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-[#00E5FF]">Business Hours</h3>
                        <div className="space-y-2">
                          <p className="opacity-90 flex justify-between"><span className="font-medium">Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></p>
                          <p className="opacity-90 flex justify-between"><span className="font-medium">Saturday:</span> <span>9:00 AM - 2:00 PM</span></p>
                          <p className="opacity-90 flex justify-between"><span className="font-medium">Sunday:</span> <span>Closed</span></p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-[#0A2540] dark:border-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7686080515!2d39.7330!3d-4.0435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInMzYuNiJTIDM5wrA0Myc1OC44IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dime Solutions Office Location"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;