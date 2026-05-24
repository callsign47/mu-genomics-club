"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Have questions about the club, an upcoming event, or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Email Us</p>
                        <p className="font-medium break-all">aditya.saxena@marwadieducation.edu.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                        <p className="font-medium">Ext. 1568</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/70 mb-1">Visit Us</p>
                        <p className="font-medium">Cabin MA557, Dept. of Bioinformatics</p>
                        <p className="text-sm text-primary-foreground/80 mt-1">Faculty of Engineering & Technology, Marwadi University, Rajkot, Gujarat.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary-foreground/20">
                  <p className="font-medium mb-4">Follow us on Social Media</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-background border-border h-full">
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-6">Send us a Message</h3>
                {isSubmitted ? (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold">Message Sent!</h4>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. We have received your message and will get back to you as soon as possible.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-8">Send another message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" required placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Write your message here..." 
                        className="min-h-[150px] resize-y" 
                      />
                    </div>
                    <Button type="submit" className="w-full h-12 text-base">
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-border h-[400px] relative bg-muted flex items-center justify-center">
          {/* Note: In a real app, use a proper Google Maps iframe here. For vibe-code, we use a placeholder or generic map embed. */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.678438183861!2d70.89886367597148!3d22.327993079667583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b4a660019749%3A0x7ebc50586e9ea3!2sMarwadi%20University!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Marwadi University Map"
          />
        </div>
      </div>
    </div>
  );
}
