export function Footer() {
  return (
    <footer className="bg-[#0e1d30] text-white/65 px-[5%] pt-16 pb-7">
      <div className="grid gap-10 mb-10 max-w-7xl mx-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        <div className="md:col-span-2">
          <div className="display text-white text-3xl tracking-[3px] mb-3"><em className="not-italic text-gold">MY</em> TUKTUK MADRID</div>
          <p className="text-sm leading-relaxed mb-4 max-w-md">
            The friendliest electric tuk tuk tours in Madrid. Local drivers, three languages, zero stress.
          </p>
          <div className="flex gap-2">
            {["📷","💬","✈️"].map((s, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-xs tracking-[2px] uppercase mb-4">Tours</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#tours" className="hover:text-gold">Madrid Classic</a></li>
            <li><a href="#tours" className="hover:text-gold">Retiro & Green</a></li>
            <li><a href="#tours" className="hover:text-gold">Golden Hour</a></li>
            <li><a href="#tours" className="hover:text-gold">Hidden Madrid</a></li>
            <li><a href="#tours" className="hover:text-gold">Private VIP</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-xs tracking-[2px] uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#why" className="hover:text-gold">Why Us</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-gold">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold text-xs tracking-[2px] uppercase mb-4">Contact</h4>
          <div className="text-sm space-y-2">
            <div>📞 +34 611 581 388</div>
            <div>📍 Madrid, Spain</div>
            <div>🇬🇧 🇫🇷 🇪🇸</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between gap-3 text-xs max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} My TukTuk Madrid. All rights reserved.</p>
        <p>Made with ❤️ in Madrid</p>
      </div>
    </footer>
  );
}