import { motion } from "framer-motion";

const features = [
  { icon: "⚡", title: "100% Electric", desc: "Eco-friendly, silent and clean. Zero emissions while you discover Madrid." },
  { icon: "🗣️", title: "Local Drivers", desc: "Born-and-raised guides who share Madrid's real stories, secrets and humour." },
  { icon: "🌍", title: "3 Languages", desc: "English, Français, Español — your guide adapts to you, not the other way around." },
  { icon: "📸", title: "Photo Stops", desc: "We know exactly where the best shots are — and we wait while you take them." },
  { icon: "🛡️", title: "Insured & Safe", desc: "Fully licensed, insured and inspected. Comfort and peace of mind included." },
  { icon: "💬", title: "Instant Booking", desc: "Reserve in 30 seconds via WhatsApp. No app, no account, no hassle." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative bg-navy py-24 px-[5%] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.08),transparent_60%)]" />
      <div className="relative">
        <div className="text-center mb-12">
          <div className="text-gold font-extrabold text-sm tracking-[3px] uppercase mb-3">⭐ Why Travelers Love Us</div>
          <h2 className="display text-white tracking-[3px] leading-none" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
            THE MADRID YOU <em className="not-italic text-gold">CAN'T FIND</em> ALONE
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Six reasons our guests keep telling friends to ride with us.
          </p>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.12)" }}
              className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="display text-gold text-xl tracking-[2px] mb-2">{f.title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}