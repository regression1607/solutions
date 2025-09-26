"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    id: "1",
    name: "Eka Kumar",
    role: "Founder & CEO",
    bio: "Passionate about creating innovative solutions that drive business growth.",
    avatar: "EK",
    social: {
      linkedin: "https://linkedin.com/in/ekakumar",
      github: "https://github.com/ekakumar",
      twitter: "https://twitter.com/ekakumar"
    },
    skills: ["Leadership", "Strategy", "Full-Stack Development"]
  },
  {
    id: "2", 
    name: "Sarah Johnson",
    role: "Lead Developer",
    bio: "Expert in modern web technologies with a focus on performance and user experience.",
    avatar: "SJ",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    },
    skills: ["React", "Node.js", "TypeScript"]
  },
  {
    id: "3",
    name: "Michael Chen", 
    role: "UI/UX Designer",
    bio: "Creative designer who transforms ideas into beautiful and intuitive user experiences.",
    avatar: "MC",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen"
    },
    skills: ["UI Design", "UX Research", "Prototyping"]
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "AI Specialist", 
    bio: "AI and machine learning expert focused on creating intelligent solutions.",
    avatar: "ER",
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez"
    },
    skills: ["Machine Learning", "Python", "AI Integration"]
  }
]

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Our diverse team of experts brings together years of experience in technology, 
            design, and business to deliver exceptional results.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300 text-center h-full">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <Link
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  )}
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
