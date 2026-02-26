import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Target,
  Share2,
  FileText,
  Mail,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  Star,
  PhoneCall
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

const HomePage = () => {
  const [stats, setStats] = useState({ projects: 0, retention: 0, years: 0, team: 0 });
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setStats({
          projects: Math.floor(500 * progress),
          retention: Math.floor(98 * progress),
          years: Math.floor(12 * progress),
          team: Math.floor(150 * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    animateStats();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projects, testimonialData, posts] = await Promise.all([
          pb.collection('portfolio_projects').getList(1, 6, { sort: '-created', $autoCancel: false }),
          pb.collection('testimonials').getList(1, 10, { sort: '-created', $autoCancel: false }),
          pb.collection('blog_posts').getList(1, 3, { sort: '-created', $autoCancel: false }),
        ]);

        setPortfolioProjects(projects.items);
        setTestimonials(testimonialData.items);
        setBlogPosts(posts.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

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

  const services = [
    { icon: Search, name: 'SEO', description: 'Rank higher on search engines' },
    { icon: Target, name: 'Google Ads', description: 'Targeted PPC campaigns' },
    { icon: Share2, name: 'Social Media', description: 'Engage your audience' },
    { icon: FileText, name: 'Content Marketing', description: 'Compelling content that converts' },
    { icon: Mail, name: 'Email Marketing', description: 'Nurture leads effectively' },
    { icon: Users, name: 'Influencer Marketing', description: 'Leverage social influence' },
    { icon: Globe, name: 'Web Design', description: 'Beautiful, functional websites' },
    { icon: TrendingUp, name: 'CRO', description: 'Optimize conversion rates' },
  ];

  const clientLogos = [
    'Company A',
    'Company B',
    'Company C',
    'Company D',
    'Company E',
    'Company F',
    'Company G',
    'Company H',
  ];

  return (
    <>
      <Helmet>
        <title>Dime Solutions - Digital Marketing That Delivers ROI</title>
        <meta
          name="description"
          content="Transform your business with data-driven digital marketing strategies. SEO, PPC, Social Media, and more. Get your free audit today!"
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1675023112817-52b789fd2ef0)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Turning Clicks into{' '}
              <span className="text-[#00E5FF]">
                Customers
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Digital Marketing That Delivers ROI
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button
                asChild
                variant="premium"
                size="lg"
              >
                <Link to="/contact">Get Free Audit</Link>
              </Button>
              <Button
                asChild
                variant="secondary-premium"
                size="lg"
              >
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital marketing solutions tailored to your business goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group h-full flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl border-2 border-transparent hover:border-[#00E5FF]/30">
                    <CardContent className="p-6 text-center flex-grow flex flex-col">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#0A2540] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
                        <service.icon className="h-8 w-8 text-[#00E5FF]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.description}</p>
                      <Button asChild variant="premium" className="w-full mt-auto">
                        <Link to="/services">Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.projects}+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.retention}%</div>
                <div className="text-lg opacity-90">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.years}+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]">{stats.team}+</div>
                <div className="text-lg opacity-90">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Success stories from businesses we've helped grow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl border-0">
                    <div className="relative h-72 overflow-hidden">
                      {project.image ? (
                        <img
                          src={pb.files.getUrl(project, project.image)}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                          <p className="text-sm text-[#00E5FF] mb-4">{project.industry}</p>
                          <Button variant="premium" size="sm" className="w-full">
                            View Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Strategy Call CTA */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0A2540] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <PhoneCall className="w-16 h-16 text-[#00E5FF] mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Dominate Your Market?
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Schedule a free 30-minute strategy session with our experts. We'll analyze your current digital presence and map out a custom growth plan.
                </p>
                <Button asChild variant="premium" size="lg" className="text-lg px-10 py-6">
                  <Link to="/contact">Book Your Strategy Call Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Carousel */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Brands</h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800"
                  >
                    <span className="text-xl font-semibold text-muted-foreground">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section className="py-16 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-xl text-muted-foreground">Real results from real businesses</p>
              </div>
              <div className="max-w-4xl mx-auto relative">
                <Card className="p-8 rounded-xl shadow-xl border-t-4 border-t-[#00E5FF]">
                  <div className="flex flex-col items-center text-center">
                    {testimonials[currentTestimonial].image && (
                      <img
                        src={pb.files.getUrl(testimonials[currentTestimonial], testimonials[currentTestimonial].image)}
                        alt={testimonials[currentTestimonial].client_name}
                        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#00E5FF]"
                      />
                    )}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[currentTestimonial].rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-lg mb-6 italic">"{testimonials[currentTestimonial].quote}"</p>
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].client_name}</p>
                    {testimonials[currentTestimonial].company && (
                      <p className="text-sm text-[#00E5FF] font-medium">{testimonials[currentTestimonial].company}</p>
                    )}
                  </div>
                </Card>
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-[#00E5FF] w-10 shadow-[0_0_10px_rgba(0,229,255,0.6)]' : 'bg-gray-300 dark:bg-gray-600 w-3'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Highlights */}
        {blogPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
                <p className="text-xl text-muted-foreground">Stay updated with digital marketing trends</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden border-0">
                      {post.featured_image && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={pb.files.getUrl(post, post.featured_image)}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {post.category && (
                          <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider bg-[#0A2540] px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-xl font-bold mt-4 mb-3 line-clamp-2 group-hover:text-[#00E5FF] transition-colors">{post.title}</h3>
                        {post.excerpt && (
                          <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                        )}
                        <Button variant="secondary-premium" className="w-full">
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-20 bg-[#0A2540] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive digital marketing tips and strategies
            </p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus-visible:ring-[#00E5FF] h-12"
              />
              <Button
                type="submit"
                disabled={isLoading}
                variant="premium"
                size="lg"
                className="whitespace-nowrap"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default HomePage;