"use client"

import { motion } from "framer-motion"
import { Target, Users, Zap, Award } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members", value: "15+", color: "text-blue-500" },
  { icon: Award, label: "Years Experience", value: "5+", color: "text-green-500" },
  { icon: Target, label: "Projects Delivered", value: "50+", color: "text-purple-500" },
  { icon: Zap, label: "Client Satisfaction", value: "99%", color: "text-orange-500" },
]

export function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EKR Tech Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              We are a passionate team of developers, designers, and innovators dedicated to 
              transforming businesses through cutting-edge technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg mx-auto text-muted-foreground"
            >
              <p>
                Founded with a vision to bridge the gap between innovative technology and business success, 
                EKR Tech Solutions has grown into a trusted partner for companies looking to thrive in the digital age. 
                Our expertise spans web development, mobile applications, AI integration, and digital consulting.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-muted to-muted/50 mb-4 mx-auto w-fit">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
