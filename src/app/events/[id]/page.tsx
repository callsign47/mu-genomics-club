"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const EVENTS_DATA: Record<string, { title: string; date: string; time: string; venue: string; type: string; status: string; img: string; description: string; speaker: string; speakerBio: string; }> = {
  "1": { title: "Introduction to CRISPR-Cas9", date: "Oct 15, 2026", time: "2:00 PM - 5:00 PM", venue: "Main Auditorium, MU", type: "Workshop", status: "Upcoming", img: "https://images.unsplash.com/photo-1530026405186-ed1f4956c474?auto=format&fit=crop&q=80&w=1200", description: "Dive deep into the revolutionary CRISPR-Cas9 gene editing system. This workshop covers the molecular mechanism behind CRISPR, its applications in medicine and agriculture, and the ethical considerations surrounding human genome editing. Participants will work through case studies and engage in hands-on simulation exercises.", speaker: "Dr. Meera Kulkarni", speakerBio: "Senior Researcher at NCBS Bangalore with 12 years of experience in gene editing technologies." },
  "2": { title: "Bioinformatics Career Roadmap", date: "Nov 02, 2026", time: "10:00 AM - 12:00 PM", venue: "Seminar Hall B", type: "Seminar", status: "Upcoming", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", description: "Industry professionals will walk you through the many career paths available in bioinformatics. From pharma to agri-tech, from academia to startups, learn what skills are in demand and how to position yourself for success.", speaker: "Vikram Rao", speakerBio: "Bioinformatics Lead at Biocon, IIT Bombay alumnus." },
  "3": { title: "DNA Extraction Masterclass", date: "Nov 20, 2026", time: "9:00 AM - 4:00 PM", venue: "Biotech Lab 3", type: "Hands-on", status: "Registration Open", img: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=1200", description: "Get your hands dirty in a real wet lab environment. Extract DNA from fruits using household chemicals, then use professional kits for bacterial DNA isolation. You will learn about cell lysis, precipitation, and quality assessment of extracted DNA.", speaker: "Dr. Aditya Saxena", speakerBio: "Associate Professor, Dept. of Bioinformatics, Marwadi University." },
  "4": { title: "Genomics Data Science Hackathon", date: "Dec 05, 2026", time: "48 Hours", venue: "Innovation Center", type: "Competition", status: "Upcoming", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200", description: "A 48-hour hackathon challenging teams to build computational pipelines for genomic data analysis. Problems include sequence alignment optimization, variant calling, and building prediction models for genetic diseases.", speaker: "Panel of Judges", speakerBio: "Industry and academic experts from across Gujarat." },
  "5": { title: "Precision Medicine Symposium", date: "Sep 10, 2026", time: "10:00 AM - 5:00 PM", venue: "Virtual", type: "Seminar", status: "Completed", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200", description: "A full-day symposium exploring how individual genetic profiles are being used to tailor cancer treatments, predict drug responses, and design targeted therapies.", speaker: "Dr. Ananya Desai", speakerBio: "Oncogenomics researcher at AIIMS New Delhi." },
  "6": { title: "Next-Gen Sequencing Basics", date: "Aug 22, 2026", time: "1:00 PM - 3:00 PM", venue: "Lab 1", type: "Workshop", status: "Completed", img: "https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?auto=format&fit=crop&q=80&w=1200", description: "Understand the fundamentals of Illumina sequencing technology, learn to read and interpret FASTQ files, and get introduced to command-line bioinformatics tools like FastQC and Trimmomatic.", speaker: "Aman Patel", speakerBio: "Technical Lead, Genomics Club & 2nd Year Bioinformatics." },
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = EVENTS_DATA[params.id];
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events" className={buttonVariants()}>Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-20 pb-20">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 w-full">
        <Image src={event.img} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-6 left-0 right-0 container mx-auto px-4">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Events
          </Link>
          <div className="flex gap-3 mb-3">
            <Badge className="bg-primary text-primary-foreground">{event.type}</Badge>
            <Badge variant={event.status === "Completed" ? "outline" : "secondary"}>{event.status}</Badge>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">{event.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="prose prose-invert max-w-none mb-12">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card className="bg-card/50 border-border mb-8">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Speaker</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {event.speaker.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{event.speaker}</p>
                      <p className="text-sm text-muted-foreground">{event.speakerBio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div>
            <ScrollReveal direction="right">
              <Card className="glass-strong sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-primary" /><div><p className="text-sm text-muted-foreground">Date</p><p className="font-medium">{event.date}</p></div></div>
                    <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /><div><p className="text-sm text-muted-foreground">Time</p><p className="font-medium">{event.time}</p></div></div>
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /><div><p className="text-sm text-muted-foreground">Venue</p><p className="font-medium">{event.venue}</p></div></div>
                    <div className="flex items-center gap-3"><Users className="w-5 h-5 text-primary" /><div><p className="text-sm text-muted-foreground">Capacity</p><p className="font-medium">50 seats</p></div></div>
                  </div>
                  {event.status !== "Completed" && (
                    <div className="space-y-4 pt-4 border-t border-border">
                      <h4 className="font-bold">Quick Register</h4>
                      <div className="space-y-2">
                        <Label htmlFor="reg-name">Full Name</Label>
                        <Input id="reg-name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input id="reg-email" type="email" placeholder="your@email.com" />
                      </div>
                      <Button className="w-full btn-press pulse-glow">Register Now</Button>
                    </div>
                  )}
                  <Button variant="outline" className="w-full gap-2" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <Share2 className="w-4 h-4" /> Copy Link to Share
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
