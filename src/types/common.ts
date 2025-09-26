export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  children?: NavItem[]
  description?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image?: string
  price?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  url?: string
  github?: string
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  service?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    linkedin: string
  }
}
