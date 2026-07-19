import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

// Unified easing + variants shared across every tour detail page
const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/** Cinematic hero with parallax scroll + slow Ken-Burns zoom */
export function TourHeroMedia({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/95"
      />
    </div>
  );
}

/** Wrapper for hero text — animates on mount with a soft rise */
export function TourHeroContent({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
}

/** Individual hero element — apply to badge, h1, p, chips row */
export function HeroItem({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "h1" | "p" | "span";
}) {
  const Cmp: any = (motion as any)[as];
  return (
    <Cmp variants={fadeUp} className={className}>
      {children}
    </Cmp>
  );
}

/** Unified in-view section reveal used across every tour page */
export function TourSection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-14 ${className}`}
    >
      <motion.h2
        variants={fadeUp}
        className="display text-navy text-3xl md:text-4xl tracking-[2px] mb-5"
      >
        {title}
      </motion.h2>
      <motion.div variants={fadeUp}>{children}</motion.div>
    </motion.section>
  );
}