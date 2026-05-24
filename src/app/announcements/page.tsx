"use client";

import { Bell, AlertCircle, Info, Megaphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

const ANNOUNCEMENTS = [
  { id: 1, title: "Call for Research Project Proposals (Fall 2026)", body: "The Genomics Club is now accepting project proposals from teams of 2-4 students. Selected proposals will receive mentorship from Dr. Saxena and access to university computational resources. Submit your abstracts by October 1st.", date: "Sep 15, 2026", priority: "High", type: "important" },
  { id: 2, title: "Guest Speaker Confirmation: Dr. Elena Rostova", body: "We are thrilled to announce that Dr. Elena Rostova from the National Institute of Genetics will be joining us virtually for the Precision Medicine Symposium next month.", date: "Sep 02, 2026", priority: "Normal", type: "info" },
  { id: 3, title: "Change of Venue for DNA Extraction Masterclass", body: "Please note that the upcoming DNA Extraction Masterclass has been moved from Lab 1 to Biotech Lab 3 to accommodate more participants. Timings remain the same.", date: "Aug 20, 2026", priority: "High", type: "alert" },
  { id: 4, title: "Welcome to the new academic year!", body: "Welcome back! Membership renewals are now open. First-year students are encouraged to attend our orientation session on August 15th to learn more about club activities.", date: "Aug 01, 2026", priority: "Normal", type: "info" },
];

export default function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="mb-12 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Megaphone className="w-8 h-8" /></div>
            <div>
              <h1 className="text-4xl font-bold mb-2"><span className="gradient-text">Announcements</span></h1>
              <p className="text-muted-foreground">Official notices and updates from the club coordinators.</p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerReveal className="space-y-6" staggerDelay={0.1}>
          {ANNOUNCEMENTS.map((a) => {
            const isHighPriority = a.type === "alert" || a.priority === "High";
            const Icon = isHighPriority ? AlertCircle : a.type === "info" ? Info : Bell;
            const borderColor = isHighPriority ? "border-destructive/30" : "border-primary/30";
            const bgColor = isHighPriority ? "bg-destructive/5" : "bg-primary/5";

            return (
              <StaggerItem key={a.id}>
                <div className={`p-6 md:p-8 rounded-2xl border ${borderColor} ${bgColor} transition-colors glow-border`}>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="shrink-0 mt-1"><Icon className={`w-6 h-6 ${isHighPriority ? "text-destructive" : "text-primary"}`} /></div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{a.title}</h3>
                        {a.priority === "High" && <Badge variant="destructive">Important</Badge>}
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{a.body}</p>
                      <div className="text-sm font-medium text-muted-foreground">Posted on {a.date}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </div>
  );
}
