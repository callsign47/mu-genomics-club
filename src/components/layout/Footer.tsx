"use client";

import Link from "next/link";
import { Dna, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <Dna className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight">Genomics Club</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Dept. of Bioinformatics, Faculty of Engineering & Technology, Marwadi University, Rajkot, Gujarat.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><FaInstagram className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><FaXTwitter className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><FaGithub className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Activities</Link></li>
              <li><Link href="/about#benefits" className="hover:text-primary transition-colors">Benefits</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/join" className="hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/announcements" className="hover:text-primary transition-colors">Announcements</Link></li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <span>aditya.saxena@marwadieducation.edu.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Cabin MA557, Marwadi University</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Ext. 1568</span>
              </li>
            </ul>
            
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-muted/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <Button size="icon" type="submit">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Genomics Club · Marwadi University. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
