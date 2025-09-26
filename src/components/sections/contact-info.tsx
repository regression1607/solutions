"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "contact@ekrtech.solutions",
    action: "mailto:contact@ekrtech.solutions",
    color: "text-blue-500"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
    color: "text-green-500"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office location",
    value: "San Francisco, CA",
    action: "#",
    color: "text-purple-500"
  }
]

const quickActions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our team",
    action: "#"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    description: "Book a consultation",
    action: "#"
  }
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most websites take 2-4 weeks, while complex applications can take 8-12 weeks."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer comprehensive maintenance packages and 24/7 support to ensure your project continues to perform optimally."
  },
  {
    question: "What's your development process?",
    answer: "We follow a 4-step process: Discovery & Planning, Design & Strategy, Development & Testing, and Launch & Support."
  }
]

export function ContactInfo() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="space-y-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="border-0 bg-muted/30 hover:bg-muted/50 transition-colors">
                      <CardContent className="p-4">
                        <Link href={method.action} className="flex items-center space-x-4 group">
                          <div className="p-3 rounded-lg bg-background">
                            <Icon className={`w-5 h-5 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              {method.description}
                            </p>
                            <p className="text-sm font-medium">{method.value}</p>
                          </div>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <Button
                    key={action.title}
                    asChild
                    variant="outline"
                    className="h-auto p-4 justify-start"
                  >
                    <Link href={action.action}>
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <div className="text-left">
                          <div className="font-semibold">{action.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {action.description}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 bg-muted/30">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
