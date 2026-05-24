"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

const FACULTY = [
  {
    name: "Dr. Aditya Saxena",
    role: "Associate Professor & Club Coordinator",
    dept: "Bioinformatics",
    email: "aditya.saxena@marwadieducation.edu.in",
    cabin: "MA557",
    ext: "1568",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=aditya&backgroundColor=00E5A0",
  }
];

const CORE_TEAM = [
  { name: "Rahul Verma", role: "President", year: "3rd Year", seed: "rahul-president" },
  { name: "Priya Sharma", role: "Vice President", year: "3rd Year", seed: "priya-vp" },
  { name: "Aman Patel", role: "Technical Lead", year: "2nd Year", seed: "aman-tech" },
  { name: "Neha Singh", role: "Events Head", year: "2nd Year", seed: "neha-events" },
  { name: "Karan Mehta", role: "Content Lead", year: "2nd Year", seed: "karan-content" },
  { name: "Shreya Joshi", role: "Social Media", year: "1st Year", seed: "shreya-social" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">Our People</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the <span className="gradient-text">Team</span></h1>
            <p className="text-xl text-muted-foreground">
              The passionate individuals driving the Genomics Club forward.
            </p>
          </div>
        </ScrollReveal>

        {/* Faculty Coordinators */}
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" /> Faculty Coordinators
            </h2>
          </ScrollReveal>
          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((member, i) => (
              <StaggerItem key={i}>
                <Card className="bg-card/50 border-border overflow-hidden group glow-border card-hover">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto bg-primary/5 flex items-center justify-center p-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full" />
                      </div>
                      <div className="p-6 sm:w-2/3">
                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
                        <p className="text-xs text-muted-foreground mb-4">Dept. of {member.dept}</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /><span className="truncate" title={member.email}>{member.email}</span></div>
                          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /><span>Cabin {member.cabin}</span></div>
                          <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /><span>Ext. {member.ext}</span></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        {/* Core Team */}
        <div>
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" /> Core Team
            </h2>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {CORE_TEAM.map((member, i) => (
              <StaggerItem key={i}>
                <Card className="bg-background border-border overflow-hidden text-center glow-border card-hover">
                  <CardHeader className="pt-8 pb-4">
                    <div className="mx-auto w-28 h-28 relative rounded-full overflow-hidden mb-4 border-4 border-background shadow-md bg-muted flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://api.dicebear.com/9.x/notionists/svg?seed=${member.seed}&backgroundColor=transparent`}
                        alt={member.name}
                        className="w-full h-full"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <p className="font-medium text-primary mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.year} &bull; Bioinformatics</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </div>
  );
}
