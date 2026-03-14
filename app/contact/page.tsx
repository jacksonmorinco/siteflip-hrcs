import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { site } from '@/data/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Hampton Roads Charter Service. Aircraft sales inquiries, charter bookings, and general questions. Located at Hampton Roads Executive Airport, Chesapeake VA.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact HRCS"
        headline="Get in touch."
        subhead="Aircraft sales, charter inquiries, leasing questions, or anything else — we look forward to hearing from you."
      />

      <section className="py-24 bg-cream">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            <div>
              <div className="font-mono text-[10px] text-stone tracking-widest uppercase mb-8">Contact Information</div>
              <div className="space-y-6 mb-12">
                {[
                  { label: 'Phone', value: site.phone,   href: `tel:${site.phone.replace(/\./g,'')}` },
                  { label: 'Fax',   value: site.fax,     href: null },
                  { label: 'Email', value: site.email,   href: `mailto:${site.email}` },
                ].map(item => (
                  <div key={item.label}>
                    <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-body text-base text-ink hover:text-red transition-colors">{item.value}</a>
                    ) : (
                      <div className="font-body text-base text-ink/60">{item.value}</div>
                    )}
                  </div>
                ))}
                <div>
                  <div className="font-mono text-[9px] text-red tracking-widest uppercase mb-1">Location</div>
                  <address className="not-italic font-body text-base text-ink/70 leading-relaxed">
                    {site.address}<br />{site.city}<br />
                    <span className="font-mono text-[10px] text-stone uppercase tracking-widest">{site.airport}</span>
                  </address>
                </div>
              </div>

              <div className="border-t border-rule pt-8">
                <div className="font-mono text-[10px] text-stone tracking-widest uppercase mb-4">How Can We Help?</div>
                <div className="space-y-3">
                  {[
                    'Aircraft purchase or lease inquiry',
                    'Charter flight booking',
                    'Current inventory questions',
                    'Aircraft management',
                    'General inquiry',
                  ].map(item => (
                    <div key={item} className="font-body text-sm text-ink/55 flex items-start gap-3">
                      <span className="text-red mt-0.5 flex-shrink-0">—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-rule pt-8">
                <div className="font-mono text-[10px] text-stone tracking-widest uppercase mb-3">Sister Company</div>
                <p className="font-body text-sm text-ink/55 leading-relaxed mb-3">
                  For flight training, aerial tours, and maintenance services:
                </p>
                <a href="https://hrheli.com" target="_blank" rel="noopener noreferrer"
                   className="font-mono text-xs text-red tracking-wider hover:text-red-dark transition-colors">
                  Hampton Roads Helicopters →
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
