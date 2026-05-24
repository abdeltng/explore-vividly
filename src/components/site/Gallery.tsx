import { motion } from "framer-motion";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";

const items = [g1, g2, g3, g4, g5];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-[5%]">
      <div className="text-center mb-12">
        <div className="text-green font-extrabold text-sm tracking-[3px] uppercase mb-3">📸 Postcards from the Road</div>
        <h2 className="display text-navy tracking-[3px] leading-none" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}>
          MADRID THROUGH <em className="not-italic text-gold">OUR LENS</em>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto" style={{ gridAutoRows: "220px" }}>
        {items.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`relative overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img src={src} alt="" loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}