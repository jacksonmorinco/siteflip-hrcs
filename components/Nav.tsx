'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { site } from '@/data/content'

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || menuOpen ? 'bg-navy-dark shadow-xl' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>

      {/* Sister company banner */}
      <div className="bg-navy-dark/80 border-b border-white/8">
        <div className="section-inner py-1.5 flex items-center justify-between">
          <span className="font-mono text-[9px] text-white/30 tracking-[0.18em] uppercase">
            Robinson Dealership · FAA Part 135 · Est. 2005
          </span>
          <a href="https://hrheli.com" target="_blank" rel="noopener noreferrer"
             className="font-mono text-[9px] text-white/30 tracking-[0.18em] uppercase
                        hover:text-white/60 transition-colors duration-200">
            Flight Operations & Training →&nbsp;Hampton Roads Helicopters
          </a>
        </div>
      </div>

      <nav className="section-inner">
        <div className="flex items-center justify-between h-18">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-display font-bold text-xl text-white tracking-wide
                             group-hover:text-white/80 transition-colors duration-200">
              Hampton Roads Charter Service
            </span>
            <span className="font-mono text-[9px] text-white/35 tracking-[0.2em] uppercase mt-0.5">
              Robinson Dealership · Chesapeake, Virginia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/about"   className="nav-item">About</Link>
            <Link href="/sales"   className="nav-item">Aircraft Sales</Link>
            <Link href="/charter" className="nav-item">Charter</Link>
            <Link href="/contact" className="nav-item">Contact</Link>
            <a href={`tel:${site.phone.replace(/\./g,'')}`}
               className="font-mono text-xs text-white/40 tracking-wider hover:text-white transition-colors duration-200">
              {site.phone}
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden p-2 text-white" aria-label="Menu">
            <div className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <div className={`w-6 h-px bg-white mt-[5px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-white mt-[5px] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10">
          <div className="section-inner py-6 flex flex-col gap-1">
            {[
              { href: '/about',   label: 'About'          },
              { href: '/sales',   label: 'Aircraft Sales'  },
              { href: '/charter', label: 'Charter'         },
              { href: '/contact', label: 'Contact'         },
            ].map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                    className="font-body text-base text-white/70 hover:text-white py-3 border-b border-white/8 transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="https://hrheli.com" target="_blank" rel="noopener noreferrer"
               className="font-body text-sm text-white/40 hover:text-white/70 py-3 transition-colors">
              Hampton Roads Helicopters →
            </a>
            <a href={`tel:${site.phone.replace(/\./g,'')}`}
               className="font-mono text-sm text-white/40 tracking-wider mt-2">{site.phone}</a>
          </div>
        </div>
      )}
    </header>
  )
}
