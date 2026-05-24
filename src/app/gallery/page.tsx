"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200", alt: "Students working in biotech lab", event: "DNA Extraction Workshop", year: "2026" },
  { id: 2, src: "https://images.unsplash.com/photo-1579154204601-01588f18a1a6?auto=format&fit=crop&q=80&w=1200", alt: "Microscope close-up", event: "Microbiology Basics", year: "2026" },
  { id: 3, src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200", alt: "Speaker presenting at seminar", event: "CRISPR Seminar", year: "2025" },
  { id: 4, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", alt: "Bioinformatics coding session", event: "Python for Biology", year: "2026" },
  { id: 5, src: "https://images.unsplash.com/photo-1530026405186-ed1f4956c474?auto=format&fit=crop&q=80&w=1200", alt: "Genetic sequencing data on screen", event: "Next-Gen Sequencing", year: "2025" },
  { id: 6, src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200", alt: "Group photo of club members", event: "Club Orientation", year: "2026" },
  { id: 7, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200", alt: "Medical research facility", event: "Industrial Visit", year: "2025" },
  { id: 8, src: "https://images.unsplash.com/photo-1614935151651-0bea6508ab6b?auto=format&fit=crop&q=80&w=1200", alt: "Student presenting poster", event: "Research Symposium", year: "2026" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.year === activeFilter);

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
          <p className="text-xl text-muted-foreground">
            Moments captured from our workshops, seminars, and club activities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge 
            variant={activeFilter === "All" ? "default" : "outline"} 
            className="text-sm py-1.5 px-4 cursor-pointer"
            onClick={() => setActiveFilter("All")}
          >
            All Photos
          </Badge>
          <Badge 
            variant={activeFilter === "2026" ? "default" : "outline"} 
            className="text-sm py-1.5 px-4 cursor-pointer"
            onClick={() => setActiveFilter("2026")}
          >
            2026
          </Badge>
          <Badge 
            variant={activeFilter === "2025" ? "default" : "outline"} 
            className="text-sm py-1.5 px-4 cursor-pointer"
            onClick={() => setActiveFilter("2025")}
          >
            2025
          </Badge>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-muted"
              onClick={() => setSelectedImage(image)}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <ZoomIn className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-medium">{image.event}</span>
                <span className="text-white/80 text-sm">{image.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video mx-4" onClick={e => e.stopPropagation()}>
            <Image 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              fill 
              className="object-contain" 
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
              <h3 className="text-white text-xl font-bold">{selectedImage.event}</h3>
              <p className="text-white/80">{selectedImage.alt} • {selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
