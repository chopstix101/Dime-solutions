import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await pb.collection('newsletter_subscribers').create({ email }, { $autoCancel: false });
      toast({
        title: 'Success!',
        description: 'You have been subscribed to our newsletter.',
      });
      setEmail('');
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to subscribe. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', label: 'X (Twitter)' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#00E5FF] rounded-lg flex items-center justify-center">
                <span className="text-[#0A2540] font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold">Dime Solutions</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming businesses through data-driven digital marketing strategies that deliver measurable ROI.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-[#00E5FF] hover:text-[#0A2540] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#00E5FF] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Offices</h3>
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <p className="font-medium text-[#00E5FF]">Mombasa Office</p>
                <div className="flex items-start space-x-2 text-slate-400">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Nyali, Mombasa, Kenya</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+254712345678" className="hover:text-[#00E5FF] transition-colors">
                    +254 712 345 678
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#00E5FF]">Nairobi Office</p>
                <div className="flex items-start space-x-2 text-slate-400">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Westlands, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a href="tel:+254722345678" className="hover:text-[#00E5FF] transition-colors">
                    +254 722 345 678
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@dimesolutions.com" className="hover:text-[#00E5FF] transition-colors">
                  info@dimesolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest digital marketing insights and tips.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-[#00E5FF]"
              />
              <Button
                type="submit"
                variant="premium"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dime Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;