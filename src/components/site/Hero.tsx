import { motion } from "framer-motion";
import { Instagram, Music2, Twitch } from "lucide-react";
import heroImg from "@/assets/debapriya-hero.png";

// Decorative "starburst" SVG used as a soft background flourish.
function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="48"
          y="10"
          width="4"
          height="32"
          rx="2"
          fill="currentColor"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
    </svg>
  );
}

// Wavy underline SVG accent.
function WavyLine() {
  return (
    <svg viewBox="0 0 300 24" className="h-6 w-64" fill="none" aria-hidden>
      <path
        d="M2 12 Q 20 0, 38 12 T 74 12 T 110 12 T 146 12 T 182 12 T 218 12 T 254 12 T 290 12"
        stroke="oklch(0.78 0.13 15)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Music2, label: "TikTok" },
  { Icon: Twitch, label: "Twitch" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative grid min-h-screen grid-cols-1 overflow-hidden pt-24 md:grid-cols-2 md:pt-0"
    >
      {/* LEFT — copy + CTAs */}
      <div className="relative flex items-center bg-background px-6 py-16 md:px-16 lg:px-24">
        <div className="relative z-10 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-script text-3xl text-primary md:text-4xl"
          >
            Hey I'm Debapriya
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
          >
            Anchor ,<br />
            Scriptwriter & Content <br />
            Strategist
            <br />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 border-l-2 border-primary/60 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Anchor, Scriptwriter, and Content Creator specializing in tech and innovation content,
            audience-focused storytelling, and social media growth strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5">
              Follow Me
            </button>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Wavy divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 origin-left"
          >
            <WavyLine />
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 flex items-center gap-5"
          >
            <span className="text-xs font-medium tracking-wide text-foreground/70">
              Check Out My
            </span>
            <span className="h-px w-10 bg-foreground/30" />
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Decorative starburst behind heading */}
        <Starburst className="absolute right-8 top-24 h-32 w-32 text-accent/60 md:h-40 md:w-40" />
      </div>

      {/* RIGHT — portrait panel */}
      <div className="relative flex items-center justify-center bg-pink-soft px-6 py-16 md:px-12">
        {/* Thin frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-md"
        >
          <div className="absolute inset-0 border border-primary/50" />

          {/* Pink blob behind portrait */}
          <div className="relative mx-6 my-8 aspect-[4/5]">
            <div className="absolute inset-x-4 inset-y-2 rounded-[50%] bg-hot-pink" />
            <img
              src={heroImg}
              alt="Arwa applying makeup"
              width={896}
              height={1024}
              className="relative z-10 h-full w-full object-contain object-bottom"
            />

            {/* Floating social badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute left-0 top-10 z-20 grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-lg"
            >
              <Instagram className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute right-0 top-1/3 z-20 grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-lg"
            >
              <Twitch className="h-5 w-5" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-2 left-6 z-20 grid h-12 w-12 place-items-center rounded-full border-2 border-primary bg-background text-foreground shadow-lg"
            >
              <Music2 className="h-5 w-5" />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative starburst */}
        <Starburst className="absolute -bottom-4 right-10 h-32 w-32 text-primary/30" />
      </div>
    </section>
  );
}
