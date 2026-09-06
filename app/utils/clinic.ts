export interface ClinicScheduleItem {
  days: string
  time: string
  isClosed?: boolean
}

export interface ClinicContact {
  name: string
  tagline: string
  phone: {
    display: string
    tel: string
    ariaLabel: string
  }
  address: {
    facilityName: string
    street: string
    city: string
    state: string
    zip: string
    full: string
    landmark: string
    parking: string
    fastestRoute: string
    mapsUrl: string
  }
  hours: {
    statusText: string
    summary: string
    weekdays?: string
    saturday?: string
    schedule: ClinicScheduleItem[]
  }
}

export const clinicInfo: ClinicContact = {
  name: 'Apex Sports & Physical Therapy',
  tagline: 'Doctoral Sports Medicine & Performance',
  phone: {
    display: '(512) 555-0199',
    tel: '5125550199',
    ariaLabel: 'Call clinic at (512) 555-0199'
  },
  address: {
    facilityName: 'Austin Flagship Facility',
    street: '1204 S. Congress Ave, Suite 300',
    city: 'Austin',
    state: 'TX',
    zip: '78704',
    full: '1204 S. Congress Ave, Suite 300, Austin, TX 78704',
    landmark: '2 MIN OFF S. CONGRESS & OLTORF',
    parking: 'Complimentary dedicated garage parking on Level 1 (Stalls 101–125).',
    fastestRoute: 'Fastest route: S. Congress Ave to Live Oak St parking garage entry',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1204+S+Congress+Ave+Suite+300+Austin+TX+78704'
  },
  hours: {
    statusText: 'Open Today until 7:00 PM',
    summary: 'Mon–Fri: 7:00 AM – 7:00 PM • Sat: 8:00 AM – 1:00 PM',
    weekdays: 'Mon–Fri: 7:00 AM – 7:00 PM',
    saturday: 'Sat: 8:00 AM – 1:00 PM',
    schedule: [
      { days: 'Monday – Thursday', time: '7:00 AM – 7:00 PM' },
      { days: 'Friday', time: '7:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 1:00 PM' },
      { days: 'Sunday', time: 'Closed (Emergency Triage On-Call)', isClosed: true }
    ]
  }
}
