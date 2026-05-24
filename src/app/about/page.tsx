"use client";

import Image from "next/image";
import { Dna, Eye, Lightbulb, Users, Globe, Target, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 glass-subtle overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/hero-bg.png" alt="Abstract Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Genomics Club</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between academic learning and real-world biotech applications at Marwadi University since 2024.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Club Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-8">How It Started</h2>
          </ScrollReveal>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={0.1}>
              <p>
                Founded in early 2024 by a group of passionate Bioinformatics students and faculty, the Genomics Club was born out of a simple realization: the textbook alone isn&apos;t enough to grasp the rapidly evolving world of genomics and molecular biology.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                What started as small discussion groups in Cabin MA557 has now grown into a university-wide initiative. We organize hands-on wet-lab masterclasses, bioinformatics coding bootcamps, and invite industry experts to share the latest in CRISPR, next-generation sequencing, and personalized medicine.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                Our goal is to build a vibrant ecosystem where students don&apos;t just learn about science &mdash; they actively participate in shaping its future.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <Card className="bg-background border-primary/20 shadow-glow relative overflow-hidden h-full card-hover">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg relative z-10">
                  To enable students to explore the latest genomic technologies shaping biomedical research, driving innovation in healthcare and life sciences.
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <Card className="bg-background border-secondary/20 shadow-lg relative overflow-hidden h-full card-hover">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mb-10" />
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" /><span>Organize seminars, workshops, quizzes, games, and recreational activities focused on Genomics.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" /><span>Foster curiosity and encourage exploration of the latest advancements in genomic science.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" /><span>Share relevant knowledge and skills for professional success through organized events.</span></li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.1}>
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries in biotech" },
              { icon: Users, title: "Collaboration", desc: "Building a supportive community" },
              { icon: Target, title: "Precision", desc: "Excellence in methodology" },
              { icon: Shield, title: "Integrity", desc: "Ethical research practices" },
              { icon: Globe, title: "Impact", desc: "Science for global healthcare" },
              { icon: Dna, title: "Curiosity", desc: "Lifelong learning in genetics" },
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 glow-border card-hover">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Genomics 101 */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-16">Genomics 101</h2>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              { icon: Dna, title: "The Genome", text: "The complete set of genetic instructions in a cell \u2014 a blueprint containing all information needed to build and run a living organism." },
              { icon: Shield, title: "Healthcare Impact", text: "Genomics-based healthcare uses individual genomic information for clinical decisions \u2014 enabling precise diagnostic and therapeutic interventions." },
              { icon: Globe, title: "Global Potential", text: "Genomics can reduce global health inequalities by providing developing nations with efficient, cost-effective tools for preventing major diseases." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20 card-hover">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <item.icon className="w-6 h-6" /> {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
