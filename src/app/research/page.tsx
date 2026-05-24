"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

const PROJECTS = [
  { id: 1, title: "AI-Driven Cancer Biomarker Discovery", domain: "Bioinformatics", status: "Ongoing", abstract: "This project utilizes deep learning models on large-scale genomic datasets to identify potential novel biomarkers for early-stage breast cancer detection.", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800", team: ["Rahul Verma", "Priya Sharma"] },
  { id: 2, title: "CRISPR-based Drought Resistance in Local Crops", domain: "Genomics", status: "Ongoing", abstract: "Targeted gene editing of drought-sensitive genes in local wheat varieties to improve yield in arid regions of Gujarat.", img: "https://images.unsplash.com/photo-1530836369250-ef71a3f5e926?auto=format&fit=crop&q=80&w=800", team: ["Aman Patel"] },
  { id: 3, title: "Metagenomic Analysis of Urban Soil", domain: "Molecular Biology", status: "Completed", abstract: "A comprehensive sequencing study of microbial diversity in soil samples from industrial zones in Rajkot.", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800", team: ["Neha Singh", "Karan Mehta"] },
  { id: 4, title: "Protein Structure Prediction App", domain: "Bioinformatics", status: "Completed", abstract: "A web tool to visualize and predict secondary protein structures from amino acid sequences using simplified heuristics.", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800", team: ["Rahul Verma"] },
];

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="mb-16 max-w-3xl">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Student Research</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Research <span className="gradient-text">Projects</span></h1>
            <p className="text-xl text-muted-foreground">Innovative projects pushing the boundaries of genomics and computational biology.</p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <Card className="bg-card/50 border-border overflow-hidden flex flex-col group glow-border card-hover h-full">
                <div className="relative h-64 img-zoom">
                  <Image src={project.img} alt={project.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                    <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md">{project.domain}</Badge>
                    <Badge variant={project.status === "Ongoing" ? "secondary" : "outline"}>{project.status}</Badge>
                  </div>
                </div>
                <CardHeader className="pt-6 pb-2"><h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3></CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-6 line-clamp-3">{project.abstract}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">Team:</span>
                    <div className="flex -space-x-2">
                      {project.team.map((name, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold border-2 border-background" title={name}>{name.charAt(0)}</div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={`/research/${project.id}`} className={buttonVariants({ variant: "ghost", className: "w-full justify-between" })}>View Full Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal>
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-primary/10 border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10"><Microscope className="w-32 h-32" /></div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Have a Research Idea?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">We provide mentorship, resources, and a collaborative environment for students who want to bring their biotech ideas to life.</p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "relative z-10 shadow-glow btn-press" })}>Propose a Project</Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
