import type { JobInterface, UniversityInterface, PersonalInfoInterface } from '@/interfaces'

export interface ProfileInterface {
  position: string
  personalInfo: PersonalInfoInterface
  workExperience: JobInterface[]
  education: UniversityInterface[]
  aboutMe: string
  skills: string[]
  languages: string[]
}
