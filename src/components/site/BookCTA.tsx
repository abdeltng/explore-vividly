import { motion } from "framer-motion";
import { waLink, WhatsAppIcon } from "./whatsapp";

export function BookCTA() {
  return (
    <section id="book" className="relative bg-green py-24 px-[5%] text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        <h2 className="display text-white tracking-[4px] mb-4" style={{ fontSize: "clamp(2.5rem,7vw,5rem)" }}>
          READY TO ROLL?
        </h2>
        <p className="text-white/85 text-lg mb-10">
          Book in under a minute on WhatsApp. We reply fast, in your language, with real humans.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={waLink("Hello! I want to book a TukTuk tour in Madrid 🛺")}
            target="_blank" rel="noreferrer"
            className="bg-wa hover:bg-[#1db954] text-white font-extrabold text-base px-10 py-4 rounded-full inline-flex items-center gap-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1"
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          <a
            href="tel:+34611581388"
            className="bg-white text-green font-extrabold text-base px-10 py-4 rounded-full inline-flex items-center gap-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1"
          >
            📞 +34 611 581 388
          </a>
        </div>
      </motion.div>
    </section>
  );
}