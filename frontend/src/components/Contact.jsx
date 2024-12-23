import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import './css/Contact.css'

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
    
    // You would typically send the form data to your backend here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#fff9e6]">
      {/* Header with Parallax */}
      <header className="header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1>Contact Us</h1>
          <p className="subtitle">Get in touch with us - we'd love to hear from you!</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="bg-white border border-[#daa52019]">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#2d2d2d]">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-[#daa52019] focus:border-[#c51d2e] focus:ring-[#c51d2e]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#2d2d2d]">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-[#daa52019] focus:border-[#c51d2e] focus:ring-[#c51d2e]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#2d2d2d]">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                  className="border-[#daa52019] focus:border-[#c51d2e] focus:ring-[#c51d2e]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#2d2d2d]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="min-h-[150px] border-[#daa52019] focus:border-[#c51d2e] focus:ring-[#c51d2e]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c51d2e] hover:bg-[#a11725] text-white font-medium py-2 px-4 rounded transition-colors duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-[#daa52019]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Email</h3>
                  <p className="text-[#c51d2e]">contact@example.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Phone</h3>
                  <p className="text-[#c51d2e]">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2d2d2d] mb-2">Address</h3>
                  <p className="text-[#c51d2e]">123 Main Street, City, Country</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;