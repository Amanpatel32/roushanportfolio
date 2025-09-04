import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // EmailJS configuration
      const serviceID = 'service_fzaljd7';
      const templateID = 'template_zj9347w';
      const userID = 'ufvw8LGCqjg3-a0dQ';

      const result = await emailjs.send(serviceID, templateID, formData as unknown as Record<string, unknown>, userID);

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // Add detailed error message for debugging
      setStatus({
        type: 'error',
        message: `Network error: ${error instanceof Error ? error.message : String(error)}. Please check your connection and try again, or contact me directly at roushanpateldata@gmail.com`
      });
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: 'idle', message: '' });
    }, 5000);
  };

  const getStatusIcon = () => {
    switch (status.type) {
      case 'loading':
        return <Loader2 className="w-4 h-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'error':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />;
    }
  };

  const getStatusColor = () => {
    switch (status.type) {
      case 'success':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'error':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      default:
        return '';
    }
  };

  return (
    <Card className="bg-gradient-to-r from-slate-900/40 to-slate-800/40 border-slate-700/30 hover:border-neural-400/30 transition-all duration-300 transform hover:scale-105">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-6">Send Message</h3>

        {/* Status Message */}
        {status.message && (
          <div className={`mb-4 p-3 rounded-lg border text-sm flex items-center space-x-2 ${getStatusColor()}`}>
            {getStatusIcon()}
            <span>{status.message}</span>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-slate-800/50 border-slate-700/30 focus:border-neural-400 transition-colors"
              required
              disabled={status.type === 'loading'}
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-slate-800/50 border-slate-700/30 focus:border-neural-400 transition-colors"
              required
              disabled={status.type === 'loading'}
            />
          </div>

          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-slate-800/50 border-slate-700/30 focus:border-neural-400 transition-colors"
            required
            disabled={status.type === 'loading'}
          />

          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message about Data Science or AI/ML opportunities"
            rows={5}
            className="bg-slate-800/50 border-slate-700/30 resize-none focus:border-neural-400 transition-colors"
            required
            disabled={status.type === 'loading'}
          />

          <Button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-gradient-to-r from-neural-500 to-data-500 hover:from-neural-600 hover:to-data-600 group transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {getStatusIcon()}
            <span className="ml-2">
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </span>
          </Button>
        </form>

        {/* Contact Information */}
        <div className="mt-6 pt-6 border-t border-slate-700/30">
          <p className="text-sm text-muted-foreground text-center">
            Or email me directly at{' '}
            <a
              href="mailto:roushanpateldata@gmail.com"
              className="text-neural-400 hover:text-neural-300 transition-colors"
            >
              roushanpateldata@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
