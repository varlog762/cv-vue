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
  workExperience: {
    position: string
    working_term: string
    obligations: string
  }[]
}
