"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20 bg-card/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Genomics Club</h1>
          <p className="text-xl text-muted-foreground">
            Take the first step towards an exciting journey in bioinformatics and molecular biology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Official Registration Steps */}
          <div>
            <Card className="bg-background border-primary/20 shadow-glow h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Official Registration</CardTitle>
                <CardDescription className="text-base">
                  Follow these 3 simple steps to officially become a member of the Genomics Club.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Login to MU Portal</h3>
                    <p className="text-muted-foreground mb-3">Access the Marwadi University student portal with your credentials.</p>
                    <Button variant="outline" onClick={() => window.open("https://login.marwadiuniversity.ac.in", "_blank")}>
                      Go to MU Portal <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Register for Genomics Club</h3>
                    <p className="text-muted-foreground">Find the Genomics Club in the activities/clubs section and register your interest officially.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Submit Membership Fee</h3>
                    <p className="text-muted-foreground">
                      Pay the ₹100 annual membership fee in person at Cabin MA557, Dept. of Bioinformatics (Dr. Aditya Saxena).
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-semibold mb-2">Membership Benefits:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> All workshops & seminars</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Hands-on activities & quizzes</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Industrial visits & site tours</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> Networking & research presentation slots</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interest Form */}
          <div>
            <Card className="bg-background border-border h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Express Interest</CardTitle>
                <CardDescription className="text-base">
                  Not ready to commit or have questions? Fill out this form and our team will get in touch.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground">We&apos;ve received your inquiry and will contact you via your university email shortly.</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">Submit Another</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">University Email</Label>
                      <Input id="email" type="email" required placeholder="john.doe@marwadiuniversity.ac.in" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="branch">Department / Branch</Label>
                        <Input id="branch" required placeholder="Bioinformatics" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study</Label>
                        <Input id="year" required placeholder="2nd Year" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reason">Why do you want to join?</Label>
                      <Textarea id="reason" required placeholder="Tell us what interests you about Genomics..." className="min-h-[100px]" />
                    </div>

                    <Button type="submit" className="w-full h-12 text-base">Submit Interest Form</Button>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Your information will only be used for club membership processing.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
