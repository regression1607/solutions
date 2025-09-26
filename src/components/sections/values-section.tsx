"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Shield, Rocket } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "We put our clients at the heart of everything we do, ensuring their success is our primary goal.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "We deliver robust, secure, and scalable solutions that stand the test of time.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "We're committed to continuous learning and improvement, staying ahead of industry trends.",
    color: "from-blue-500 to-purple-500"
  }
]

const mission = {
  title: "Our Mission",
  content: "To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital landscape."
}

const vision = {
  title: "Our Vision", 
  content: "To be the leading technology partner that transforms ideas into reality, creating lasting impact for businesses worldwide."
}

export function ValuesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">{mission.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{mission.content}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">{vision.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{vision.content}</p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Values
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            These core values guide our decisions, shape our culture, and define how we work with our clients and each other.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
