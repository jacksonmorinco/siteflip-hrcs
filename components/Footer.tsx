import Link from 'next/link'
import { site } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="section-inner py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-2">
            <div className="font-display font-bold text-xl text-white mb-1">Hampton Roads Charter Service</div>
            <div className="font-mono text-[9px] text-white/30 tracking-[0.2em] uppercase mb-6">
              Robinson Dealership · FAA Part 135 Air Carrier
            </div>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              International Robinson Helicopter dealership and FAA Part 135 certified air carrier.
              Based at Hampton Roads Executive Airport since 2005.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['FAA Part 135', 'Robinson Int\'l Dealer', 'Est. 2005'].map(badge => (
                <span key={badge} className="font-mono text-[9px] tracking-widest uppercase text-white/25 border border-white/10 px-3 py-1.5">
                  {badge}
                </span>
              ))}
            </div>
            {/* Sister company link */}
            <div className="border-t border-white/10 pt-6">
              <div className="font-mono text-[9px] text-white/25 tracking-widest uppercase mb-2">Sister Company</div>
              <a href="https://hrheli.com" target="_blank" rel="noopener noreferrer"
                 className="font-body text-sm text-white/50 hover:text-white transition-colors duration-200">
                Hampton Roads Helicopters →
                <span className="block font-mono text-[9px] text-white/25 tracking-wider mt-0.5">
                  Flight Operations · Training · Maintenance · Tours
                </span>
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-6">Quick Links</div>
            <div className="flex flex-col gap-3">
              {[
                { href: '/about',            label: 'About HRCS'           },
                { href: '/sales',            label: 'Aircraft Sales'        },
                { href: '/charter',          label: 'Helicopter Charter'    },
                { href: site.inventoryUrl,   label: 'Current Inventory'     },
                { href: '/contact',          label: 'Contact'               },
              ].map(link => (
                link.href.startsWith('http') ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                     className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150">
                    {link.label} ↗
                  </a>
                ) : (
                  <Link key={link.href} href={link.href}
                        className="font-body text-sm text-white/45 hover:text-white transition-colors duration-150">
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-6">Contact</div>
            <div className="space-y-4 font-body text-sm">
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Phone</div>
                <a href={`tel:${site.phone.replace(/\./g,'')}`} className="text-white hover:text-white/70 transition-colors">{site.phone}</a>
              </div>
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Email</div>
                <a href={`mailto:${site.email}`} className="text-white/50 hover:text-white transition-colors">{site.email}</a>
              </div>
              <div>
                <div className="text-white/25 font-mono text-[9px] uppercase tracking-wider mb-1">Location</div>
                <address className="not-italic text-white/40 leading-relaxed">
                  {site.address}<br />{site.city}<br />
                  <span className="text-white/25 text-xs">{site.airport}</span>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="section-inner py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-[10px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} Hampton Roads Charter Service · Cert. {site.cert}
          </div>
          <div className="font-mono text-[10px] text-white/20 tracking-wide">
            Prototype by{' '}
            <a href="https://home.jacksonmorinco.com" className="hover:text-white/40 transition-colors">
              Jackson, Morin &amp; Co.
            </a>
            {' '}· SiteFlip
          </div>
        </div>
      </div>
    </footer>
  )
}
