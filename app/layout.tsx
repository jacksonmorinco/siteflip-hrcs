import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Hampton Roads Charter Service',
    default:  'Hampton Roads Charter Service — Robinson Dealership · FAA Part 135',
  },
  description: 'Hampton Roads Charter Service is an international Robinson Helicopter dealership and FAA Part 135 certified air carrier based at Hampton Roads Executive Airport, Chesapeake, Virginia.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
