import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Tours } from "@/components/site/Tours";
import { WhyUs } from "@/components/site/WhyUs";
import { Experience } from "@/components/site/Experience";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { BookCTA } from "@/components/site/BookCTA";
import { Footer } from "@/components/site/Footer";
import { StickyWA } from "@/components/site/StickyWA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My TukTuk Madrid – Explore Madrid in a Unique Way!" },
      { name: "description", content: "Electric tuk tuk tours through the heart of Madrid. 6 routes, local drivers, 3 languages. Book on WhatsApp in 30 seconds." },
      { property: "og:title", content: "My TukTuk Madrid – Explore Madrid in a Unique Way!" },
      { property: "og:description", content: "Electric tuk tuk tours through Madrid. Book on WhatsApp." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Tours />
        <WhyUs />
        <Experience />
        <Gallery />
        <Testimonials />
        <BookCTA />
      </main>
      <Footer />
      <StickyWA />
    </>
  );
}
