import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Section, fadeUp, stagger } from "./Section";

// Placeholder thumbnails using pretty gradient backgrounds.
const videos = [
  { title: "Soft Glam Tutorial", duration: "12:34", tag: "Makeup" },
  { title: "My Skincare Routine", duration: "08:20", tag: "Skincare" },
  { title: "Date Night Look", duration: "15:02", tag: "Tutorial" },
  { title: "Drugstore Haul", duration: "10:45", tag: "Reviews" },
  { title: "GRWM: Brunch Edition", duration: "09:18", tag: "Vlog" },
  { title: "Best Lip Products", duration: "07:55", tag: "Reviews" },
];

const gradients = [
  "from-pink-soft to-accent",
  "from-accent to-primary/60",
  "from-blush to-pink-soft",
  "from-secondary to-accent",
  "from-pink-soft to-blush",
  "from-accent to-secondary",
];

export function Videos() {
  return (
    <Section id="videos" className="bg-secondary/40 px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-script text-2xl text-primary">My Videos</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Latest Content</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Tutorials, reviews, and behind-the-scenes — all in one place.
          </p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((v, i) => (
            <motion.article
              key={v.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-background shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                className={`relative aspect-video bg-gradient-to-br ${gradients[i % gradients.length]}`}
              >
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-3 right-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-medium text-background">
                  {v.duration}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {v.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{v.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}