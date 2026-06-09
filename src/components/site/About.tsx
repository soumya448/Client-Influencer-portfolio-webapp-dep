import { motion } from "framer-motion";
import { Section, fadeUp, stagger } from "./Section";

const stats = [
  { value: "5.5K", label: "Followers" },
  { value: "180+", label: "Brand Collabs" },
  { value: "500+", label: "Tutorials" },
  { value: "5 yrs", label: "Creating" },
];

export function About() {
  return (
    <Section id="about" className="bg-background px-6 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-script text-2xl text-primary">About Me</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Where Content, Creativity,<br />  and Technology Meet
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-3xl bg-secondary px-6 py-8 text-center transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-4xl font-bold text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground"
        >
I’m a creative digital media professional with experience in content strategy, 
scriptwriting, social media growth, and on-camera presentation. Passionate about 
storytelling and emerging technology, I create engaging, audience-focused content
 that informs, inspires, and drives meaningful connections.



        </motion.p>
      </div>
    </Section>
  );
}