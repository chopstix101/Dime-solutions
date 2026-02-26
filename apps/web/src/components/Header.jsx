import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import DarkModeToggle from '@/components/DarkModeToggle.jsx';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'SEO', slug: 'seo' },
    { name: 'Google Ads & PPC', slug: 'google-ads' },
    { name: 'Social Media Marketing', slug: 'social-media' },
    { name: 'Content Marketing', slug: 'content-marketing' },
    { name: 'Email Marketing', slug: 'email-marketing' },
    { name: 'Influencer & Affiliate Marketing', slug: 'influencer-marketing' },
    { name: 'Web Design & Development', slug: 'web-design' },
    { name: 'CRO', slug: 'cro' },
    { name: 'Digital Analytics & Reporting', slug: 'analytics' },
    { name: 'Brand Strategy & Identity', slug: 'brand-strategy' },
    { name: 'Video Production & YouTube Marketing', slug: 'video-production' },
    { name: 'TikTok & Short-Form Video Strategy', slug: 'tiktok-strategy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dime Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium">
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services#${service.slug}`}
                            className="text-sm text-foreground hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 px-3 py-2 rounded-lg transition-all duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                      location.pathname === link.path ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Button
              asChild
              className="hidden lg:inline-flex bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Link to="/contact">Get Started</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white dark:bg-slate-900 rounded-b-xl shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <Link
                        to={link.path}
                        className="block px-4 py-3 text-foreground hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors rounded-lg"
                      >
                        {link.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {services.slice(0, 6).map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services#${service.slug}`}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-4 py-3 text-foreground hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors rounded-lg"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="mx-4 mt-4 bg-gradient-to-r from-primary to-secondary"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;