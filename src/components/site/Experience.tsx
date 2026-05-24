import { motion } from "framer-motion";
import expImg from "@/assets/experience.jpg";
import { waLink, WhatsAppIcon } from "./whatsapp";

const checks = [
  "Pickup from your hotel or any address",
  "Multilingual local guide (EN / FR / ES)",
  "Photo stops at the iconic Madrid landmarks",
  "Free bottled water on warm days",
  "Flexible — pause whenever you want",
];

export function Experience() {
  return (
    <section className="py-24 px-[5%] bg-gradient-to-br from-[#f8f4ea] to-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img src={expImg} alt="Madrid tuk tuk experience" loading="lazy"
            className="w-full rounded-2xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -top-5 -right-5 bg-white rounded-2xl px-5 py-3.5 shadow-[var(--shadow-elegant)] flex items-center gap-3"
          >
            <div className="display text-3xl text-navy leading-none">5000+</div>
            <div className="text-[0.7rem] font-bold text-foreground/55 uppercase tracking-wide">Tours<br/>Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-3.5 shadow-[var(--shadow-elegant)] flex items-center gap-3"
          >
            <div className="display text-3xl text-navy leading-none">4.9★</div>
            <div className="text-[0.7rem] font-bold text-foreground/55 uppercase tracking-wide">Google<br/>Rating</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-green font-extrabold text-sm tracking-[3px] uppercase mb-3">The Experience</div>
          <h2 className="display text-navy tracking-[3px] leading-tight mb-5"
            style={{ fontSize: "clamp(2rem,5vw,3.5rem)" }}>
            FEEL MADRID — DON'T JUST <em className="not-italic text-green">SEE IT</em>
          </h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Open-air, electric, and small enough to slip into the corners no bus will ever reach. Our drivers grew up
            here, and they tell Madrid the way only locals can — with humour, history, and a few well-kept secrets.
          </p>
          <ul className="my-6 space-y-2.5">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-3 font-semibold text-navy">
                <span className="bg-green text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                {c}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hello! I want to know more about your Madrid TukTuk tours 🛺")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white font-extrabold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-4 h-4" /> Chat with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}