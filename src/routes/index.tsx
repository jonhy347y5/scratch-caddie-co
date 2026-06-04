import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import logoAsset from "@/assets/logo.png.asset.json";
import fairwayAsset from "@/assets/fairway.jpg.asset.json";
import konstantinAsset from "@/assets/konstantin.jpg.asset.json";
import joseAsset from "@/assets/jose.jpg.asset.json";
import blazersAsset from "@/assets/blazers.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Scratch Caddies — Portugal" },
      {
        name: "description",
        content:
          "Portugal's caddie and playing partner service. Current and former national team golfers, walking every hole at your side.",
      },
      { property: "og:title", content: "The Scratch Caddies — Portugal" },
      {
        property: "og:description",
        content:
          "A round worth remembering. Portugal's caddie and playing partner service.",
      },
      { property: "og:image", content: fairwayAsset.url },
    ],
  }),
  component: Index,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "The Experience", href: "#experience" },
    { label: "Partners", href: "#partners" },
    { label: "Who We Are", href: "#who" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="The Scratch Caddies" className="w-11 h-11 rounded-full" />
          <span className="label text-gold hidden sm:inline">The Scratch · Portugal</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-cream/90 hover:text-gold transition-colors text-base tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="border border-gold text-gold px-6 py-2 tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-forest-dark transition-all"
          >
            Book a Round
          </a>
        </div>
        <button
          className="md:hidden text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 h-px bg-gold mb-1.5" />
          <div className="w-6 h-px bg-gold mb-1.5" />
          <div className="w-6 h-px bg-gold" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-forest-dark border-t border-gold/20 mt-4">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-cream/90 text-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="border border-gold text-gold px-6 py-3 tracking-[0.2em] uppercase text-xs text-center"
            >
              Book a Round
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-forest-dark">
      <div className="absolute inset-0">
        <img
          src={fairwayAsset.url}
          alt="Two golfers walking the fairway"
          className="w-full h-full object-cover slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-forest-dark/30 to-forest-dark" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-3 gap-16 items-end">
          <div className="lg:col-span-2 fade-up">
            <h1 className="text-cream font-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
              A round <em className="italic text-gold-light font-light">worth</em> remembering.
            </h1>
            <p className="mt-8 text-cream/85 text-lg lg:text-xl max-w-2xl leading-relaxed font-light">
              Portugal's caddie and playing partner service. Current and former national team
              golfers, walking every hole at your side. Available across the country — location
              based on request.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#book"
                className="bg-gold text-forest-dark px-8 py-3 tracking-[0.2em] uppercase text-xs hover:bg-gold-light transition-colors"
              >
                Book a Round
              </a>
              <a
                href="#experience"
                className="border border-cream/40 text-cream px-8 py-3 tracking-[0.2em] uppercase text-xs hover:border-gold hover:text-gold transition-colors"
              >
                What We Offer
              </a>
            </div>
          </div>
          <div className="fade-up lg:justify-self-end" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-6">
              {[
                ["2", "National Team Golfers"],
                ["5", "Regions Across Portugal"],
                ["7", "Days a Week"],
              ].map(([n, label], i) => (
                <div key={label} className={i > 0 ? "pt-6 border-t border-gold/40" : ""}>
                  <div className="text-gold-light text-4xl font-light leading-none">{n}</div>
                  <div className="label mt-2 text-gold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="bg-cream py-32 lg:py-44 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto text-center fade-up">
        <p className="text-3xl sm:text-4xl lg:text-5xl leading-[1.35] font-light text-forest-dark">
          You're in Portugal, on a great course, with four hours ahead of you. We're there to read
          the greens, manage the round, and make sure you enjoy{" "}
          <em className="italic text-forest">every one of them</em>.
        </p>
        <div className="mt-12 mx-auto w-16 h-px bg-gold" />
      </div>
    </section>
  );
}

function Experience() {
  const cards = [
    {
      tag: "The Premier Offer",
      title: "Playing Partner",
      body: "A national team golfer walks every hole, reading greens, managing strategy. Not a bag carrier.",
    },
    {
      tag: "Professional",
      title: "Caddie Service",
      body: "Precise yardages, green reading, course management from a national-level competitor.",
    },
    {
      tag: "For Concierges",
      title: "Groups & Corporate",
      body: "Golf days, multi-round visits, tournament guests. We coordinate the caddies and guarantee the same standard for every player.",
    },
  ];
  return (
    <section id="experience" className="bg-forest py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up mb-20">
          <div className="label">01 / The Experience</div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="fade-up group border border-gold/25 p-10 bg-forest-dark/30 hover:border-gold/60 transition-all duration-500"
            >
              <div className="label mb-8">{c.tag}</div>
              <h3 className="text-cream text-3xl lg:text-4xl font-light leading-tight">
                {c.title}
              </h3>
              <div className="mt-6 w-0 h-px bg-gold group-hover:w-20 transition-all duration-700" />
              <p className="mt-8 text-cream/75 text-lg leading-relaxed font-light">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beyond() {
  const items = [
    ["Tee Times", "We arrange your reservation."],
    ["Course Briefing", "Hole-by-hole strategy before the first tee."],
    ["The 19th Hole", "A table waiting when the round is done."],
    ["Logistics", "Transport and club rental, coordinated end to end."],
  ];
  return (
    <section className="bg-forest-dark py-32 lg:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="fade-up max-w-3xl mb-20">
          <div className="label">Beyond the Round</div>
          <h2 className="mt-6 text-cream text-4xl lg:text-6xl font-light leading-[1.1]">
            Everything handled, <em className="italic text-gold-light">before</em> you arrive.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/25">
          {items.map(([title, body]) => (
            <div key={title} className="fade-up bg-forest-dark p-10">
              <h4 className="text-cream text-2xl font-light">{title}</h4>
              <p className="mt-4 text-cream/70 leading-relaxed font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseKnowledge() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[600px]">
      <div className="relative min-h-[400px] lg:min-h-[700px]">
        <img src={joseAsset.url} alt="Reading a yardage book" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="bg-cream p-12 lg:p-20 flex items-center fade-up">
        <div className="max-w-xl">
          <div className="label">How We Read a Course</div>
          <h2 className="mt-6 text-forest-dark text-4xl lg:text-5xl font-light leading-[1.15]">
            We've competed on these courses. We know <em className="italic text-forest">every break</em>.
          </h2>
          <p className="mt-8 text-forest-dark/80 text-lg leading-relaxed font-light">
            Course knowledge comes from playing under pressure. From tournament rounds where a foot
            of break either side is the difference between a card you keep and one you don't. That's
            the knowledge now on your side of the bag.
          </p>
          <div className="mt-10 w-16 h-px bg-gold" />
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const rows = [
    ["Hotels & Resorts", "Premium properties across Portugal's golf regions."],
    ["Concierge & Guest Services", "The recommendation your guests remember."],
    ["Golf Directors & Head Professionals", "Premium clubs across all five regions."],
    ["Travel & Hospitality Partners", "Itineraries where golf is on the agenda."],
  ];
  return (
    <section id="partners" className="relative bg-forest py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-30">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-gold/40"
            style={{ transform: `scale(${1 - i * 0.15})` }}
          />
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="fade-up">
          <div className="label">02 / For Partners</div>
          <h2 className="mt-6 text-cream text-4xl lg:text-6xl font-light leading-[1.1]">
            The service your guests <em className="italic text-gold-light">deserve</em>.
          </h2>
          <p className="mt-8 text-cream/80 text-lg leading-relaxed font-light max-w-lg">
            We work alongside the finest hotels, concierges, and golf clubs in Portugal — the name
            they can put next to their own, with the certainty it belongs there.
          </p>
          <a
            href="#book"
            className="inline-block mt-10 bg-gold text-forest-dark px-8 py-3 tracking-[0.2em] uppercase text-xs hover:bg-gold-light transition-colors"
          >
            Request Partnership Info
          </a>
        </div>
        <div className="space-y-px bg-gold/25">
          {rows.map(([title, body]) => (
            <div key={title} className="fade-up bg-forest p-8 border border-transparent hover:border-gold/40 transition-colors">
              <h4 className="text-cream text-xl font-light">{title}</h4>
              <p className="mt-2 text-cream/70 font-light">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section id="who" className="bg-forest-dark">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[500px] lg:min-h-[800px]">
          <img src={blazersAsset.url} alt="Konstantin and José Miguel in national team blazers" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="p-10 lg:p-20 flex items-center fade-up">
          <div className="max-w-xl">
            <div className="label">03 / Who We Are</div>
            <h2 className="mt-6 text-cream text-4xl lg:text-5xl font-light leading-[1.15]">
              Built by players, <em className="italic text-gold-light">for players</em>.
            </h2>
            <p className="mt-8 text-cream/80 text-lg leading-relaxed font-light">
              Konstantin and José Miguel met through competitive golf. Both represented Portugal at
              national level, competed internationally, and won tournaments across the country.
            </p>
            <p className="mt-6 text-cream/80 text-lg leading-relaxed font-light">
              One still pursuing a professional career, the other studying economics in Lisbon. The
              Scratch was built because a great round deserves more than a bag carrier.
            </p>
            <div className="mt-10 pt-8 border-t border-gold/30">
              <p className="label text-gold/80 leading-relaxed">
                Based in Cascais · Regular presence in Comporta · Available across Portugal
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 grid md:grid-cols-2 gap-10">
        {[
          {
            name: "Konstantin",
            role: "Co-founder · Operator",
            body: "Former national team golfer. Economics student at Nova SBE, member of Clube de Golf do Estoril. Handles every booking personally.",
            img: konstantinAsset.url,
          },
          {
            name: "José Miguel",
            role: "Co-founder · Caddie",
            body: "Current national team player pursuing a professional career. Available when his tournament schedule allows.",
            img: joseAsset.url,
          },
        ].map((f) => (
          <div key={f.name} className="fade-up border border-gold/25 bg-forest/40">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 lg:p-10">
              <div className="label">{f.role}</div>
              <h3 className="mt-3 text-cream text-3xl font-light">{f.name}</h3>
              <div className="mt-5 w-12 h-px bg-gold" />
              <p className="mt-5 text-cream/75 leading-relaxed font-light">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="relative bg-cream py-32 lg:py-40 px-6 lg:px-10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
      >
        <span className="text-[20vw] font-light text-forest/[0.04] tracking-tight leading-none">
          SCRATCH
        </span>
      </div>
      <div className="relative max-w-3xl mx-auto">
        <div className="fade-up text-center mb-16">
          <h2 className="text-forest-dark text-4xl lg:text-6xl font-light leading-[1.1]">
            Tell us where you're playing <em className="italic text-forest">and when</em>.
          </h2>
          <p className="mt-6 text-forest-dark/70 text-xl font-light">We'll take care of the rest.</p>
        </div>
        <form
          className="fade-up space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const lines = ["Name: " + data.get("name"), "Email: " + data.get("email"), "Course: " + data.get("course"), "Date: " + data.get("date"), "", String(data.get("message") || "")];
            window.location.href = `mailto:thescratchcaddies@gmail.com?subject=${encodeURIComponent("Booking enquiry — " + (data.get("name") || ""))}&body=${encodeURIComponent(lines.join("\n"))}`;
          }}
        >
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "course", label: "Course", type: "text" },
            { name: "date", label: "Date", type: "date" },
          ].map((f) => (
            <div key={f.name}>
              <label className="label block mb-3 text-forest/70">{f.label}</label>
              <input
                required
                type={f.type}
                name={f.name}
                className="w-full bg-transparent border-b border-forest/30 py-3 text-forest-dark text-lg font-light focus:border-gold focus:outline-none transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="label block mb-3 text-forest/70">Message</label>
            <textarea
              name="message"
              rows={3}
              className="w-full bg-transparent border-b border-forest/30 py-3 text-forest-dark text-lg font-light focus:border-gold focus:outline-none transition-colors resize-none"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="bg-forest text-cream px-10 py-3 tracking-[0.2em] uppercase text-xs hover:bg-forest-dark transition-colors"
            >
              Send
            </button>
          </div>
        </form>
        <div className="fade-up mt-16 pt-10 border-t border-forest/15 text-center text-forest/80 text-sm tracking-wider">
          <a href="https://wa.me/351913481537" className="hover:text-gold transition-colors">
            WhatsApp +351 913 481 537
          </a>
          <span className="mx-3 text-gold">·</span>
          <a href="mailto:thescratchcaddies@gmail.com" className="hover:text-gold transition-colors">
            thescratchcaddies@gmail.com
          </a>
          <span className="mx-3 text-gold">·</span>
          <a href="https://instagram.com/thescratchcaddies" className="hover:text-gold transition-colors">
            @thescratchcaddies
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-dark border-t border-gold/20 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={logoAsset.url} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <div className="text-cream text-lg font-light">The Scratch Caddies</div>
            <div className="label mt-1">Portugal · Est. 2026</div>
          </div>
        </div>
        <a href="mailto:thescratchcaddies@gmail.com" className="text-cream/70 hover:text-gold text-sm tracking-wider transition-colors">
          thescratchcaddies@gmail.com
        </a>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <Manifesto />
      <Experience />
      <Beyond />
      <CourseKnowledge />
      <Partners />
      <WhoWeAre />
      <Book />
      <Footer />
    </main>
  );
}
