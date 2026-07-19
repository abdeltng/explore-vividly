import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyWA } from "@/components/site/StickyWA";
import { waLink, WhatsAppIcon } from "@/components/site/whatsapp";
import heroImg from "@/assets/tour-2hours.jpg";

export const Route = createFileRoute("/tours/2-hours")({
  head: () => ({
    meta: [
      { title: "Madrid Grand Tuk-Tuk Tour – 2 Hour Complete City Experience" },
      { name: "description", content: "120-minute electric tuk-tuk tour through Madrid: royal sites, historic districts, museums and elegant boulevards. €55 per person." },
      { property: "og:title", content: "Madrid Grand Tuk-Tuk Tour – 2 Hours" },
      { property: "og:description", content: "Experience Madrid like never before — royal, cultural and modern landmarks in one comfortable electric ride." },
    ],
  }),
  component: TwoHoursPage,
});

const highlights = [
  "Full discovery of Madrid's historic and modern districts",
  "Extended route covering royal, cultural and artistic landmarks",
  "Multiple stops for photos and explanations",
  "Smooth electric tuk-tuk experience with local guide narration",
  "Perfect balance between sightseeing and storytelling",
];

const sections: { title: string; items: string[] }[] = [
  {
    title: "🏰 Historic Center (Madrid de los Austrias)",
    items: [
      "Royal Palace of Madrid (stop included)",
      "Plaza de la Villa",
      "Almudena Cathedral (stop included)",
      "Crypt of Santa María la Real de la Almudena",
      "Arab Wall of Madrid",
      "Mercado de San Miguel",
      "Plaza Mayor",
      "Sobrino de Botín",
      "La Latina",
      "Teatro La Latina",
      "Barrio de las Letras",
      "Casa Museo Lope de Vega",
    ],
  },
  {
    title: "🎭 Cultural & Literary Madrid",
    items: [
      "Westin Palace Hotel",
      "Congress of Deputies",
      "Neptune Fountain",
      "Prado Museum (stop included)",
      "Casón del Buen Retiro",
      "Barrio de los Jerónimos (stop included)",
    ],
  },
  {
    title: "🌳 Elegant Boulevards & Modern Madrid",
    items: [
      "Puerta de Alcalá",
      "Retiro Park",
      "Paseo de Recoletos",
      "Plaza de Colón",
      "Paseo de la Castellana",
      "Cibeles Fountain",
      "Bank of Spain",
      "Palacio de Cibeles",
      "Casa de América",
      "Plaza de Santa Ana",
    ],
  },
];

const included = [
  "Professional local guide",
  "Extended 2-hour electric tuk-tuk tour",
  "Multiple photo stops at major landmarks",
  "Live storytelling and historical insights",
  "Comfortable eco-friendly transport",
];

const info = [
  "Each tuk-tuk accommodates up to 4 people",
  "Groups of 8 → 2 tuk-tuks · 12 → 3 tuk-tuks",
  "Suitable for children over 3 years old",
  "Pets allowed 🐾",
  "Not accessible for wheelchairs",
  "Stroller friendly",
];

const cancellation = [
  "Free cancellation up to 24 hours before the tour",
  "Full refund or rescheduling available",
  "Refund in case of bad weather or operator cancellation",
  "No-show = full charge applies",
];

const waMsg = "Hello! I want to book the *Madrid Grand 2 Hour Tuk-Tuk Tour* €55/person 🌅";

// 💳 Replace with your card payment link
const CARD_PAYMENT_URL = "#card-payment-2h";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="display text-navy text-3xl md:text-4xl tracking-[2px] mb-5">{title}</h2>
      {children}
    </motion.section>
  );
}

function TwoHoursPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <img src={heroImg} alt="Madrid Grand 2-Hour Tuk-Tuk Tour" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
          <div className="relative z-10 h-full flex flex-col justify-end px-[5%] pb-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link to="/" className="inline-block text-cream/80 hover:text-gold text-sm font-bold mb-4">← Back to all tours</Link>
              <span className="inline-block bg-gold text-navy font-extrabold text-xs tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">🌅 Best Value</span>
              <h1 className="display text-cream tracking-[2px] leading-none" style={{ fontSize: "clamp(2.2rem,6vw,5rem)" }}>
                MADRID GRAND <em className="not-italic text-gold">2 HOURS</em> TUK-TUK TOUR
              </h1>
              <p className="mt-4 text-cream/85 text-lg max-w-2xl">
                A complete city experience — royal, cultural and modern Madrid in one comfortable electric ride.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-cream font-bold text-sm">
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">⏱ 120 minutes</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">👥 Up to 4 / tuk-tuk</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full">€55 / person</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="px-[5%] py-16 max-w-5xl mx-auto">
          <Section title="About this experience">
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Experience Madrid like never before with this extended 2-hour tuk-tuk journey covering the city's most iconic landmarks, historic districts, royal sites and vibrant neighborhoods.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              This tour is designed for travelers who want a deeper, richer experience of Madrid — combining history, culture, architecture and local life in one comfortable electric ride with a professional local guide.
            </p>
          </Section>

          <Section title="⭐ Highlights">
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-foreground/80"><span className="text-green font-extrabold">✓</span>{h}</li>
              ))}
            </ul>
          </Section>

          <Section title="📍 Tour Route (Extended Experience)">
            <p className="text-foreground/70 mb-6 italic">During this 2-hour tour, you will explore a wider selection of Madrid's most important sites:</p>
            {sections.map((s) => (
              <div key={s.title} className="mb-7">
                <h3 className="text-navy font-extrabold text-lg mb-3">{s.title}</h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside marker:text-gold">
                  {s.items.map((it) => (
                    <li key={it} className="text-foreground/85 text-[15px]">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="✅ What's Included">
            <ul className="grid sm:grid-cols-2 gap-3">
              {included.map((i) => (
                <li key={i} className="flex gap-2 text-foreground/80"><span className="text-green font-extrabold">✓</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="ℹ️ Additional Information">
            <ul className="space-y-2">
              {info.map((i) => (<li key={i} className="flex gap-2 text-foreground/80"><span className="text-gold">•</span>{i}</li>))}
            </ul>
          </Section>

          <Section title="📍 Meeting Point">
            <div className="bg-cream border-l-4 border-gold p-5 rounded-lg">
              <p className="text-navy font-extrabold text-lg">Calle de Vergara 1, Madrid</p>
            </div>
          </Section>

          <Section title="❌ Cancellation Policy">
            <ul className="space-y-2">
              {cancellation.map((c) => (<li key={c} className="flex gap-2 text-foreground/80"><span className="text-red">•</span>{c}</li>))}
            </ul>
          </Section>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-10 bg-navy text-cream rounded-2xl p-8 md:p-10 text-center shadow-[var(--shadow-elegant)]">
            <h3 className="display text-gold text-3xl md:text-4xl tracking-[2px] mb-3">READY TO EXPLORE?</h3>
            <p className="text-cream/80 mb-6">Book in 30 seconds — instant confirmation.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={waLink(waMsg)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-wa hover:bg-[#1db954] text-white font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
                <WhatsAppIcon className="w-5 h-5" /> Book on WhatsApp — €55
              </a>
              <a href={CARD_PAYMENT_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#d4a84c] text-navy font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
                💳 Pay by Card — €55
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <StickyWA />
    </>
  );
}