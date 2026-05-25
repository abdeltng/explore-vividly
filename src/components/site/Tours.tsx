import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { waLink, WhatsAppIcon } from "./whatsapp";
import oneHour from "@/assets/tour-classic.jpg";
import twoHours from "@/assets/tour-golden.jpg";
import threeHours from "@/assets/tour-retiro.jpg";
import vipImg from "@/assets/tour-vip.jpg";

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
  detailsTo?: string;
};

const tours: Tour[] = [
  { img: oneHour, badge: "⭐ Most Popular", badgeStyle: "bg-red text-white",
    icon: "🛺", title: "Tour 1 Hour",
    desc: "A quick but unforgettable spin through Madrid's most iconic landmarks — perfect for first-time visitors.",
    meta: ["⏱ 1 hr","👥 Max 6","📍 City Center"], price: "€35",
    waMsg: "Hello! I want to book the *Tour 1 Hour* €35/person 🛺",
    detailsTo: "/tours/1-hour" },
  { img: twoHours, badge: "🌅 Best Value", badgeStyle: "bg-gold text-navy",
    icon: "🌇", title: "Tour 2 Hours",
    desc: "Go deeper into the city — historic plazas, royal palace and hidden corners with plenty of photo stops.",
    meta: ["⏱ 2 hrs","👥 Max 6","📍 Various"], price: "€55",
    waMsg: "Hello! I want to book the *Tour 2 Hours* €55/person 🌅",
    detailsTo: "/tours/2-hours" },
  { img: threeHours, badge: "🌿 Full Experience", badgeStyle: "bg-green text-white",
    icon: "🗺️", title: "Tour 3 Hours",
    desc: "The ultimate Madrid adventure — every must-see spot, lush parks and a tapas break along the way.",
    meta: ["⏱ 3 hrs","👥 Max 6","📍 All Madrid"], price: "€75",
    waMsg: "Hello! I want to book the *Tour 3 Hours* €75/person 🗺️",
    detailsTo: "/tours/3-hours" },
  { img: vipImg, badge: "👑 VIP", badgeStyle: "bg-navy text-gold",
    icon: "⭐", title: "Private VIP Tour",
    desc: "Your Madrid, your rules. Choose your own route, pace and stops. Fully personalised and exclusively yours.",
    meta: ["⏱ Flexible","👥 Max 6","📍 Anywhere"], price: "€120",
    waMsg: "Hello! I want to book the *Private VIP Tour* €120/person 👑",
    detailsTo: "/tours/vip" },
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
          Four unique tuk tuk routes through the heart of Madrid — for every schedule and occasion.
        </p>
      </div>

      <div className="grid gap-7 max-w-7xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
        {tours.map((t, i) => (
          <motion.article
            key={t.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
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
                {t.detailsTo && (
                  <Link
                    to={t.detailsTo}
                    className="mt-2 w-full text-center border-2 border-navy text-navy hover:bg-navy hover:text-cream font-extrabold text-sm py-3 rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    View Tour Details →
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}