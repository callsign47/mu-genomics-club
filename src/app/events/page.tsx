"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EVENTS = [
  {
    id: 1,
    title: "Introduction to CRISPR-Cas9",
    date: "Oct 15, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Main Auditorium, MU",
    type: "Workshop",
    status: "Upcoming",
    desc: "A hands-on virtual workshop exploring the mechanisms and ethical implications of CRISPR technology. Learn from leading researchers.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f4956c474?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Bioinformatics Career Roadmap",
    date: "Nov 02, 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "Seminar Hall B",
    type: "Seminar",
    status: "Upcoming",
    desc: "Guest lecture from industry professionals discussing career paths and necessary skills in modern bioinformatics.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "DNA Extraction Masterclass",
    date: "Nov 20, 2026",
    time: "9:00 AM - 4:00 PM",
    venue: "Biotech Lab 3",
    type: "Hands-on",
    status: "Registration Open",
    desc: "Learn standard protocols for DNA extraction in the wet lab using everyday materials and professional kits.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Genomics Data Science Hackathon",
    date: "Dec 05, 2026",
    time: "48 Hours",
    venue: "Innovation Center",
    type: "Competition",
    status: "Upcoming",
    desc: "A 48-hour hackathon to build computational tools for genomic sequence alignment and disease prediction models.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Precision Medicine Symposium",
    date: "Sep 10, 2026",
    time: "10:00 AM - 5:00 PM",
    venue: "Virtual",
    type: "Seminar",
    status: "Completed",
    desc: "An exploration into how genetic profiling is revolutionizing cancer treatments and targeted therapies.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Next-Gen Sequencing Basics",
    date: "Aug 22, 2026",
    time: "1:00 PM - 3:00 PM",
    venue: "Lab 1",
    type: "Workshop",
    status: "Completed",
    desc: "Understanding Illumina sequencing and interpretation of FASTQ files using command line tools.",
    img: "https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Activities & Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our workshops, seminars, and hands-on sessions to build your skills and network with industry experts.
          </p>
        </div>

        {/* Filters (Mock UI) */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge variant="default" className="text-sm py-1.5 px-4 cursor-pointer">All Events</Badge>
          <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Upcoming</Badge>
          <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted">Completed</Badge>
          <Badge variant="outline" className="text-sm py-1.5 px-4 cursor-pointer hover:bg-muted border-dashed border-primary/50 text-primary">Registration Open</Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <Card key={event.id} className="bg-background border-border overflow-hidden flex flex-col hover:shadow-glow transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-background/80 backdrop-blur-md text-foreground hover:bg-background/90">
                    {event.type}
                  </Badge>
                  {event.status === "Upcoming" && (
                    <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground shadow-sm">
                      Upcoming
                    </Badge>
                  )}
                  {event.status === "Registration Open" && (
                    <Badge className="bg-primary text-primary-foreground shadow-sm shadow-primary/20 animate-pulse">
                      Register Now
                    </Badge>
                  )}
                  {event.status === "Completed" && (
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-md text-muted-foreground border-muted-foreground/30">
                      Completed
                    </Badge>
                  )}
                </div>
              </div>
              <CardContent className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {event.desc}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 mt-auto">
                {event.status === "Completed" ? (
                   <Link href={`/events/${event.id}`} className={buttonVariants({ variant: "outline", className: "w-full" })}>
                    View Gallery
                   </Link>
                ) : (
                  <Link href={`/events/${event.id}`} className={buttonVariants({ className: "w-full justify-between" })}>
                      {event.status === "Registration Open" ? "Register for Event" : "View Details"}
                      <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
