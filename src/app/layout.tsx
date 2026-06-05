import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { BackToTop } from "@/components/effects/BackToTop";
import { MouseGlow } from "@/components/effects/MouseGlow";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Genomics Club | Marwadi University",
    template: "%s | Genomics Club MU",
  },
  description: "Exploring the frontiers of genomics, bioinformatics, and molecular biology at Marwadi University, Rajkot. Join workshops, seminars, and hands-on lab sessions.",
  keywords: ["genomics", "bioinformatics", "marwadi university", "dna", "crispr", "molecular biology", "student club"],
  openGraph: {
    title: "Genomics Club | Marwadi University",
    description: "A community of curious minds exploring the frontiers of genomics, bioinformatics, and molecular biology.",
    url: "https://mu-genomics-club.vercel.app",
    siteName: "Genomics Club",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genomics Club | Marwadi University",
    description: "Exploring genomics, bioinformatics, and molecular biology at Marwadi University.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-[family-name:var(--font-body)] min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <MouseGlow />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
