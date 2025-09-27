"use client"

import { motion } from "framer-motion"
import { ShoppingBag, MessageCircle, Heart, TrendingUp } from "lucide-react"
import { MobileAnimation } from "@/components/animations/DeviceAnimations"

const examples = [
  {
    id: "ecommerce-app",
    title: "E-commerce Mobile App",
    description: "Full-featured shopping app with cart, payments, and user profiles",
    icon: ShoppingBag,
    color: "from-purple-500 to-pink-500",
    features: ["Product Catalog", "Secure Payments", "User Profiles", "Push Notifications"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex flex-col">
        {/* Status Bar */}
        <div className="flex items-center justify-between p-2 text-white text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="p-3 bg-purple-800/50 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-2 bg-white rounded w-16"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="w-3 h-3 bg-orange-400 rounded-full"
          />
        </div>
        
        {/* Product Grid */}
        <div className="flex-1 p-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                className="bg-gray-800/50 rounded p-1"
              >
                <div className="h-6 bg-gray-700 rounded mb-1"></div>
                <div className="h-1 bg-gray-500 rounded mb-1"></div>
                <div className="h-1 bg-purple-400 rounded w-1/2"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Add to Cart */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded p-2 text-center"
          >
            <div className="h-1 bg-white rounded w-1/2 mx-auto"></div>
          </motion.div>
        </div>
        
        {/* Bottom Nav */}
        <div className="p-2 bg-gray-800/50 border-t border-gray-700/30">
          <div className="flex justify-around">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 2.5 + i * 0.1 }}
                className={`w-3 h-3 rounded ${i === 1 ? 'bg-purple-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "social-app",
    title: "Social Media App",
    description: "Engaging social platform with feeds, messaging, and real-time interactions",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    features: ["Real-time Chat", "Media Sharing", "Social Feed", "User Connections"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-900 flex flex-col">
        {/* Status Bar */}
        <div className="flex items-center justify-between p-2 text-white text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="p-3 bg-blue-800/50 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-2 bg-white rounded w-12"
          />
          <div className="flex space-x-1">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              className="w-2 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </div>
        
        {/* Feed */}
        <div className="flex-1 p-3 space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
              className="bg-gray-800/50 rounded p-2"
            >
              {/* Post Header */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="h-1 bg-gray-400 rounded flex-1"></div>
              </div>
              
              {/* Post Content */}
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              
              {/* Post Actions */}
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <div className="w-2 h-1 bg-red-400 rounded"></div>
                  <div className="w-2 h-1 bg-blue-400 rounded"></div>
                </div>
                <div className="w-3 h-1 bg-gray-500 rounded"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Nav */}
        <div className="p-2 bg-gray-800/50 border-t border-gray-700/30">
          <div className="flex justify-around">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 2.8 + i * 0.1 }}
                className={`w-3 h-3 rounded ${i === 2 ? 'bg-blue-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: "fitness-app",
    title: "Fitness & Health App",
    description: "Comprehensive health tracking with workouts, nutrition, and progress monitoring",
    icon: Heart,
    color: "from-red-500 to-orange-500",
    features: ["Workout Tracking", "Nutrition Plans", "Progress Analytics", "Health Metrics"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-red-900 to-orange-900 flex flex-col">
        {/* Status Bar */}
        <div className="flex items-center justify-between p-2 text-white text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="p-3 bg-red-800/50 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mx-auto mb-1"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="h-1 bg-white rounded w-1/3 mx-auto"
          />
        </div>
        
        {/* Stats Cards */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { label: "Steps", color: "bg-green-500" },
              { label: "Calories", color: "bg-orange-500" },
              { label: "Distance", color: "bg-blue-500" },
              { label: "Time", color: "bg-purple-500" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                className="bg-gray-800/50 rounded p-2 text-center"
              >
                <div className={`h-1 ${stat.color} rounded mb-1`}></div>
                <div className="h-1 bg-gray-500 rounded w-1/2 mx-auto"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Progress Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="bg-gray-800/50 rounded p-2 mb-3"
          >
            <div className="flex items-end justify-between h-8">
              {[3, 7, 4, 8, 5, 9, 6].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height * 10}%` }}
                  transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
                  className="w-1 bg-gradient-to-t from-red-500 to-orange-400 rounded-t"
                />
              ))}
            </div>
          </motion.div>
          
          {/* Start Workout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 rounded p-2 text-center"
          >
            <div className="h-1 bg-white rounded w-1/2 mx-auto"></div>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "fintech-app",
    title: "FinTech & Banking App",
    description: "Secure financial app with transactions, analytics, and investment tracking",
    icon: TrendingUp,
    color: "from-green-500 to-teal-500",
    features: ["Secure Transactions", "Investment Tracking", "Budget Analytics", "Bill Management"],
    content: (
      <div className="w-full h-full bg-gradient-to-br from-green-900 to-teal-900 flex flex-col">
        {/* Status Bar */}
        <div className="flex items-center justify-between p-2 text-white text-xs">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="p-3 bg-green-800/50 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="h-2 bg-white rounded w-16"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="w-3 h-3 bg-yellow-400 rounded-full"
          />
        </div>
        
        {/* Balance Card */}
        <div className="p-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-3 mb-3"
          >
            <div className="h-1 bg-white/60 rounded w-1/4 mb-2"></div>
            <div className="h-2 bg-white rounded w-1/2"></div>
          </motion.div>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 2 + i * 0.1 }}
                className="bg-gray-800/50 rounded p-2 text-center"
              >
                <div className="w-3 h-3 bg-green-400 rounded mx-auto mb-1"></div>
                <div className="h-1 bg-gray-500 rounded"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Transactions */}
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.5 + i * 0.2 }}
                className="bg-gray-800/50 rounded p-2 flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <div>
                    <div className="h-1 bg-gray-400 rounded w-8 mb-1"></div>
                    <div className="h-1 bg-gray-600 rounded w-6"></div>
                  </div>
                </div>
                <div className="h-1 bg-green-400 rounded w-6"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }
]

export function AppDevelopmentExamples() {
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
            Mobile App{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
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
            Discover our diverse portfolio of mobile applications across different industries and use cases.
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

                {/* Mobile Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex ${isEven ? 'justify-end' : 'justify-start'} ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  <MobileAnimation className="w-full max-w-xs" delay={0.3}>
                    {example.content}
                  </MobileAnimation>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
