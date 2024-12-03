import type {
  JobInterface,
  UniversityInterface,
  PersonalInfoInterface,
  ProjectInterface,
} from '@/interfaces'

export interface ProfileInterface {
  position: string
  personalInfo: PersonalInfoInterface
  workExperience: JobInterface[]
  education: UniversityInterface[]
  aboutMe: string
  projects: ProjectInterface[]
  skills: string[]
  languages: string[]
}
