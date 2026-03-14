import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { site, robinsonModels, fixedWingBrands } from '@/data/content'

export const metadata: Metadata = {
  title: 'Aircraft Sales',
  description: 'New and pre-owned Robinson R22, R44, and R66 helicopters from Hampton Roads Charter Service — an internationally respected Robinson dealership.',
}
const HRH = 'https://hrheli.com/wp-content/uploads'

export default function SalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aircraft Sales & Leasing"
        headline="International Robinson Dealership."
        subhead="New and pre-owned R22, R44, and R66 helicopters. Select fixed-wing aircraft. The right aircraft for your mission."
        photo={`${HRH}/2026/02/FFAR44-scaled.jpg`}
        photoAlt="Robinson R44 in flight"
      />

      {/* Dealership intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20">
            <div>
              <p className="eyebrow mb-8">The Dealership</p>
              <h2 className="font-display text-display-md text-ink mb-8">
                The full Robinson line.<br />
                <em className="not-italic text-stone">Expert guidance.</em>
              </h2>
              <div className="font-body text-ink/70 text-lg leading-[1.9] space-y-5">
                <p>
                  Hampton Roads Charter Service is a long-standing internationally respected
                  Robinson Helicopter dealership. We carry the complete Robinson model line —
                  R22, R44, and R66 — and bring decades of operational experience to every
                  sales conversation.
                </p>
                <p>
                  When you buy a helicopter from HRCS, you're not buying from a general aircraft
                  broker. You're buying from a team that flies these aircraft daily, maintains
                  them in a factory-authorized service center, and trains pilots in them from
                  first flight to commercial certificate. That operational knowledge is what
                  makes HRCS's guidance worth having.
                </p>
              </div>
            </div>
            <div className="space-y-4 lg:pt-16">
              {[
                { label: 'Robinson International Dealer', desc: 'Authorized by Robinson Helicopter Company to sell new and certified pre-owned aircraft.' },
                { label: 'Factory Authorized Service',    desc: 'Every aircraft we sell is maintainable at our on-site Robinson-authorized service center.' },
                { label: 'Operational Experience',        desc: 'We fly these aircraft — our sales recommendations come from real-world operational knowledge.' },
                { label: 'Training Support',              desc: 'HRH next door provides flight training for any aircraft you purchase.' },
              ].map(item => (
                <div key={item.label} className="flex gap-5 py-4 border-b border-rule last:border-0">
                  <div className="w-1 h-5 bg-red flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-body font-semibold text-sm text-ink mb-1">{item.label}</div>
                    <div className="font-body text-sm text-ink/55 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* R44 fleet photo */}
          <div className="relative aspect-[16/6] overflow-hidden mb-12">
            <Image
              src="https://hrheli.com/wp-content/uploads/2023/06/hpark-44s-e1508203269973.jpg"
              alt="Row of Robinson R44 helicopters at Hampton Roads Charter Service"
              fill className="object-cover object-center" unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
            <div className="absolute bottom-6 left-8">
              <p className="font-mono text-xs text-white/50 tracking-widest uppercase">
                Robinson R44 Fleet · Hampton Roads Charter Service
              </p>
            </div>
          </div>

          {/* Inventory CTA — prominent */}}
          <div className="bg-navy-dark p-10 lg:p-14 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-4">Live Inventory</p>
                <h3 className="font-display text-display-sm text-white mb-4">Current aircraft for sale.</h3>
                <p className="font-body text-white/55 leading-relaxed">
                  Our live inventory is managed through Controller.com — the aviation industry's
                  leading aircraft marketplace. Click below to see all current new and pre-owned
                  aircraft available through HRCS.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
                   className="btn-outline-light px-10 py-4 text-center">
                  View Current Inventory on Controller.com ↗
                </a>
                <Link href="/contact" className="font-mono text-xs text-white/35 hover:text-white/60 transition-colors tracking-wider">
                  Or contact us directly with questions →
                </Link>
              </div>
            </div>
          </div>

          {/* Model line */}
          <p className="eyebrow mb-10">The Robinson Model Line</p>
          <div className="space-y-0">
            {robinsonModels.map((model, i) => (
              <div key={model.model} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-14 border-t border-rule last:border-b">
                <div className="lg:col-span-1">
                  <div className="font-display font-bold text-5xl text-ink/10 leading-none">{'0'+(i+1)}</div>
                </div>
                <div className="lg:col-span-4">
                  <div className="font-display font-bold text-4xl text-ink mb-1">{model.model}</div>
                  <div className="font-mono text-[10px] text-stone uppercase tracking-widest mb-4">{model.type}</div>
                  <p className="font-body text-base text-ink/60 italic mb-6">{model.tagline}</p>
                  <p className="font-body text-sm text-ink/55 leading-relaxed">{model.description}</p>
                </div>
                <div className="lg:col-span-4">
                  <div className="space-y-0">
                    {model.specs.map(spec => (
                      <div key={spec.label} className="flex justify-between py-3 border-b border-rule last:border-0">
                        <span className="font-mono text-[10px] text-stone uppercase tracking-widest">{spec.label}</span>
                        <span className="font-body text-sm text-ink font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 bg-mist">
                    <div className="font-body text-xs text-ink/50 italic">{model.highlight}</div>
                  </div>
                </div>
                <div className="lg:col-span-3 flex flex-col gap-3 justify-end">
                  <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
                     className="btn-dark w-full justify-center py-3">
                    {model.model} Inventory ↗
                  </a>
                  <Link href="/contact" className="btn-outline-dark w-full justify-center py-3">
                    Ask a Question
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed wing */}
      <section className="py-20 bg-warm border-y border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Fixed-Wing Aircraft</p>
              <h2 className="font-display text-display-md text-ink mb-6">Beyond helicopters.</h2>
              <p className="font-body text-ink/65 text-lg leading-relaxed mb-8">
                HRCS's sales expertise extends beyond the Robinson line. We work with
                select fixed-wing aircraft including the brands our team knows and
                operates firsthand.
              </p>
              <div className="flex flex-wrap gap-3">
                {fixedWingBrands.map(brand => (
                  <span key={brand} className="font-mono text-xs text-ink/60 border border-rule px-4 py-2 tracking-wider">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden bg-mist">
              <Image src={`${HRH}/2026/02/MH-Photo-8-Pilatus-scaled.jpg`}
                     alt="Pilatus aircraft" fill className="object-cover" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-rule">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-display-sm text-ink mb-4">
                Ready to find your aircraft?
              </h2>
              <p className="font-body text-ink/60 text-lg leading-relaxed">
                Browse current inventory on Controller.com, or contact us directly.
                Our team will help you find the right aircraft at the right price.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a href={site.inventoryUrl} target="_blank" rel="noopener noreferrer"
                 className="btn-dark px-8 py-3">View Inventory ↗</a>
              <Link href="/contact" className="btn-outline-dark px-8 py-3 text-center">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

