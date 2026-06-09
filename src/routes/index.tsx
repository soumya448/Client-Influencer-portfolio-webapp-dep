import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Videos } from "@/components/site/Videos";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arwa — Beauty & Social Media Influencer" },
      { name: "description", content: "Arwa is a beauty and lifestyle influencer sharing tutorials, reviews, and inspiration for everyday glam." },
      { property: "og:title", content: "Arwa — Beauty & Social Media Influencer" },
      { property: "og:description", content: "Tutorials, reviews, and inspiration for everyday glam." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Videos />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
