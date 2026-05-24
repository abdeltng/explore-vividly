import { motion } from "framer-motion";
import { waLink, WhatsAppIcon } from "./whatsapp";

const links = [
  { href: "#tours", label: "Tours" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 h-[70px] flex items-center justify-between px-[5%] bg-navy/95 backdrop-blur-lg border-b-[3px] border-gold"
    >
      <a href="#" className="flex items-center gap-2 no-underline">
        <span className="text-2xl">📍</span>
        <span className="display text-white text-2xl tracking-[2px]">
          <em className="not-italic text-gold">MY</em> TUKTUK MADRID
        </span>
      </a>
      <ul className="hidden md:flex items-center gap-7 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-white/80 hover:text-gold text-xs font-bold tracking-[1.5px] uppercase transition-colors">
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={waLink("Hello! I want to book a TukTuk tour in Madrid 🛺")}
            target="_blank" rel="noreferrer"
            className="bg-wa hover:bg-[#1db954] text-white px-5 py-2 rounded-full font-extrabold text-sm flex items-center gap-2 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" /> Book Now
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}