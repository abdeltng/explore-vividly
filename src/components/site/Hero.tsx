import { motion } from "framer-motion";
import { waLink, WhatsAppIcon } from "./whatsapp";
const HERO_VIDEO_URL = "/__l5e/assets-v1/5fe2b576-3388-4dd2-aed0-68c92af2b3b4/hero-tuktuk.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay muted loop playsInline
        poster=""
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_URL}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/50 to-green/60" />
      <div className="absolute inset-0 grain opacity-60" />

      <div className="relative z-10 text-center px-5 pt-20 pb-10 max-w-5xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block bg-gold text-navy font-extrabold text-xs tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-6"
        >
          🏆 #1 Rated Tuk Tuk Experience in Madrid
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="display text-white text-shadow-hero leading-[0.9] tracking-[4px]"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
        >
          <span className="text-gold">MY</span><br />TUKTUK<br />MADRID
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-block bg-green/90 backdrop-blur-sm text-white italic font-semibold px-7 py-2.5 rounded mt-5 mb-8"
          style={{ fontSize: "clamp(1.05rem, 3vw, 1.5rem)" }}
        >
          ✨ Explore Madrid in a unique way!
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="flex justify-center gap-3 mb-8 text-3xl"
        >
          <span>🇬🇧</span><span>🇫🇷</span><span>🇪🇸</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#tours" className="bg-gold hover:bg-yellow-300 hover:-translate-y-1 transition-all text-navy font-extrabold text-base px-9 py-4 rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_rgba(245,197,24,0.5)]">
            🛺 Discover Our Tours
          </a>
          <a
            href={waLink("Hello! I want to book a TukTuk tour in Madrid 🛺")}
            target="_blank" rel="noreferrer"
            className="bg-wa hover:bg-[#1db954] hover:-translate-y-1 transition-all text-white font-extrabold text-base px-9 py-4 rounded-full inline-flex items-center gap-2 shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
          >
            <WhatsAppIcon /> Book via WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[2px] uppercase flex flex-col items-center gap-1.5"
      >
        Scroll<span>▼</span>
      </motion.div>
    </section>
  );
}