import { motion } from "framer-motion";
import { waLink, WhatsAppIcon } from "./whatsapp";
import classic from "@/assets/tour-classic.jpg";
import retiro from "@/assets/tour-retiro.jpg";
import golden from "@/assets/tour-golden.jpg";
import hidden from "@/assets/tour-hidden.jpg";
import family from "@/assets/tour-family.jpg";
import vip from "@/assets/tour-vip.jpg";

type Tour = {
  img: string;
  badge: string;
  badgeStyle: string;
  icon: string;
  title: string;
  desc: string;
  meta: string[];
  price: string;
  waMsg: string;
};

const tours: Tour[] = [
  { img: classic, badge: "⭐ Most Popular", badgeStyle: "bg-red text-white",
    icon: "🏛️", title: "Madrid Classic Tour",
    desc: "The essential Madrid experience — Puerta del Sol, Plaza Mayor, Palacio Real and more iconic landmarks.",
    meta: ["⏱ 1.5 hrs","👥 Max 6","📍 City Center"], price: "€35",
    waMsg: "Hello! I want to book the *Madrid Classic Tour* €35/person 🛺" },
  { img: retiro, badge: "🌿 Nature", badgeStyle: "bg-gold text-navy",
    icon: "🌳", title: "Retiro & Green Madrid",
    desc: "Glide through Buen Retiro Park, the Crystal Palace and the green lungs of Madrid at a relaxed pace.",
    meta: ["⏱ 1 hr","👥 Max 6","📍 Retiro Park"], price: "€28",
    waMsg: "Hello! I want to book the *Retiro & Green Madrid Tour* €28/person 🌳" },
  { img: golden, badge: "🌅 Sunset", badgeStyle: "bg-gold text-navy",
    icon: "🌇", title: "Golden Hour Madrid",
    desc: "Experience Madrid at sunset with stunning panoramic views and perfect photo stops across the city.",
    meta: ["⏱ 2 hrs","👥 Max 6","📍 Various"], price: "€45",
    waMsg: "Hello! I want to book the *Golden Hour Madrid Tour* €45/person 🌅" },
  { img: hidden, badge: "🗝️ Hidden Gems", badgeStyle: "bg-gold text-navy",
    icon: "🗺️", title: "Hidden Madrid",
    desc: "Secret courtyards, local tapas spots and stories the guidebooks never tell. Go beyond the tourist trail.",
    meta: ["⏱ 2 hrs","👥 Max 6","📍 La Latina"], price: "€38",
    waMsg: "Hello! I want to book the *Hidden Madrid Tour* €38/person 🗝️" },
  { img: family, badge: "👨‍👩‍👧 Family", badgeStyle: "bg-gold text-navy",
    icon: "👨‍👩‍👧‍👦", title: "Family Fun Tour",
    desc: "A kid-friendly adventure through Madrid's most colourful spots — games, stories and smiles guaranteed!",
    meta: ["⏱ 1.5 hrs","👥 Max 6","📍 City Center"], price: "€30",
    waMsg: "Hello! I want to book the *Family Fun Tour* €30/person 👨‍👩‍👧" },
  { img: vip, badge: "👑 VIP", badgeStyle: "bg-navy text-gold",
    icon: "⭐", title: "Private VIP Tour",
    desc: "Your Madrid, your rules. Choose your own route, pace and stops. Fully personalised and exclusively yours.",
    meta: ["⏱ Flexible","👥 Max 6","📍 Anywhere"], price: "€60",
    waMsg: "Hello! I want to book the *Private VIP Tour* €60/person 👑" },
];

export function Tours() {
  return (
    <section id="tours" className="py-24 px-[5%]">
      <div className="text-center mb-14">
        <div className="text-green font-extrabold text-sm tracking-[3px] uppercase mb-3">🛺 Our Experiences</div>
        <h2 className="display text-navy tracking-[3px] leading-none" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
          CHOOSE YOUR <em className="not-italic text-gold">ADVENTURE</em>
        </h2>
        <p className="mt-4 text-foreground/70 text-lg max-w-xl mx-auto">
          Six unique tuk tuk routes through the heart of Madrid — for every mood, group, and occasion.
        </p>
      </div>

      <div className="grid gap-7 max-w-7xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {tours.map((t, i) => (
          <motion.article
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] flex flex-col group"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={t.img} alt={t.title} loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <span className={`absolute top-3.5 left-3.5 ${t.badgeStyle} font-extrabold text-[0.7rem] tracking-wide uppercase px-3.5 py-1 rounded-full`}>{t.badge}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="text-2xl mb-1">{t.icon}</div>
              <h3 className="display text-navy text-2xl tracking-[2px] mb-2">{t.title}</h3>
              <p className="text-foreground/65 text-sm leading-relaxed mb-4 flex-1">{t.desc}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {t.meta.map((m) => (
                  <span key={m} className="text-xs font-bold text-foreground/65">{m}</span>
                ))}
              </div>
              <div className="pt-4 border-t border-border">
                <div className="display text-green text-3xl mb-3">
                  {t.price} <sub className="font-body text-sm text-foreground/50 font-semibold">/person</sub>
                </div>
                <a
                  href={waLink(t.waMsg)} target="_blank" rel="noreferrer"
                  className="w-full text-center bg-wa hover:bg-[#1db954] text-white font-extrabold text-sm py-3 rounded-full transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Book on WhatsApp
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}