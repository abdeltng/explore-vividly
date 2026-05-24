import { motion } from "framer-motion";

const reviews = [
  { name: "Sophie L.", country: "🇫🇷 Paris, France", stars: 5,
    text: "Best 90 minutes of our Madrid trip! Our driver Pablo was hilarious and showed us spots we never would have found on our own. Worth every euro." },
  { name: "Mark T.", country: "🇬🇧 London, UK", stars: 5,
    text: "Booked the Golden Hour tour for our anniversary. The views from the rooftop stop were unreal. Smooth WhatsApp booking, on-time pickup, perfect night." },
  { name: "Elena R.", country: "🇪🇸 Valencia, Spain", stars: 5,
    text: "Even as a Spaniard I learned new things about my own capital. Fun, eco-friendly, and the kids LOVED waving at people. 100% recommended." },
  { name: "David K.", country: "🇺🇸 New York, USA", stars: 5,
    text: "We took the VIP route — completely customized. Stops, timing, photos, everything our way. Felt like having a Madrid friend with a tuk tuk." },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-[5%] bg-cream">
      <div className="text-center mb-12">
        <div className="text-green font-extrabold text-sm tracking-[3px] uppercase mb-3">💛 Real Stories</div>
        <h2 className="display text-navy tracking-[3px] leading-none" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
          WHAT OUR <em className="not-italic text-gold">RIDERS SAY</em>
        </h2>
      </div>
      <div className="grid gap-6 max-w-7xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-elegant)]"
          >
            <span className="absolute top-2 right-5 text-7xl text-gold/25 leading-none" style={{ fontFamily: "Pacifico, cursive" }}>"</span>
            <div className="text-gold mb-3">{"★".repeat(r.stars)}</div>
            <p className="text-foreground/65 italic leading-relaxed mb-5 text-[0.93rem]">{r.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-green border-2 border-gold flex items-center justify-center text-white font-extrabold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-extrabold text-navy text-sm">{r.name}</div>
                <div className="text-xs text-foreground/50">{r.country}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}