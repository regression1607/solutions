export const SITE_CONFIG = {
  name: "EKR Tech Solutions",
  description: "Cutting-edge technology services including website creation, app development, AI integration, and automated solutions.",
  url: "https://ekrtech.solutions",
  ogImage: "https://ekrtech.solutions/og.jpg",
  links: {
    twitter: "https://twitter.com/ekrtech",
    github: "https://github.com/ekrtech",
    linkedin: "https://linkedin.com/company/ekrtech",
  },
}

export const NAVIGATION_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
        description: "Custom websites and web applications",
      },
      {
        title: "App Development",
        href: "/services/app-development",
        description: "Mobile and desktop applications",
      },
      {
        title: "AI Integration",
        href: "/services/ai-integration",
        description: "AI-powered solutions and automation",
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: "Code",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Modern Frameworks",
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Mobile and desktop applications for all platforms",
    icon: "Smartphone",
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "App Store Deployment",
      "Maintenance & Updates",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description: "AI-powered solutions and intelligent automation",
    icon: "Brain",
    features: [
      "Chatbot Development",
      "Machine Learning",
      "Process Automation",
      "Data Analytics",
    ],
  },
]

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
  },
}
