"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const POSTS: Record<string, { title: string; category: string; date: string; author: string; readTime: string; content: string }> = {
  "1": { title: "Understanding AlphaFold and its Impact on Biology", category: "Bioinformatics", date: "May 12, 2026", author: "Rahul Verma", readTime: "5 min read", content: "In 2020, DeepMind shocked the scientific world when AlphaFold2 achieved near-experimental accuracy in predicting protein 3D structures from amino acid sequences alone. This was a problem that had stumped biologists for over 50 years.\n\nProteins are the molecular machines of life. Their function depends on their 3D shape, but determining that shape experimentally (through X-ray crystallography or cryo-EM) is expensive and slow. AlphaFold changed everything.\n\nThe system uses a deep learning architecture called an attention-based neural network, trained on the Protein Data Bank (PDB), which contains over 200,000 experimentally determined structures. In 2022, DeepMind released predicted structures for nearly every known protein \u2014 over 200 million structures.\n\nWhat does this mean for drug discovery? Traditionally, understanding a drug target\u2019s structure could take years. Now, researchers can access predicted structures instantly, accelerating the identification of binding sites and the design of therapeutic molecules.\n\nAt the Genomics Club, we believe tools like AlphaFold represent the future of biology \u2014 where computation and experimentation work hand-in-hand. We encourage all members to explore the AlphaFold database and try their hand at structural bioinformatics." },
  "2": { title: "CRISPR in 2026: Beyond Gene Editing", category: "Genomics 101", date: "Apr 28, 2026", author: "Aman Patel", readTime: "4 min read", content: "When most people hear CRISPR, they think of gene editing \u2014 cutting DNA at specific locations to disable genes or insert new ones. But in 2026, CRISPR has evolved far beyond simple cuts.\n\nCRISPR diagnostics (like SHERLOCK and DETECTR) can now detect specific RNA or DNA sequences with extraordinary sensitivity, making them ideal for rapid pathogen detection. During recent disease outbreaks, CRISPR-based tests have provided results in under an hour.\n\nBase editing, developed by David Liu\u2019s lab, allows scientists to change individual DNA letters without making double-strand breaks. This is safer and more precise than traditional CRISPR cutting.\n\nEpigenome editing is perhaps the most exciting frontier. By using a deactivated Cas9 protein fused with epigenetic modifiers, researchers can turn genes on or off without changing the DNA sequence itself. This has enormous implications for treating diseases caused by gene misregulation.\n\nAs students of genomics, understanding these tools is not optional \u2014 it is essential. The Genomics Club regularly hosts workshops on these cutting-edge technologies." },
  "3": { title: "Recap: Our First DNA Extraction Workshop", category: "Club News", date: "Apr 15, 2026", author: "Neha Singh", readTime: "3 min read", content: "Last week, the Genomics Club held its very first hands-on DNA extraction workshop in Biotech Lab 3, and it was a resounding success!\n\nOver 30 students participated in extracting DNA from strawberries using just dish soap, salt, and rubbing alcohol. The look on everyone\u2019s faces when they saw the white, stringy DNA precipitate out of the solution was priceless.\n\nIn the second half of the session, Dr. Saxena demonstrated a professional DNA extraction using a commercial kit on bacterial samples. Students got to see the difference in purity and yield between the household and professional methods.\n\nKey takeaways from the workshop included understanding cell lysis mechanisms, the role of salt in neutralizing DNA\u2019s charge, and why cold ethanol causes DNA to precipitate.\n\nWe are planning more wet-lab sessions in the coming months. Stay tuned for our next event announcement!" },
  "4": { title: "Why You Should Learn Python for Biology", category: "Tutorials", date: "Mar 30, 2026", author: "Rahul Verma", readTime: "6 min read", content: "If you are a biology student in 2026 and you have not started learning to code, you are falling behind. Python has become the most important tool in modern biology, and here is why.\n\nBioinformatics runs on Python. Tools like Biopython, scikit-learn, and pandas are used daily by researchers to analyze genomic data, build prediction models, and visualize results. The Human Genome Project generated terabytes of data \u2014 no one analyzes that by hand.\n\nPython is beginner-friendly. Unlike C++ or Java, Python reads almost like English. You can write a script to parse a FASTA file in 10 lines of code.\n\nThe job market demands it. Whether you want to work in pharma, biotech, or academia, Python proficiency is listed in almost every bioinformatics job posting.\n\nAt the Genomics Club, we run regular Python for Biology bootcamps. We start from zero \u2014 no prior coding experience required. By the end, students can parse sequence files, run BLAST searches programmatically, and create publication-quality plots.\n\nStart today. Install Python, open a terminal, and type: print('Hello, Genomics!')" },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = POSTS[params.id];
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Post Not Found</h1><Link href="/blog" className={buttonVariants()}>Back to Blog</Link></div></div>;
  }

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Blog</Link>
          <Badge className="bg-primary/20 text-primary border-none mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-12">
            <span>{post.author}</span><span>&bull;</span><span>{post.date}</span><span>&bull;</span><span>{post.readTime}</span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="prose prose-lg prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
