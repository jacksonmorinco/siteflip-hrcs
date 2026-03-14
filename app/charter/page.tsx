import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { charterInfo } from '@/data/content'

export const metadata: Metadata = {
  title: 'Helicopter Charter',
  description: 'FAA Part 135 certified helicopter charter from Hampton Roads. Certificate H4RA894W. DC in 90 minutes, Outer Banks in 40.',
}
const HRH = 'https://hrheli.com/wp-content/uploads'

export default function CharterPage() {
  return (
    <>
      <PageHero
        eyebrow="Helicopter Charter · FAA Part 135"
        headline="Certified air carrier. Door-to-door."
        subhead={charterInfo.subhead}
        photo={`${HRH}/2026/02/R44Flying-scaled.jpg`}
        photoAlt="Robinson R44 in flight"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-8">The Certificate</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                Part 135.<br />
                <em className="not-italic text-stone">Not just a charter.</em>
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-5 mb-12">
                <p>{charterInfo.body}</p>
                <p>
                  FAA Part 135 is the regulatory standard for commercial air carrier operations.
                  It requires rigorous aircraft maintenance programs, pilot training and checkride
                  standards, operations specifications, and safety management systems that go well
                  beyond what a casual Part 91 operation requires. When you fly with HRCS, you
                  fly under the same regulatory framework as a commercial carrier.
                </p>
              </div>
              <div className="border-l-2 border-rule pl-6 py-2 mb-10">
                <p className="font-mono text-[10px] text-stone uppercase tracking-widest mb-2">
                  FAA Air Carrier Certificate · {charterInfo.cert}
                </p>
                <p className="font-body text-sm text-ink/55 leading-relaxed">
                  All charter flights conducted by Hampton Roads Charter Service under this certificate.
                  Pilots complete annual recurrent training and checkouts.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden">
                <Image src={`${HRH}/2023/06/abc1-1024x683-1.jpg`}
                       alt="HRH helicopter in flight" fill className="object-cover" unoptimized />
              </div>
            </div>

            <div className="lg:col-span-5">
              {/* Travel times */}
              <div className="mb-10">
                <p className="eyebrow mb-6">Travel Times · From Norfolk</p>
                <div className="space-y-0">
                  {charterInfo.travelTimes.map(route => (
                    <div key={route.destination} className="flex items-center justify-between py-4 border-b border-rule last:border-0">
                      <span className="font-body text-base text-ink">{route.destination}</span>
                      <span className="font-mono text-sm text-stone tracking-wider">{route.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aircraft */}
              <div className="bg-mist p-8 mb-8">
                <p className="eyebrow mb-4">Charter Aircraft</p>
                <div className="font-display font-semibold text-xl text-ink mb-3">{charterInfo.aircraft}</div>
                <p className="font-body text-sm text-ink/60 leading-relaxed mb-5">
                  Four seats. Air conditioned and heated. Headsets for all passengers.
                  Unobstructed views through four cabin doors. Photos and video welcome.
                </p>
              </div>

              {/* Also offered via HRH */}
              <div className="border border-rule p-6 mb-8">
                <p className="eyebrow mb-3">Tours & Special Events</p>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-4">
                  Aerial tours of Hampton Roads, Virginia Beach, and the Outer Banks —
                  as well as special events including weddings, gender reveals, and charity
                  events — are available through our sister company.
                </p>
                <a href="https://hrheli.com/flying/tours/" target="_blank" rel="noopener noreferrer"
                   className="font-mono text-xs text-red tracking-wider hover:text-red-dark transition-colors">
                  Aerial Tours at Hampton Roads Helicopters →
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn-dark w-full justify-center py-4">Book a Charter →</Link>
                <a href="tel:17574889044" className="btn-outline-dark w-full justify-center py-4">757-488-9044</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-sm text-ink mb-4">Ready to fly?</h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                Call us to discuss your destination, get a travel time estimate, and book your flight.
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
