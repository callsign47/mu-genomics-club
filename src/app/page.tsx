"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Activity, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image / Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Bioluminescent Molecular Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-6"
          >
            <Badge variant="secondary" className="px-3 py-1 bg-secondary/20 text-secondary border-secondary/30 backdrop-blur-sm">
              Dept. of Bioinformatics · Marwadi University
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto text-balance"
          >
            Empowering students to explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">cutting-edge</span> genomic technologies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            A community of curious minds exploring the frontiers of genomics, bioinformatics, and molecular biology — connecting students with the science shaping tomorrow&apos;s healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/join" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base shadow-glow rounded-full" })}>
              Join the Club <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/events" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto h-12 px-8 text-base rounded-full backdrop-blur-sm bg-background/20 hover:bg-background/40 border-border/50" })}>
              Explore Events
            </Link>
          </motion.div>

          {/* Animated keywords */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-4 text-sm font-medium text-muted-foreground"
          >
            <span>Sequencing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span>CRISPR</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span>Medicine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span>Bioinformatics</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground"
        >
          <ChevronDown className="w-8 h-8 opacity-50" />
        </motion.div>
      </section>

      {/* 2. Stats Bar */}
      <section className="border-y border-border/50 bg-card/30 backdrop-blur-md relative z-10 -mt-[1px]">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">12+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Activities Conducted</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">6+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Coordinators</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2 flex items-center">
                <span className="text-2xl mr-1">₹</span>100
              </span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Membership Fee</span>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-3xl md:text-4xl font-bold text-foreground mb-2">50+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Active Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Snippet */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-border/50 shadow-lg group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
              <Image 
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000" 
                alt="Students in lab" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Activity className="w-4 h-4" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Shaping the future of life sciences through student collaboration.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Genomics Club is an initiative at Marwadi University to bridge the gap between academic learning and real-world biotech applications. We provide a platform for students to discuss, learn, and innovate in the fields of genetics, bioinformatics, and molecular biology.
              </p>
              <div className="pt-4">
                <Link href="/about" className={buttonVariants({ variant: "outline", className: "rounded-full group" })}>
                  Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Events */}
      <section className="py-24 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
              <p className="text-muted-foreground text-lg">
                Join our workshops, seminars, and hands-on sessions to build your skills and network with industry experts.
              </p>
            </div>
            <Link href="/events" className={buttonVariants({ variant: "ghost", className: "hidden md:flex" })}>
              View all events <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 0,
                title: "Introduction to CRISPR-Cas9",
                date: "Oct 15, 2026",
                type: "Workshop",
                desc: "A hands-on virtual workshop exploring the mechanisms and ethical implications of CRISPR technology.",
                img: "https://images.unsplash.com/photo-1530026405186-ed1f4956c474?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 1,
                title: "Bioinformatics Career Roadmap",
                date: "Nov 02, 2026",
                type: "Seminar",
                desc: "Guest lecture from industry professionals discussing career paths and necessary skills in modern bioinformatics.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              },
              {
                id: 2,
                title: "DNA Extraction Masterclass",
                date: "Nov 20, 2026",
                type: "Hands-on",
                desc: "Learn standard protocols for DNA extraction in the wet lab using everyday materials and professional kits.",
                img: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=800"
              }
            ].map((event, i) => (
              <Card key={i} className="bg-background border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/80 backdrop-blur-md text-foreground border-none hover:bg-background/90">
                      {event.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {event.desc}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Link href={`/events/${event.id}`} className={buttonVariants({ variant: "ghost", className: "w-full justify-between p-0 hover:bg-transparent hover:text-primary" })}>
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Link href="/events" className={buttonVariants({ variant: "outline", className: "w-full mt-8 md:hidden" })}>
            View all events
          </Link>
        </div>
      </section>

      {/* 5. Join CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-primary/30 text-primary bg-primary/5">
            Become a Member
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto text-balance">
            Ready to be part of something bigger?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get exclusive access to workshops, hands-on activities, networking opportunities, and research presentation slots for just ₹100/year.
          </p>
          <Link href="/join" className={buttonVariants({ size: "lg", className: "h-14 px-10 text-lg rounded-full shadow-glow" })}>
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
