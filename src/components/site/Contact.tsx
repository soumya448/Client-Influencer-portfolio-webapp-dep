import { motion } from "framer-motion";
import { Instagram, Mail, Music2, Twitch } from "lucide-react";
import { Section, fadeUp, stagger } from "./Section";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";


const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      console.log("Sending email with:", { name, email, message });
      console.log("Using EmailJS config:", { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY });
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <Section id="contact" className="bg-pink-soft px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p variants={fadeUp} className="font-script text-2xl text-primary">
          Let's Connect
        </motion.p>
        <motion.h2 variants={fadeUp} className="mt-3 text-4xl font-bold md:text-5xl">
          Work With Me
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-muted-foreground">
          For brand partnerships, press, or just to say hi — drop me a line and I'll get back to you
          within 48 hours.
        </motion.p>

        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-4 text-left md:grid-cols-2"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-full border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="rounded-full border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project…"
            rows={4}
            className="md:col-span-2 rounded-3xl border border-border bg-background px-6 py-4 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="md:col-span-2 mx-auto mt-2 rounded-full bg-primary px-10 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </motion.form>

        {status === "sent" && (
          <div className="mt-4 rounded-md bg-green-50 px-4 py-2 text-sm text-green-700">
            Message sent — thank you!
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 rounded-md bg-red-50 px-4 py-2 text-sm text-red-700">
            Failed to send — please try again.
          </div>
        )}

        <motion.div variants={fadeUp} className="mt-12 flex justify-center gap-4">
          {[Instagram, Music2, Twitch, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
