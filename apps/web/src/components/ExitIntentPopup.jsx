import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('exitIntentShown');
    if (hasSeenPopup) return;

    let lastY = 0;

    const handleMouseMove = (e) => {
      const currentY = e.clientY;
      
      if (currentY < 50 && lastY > currentY) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
      
      lastY = currentY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await pb.collection('newsletter_subscribers').create({ email }, { $autoCancel: false });
      toast({
        title: 'Success!',
        description: 'We\'ll send you a free marketing audit soon!',
      });
      setEmail('');
      setIsOpen(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Wait! Don't Leave Yet 🎁
          </DialogTitle>
          <DialogDescription className="text-base">
            Get a FREE Digital Marketing Audit worth $500! Discover how to boost your online presence and drive more sales.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-gray-900 dark:text-white"
          />
          <Button
            type="submit"
            variant="premium"
            size="lg"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Submitting...' : 'Get My Free Audit'}
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;