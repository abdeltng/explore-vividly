import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyWA } from "@/components/site/StickyWA";
import { waLink, WhatsAppIcon } from "@/components/site/whatsapp";
import heroImg from "@/assets/tour-classic.jpg";

export const Route = createFileRoute("/tours/1-hour")({
  head: () => ({
    meta: [
      { title: "Madrid Express Tuk-Tuk Tour – 1 Hour City Highlights" },
      { name: "description", content: "60-minute electric tuk-tuk tour through Madrid's historic center. Royal Palace, Plaza Mayor, Retiro, Cibeles & more. €35 per person." },
      { property: "og:title", content: "Madrid Express Tuk-Tuk Tour – 1 Hour City Highlights" },
      { property: "og:description", content: "Discover Madrid's iconic landmarks in 60 minutes. Eco-friendly electric tuk-tuk with a local guide." },
    ],
  }),
  component: OneHourTourPage,
});

const highlights = [
  "Explore the historic center known as Madrid de los Austrias",
  "See the city's most famous landmarks in just one hour",
  "Enjoy a smooth and eco-friendly electric tuk-tuk ride",
  "Stop at key locations for photos and short explanations",
  "Ideal introduction to Madrid for first-time visitors",
];

const route = [
  "Royal Palace of Madrid (5-minute stop)",
  "Plaza de la Villa",
  "Almudena Cathedral (5-minute stop)",
  "Crypt of Santa María la Real de la Almudena",
  "Arab Wall of Madrid",
  "Plaza de Ramales",
  "Mercado de San Miguel",
  "Plaza Mayor",
  "Calle de Cuchilleros",
  "Sobrino de Botín",
  "Cava Baja",
  "La Latina",
  "Teatro La Latina",
  "Barrio de las Letras",
  "Casa de Cervantes",
  "Casa Museo Lope de Vega",
  "Westin Palace Hotel",
  "Congress of Deputies",
  "Neptune Fountain",
  "Barrio de los Jerónimos (5-minute stop)",
  "Prado Museum (5-minute stop)",
  "Casón del Buen Retiro",
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
];

const included = [
  "Professional local guide",
  "Electric tuk-tuk ride",
  "Photo stops at key landmarks",
  "Live commentary and historical insights",
];

const info = [
  "Each tuk-tuk accommodates up to 4 passengers",
  "Groups of 8 → 2 tuk-tuks · 12 → 3 tuk-tuks",
  "Not suitable for wheelchair users",
  "Stroller accessible",
  "Suitable for children over 3 years old",
  "Pets are welcome",
];

const cancellation = [
  "Free cancellation up to 24 hours in advance",
  "Full refund or credit available",
  "Full refund in case of bad weather or operator cancellation",
  "No-shows will be charged the full amount",
];

const waMsg = "Hello! I want to book the *Madrid Express 1 Hour Tuk-Tuk Tour* €35/person 🛺";

// 💳 Replace with your card payment link
const CARD_PAYMENT_URL = "#card-payment-1h";

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

function OneHourTourPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <img src={heroImg} alt="Madrid Express Tuk-Tuk Tour" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/90" />
          <div className="relative z-10 h-full flex flex-col justify-end px-[5%] pb-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link to="/" className="inline-block text-cream/80 hover:text-gold text-sm font-bold mb-4">← Back to all tours</Link>
              <span className="inline-block bg-red text-white font-extrabold text-xs tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">⭐ Most Popular</span>
              <h1 className="display text-cream tracking-[2px] leading-none" style={{ fontSize: "clamp(2.2rem,6vw,5rem)" }}>
                MADRID EXPRESS <em className="not-italic text-gold">1 HOUR</em> TUK-TUK TOUR
              </h1>
              <p className="mt-4 text-cream/85 text-lg max-w-2xl">
                City highlights in 60 minutes — comfortable, eco-friendly and unforgettable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-cream font-bold text-sm">
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">⏱ 60 minutes</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">👥 Up to 4 / tuk-tuk</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full">€35 / person</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="px-[5%] py-16 max-w-5xl mx-auto">
          <Section title="About this experience">
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              Discover the true essence of Madrid in a fast, comfortable, and unforgettable experience.
              This 1-hour tuk-tuk tour is designed to give you a complete overview of the city's most iconic
              landmarks — perfect for first-time visitors or those short on time.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Sit back and relax as your local guide takes you through the historic heart of Madrid, sharing
              fascinating stories, hidden details, and cultural insights along the way.
            </p>
          </Section>

          <Section title="⭐ Highlights">
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (
                <li key={h} className="flex gap-2 text-foreground/80"><span className="text-green font-extrabold">✓</span>{h}</li>
              ))}
            </ul>
          </Section>

          <Section title="📍 Tour Route">
            <p className="text-foreground/70 mb-5 italic">During the tour you will pass through and discover:</p>
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside marker:text-gold marker:font-extrabold">
              {route.map((r) => (
                <li key={r} className="text-foreground/85 text-[15px] leading-relaxed">{r}</li>
              ))}
            </ol>
            <p className="text-foreground/60 text-sm mt-5 italic">The route may vary depending on traffic conditions or city events.</p>
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
              {info.map((i) => (
                <li key={i} className="flex gap-2 text-foreground/80"><span className="text-gold">•</span>{i}</li>
              ))}
            </ul>
          </Section>

          <Section title="📍 Meeting Point">
            <div className="bg-cream border-l-4 border-gold p-5 rounded-lg">
              <p className="text-navy font-extrabold text-lg">Calle de Vergara 1, Madrid</p>
            </div>
          </Section>

          <Section title="❌ Cancellation Policy">
            <ul className="space-y-2">
              {cancellation.map((c) => (
                <li key={c} className="flex gap-2 text-foreground/80"><span className="text-red">•</span>{c}</li>
              ))}
            </ul>
          </Section>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 bg-navy text-cream rounded-2xl p-8 md:p-10 text-center shadow-[var(--shadow-elegant)]"
          >
            <h3 className="display text-gold text-3xl md:text-4xl tracking-[2px] mb-3">READY TO RIDE?</h3>
            <p className="text-cream/80 mb-6">Book in 30 seconds on WhatsApp — instant confirmation.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={waLink(waMsg)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-wa hover:bg-[#1db954] text-white font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" /> Book on WhatsApp — €35
              </a>
              <a
                href={CARD_PAYMENT_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#d4a84c] text-navy font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                💳 Pay by Card — €35
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