import { motion } from "framer-motion";

const stats = [
  { num: "5000+", label: "Happy Tourists" },
  { num: "4.9★", label: "Average Rating" },
  { num: "6", label: "Tour Routes" },
  { num: "3", label: "Languages" },
  { num: "100%", label: "Electric & Eco" },
];

export function Stats() {
  return (
    <div className="bg-navy py-7 px-[5%] flex flex-wrap justify-center">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="px-10 text-center border-r border-white/15 last:border-r-0"
        >
          <div className="display text-gold text-4xl tracking-[2px]">{s.num}</div>
          <div className="text-white/70 text-xs tracking-[2px] uppercase mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}