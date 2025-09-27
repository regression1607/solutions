"use client"

import { motion } from "framer-motion"
import { BarChart3, ShoppingCart, User, Briefcase } from "lucide-react"
import { LaptopAnimation } from "@/components/animations/DeviceAnimations"

const examples = [
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization with interactive charts and KPI tracking",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    features: ["Real-time Analytics", "Custom Charts", "Data Export", "User Management"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col">
        {/* Dashboard Header */}
        <div className="p-3 bg-slate-800 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="h-2 bg-blue-400 rounded w-20"></div>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-slate-600 rounded"></div>
              <div className="w-4 h-2 bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="flex-1 p-3 space-y-2">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="h-6 bg-slate-700 rounded flex items-center justify-center"
              >
                <div className="w-3 h-1 bg-green-400 rounded"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="h-12 bg-slate-700 rounded p-2"
          >
            <div className="flex items-end justify-between h-full">
              {[4, 7, 3, 8, 5, 9, 6].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 10}%` }}
                  transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                  className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Table */}
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
                className="flex space-x-1"
              >
                <div className="w-8 h-1 bg-slate-600 rounded"></div>
                <div className="w-12 h-1 bg-slate-600 rounded"></div>
                <div className="w-6 h-1 bg-green-400 rounded"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "ecommerce",
    title: "E-commerce Store",
    description: "Full-featured online store with shopping cart, payments, and inventory management",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-green-900 flex flex-col">
        {/* Store Header */}
        <div className="p-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="h-2 bg-green-400 rounded w-16"></div>
            <div className="flex space-x-1">
              <div className="w-3 h-2 bg-gray-600 rounded"></div>
              <div className="w-3 h-2 bg-orange-400 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="flex-1 p-2">
          <div className="grid grid-cols-2 gap-1 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                className="bg-gray-700 rounded p-1"
              >
                <div className="h-4 bg-gray-600 rounded mb-1"></div>
                <div className="h-1 bg-gray-500 rounded mb-1"></div>
                <div className="h-1 bg-green-400 rounded w-1/2"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Cart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="bg-green-600 rounded p-1 text-center"
          >
            <div className="h-1 bg-white rounded w-1/2 mx-auto"></div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Stunning portfolio showcase with project galleries and contact forms",
    icon: User,
    color: "from-purple-500 to-pink-500",
    features: ["Project Gallery", "About Section", "Contact Form", "Blog Integration"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-purple-900 flex flex-col">
        {/* Portfolio Header */}
        <div className="p-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="h-2 bg-purple-400 rounded w-12"></div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-600 rounded"></div>
              <div className="w-2 h-2 bg-gray-600 rounded"></div>
              <div className="w-2 h-2 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="p-2 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-1"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="h-1 bg-gray-300 rounded w-1/2 mx-auto mb-1"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="h-1 bg-gray-500 rounded w-1/3 mx-auto"
          />
        </div>
        
        {/* Project Grid */}
        <div className="flex-1 p-2">
          <div className="grid grid-cols-2 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + i * 0.1 }}
                className="h-6 bg-gray-700 rounded"
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "business",
    title: "Business Website",
    description: "Professional corporate websites with CMS, SEO optimization, and lead generation",
    icon: Briefcase,
    color: "from-orange-500 to-red-500",
    features: ["CMS Integration", "SEO Optimized", "Lead Generation", "Multi-language"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-orange-900 flex flex-col">
        {/* Business Header */}
        <div className="p-2 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="h-2 bg-orange-400 rounded w-20"></div>
            <div className="flex space-x-1">
              <div className="w-8 h-1 bg-gray-600 rounded"></div>
              <div className="w-8 h-1 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
        
        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-8 bg-gradient-to-r from-orange-600 to-red-600 m-2 rounded flex items-center justify-center"
        >
          <div className="w-12 h-1 bg-white rounded"></div>
        </motion.div>
        
        {/* Content Sections */}
        <div className="flex-1 p-2 space-y-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="h-1 bg-gray-300 rounded w-3/4"
          />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="h-1 bg-gray-500 rounded w-1/2"
          />
          
          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-1 mt-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                className="h-4 bg-gray-700 rounded"
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="h-2 bg-orange-500 rounded w-1/3 mt-2"
          />
        </div>
      </div>
    )
  }
]

export function WebDevelopmentExamples() {
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
            Website{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Examples
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Explore our diverse range of web development projects, from dashboards to e-commerce stores.
          </motion.p>
        </div>

        {/* Examples Grid */}
        <div className="space-y-24">
          {examples.map((example, index) => {
            const Icon = example.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={example.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={isEven ? '' : 'lg:col-start-2'}
                >
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${example.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                    <Icon className="w-4 h-4" />
                    <span>{example.title}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{example.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {example.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {example.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${example.color}`} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Laptop Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex ${isEven ? 'justify-end' : 'justify-start'} ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  <LaptopAnimation className="w-full max-w-md" delay={0.3}>
                    {example.content}
                  </LaptopAnimation>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
