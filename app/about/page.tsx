import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { team, credibilitySignals, services } from '@/data/content'

export const metadata: Metadata = {
  title: 'About HRCS',
  description: 'Hampton Roads Charter Service — founded 2005 by Andy Gibbs. International Robinson dealership and FAA Part 135 air carrier. The Hynes family carries the legacy forward.',
}
const HRH = 'https://hrheli.com/wp-content/uploads'

const teamPhotos: Record<string,string> = {
  'Dave Hynes':     `${HRH}/2023/06/Dave-Shanda-Hynes-800x600-1-300x225.png`,
  'Patrick Hynes':  `${HRH}/2023/06/august7-300x225.png`,
  'Greg Doloresco': `${HRH}/2023/06/greg-800x999-1-240x300.jpg`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About HRCS"
        headline="Built from the ground up by Andy Gibbs."
        subhead="A Part 135 air carrier, a Robinson dealership, and a co-owner of the airport it calls home — all under one operation."
        photo={`${HRH}/2026/02/SunsetRamp-scaled.jpeg`}
        photoAlt="Aircraft on the ramp at Hampton Roads Executive Airport"
        photoPosition="object-center"
      />

      {/* Founding story — Andy Gibbs first */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Founding Story</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                Andy Gibbs built<br />
                something that lasts.
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-6">
                <p>
                  Hampton Roads Charter Service was built by Andy Gibbs with a clear goal:
                  safe flight operations, high quality aircraft maintenance, expert sales
                  advice, and a personal touch. He started with the charter certificate,
                  built it into a Part 135 operation, then added the Robinson dealership.
                  In 2000, he went further — becoming a part owner of Hampton Roads Executive
                  Airport itself, helping guide it to become a premier regional airport.
                </p>
                <p>
                  When Andy Gibbs passed away in February 2013, his wife Sandie, and his
                  sons Drew and Jake continued to carry on his legacy. Dave Hynes — who had
                  worked alongside Andy since 2005 — and his family stepped forward to ensure
                  the operation Andy built would endure.
                </p>
                <p className="text-ink/85">
                  What Andy created was never just a business. It was an institution. HRCS
                  today is a reflection of that: an internationally respected Robinson
                  dealership, a certified Part 135 air carrier, and a company that has been
                  at the same airport, serving the same community, for over twenty years.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pt-16">
              <div className="bg-mist p-8 mb-8">
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-4">Andy Gibbs · Founder</p>
                <p className="font-display text-2xl text-ink/80 italic leading-relaxed">
                  "The goal was to create a company focused on providing safe flight operations,
                  high quality aircraft maintenance, and expert sales advice — all with a personal touch."
                </p>
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mt-4">1955 – 2013</p>
              </div>
              <div className="space-y-5">
                {[
                  { year: '2000', note: 'Andy Gibbs becomes a part owner of Hampton Roads Executive Airport.' },
                  { year: '2005', note: 'HRCS and HRH founded together. Dave Hynes joins as co-founder.' },
                  { year: '2013', note: 'Andy Gibbs passes away. His family and the Hynes team carry his legacy forward.' },
                  { year: '2014', note: 'Patrick Hynes joins as Director of Maintenance, bringing American Airlines standards to the fleet.' },
                ].map(item => (
                  <div key={item.year} className="flex gap-6">
                    <div className="font-mono text-sm text-red font-medium w-12 flex-shrink-0 pt-0.5">{item.year}</div>
                    <p className="font-body text-sm text-ink/60 leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule mb-24">
            {credibilitySignals.map(signal => (
              <div key={signal.label} className="bg-white hover:bg-warm transition-colors duration-300 p-8">
                <div className="font-mono text-xs text-red tracking-widest uppercase mb-3">{signal.label}</div>
                <p className="font-body text-ink/65 leading-relaxed">{signal.text}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <p className="eyebrow mb-4">Our Team</p>
          <h2 className="font-display text-display-md text-ink mb-14">The people.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {team.map(member => {
              const photo = teamPhotos[member.name]
              return (
                <div key={member.name}
                     className={`p-8 group hover:bg-warm transition-colors duration-300 ${member.legacy ? 'bg-navy-dark' : 'bg-white'}`}>
                  {photo && !member.legacy ? (
                    <div className="relative w-16 h-20 overflow-hidden mb-6 bg-mist">
                      <Image src={photo} alt={member.name} fill
                             className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                             unoptimized />
                    </div>
                  ) : (
                    <div className={`w-14 h-14 flex items-center justify-center mb-6 ${member.legacy ? 'bg-white/10' : 'bg-mist'}`}>
                      <span className={`font-display font-bold text-xl ${member.legacy ? 'text-white/40' : 'text-ink/20'}`}>
                        {member.name.split(' ').map(n=>n[0]).join('').slice(0,2)}
                      </span>
                    </div>
                  )}
                  <div className={`font-body font-semibold text-base mb-0.5 ${member.legacy ? 'text-white' : 'text-ink'}`}>
                    {member.name}
                  </div>
                  <div className="font-mono text-[10px] text-red tracking-widest uppercase mb-4">{member.title}</div>
                  <p className={`font-body text-sm leading-relaxed ${member.legacy ? 'text-white/55' : 'text-ink/55'}`}>
                    {member.bio}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services overview with HRH cross-links */}
      <section className="py-20 bg-warm border-y border-rule">
        <div className="section-inner">
          <p className="eyebrow mb-4">What We Offer</p>
          <h2 className="font-display text-display-md text-ink mb-12">The full picture.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
            {services.map((service, i) => (
              service.external ? (
                <a key={service.slug} href={service.href} target="_blank" rel="noopener noreferrer"
                   className="bg-warm hover:bg-white transition-colors duration-300 p-8 block group">
                  <div className="font-mono text-xs text-stone/40 tracking-widest mb-6">{'0'+(i+1)}</div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-ink/55 leading-relaxed mb-5">{service.short}</p>
                  <span className="font-mono text-[10px] text-red tracking-wider uppercase">Via HRH ↗</span>
                </a>
              ) : (
                <Link key={service.slug} href={service.href}
                      className="bg-warm hover:bg-white transition-colors duration-300 p-8 block group">
                  <div className="font-mono text-xs text-stone/40 tracking-widest mb-6">{'0'+(i+1)}</div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-ink/55 leading-relaxed mb-5">{service.short}</p>
                  <span className="font-mono text-[10px] text-stone tracking-wider group-hover:text-ink transition-colors">Learn more →</span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-sm text-ink mb-4">Ready to work with HRCS?</h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                Whether you're buying a helicopter, booking a charter flight, or need aircraft management — our team is here.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn-dark px-8 py-3">Get in Touch →</Link>
              <a href="tel:17574889044" className="btn-outline-dark px-8 py-3 text-center">757-488-9044</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
