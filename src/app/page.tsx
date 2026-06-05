"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Activity, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DNAHelix } from "@/components/effects/DNAHelix";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { Typewriter } from "@/components/effects/Typewriter";
import { CountUp } from "@/components/effects/CountUp";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

const STATS = [
  { value: 50, suffix: "+", label: "Active Members" },
  { value: 12, suffix: "+", label: "Events Hosted" },
  { value: 8, suffix: "+", label: "Workshops" },
  { value: 3, suffix: "+", label: "Research Projects" },
];

const EVENTS = [
  {
    id: 1,
    title: "Introduction to CRISPR-Cas9",
    date: "Oct 15, 2026",
    type: "Workshop",
    desc: "A hands-on workshop exploring the mechanisms and ethical implications of CRISPR gene-editing technology.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f4956c474?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Bioinformatics Career Roadmap",
    date: "Nov 02, 2026",
    type: "Seminar",
    desc: "Guest lecture from industry professionals discussing career paths and skills in modern bioinformatics.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "DNA Extraction Masterclass",
    date: "Nov 20, 2026",
    type: "Hands-on",
    desc: "Learn standard protocols for DNA extraction in the wet lab using everyday materials and professional kits.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
        {/* Particle Network Background */}
        <div className="absolute inset-0 z-0">
          <ParticleNetwork />
        </div>

        {/* DNA Helix - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 z-0 hidden lg:block opacity-40">
          <DNAHelix />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background/60 via-background/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 text-center py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-primary/40 text-primary backdrop-blur-sm">
              <Activity className="w-3.5 h-3.5 mr-2" /> Dept. of Bioinformatics, Marwadi University
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="gradient-text">Genomics</span> Club
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto h-16 flex items-center justify-center"
          >
            <Typewriter
              phrases={[
                "Exploring the frontiers of genomics and molecular biology",
                "Bridging academic learning with real-world biotech",
                "Building the next generation of bioinformatics leaders",
                "From CRISPR to computational biology — learn by doing",
              ]}
              typingSpeed={40}
              deletingSpeed={25}
              pauseDuration={2500}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground/70 mb-10 max-w-lg mx-auto"
          >
            Workshops &bull; Seminars &bull; Wet-Lab Sessions &bull; Hackathons &bull; Research
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/join" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-12 px-8 text-base shadow-glow rounded-full pulse-glow btn-press" })}>
              Join the Club <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/events" className={buttonVariants({ size: "lg", variant: "outline", className: "w-full sm:w-auto h-12 px-8 text-base rounded-full backdrop-blur-sm btn-press" })}>
              Explore Events
            </Link>
          </motion.div>

          {/* Floating keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {["CRISPR", "NGS", "AlphaFold", "Metagenomics", "PCR", "Gene Therapy"].map((keyword, i) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="px-3 py-1 rounded-full border border-border/50 text-xs text-muted-foreground/60 backdrop-blur-sm"
              >
                {keyword}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-6 glass-subtle border-y border-border/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SNIPPET ========== */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden img-zoom">
                <Image src="/hero-bg.png" alt="Molecular network visualization" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">About Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Where <span className="gradient-text">Curiosity</span> Meets Science
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  The Genomics Club is an initiative at Marwadi University to bridge the gap between academic learning and real-world biotech applications. We provide a platform for students to discuss, learn, and innovate in genetics, bioinformatics, and molecular biology.
                </p>
                <div className="pt-4">
                  <Link href="/about" className={buttonVariants({ variant: "outline", className: "rounded-full group btn-press" })}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========== FEATURED EVENTS ========== */}
      <section className="py-24 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">Upcoming</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Featured Events</h2>
                <p className="text-muted-foreground mt-2">
                  Join our workshops, seminars, and hands-on sessions.
                </p>
              </div>
              <Link href="/events" className={buttonVariants({ variant: "ghost", className: "hidden md:flex" })}>
                View all events <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {EVENTS.map((event) => (
              <StaggerItem key={event.id}>
                <Card className="glass-card overflow-hidden flex flex-col border-none">
                  <div className="relative h-48 img-zoom">
                    <Image src={event.img} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 backdrop-blur-md text-foreground hover:bg-background/90">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{event.desc}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Link href={`/events/${event.id}`} className={buttonVariants({ variant: "ghost", className: "w-full justify-between p-0 hover:bg-transparent hover:text-primary" })}>
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Link href="/events" className={buttonVariants({ variant: "outline", className: "w-full mt-8 md:hidden btn-press" })}>
            View all events
          </Link>
        </div>
      </section>

      {/* ========== JOIN CTA ========== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0">
          <ParticleNetwork />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">Open to All Students</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
              Ready to Decode the <span className="gradient-text">Language of Life</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get exclusive access to workshops, hands-on activities, networking opportunities, and research slots for just &#8377;100/year.
            </p>
            <Link href="/join" className={buttonVariants({ size: "lg", className: "h-14 px-10 text-lg rounded-full shadow-glow pulse-glow btn-press" })}>
              Become a Member <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
