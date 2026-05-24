import { motion } from "framer-motion";
import { waLink, WhatsAppIcon } from "./whatsapp";

export function StickyWA() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      href={waLink("Hello! I want to book a TukTuk tour in Madrid 🛺")}
      target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-wa hover:bg-[#1db954] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.5)]"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
      <span className="absolute inset-0 rounded-full bg-wa/60 animate-ping" />
    </motion.a>
  );
}