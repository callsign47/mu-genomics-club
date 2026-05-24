"use client";

import Link from "next/link";
import { Dna, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-8"
        >
          <Dna className="w-12 h-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Sequence Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Looks like this genetic sequence doesn&apos;t match any known organisms in our database. The page you&apos;re looking for may have been moved or deleted.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" className={buttonVariants({ size: "lg", className: "gap-2" })}>
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/events" className={buttonVariants({ variant: "outline", size: "lg" })}>
            Browse Events
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
