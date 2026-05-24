"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FACULTY = [
  {
    name: "Dr. Aditya Saxena",
    role: "Associate Professor",
    dept: "Bioinformatics",
    email: "aditya.saxena@marwadieducation.edu.in",
    cabin: "MA557",
    ext: "1568",
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400",
  }
];

const CORE_TEAM = [
  { name: "Rahul Verma", role: "President", year: "3rd Year", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" },
  { name: "Priya Sharma", role: "Vice President", year: "3rd Year", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "Aman Patel", role: "Technical Lead", year: "2nd Year", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Neha Singh", role: "Events Head", year: "2nd Year", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">Our People</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-muted-foreground">
            The passionate individuals driving the Genomics Club forward.
          </p>
        </div>

        {/* Faculty Coordinators */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" /> Faculty Coordinators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((member, i) => (
              <Card key={i} className="bg-card/50 border-border overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                      <Image src={member.img} alt={member.name} fill className="object-cover" />
                    </div>
                    <div className="p-6 sm:w-2/3">
                      <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-sm font-medium text-primary mb-1">{member.role}</p>
                      <p className="text-xs text-muted-foreground mb-4">Dept. of {member.dept}</p>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 shrink-0" />
                          <span className="truncate" title={member.email}>{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 shrink-0" />
                          <span>Cabin {member.cabin}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 shrink-0" />
                          <span>Ext. {member.ext}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-secondary rounded-full" /> Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_TEAM.map((member, i) => (
              <Card key={i} className="bg-background border-border overflow-hidden text-center hover:border-primary/50 transition-colors">
                <CardHeader className="pt-8 pb-4">
                  <div className="mx-auto w-32 h-32 relative rounded-full overflow-hidden mb-4 border-4 border-background shadow-md">
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <p className="font-medium text-primary mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.year} • Bioinformatics</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
