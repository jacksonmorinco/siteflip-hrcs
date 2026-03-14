import Image from 'next/image'
import Link from 'next/link'
import { site, stats, robinsonModels, services, credibilitySignals } from '@/data/content'

const HRH = 'https://hrheli.com/wp-content/uploads'

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src={`${HRH}/2026/02/MH-Photo-8-Pilatus-scaled.jpg`}
          alt="Aircraft on the ramp at Hampton Roads Executive Airport"
          fill priority className="object-cover object-center" unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

        <div className="section-inner relative z-10 pb-16 lg:pb-24 w-full">
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase mb-6">
              Hampton Roads Executive Airport · Chesapeake, Virginia · Est. 2005
            </p>
            <h1 className="font-display text-display-xl text-white mb-6 leading-[1.0]">
              Robinson Dealer.<br />
              <span className="italic">Certified</span> Charter.
            </h1>
            <p className="font-body text-white/65 text-xl leading-relaxed max-w-xl mb-10">
              An internationally respected Robinson Helicopter dealership and FAA Part 135
              certified air carrier — two distinct credentials under one trusted operation.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/sales" className="btn-dark px-8 py-3">View Aircraft Sales →</Link>
              <Link href="/charter" className="btn-outline-light px-8 py-3">Charter Flights</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-navy-dark border-b border-white/8">
        <div className="section-inner py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {stats.map(stat => (
              <div key={stat.label} className="lg:px-10 first:lg:pl-0 last:lg:pr-0">
                <div className="font-display font-bold text-3xl text-white leading-none">{stat.value}</div>
                <div className="font-mono text-[10px] text-white/35 tracking-widest uppercase mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO BUSINESSES INTRO ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Sales */}
            <div className="border-t-2 border-navy pt-10">
              <p className="eyebrow mb-4">Robinson Dealership</p>
              <h2 className="font-display text-display-sm text-ink mb-6">
                New & pre-owned Robinson helicopters.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                HRCS is a long-standing internationally respected Robinson dealer. We carry the
                full model line — R22, R44, and R66 — along with select fixed-wing aircraft.
                Our sales team has the knowledge to match the right aircraft to your mission,
                budget, and operating environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sales" className="btn-dark px-7 py-3">Explore Models →</Link>
                <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
                   className="btn-outline-dark px-7 py-3">Current Inventory ↗</a>
              </div>
            </div>

            {/* Charter */}
            <div className="border-t-2 border-stone/30 pt-10">
              <p className="eyebrow mb-4">FAA Part 135 Charter</p>
              <h2 className="font-display text-display-sm text-ink mb-6">
                Certified air carrier.<br />Door-to-door.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                HRCS holds FAA Part 135 Air Carrier Certificate H4RA894W — the same
                regulatory standard governing commercial aviation. Every charter flight
                is operated under this certificate by professionally trained, annually
                recurrent-checked pilots.
              </p>
              <Link href="/charter" className="btn-outline-dark px-7 py-3">Book a Charter →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROBINSON MODEL LINE ── */}
      <section className="py-24 bg-warm border-y border-rule">
        <div className="section-inner">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-14">
            <div>
              <p className="eyebrow mb-4">The Robinson Line</p>
              <h2 className="font-display text-display-md text-ink">
                Three models.<br />Every mission.
              </h2>
            </div>
            <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
               className="btn-text mb-2 text-base">
              View Current Inventory ↗
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {robinsonModels.map((model, i) => (
              <div key={model.model} className="bg-warm hover:bg-white transition-colors duration-300 p-8 group">
                <div className="font-mono text-xs text-stone/40 tracking-widest mb-6">{'0' + (i+1)}</div>
                <div className="font-display font-bold text-4xl text-ink mb-1 group-hover:text-navy transition-colors">{model.model}</div>
                <div className="font-mono text-[10px] text-stone uppercase tracking-widest mb-4">{model.type}</div>
                <p className="font-body text-sm text-ink/60 leading-relaxed mb-6 italic">{model.tagline}</p>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-8">{model.description}</p>
                <div className="space-y-2 mb-8">
                  {model.specs.map(spec => (
                    <div key={spec.label} className="flex justify-between py-2 border-b border-rule last:border-0">
                      <span className="font-mono text-[10px] text-stone uppercase tracking-widest">{spec.label}</span>
                      <span className="font-body text-sm text-ink">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="font-body text-xs text-stone/70 italic">{model.highlight}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
               className="btn-dark px-10 py-4">
              View Current Inventory on Controller.com ↗
            </a>
            <p className="font-mono text-[10px] text-stone tracking-wider mt-4">
              New & pre-owned · R22 · R44 · R66 · Select fixed-wing
            </p>
          </div>
        </div>
      </section>

      {/* ── FORMATION PHOTO BREAK ── */}
      <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image src={`${HRH}/2026/02/PXL_20250920_113606861-scaled.jpg`}
               alt="HRH R22 and R44 formation flight" fill
               className="object-cover object-center" unoptimized />
        <div className="absolute inset-0 bg-navy-dark/35" />
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-16">
          <p className="font-mono text-xs text-white/35 tracking-widest uppercase">
            Robinson R22 & R44 · Formation Flight
          </p>
        </div>
      </section>

      {/* ── CREDIBILITY ── */}
      <section className="py-24 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Why HRCS</p>
              <h2 className="font-display text-display-md text-ink mb-6">
                Two credentials.<br />Twenty years.
              </h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed">
                Hampton Roads Charter Service was built by Andy Gibbs from the ground up —
                first as a Part 135 charter operator, then as a Robinson dealership, then
                as a co-owner of the very airport it calls home. That depth of institutional
                knowledge is what Dave Hynes and his family have carried forward since 2013.
              </p>
            </div>
            <div className="space-y-px">
              {credibilitySignals.map(signal => (
                <div key={signal.label} className="bg-warm p-6 border-l-2 border-rule
                                                    hover:border-navy/30 hover:bg-white
                                                    transition-all duration-300">
                  <div className="font-mono text-xs text-red tracking-widest uppercase mb-2">{signal.label}</div>
                  <p className="font-body text-sm text-ink/60 leading-relaxed">{signal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SISTER COMPANY BAND ── */}
      <section className="py-16 bg-navy-dark text-white border-t border-white/8">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-4">
                Sister Company
              </p>
              <h2 className="font-display text-display-sm text-white mb-4">
                Hampton Roads Helicopters
              </h2>
              <p className="font-body text-white/55 text-base leading-relaxed">
                HRCS operates alongside Hampton Roads Helicopters — the operations and training
                brand sharing the same team, same hangar, and same commitment to safe, expert
                aviation. Tours, flight training, aerial photography, advanced capabilities,
                and Robinson-authorized maintenance are all at HRH.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href="https://hrheli.com" target="_blank" rel="noopener noreferrer"
                 className="btn-outline-light px-8 py-3 text-center">
                Visit Hampton Roads Helicopters →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-sm text-ink mb-4">
                Looking to buy, lease, or fly?
              </h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                Whether you're evaluating a Robinson purchase, planning a charter flight,
                or need aircraft management services — our team is ready to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-dark px-8 py-3">Get in Touch →</Link>
              <a href={`tel:${site.phone.replace(/\./g,'')}`} className="btn-outline-dark px-8 py-3 text-center">{site.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
