"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dna, Eye, Lightbulb, Users, Globe, Target, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-card/30 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/hero-bg.png" alt="Abstract Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-primary">Genomics Club</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Bridging the gap between academic learning and real-world biotech applications at Marwadi University since 2024.
          </motion.p>
        </div>
      </section>

      {/* Club Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in early 2024 by a group of passionate Bioinformatics students and faculty, the Genomics Club was born out of a simple realization: the textbook alone isn&apos;t enough to grasp the rapidly evolving world of genomics and molecular biology.
            </p>
            <p>
              What started as small discussion groups in Cabin MA557 has now grown into a university-wide initiative. We organize hands-on wet-lab masterclasses, bioinformatics coding bootcamps, and invite industry experts to share the latest in CRISPR, next-generation sequencing, and personalized medicine.
            </p>
            <p>
              Our goal is to build a vibrant ecosystem where students don&apos;t just learn about science — they actively participate in shaping its future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-background border-primary/20 shadow-glow relative overflow-hidden">
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

            <Card className="bg-background border-secondary/20 shadow-lg relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mb-10" />
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Organize seminars, workshops, quizzes, games, and recreational activities focused on Genomics.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Foster curiosity and encourage exploration of the latest advancements in genomic science.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Share relevant knowledge and skills for professional success through organized events.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries in biotech" },
              { icon: Users, title: "Collaboration", desc: "Building a supportive community" },
              { icon: Target, title: "Precision", desc: "Excellence in methodology" },
              { icon: Shield, title: "Integrity", desc: "Ethical research practices" },
              { icon: Globe, title: "Impact", desc: "Science for global healthcare" },
              { icon: Dna, title: "Curiosity", desc: "Lifelong learning in genetics" },
            ].map((value, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Genomics 101 */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Genomics 101</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Dna className="w-6 h-6" /> The Genome
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                The complete set of genetic instructions in a cell — a blueprint containing all information needed to build and run a living organism.
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" /> Healthcare Impact
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Genomics-based healthcare uses individual genomic information for clinical decisions — enabling precise diagnostic and therapeutic interventions.
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6" /> Global Potential
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Genomics can reduce global health inequalities by providing developing nations with efficient, cost-effective tools for preventing major diseases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
