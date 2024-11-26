import type { JobInterface, UniversityInterface } from '@/interfaces'

export interface ProfileInterface {
  position: string
  personal_info: {
    firstName: string
    lastName: string
    patronymic?: string
    emailLink: string
    githubLink: string
    linkedInLink: string
    phone: string
  }
  workExperience: JobInterface[]
  education: UniversityInterface[]
}
