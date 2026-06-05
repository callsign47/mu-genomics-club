"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

const BLOG_POSTS = [
  { id: 1, title: "Understanding AlphaFold and its Impact on Biology", category: "Bioinformatics", excerpt: "How deep learning cracked a 50-year-old grand challenge in biology and what it means for drug discovery.", date: "May 12, 2026", readTime: "5 min", author: "Rahul Verma", img: "https://images.unsplash.com/photo-1618045314782-2d12521bc1e3?auto=format&fit=crop&q=80&w=800", featured: true },
  { id: 2, title: "CRISPR in 2026: Beyond Gene Editing", category: "Genomics 101", excerpt: "Latest applications of CRISPR technology, from diagnostic tools to targeted epigenetic modifications.", date: "Apr 28, 2026", readTime: "4 min", author: "Aman Patel", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 3, title: "Recap: Our First DNA Extraction Workshop", category: "Club News", excerpt: "Highlights from our hands-on session where students extracted DNA using household materials.", date: "Apr 15, 2026", readTime: "3 min", author: "Neha Singh", img: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=800", featured: false },
  { id: 4, title: "Why You Should Learn Python for Biology", category: "Tutorials", excerpt: "Python has become the lingua franca of data science. Here is why every biology student needs to code.", date: "Mar 30, 2026", readTime: "6 min", author: "Rahul Verma", img: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=800", featured: false },
];

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find(p => p.featured);
  const otherPosts = BLOG_POSTS.filter(p => !p.featured);

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog &amp; <span className="gradient-text">Articles</span></h1>
            <p className="text-xl text-muted-foreground">Insights, tutorials, and news from the forefront of genomics.</p>
          </div>
        </ScrollReveal>

        {featuredPost && (
          <ScrollReveal>
            <Link href={`/blog/${featuredPost.id}`} className="block mb-16 group">
              <Card className="glass-card overflow-hidden border-none">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full min-h-[300px] img-zoom">
                    <Image src={featuredPost.img} alt={featuredPost.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6 flex items-center gap-4">
                      <Badge className="bg-primary/20 text-primary border-none">{featuredPost.category}</Badge>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="w-4 h-4" />{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">{featuredPost.author.charAt(0)}</div>
                      <div><p className="text-sm font-medium">{featuredPost.author}</p><p className="text-xs text-muted-foreground">{featuredPost.date}</p></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </ScrollReveal>
        )}

        <ScrollReveal><h3 className="text-2xl font-bold mb-8">Latest Articles</h3></ScrollReveal>
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {otherPosts.map((post) => (
            <StaggerItem key={post.id}>
              <Link href={`/blog/${post.id}`} className="group">
                <Card className="glass-card h-full overflow-hidden flex flex-col border-none">
                  <div className="relative h-48 img-zoom">
                    <Image src={post.img} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4"><Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground">{post.category}</Badge></div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs">{post.author.charAt(0)}</div>
                      <div><p className="text-sm font-medium">{post.author}</p><p className="text-xs text-muted-foreground">{post.date}</p></div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}
