import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = '254712345678';
  const message = 'Hi! I would like to learn more about your digital marketing services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-24 right-8 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Chat on WhatsApp"
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-6 w-6" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;