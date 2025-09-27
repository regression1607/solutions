"use client"

import { motion } from "framer-motion"
import { MessageCircle, BarChart3, Cog, Eye } from "lucide-react"
import { AIAnimation } from "@/components/animations/DeviceAnimations"

const examples = [
  {
    id: "chatbot",
    title: "AI Chatbot & Virtual Assistant",
    description: "Intelligent conversational AI that handles customer support, lead generation, and user engagement 24/7",
    icon: MessageCircle,
    color: "from-blue-500 to-cyan-500",
    features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "Integration Ready"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
            />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-xs text-cyan-400 font-mono"
            >
              AI Assistant
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-xs text-gray-400"
          >
            Online
          </motion.div>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 space-y-3 overflow-hidden">
          {/* User Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex justify-end"
          >
            <div className="bg-blue-600 rounded-lg p-2 max-w-[70%]">
              <div className="h-1 bg-blue-200 rounded w-16 mb-1" />
              <div className="h-1 bg-blue-300 rounded w-12" />
            </div>
          </motion.div>
          
          {/* AI Typing Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <div className="bg-gray-700 rounded-lg p-2">
              <div className="flex space-x-1">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 2.5 + i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="w-1 h-1 bg-cyan-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* AI Response */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.5 }}
            className="flex"
          >
            <div className="bg-gray-700 rounded-lg p-2 max-w-[80%]">
              <div className="h-1 bg-cyan-400 rounded w-20 mb-1" />
              <div className="h-1 bg-gray-300 rounded w-16 mb-1" />
              <div className="h-1 bg-gray-300 rounded w-12" />
            </div>
          </motion.div>
        </div>
        
        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4 }}
          className="mt-3 flex items-center space-x-2"
        >
          <div className="flex-1 h-2 bg-gray-700 rounded" />
          <div className="w-2 h-2 bg-cyan-400 rounded" />
        </motion.div>
      </div>
    )
  },
  {
    id: "analytics",
    title: "Predictive Analytics & Insights",
    description: "Advanced machine learning models that analyze data patterns and predict future trends for better decision making",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    features: ["Pattern Recognition", "Trend Prediction", "Real-time Analysis", "Custom Dashboards"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Analytics Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-purple-400 font-mono"
          >
            PREDICTIVE MODEL
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-1"
          >
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">94% Accuracy</span>
          </motion.div>
        </div>
        
        {/* Chart Area */}
        <div className="flex-1 relative">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-6 grid-rows-4 h-full">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="border border-purple-500/20" />
              ))}
            </div>
          </div>
          
          {/* Chart Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {/* Historical Data Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
              d="M 10 80 Q 30 60 50 70 T 90 50"
              stroke="#8b5cf6"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            
            {/* Prediction Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 3 }}
              d="M 90 50 Q 110 40 130 35 T 170 25"
              stroke="#ec4899"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              opacity="0.9"
            />
          </svg>
          
          {/* Data Points */}
          {[
            { x: "15%", y: "70%" },
            { x: "35%", y: "50%" },
            { x: "55%", y: "60%" },
            { x: "75%", y: "40%" }
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 + i * 0.3 }}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              style={{ left: point.x, top: point.y }}
            />
          ))}
          
          {/* Prediction Points */}
          {[
            { x: "85%", y: "35%" },
            { x: "95%", y: "25%" }
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 + i * 0.2 }}
              className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse"
              style={{ left: point.x, top: point.y }}
            />
          ))}
        </div>
        
        {/* Metrics */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "Trend", value: "+23%", color: "text-green-400" },
            { label: "Confidence", value: "94%", color: "text-purple-400" },
            { label: "Next", value: "↗", color: "text-pink-400" }
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 + i * 0.1 }}
              className="text-center"
            >
              <div className={`text-xs font-mono ${metric.color}`}>{metric.value}</div>
              <div className="text-xs text-gray-500">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "automation",
    title: "Process Automation & Workflows",
    description: "Intelligent automation systems that streamline business processes, reduce manual work, and increase efficiency",
    icon: Cog,
    color: "from-green-500 to-teal-500",
    features: ["Workflow Automation", "Task Scheduling", "Error Handling", "Performance Monitoring"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Automation Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-green-400 font-mono"
          >
            AUTOMATION ENGINE
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-1"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 border border-green-400 border-t-transparent rounded-full"
            />
            <span className="text-xs text-green-400">Running</span>
          </motion.div>
        </div>
        
        {/* Workflow Steps */}
        <div className="flex-1 space-y-3">
          {[
            { step: "Data Input", status: "completed", color: "bg-green-500" },
            { step: "Processing", status: "active", color: "bg-yellow-500" },
            { step: "Validation", status: "pending", color: "bg-gray-500" },
            { step: "Output", status: "pending", color: "bg-gray-500" }
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.8 + i * 0.3 }}
                className={`w-2 h-2 rounded-full ${item.color} ${
                  item.status === 'active' ? 'animate-pulse' : ''
                }`}
              />
              <div className="flex-1">
                <div className="h-1 bg-gray-600 rounded w-16 mb-1" />
                <div className="h-1 bg-gray-700 rounded w-12" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2 + i * 0.3 }}
                className="text-xs text-gray-400"
              >
                {item.status === 'completed' && '✓'}
                {item.status === 'active' && '⟳'}
                {item.status === 'pending' && '○'}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="mt-3"
        >
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Progress</span>
            <span>67%</span>
          </div>
          <div className="h-1 bg-gray-700 rounded overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "67%" }}
              transition={{ duration: 2, delay: 4 }}
              className="h-full bg-gradient-to-r from-green-400 to-teal-400"
            />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Analysis",
    description: "Advanced image recognition and analysis systems for quality control, security, and automated visual inspection",
    icon: Eye,
    color: "from-orange-500 to-red-500",
    features: ["Object Detection", "Image Classification", "Quality Control", "Real-time Processing"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Vision Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-orange-400 font-mono"
          >
            VISION AI
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-1"
          >
            <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse" />
            <span className="text-xs text-red-400">Analyzing</span>
          </motion.div>
        </div>
        
        {/* Image Analysis Area */}
        <div className="flex-1 relative bg-gray-800/50 rounded border border-gray-600">
          {/* Scanning Grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-4 grid-rows-3 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.5 + (i * 0.1),
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="border border-orange-500/30"
                />
              ))}
            </div>
          </div>
          
          {/* Detection Boxes */}
          {[
            { x: "20%", y: "25%", w: "25%", h: "20%" },
            { x: "55%", y: "40%", w: "20%", h: "15%" },
            { x: "15%", y: "65%", w: "30%", h: "25%" }
          ].map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 + i * 0.3 }}
              className="absolute border-2 border-orange-400 rounded"
              style={{ 
                left: box.x, 
                top: box.y, 
                width: box.w, 
                height: box.h 
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 3 + i * 0.3 }}
                className="absolute -top-4 left-0 text-xs text-orange-400 bg-gray-900 px-1 rounded"
              >
                {i === 0 && "Object A"}
                {i === 1 && "Object B"}
                {i === 2 && "Object C"}
              </motion.div>
            </motion.div>
          ))}
          
          {/* Scanning Line */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 2, 
              delay: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-60"
          />
        </div>
        
        {/* Detection Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4 }}
          className="mt-3 grid grid-cols-3 gap-2 text-xs"
        >
          <div className="text-center">
            <div className="text-orange-400 font-mono">3</div>
            <div className="text-gray-500">Detected</div>
          </div>
          <div className="text-center">
            <div className="text-green-400 font-mono">98%</div>
            <div className="text-gray-500">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-blue-400 font-mono">12ms</div>
            <div className="text-gray-500">Speed</div>
          </div>
        </motion.div>
      </div>
    )
  }
]

export function AIIntegrationExamples() {
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
            AI Solution{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
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
            Explore our comprehensive AI integration solutions designed to transform your business operations.
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

                {/* AI Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex ${isEven ? 'justify-end' : 'justify-start'} ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  <AIAnimation className="w-full max-w-md" delay={0.3}>
                    {example.content}
                  </AIAnimation>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
