"use client"

import { motion } from "framer-motion"
import { Check, Star, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Strategy Audit",
    price: "$4,999",
    description: "Comprehensive digital assessment and strategy recommendations",
    features: [
      "Digital maturity assessment",
      "Technology stack analysis",
      "Process optimization review",
      "Strategic recommendations",
      "Implementation roadmap",
      "Executive presentation",
      "3 months email support"
    ],
    color: "from-indigo-500 to-blue-500",
    popular: false
  },
  {
    name: "Transformation Package",
    price: "$19,999",
    description: "Complete digital transformation consulting and implementation",
    features: [
      "Full digital strategy development",
      "Technology selection & planning",
      "Process redesign & optimization",
      "Change management support",
      "Staff training programs",
      "Implementation oversight",
      "Performance monitoring setup",
      "6 months ongoing support",
      "Quarterly strategy reviews"
    ],
    color: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Enterprise Advisory",
    price: "Custom",
    description: "Ongoing strategic advisory and transformation leadership",
    features: [
      "Dedicated consulting team",
      "Continuous strategy optimization",
      "Advanced analytics setup",
      "Custom solution development",
      "Executive coaching",
      "Board-level reporting",
      "Risk management framework",
      "Innovation workshops",
      "12 months partnership",
      "Priority support access"
    ],
    color: "from-orange-500 to-red-500",
    popular: false
  }
]

export function DigitalConsultingPricing() {
  return (
    <section className="py-24">
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
            Consulting{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Strategic consulting packages designed to accelerate your digital transformation journey. 
            All plans include expert guidance and measurable results.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <Card className={`border-0 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full ${
                plan.popular ? 'ring-2 ring-purple-500/20 scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/engagement</span>}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button 
                    asChild 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">
                      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            All consulting engagements include free initial consultation and detailed strategy documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>ROI-focused approach</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Industry expertise</span>
            </span>
            <span className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Measurable outcomes</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
