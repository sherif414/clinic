export interface ClinicalService {
  id: string
  name: string
  badge?: string
  price: number
  duration: string
  description: string
  features: string[]
}

export interface Clinician {
  id: string
  name: string
  specialty: string
}

export interface PatientForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  injuryArea: string
  notes: string
  isFirstVisit: boolean
  hasReferral: boolean
}
