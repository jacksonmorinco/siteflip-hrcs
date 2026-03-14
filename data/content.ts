// ─────────────────────────────────────────────────────────
// Hampton Roads Charter Service — Content Data
// Scraped from hrcharterservice.com + hrheli.com, March 2026
// ─────────────────────────────────────────────────────────

export const site = {
  name:        'Hampton Roads Charter Service',
  shortName:   'HRCS',
  tagline:     'Robinson Dealership · FAA Part 135 Charter Operator',
  phone:       '757.488.9044',
  fax:         '757.488.2033',
  email:       'flying@hrheli.com',
  address:     '5196 W Military Hwy',
  city:        'Chesapeake, VA 23321',
  airport:     'Hampton Roads Executive Airport (PVG)',
  partnerName: 'Hampton Roads Helicopters (HRH)',
  partnerUrl:  'https://hrheli.com',
  cert:        'H4RA894W',
  faaReg:      'FAA Part 135',
  robinson:    'International Robinson Helicopter Dealership',
  founded:     '2005',
  inventoryUrl: 'https://www.hrcharterservice.com/inventory/',
}

export const stats = [
  { value: '20+',         label: 'Years as Robinson Dealer'      },
  { value: 'Part 135',    label: 'FAA Certified Air Carrier'     },
  { value: 'R22 · R44 · R66', label: 'Full Robinson Model Line' },
  { value: '100+',        label: 'Years Combined Experience'     },
]

// Robinson model line — the core product
export const robinsonModels = [
  {
    model:       'R22',
    fullName:    'Robinson R22 Beta II',
    type:        'Two-Seat Light Helicopter',
    tagline:     'The world\'s most popular training helicopter.',
    description: 'The R22 has the lowest acquisition and operating costs of any production helicopter, making it the aircraft of choice for flight schools worldwide. Its straightforward systems and responsive handling make it the ideal platform for building foundational helicopter skills.',
    specs: [
      { label: 'Seats',       value: '2'             },
      { label: 'Engine',      value: 'Lycoming O-320' },
      { label: 'Max Speed',   value: '102 kts'        },
      { label: 'Range',       value: '~200 nm'        },
      { label: 'Primary Use', value: 'Flight Training' },
    ],
    highlight: 'Most economical helicopter to own and operate.',
  },
  {
    model:       'R44',
    fullName:    'Robinson R44 Cadet / Clipper II / Raven II',
    type:        'Four-Seat Piston Helicopter',
    tagline:     'The world\'s most popular helicopter.',
    description: 'The R44 is Robinson\'s flagship piston helicopter — versatile, reliable, and trusted by operators worldwide for charter, training, aerial photography, and personal use. Available in multiple variants including the float-equipped Clipper II for water operations.',
    specs: [
      { label: 'Seats',       value: '4'                    },
      { label: 'Engine',      value: 'Lycoming IO-540'       },
      { label: 'Max Speed',   value: '120 kts'               },
      { label: 'Range',       value: '~300 nm'               },
      { label: 'Primary Use', value: 'Charter, Training, Personal' },
    ],
    highlight: 'World\'s most popular helicopter. Trusted globally.',
  },
  {
    model:       'R66',
    fullName:    'Robinson R66 Turbine',
    type:        'Five-Seat Turbine Helicopter',
    tagline:     'Turbine performance. Robinson reliability.',
    description: 'The R66 takes the beloved design and handling of the R44 and adds the performance and high-altitude capability of a turbine engine. Five seats, higher cruise speed, and greater range make it the choice for executive transport, aerial work, and demanding operational environments.',
    specs: [
      { label: 'Seats',       value: '5'                          },
      { label: 'Engine',      value: 'Rolls-Royce RR300'          },
      { label: 'Max Speed',   value: '130 kts'                    },
      { label: 'Range',       value: '~350 nm'                    },
      { label: 'Primary Use', value: 'Executive, Aerial Work, EMS' },
    ],
    highlight: 'Turbine performance with lowest turbine acquisition cost.',
  },
]

export const fixedWingBrands = [
  'Beechcraft', 'Cessna', 'Citation', 'Mitsubishi', 'Socata', 'Pilatus', 'Cirrus',
]

export const charterInfo = {
  headline:  'FAA Part 135 Certified Air Carrier',
  subhead:   'All charter flights conducted under Certificate #H4RA894W — the same rigorous federal standards that govern commercial air carriers.',
  body:      'Whether you have a business meeting in Baltimore or are traveling to the Outer Banks for vacation, HRCS can get you there stress-free and in a fraction of the driving time. We utilize the Robinson R44 helicopter to take you door to door, in one of the most reliable and efficient means of air travel. Our professional and courteous pilots go through annual recurrent training and checkouts so that you can sit back and relax, knowing you will arrive safely on time and in style.',
  cert:      'H4RA894W',
  aircraft:  'Robinson R44',
  travelTimes: [
    { destination: 'Washington, DC',   time: '1 Hr 30 Min' },
    { destination: 'Baltimore',        time: '1 Hr 30 Min' },
    { destination: 'Richmond',         time: '40 Minutes'  },
    { destination: 'The Outer Banks',  time: '40 Minutes'  },
    { destination: 'Raleigh-Durham',   time: '1 Hr 20 Min' },
  ],
}

// HRCS team — same core team as HRH, led by the founding story
export const team = [
  {
    name:  'Andy Gibbs',
    title: 'Founder (1955–2013)',
    bio:   'Andy Gibbs founded Hampton Roads Charter Service and built it into a Part 135 Charter Operator and Robinson Helicopter Service Center and Dealership. In 2000, he expanded his aviation interests to become a part owner of Hampton Roads Executive Airport and helped guide it to becoming a premier regional airport. His entrepreneurial spirit continues to drive HRCS today.',
    legacy: true,
  },
  {
    name:  'Dave Hynes',
    title: 'President & Co-Founder, HRH',
    bio:   'Dave Hynes joined Andy Gibbs in 2005 to build HRH alongside HRCS. A U.S. Air Force Academy graduate with over 18,000 accident-free flight hours, Dave personally oversees all operations for both companies.',
    legacy: false,
  },
  {
    name:  'Patrick Hynes',
    title: 'Director of Maintenance',
    bio:   'Patrick left American Airlines in 2014 to serve as Director of Maintenance, bringing airline-grade standards to the entire fleet. His background spans the Army, the airlines, and a lifetime in the Hynes family aviation tradition.',
    legacy: false,
  },
  {
    name:  'Greg Doloresco',
    title: 'Operations Coordinator',
    bio:   'A Virginia native and Virginia Tech graduate, Greg coordinates operations across both companies. His grandfather was a retired U.S. Air Force aircraft technician — aviation runs in the family.',
    legacy: false,
  },
  {
    name:  'Erwin',
    title: 'Pilot & Sales Representative',
    bio:   'A third-generation native Californian who has called many places home. Erwin has lived several lives — art student, political science graduate, and in his longest incarnation, a Cavalry Officer in the U.S. Army, a twice-spurred leader of scouts and infantrymen. He now brings that discipline and character to HRCS.',
    legacy: false,
  },
]

export const services = [
  {
    slug:  'sales',
    title: 'Aircraft Sales & Leasing',
    short: 'International Robinson dealership. New and pre-owned R22, R44, and R66.',
    href:  '/sales',
  },
  {
    slug:  'charter',
    title: 'Helicopter Charter',
    short: 'FAA Part 135 certified air carrier. Door-to-door helicopter transport.',
    href:  '/charter',
  },
  {
    slug:  'training',
    title: 'Flight Training',
    short: 'Full FAA Part 61 training — Private Pilot through ATP.',
    href:  'https://hrheli.com/training',
    external: true,
  },
  {
    slug:  'maintenance',
    title: 'Maintenance',
    short: 'Robinson Factory Authorized Service Center.',
    href:  'https://hrheli.com/maintenance',
    external: true,
  },
  {
    slug:  'aerial',
    title: 'Aerial Photography',
    short: 'Professional aerial photography and videography services.',
    href:  '/charter',
  },
  {
    slug:  'management',
    title: 'Aircraft Management',
    short: 'Full aircraft management and pilot services.',
    href:  '/contact',
  },
]

export const credibilitySignals = [
  {
    label: 'Robinson International Dealer',
    text:  'HRCS is a long-standing internationally respected Robinson Helicopter dealership — one of a select network of authorized dealers worldwide for the R22, R44, and R66 model lines.',
  },
  {
    label: 'FAA Part 135 Certificate H4RA894W',
    text:  'HRCS holds an FAA Part 135 Air Carrier Certificate, the same regulatory standard that governs commercial charter operations. Every charter flight is conducted under this certificate.',
  },
  {
    label: 'Hampton Roads Executive Airport',
    text:  'Based at Hampton Roads Executive Airport (PVG) — a premier regional airport that Andy Gibbs helped develop as a part owner beginning in 2000.',
  },
  {
    label: 'Founded 2005 by Andy Gibbs',
    text:  'Andy Gibbs built HRCS from the ground up into both a certified air carrier and an authorized Robinson dealership. His legacy continues under the Hynes family leadership.',
  },
]
