import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { StickyWA } from "@/components/site/StickyWA";
import { waLink, WhatsAppIcon } from "@/components/site/whatsapp";
import heroImg from "@/assets/tour-vip.jpg";

export const Route = createFileRoute("/tours/vip")({
  head: () => ({
    meta: [
      { title: "Private VIP Tuk-Tuk Tour Madrid – Fully Personalised Experience" },
      { name: "description", content: "Exclusive private tuk-tuk tour of Madrid. Choose your own route, pace and stops with a dedicated local guide. From €120 per person." },
      { property: "og:title", content: "Private VIP Tuk-Tuk Tour Madrid" },
      { property: "og:description", content: "Your Madrid, your rules — a fully personalised electric tuk-tuk experience with a private guide." },
    ],
  }),
  component: VIPPage,
});

const highlights = [
  "100% private experience — only you and your group",
  "Custom route designed around your interests",
  "Flexible duration and timing",
  "Dedicated bilingual local guide (EN / ES / FR)",
  "Premium electric tuk-tuk reserved exclusively for you",
  "Champagne or local wine option on request 🥂",
  "Door-to-door pickup from your hotel or apartment",
  "Photographer add-on available",
];

const ideas = [
  "Romantic sunset ride at Templo de Debod",
  "Tapas hopping through La Latina & Cava Baja",
  "Royal & cultural tour with extended stops at the Royal Palace and Prado",
  "Family adventure with Retiro Park and Plaza Mayor",
  "Night-lights tour through Gran Vía and Cibeles",
  "Local foodie experience at Mercado de San Miguel & San Antón",
];

const included = [
  "Private electric tuk-tuk (up to 4 guests per tuk-tuk)",
  "Dedicated personal guide",
  "Custom itinerary tailored before the tour",
  "Hotel/apartment pickup & drop-off in central Madrid",
  "Photo stops wherever you wish",
  "Bottled water on board",
];

const info = [
  "Each tuk-tuk accommodates up to 4 people",
  "Larger groups: multiple tuk-tuks travel together as a private convoy",
  "Suitable for children over 3 years old",
  "Pets allowed 🐾",
  "Not accessible for wheelchairs",
  "Stroller friendly",
  "Available 7 days a week — morning, afternoon or evening",
];

const cancellation = [
  "Free cancellation up to 48 hours before the tour",
  "Full refund or rescheduling available",
  "Refund in case of bad weather or operator cancellation",
  "No-show = full charge applies",
];

const waMsg = "Hello! I'd like to book the *Private VIP Tuk-Tuk Tour* — please send me details ⭐";

// 💳 Replace with your card payment link
const CARD_PAYMENT_URL = "#card-payment-vip";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }} className="mb-12">
      <h2 className="display text-navy text-3xl md:text-4xl tracking-[2px] mb-5">{title}</h2>
      {children}
    </motion.section>
  );
}

function VIPPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
          <img src={heroImg} alt="Private VIP Tuk-Tuk Tour Madrid" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/95" />
          <div className="relative z-10 h-full flex flex-col justify-end px-[5%] pb-12 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Link to="/" className="inline-block text-cream/80 hover:text-gold text-sm font-bold mb-4">← Back to all tours</Link>
              <span className="inline-block bg-navy border border-gold text-gold font-extrabold text-xs tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">👑 Private VIP</span>
              <h1 className="display text-cream tracking-[2px] leading-none" style={{ fontSize: "clamp(2.2rem,6vw,5rem)" }}>
                PRIVATE <em className="not-italic text-gold">VIP</em> TUK-TUK TOUR
              </h1>
              <p className="mt-4 text-cream/85 text-lg max-w-2xl">
                Your Madrid, your rules. A fully personalised electric tuk-tuk experience designed exclusively around you.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-cream font-bold text-sm">
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">⏱ Flexible duration</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">👤 Private guide</span>
                <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-full">🥂 Premium service</span>
                <span className="bg-gold text-navy px-4 py-2 rounded-full">From €120 / person</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="px-[5%] py-16 max-w-5xl mx-auto">
          <Section title="A tour built around you">
            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
              The Private VIP Tuk-Tuk Tour is the most exclusive way to discover Madrid. We design the itinerary together with you before the tour — based on the time you have, the places you love and the kind of experience you're looking for.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Whether it's a romantic sunset, a special anniversary, a family memory or a corporate VIP welcome, your dedicated local guide makes every minute feel personal, comfortable and unforgettable.
            </p>
          </Section>

          <Section title="⭐ What makes it VIP">
            <ul className="grid sm:grid-cols-2 gap-3">
              {highlights.map((h) => (<li key={h} className="flex gap-2 text-foreground/80"><span className="text-gold font-extrabold">★</span>{h}</li>))}
            </ul>
          </Section>

          <Section title="💡 Custom Tour Ideas">
            <p className="text-foreground/70 mb-5 italic">Inspiration — we tailor everything to your wishes:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {ideas.map((i) => (<li key={i} className="flex gap-2 text-foreground/80"><span className="text-green font-extrabold">✓</span>{i}</li>))}
            </ul>
          </Section>

          <Section title="✅ What's Included">
            <ul className="grid sm:grid-cols-2 gap-3">
              {included.map((i) => (<li key={i} className="flex gap-2 text-foreground/80"><span className="text-green font-extrabold">✓</span>{i}</li>))}
            </ul>
          </Section>

          <Section title="ℹ️ Additional Information">
            <ul className="space-y-2">
              {info.map((i) => (<li key={i} className="flex gap-2 text-foreground/80"><span className="text-gold">•</span>{i}</li>))}
            </ul>
          </Section>

          <Section title="📍 Meeting Point">
            <div className="bg-cream border-l-4 border-gold p-5 rounded-lg">
              <p className="text-navy font-extrabold text-lg">Free pickup at your hotel or apartment in central Madrid</p>
              <p className="text-foreground/70 text-sm mt-1">Default base: Calle de Vergara 1, Madrid</p>
            </div>
          </Section>

          <Section title="❌ Cancellation Policy">
            <ul className="space-y-2">
              {cancellation.map((c) => (<li key={c} className="flex gap-2 text-foreground/80"><span className="text-red">•</span>{c}</li>))}
            </ul>
          </Section>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-10 bg-gradient-to-br from-navy to-[#0a1530] text-cream rounded-2xl p-8 md:p-10 text-center shadow-[var(--shadow-elegant)] border border-gold/30">
            <h3 className="display text-gold text-3xl md:text-4xl tracking-[2px] mb-3">RESERVE YOUR PRIVATE TOUR</h3>
            <p className="text-cream/80 mb-6">Tell us your wishes — we craft the perfect Madrid for you.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={waLink(waMsg)} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-wa hover:bg-[#1db954] text-white font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
                <WhatsAppIcon className="w-5 h-5" /> Request VIP on WhatsApp
              </a>
              <a href={CARD_PAYMENT_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#d4a84c] text-navy font-extrabold text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5">
                💳 Pay by Card
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