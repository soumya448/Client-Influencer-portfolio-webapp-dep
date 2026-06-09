import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, fadeUp, stagger } from "./Section";

const posts = [
  {
    date: "Mar 12, 2026",
    category: "Skincare",
    title: "The 5-Step Routine That Changed My Skin",
    excerpt:
      "Simple, science-backed steps you can do in under ten minutes every morning.",
  },
  {
    date: "Feb 28, 2026",
    category: "Makeup",
    title: "Spring Color Trends You'll Actually Wear",
    excerpt:
      "From soft corals to dewy peach, here's what's defining the season.",
  },
  {
    date: "Feb 14, 2026",
    category: "Lifestyle",
    title: "Behind The Scenes: A Day In My Studio",
    excerpt:
      "Filming, editing, and the little rituals that keep me inspired.",
  },
];

export function Blog() {
  return (
    <Section id="blog" className="bg-background px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-2xl text-primary">Journal</p>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">From The Blog</h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{p.date}</span>
                <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">
                  {p.category}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read More
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}