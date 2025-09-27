"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Cog, Users } from "lucide-react"
import { AnalyticsAnimation } from "@/components/animations/DeviceAnimations"

const examples = [
  {
    id: "business-intelligence",
    title: "Business Intelligence & Analytics",
    description: "Comprehensive data analysis and reporting systems that provide actionable insights for strategic decision making",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-500",
    features: ["Data Visualization", "KPI Dashboards", "Predictive Analytics", "Custom Reports"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* BI Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-blue-400 font-mono"
          >
            BUSINESS INTELLIGENCE
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center space-x-1"
          >
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Live</span>
          </motion.div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { metric: "Revenue", value: "$1.2M", trend: "+15%", color: "text-green-400" },
            { metric: "Users", value: "24.5K", trend: "+8%", color: "text-blue-400" },
            { metric: "Conversion", value: "3.4%", trend: "+12%", color: "text-purple-400" },
            { metric: "Retention", value: "89%", trend: "+5%", color: "text-orange-400" }
          ].map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
              className="bg-gray-800/50 rounded p-2"
            >
              <div className="text-xs text-gray-400">{item.metric}</div>
              <div className="text-sm font-mono text-white">{item.value}</div>
              <div className={`text-xs ${item.color}`}>{item.trend}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Chart Visualization */}
        <div className="flex-1 relative bg-gray-800/30 rounded border border-gray-600/30">
          <svg className="absolute inset-0 w-full h-full p-2">
            {/* Bar Chart */}
            {[
              { x: "15%", height: "60%", delay: 2.5 },
              { x: "30%", height: "80%", delay: 2.7 },
              { x: "45%", height: "45%", delay: 2.9 },
              { x: "60%", height: "90%", delay: 3.1 },
              { x: "75%", height: "70%", delay: 3.3 }
            ].map((bar, i) => (
              <motion.rect
                key={i}
                initial={{ height: 0, y: "100%" }}
                animate={{ height: bar.height, y: `${100 - parseInt(bar.height)}%` }}
                transition={{ duration: 0.8, delay: bar.delay }}
                x={bar.x}
                width="8%"
                fill="url(#barGradient)"
                rx="2"
              />
            ))}
            
            {/* Trend Line */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 3.5 }}
              d="M 20 70 Q 40 50 60 60 T 100 40"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            
            <defs>
              <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Bottom Insights */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 4.5 }}
          className="mt-2 text-xs text-center"
        >
          <span className="text-green-400">↗ Performance up 23% this quarter</span>
        </motion.div>
      </div>
    )
  },
  {
    id: "digital-strategy",
    title: "Digital Transformation Strategy",
    description: "Comprehensive digital transformation roadmaps that align technology initiatives with business objectives",
    icon: Target,
    color: "from-purple-500 to-pink-500",
    features: ["Strategic Planning", "Technology Roadmap", "Change Management", "ROI Analysis"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Strategy Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-purple-400 font-mono"
          >
            TRANSFORMATION ROADMAP
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-xs text-pink-400"
          >
            Phase 2/4
          </motion.div>
        </div>
        
        {/* Strategy Phases */}
        <div className="flex-1 space-y-2">
          {[
            { phase: "Assessment", status: "completed", progress: 100 },
            { phase: "Planning", status: "active", progress: 75 },
            { phase: "Implementation", status: "pending", progress: 0 },
            { phase: "Optimization", status: "pending", progress: 0 }
          ].map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-300">{item.phase}</span>
                <span className="text-xs text-gray-500">{item.progress}%</span>
              </div>
              
              <div className="h-2 bg-gray-700 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, delay: 2 + i * 0.3 }}
                  className={`h-full rounded ${
                    item.status === 'completed' ? 'bg-green-500' :
                    item.status === 'active' ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              </div>
              
              {/* Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 2.5 + i * 0.2 }}
                className={`absolute -left-2 top-0 w-1 h-1 rounded-full ${
                  item.status === 'completed' ? 'bg-green-400' :
                  item.status === 'active' ? 'bg-purple-400 animate-pulse' : 'bg-gray-500'
                }`}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Strategy Metrics */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: "ROI", value: "340%", color: "text-green-400" },
            { label: "Timeline", value: "12mo", color: "text-purple-400" },
            { label: "Risk", value: "Low", color: "text-blue-400" }
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4 + i * 0.1 }}
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
    id: "process-optimization",
    title: "Process Optimization & Automation",
    description: "Streamline business operations through process analysis, optimization, and intelligent automation solutions",
    icon: Cog,
    color: "from-green-500 to-teal-500",
    features: ["Process Mapping", "Efficiency Analysis", "Automation Design", "Performance Monitoring"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Process Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-green-400 font-mono"
          >
            PROCESS OPTIMIZER
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
            <span className="text-xs text-green-400">Optimizing</span>
          </motion.div>
        </div>
        
        {/* Process Flow */}
        <div className="flex-1 relative">
          {/* Flow Diagram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full">
              {/* Process Nodes */}
              {[
                { x: "20%", y: "30%", label: "Input" },
                { x: "50%", y: "20%", label: "Process" },
                { x: "80%", y: "30%", label: "Output" },
                { x: "50%", y: "60%", label: "Monitor" }
              ].map((node, i) => (
                <g key={node.label}>
                  <motion.circle
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: 8, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
                    cx={node.x}
                    cy={node.y}
                    fill="#10b981"
                    opacity="0.8"
                  />
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 + i * 0.3 }}
                    x={node.x}
                    y={`${parseInt(node.y) + 15}%`}
                    textAnchor="middle"
                    className="text-xs fill-gray-300"
                  >
                    {node.label}
                  </motion.text>
                </g>
              ))}
              
              {/* Flow Arrows */}
              {[
                { x1: "28%", y1: "30%", x2: "42%", y2: "25%" },
                { x1: "58%", y1: "25%", x2: "72%", y2: "30%" },
                { x1: "75%", y1: "38%", x2: "55%", y2: "52%" },
                { x1: "45%", y1: "52%", x2: "25%", y2: "38%" }
              ].map((arrow, i) => (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 3 + i * 0.2 }}
                  x1={arrow.x1}
                  y1={arrow.y1}
                  x2={arrow.x2}
                  y2={arrow.y2}
                  stroke="#10b981"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
              ))}
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Optimization Metrics */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { metric: "Efficiency", value: "+45%", color: "text-green-400" },
            { metric: "Time Saved", value: "8.2h", color: "text-teal-400" },
            { metric: "Cost Reduction", value: "32%", color: "text-blue-400" }
          ].map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 4.5 + i * 0.1 }}
              className="text-center bg-gray-800/50 rounded p-1"
            >
              <div className={`text-xs font-mono ${item.color}`}>{item.value}</div>
              <div className="text-xs text-gray-500">{item.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "team-training",
    title: "Digital Skills Training & Change Management",
    description: "Comprehensive training programs and change management strategies to ensure successful digital adoption",
    icon: Users,
    color: "from-orange-500 to-red-500",
    features: ["Skills Assessment", "Training Programs", "Change Management", "Adoption Tracking"],
    content: (
      <div className="w-full h-full flex flex-col">
        {/* Training Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-xs text-orange-400 font-mono"
          >
            TRAINING DASHBOARD
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-xs text-red-400"
          >
            87% Complete
          </motion.div>
        </div>
        
        {/* Training Progress */}
        <div className="space-y-2 mb-3">
          {[
            { course: "Digital Basics", progress: 100, participants: 24 },
            { course: "Advanced Tools", progress: 75, participants: 18 },
            { course: "AI Integration", progress: 45, participants: 12 },
            { course: "Data Analytics", progress: 20, participants: 8 }
          ].map((course, i) => (
            <motion.div
              key={course.course}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
              className="bg-gray-800/50 rounded p-2"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-300">{course.course}</span>
                <span className="text-xs text-gray-500">{course.participants} users</span>
              </div>
              
              <div className="h-1 bg-gray-700 rounded overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1, delay: 2.5 + i * 0.3 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Adoption Metrics */}
        <div className="flex-1 relative bg-gray-800/30 rounded border border-gray-600/30 p-2">
          <div className="text-xs text-gray-400 mb-2">Adoption Rate</div>
          
          {/* Adoption Chart */}
          <div className="flex items-end justify-between h-12">
            {[
              { week: "W1", adoption: 20 },
              { week: "W2", adoption: 45 },
              { week: "W3", adoption: 65 },
              { week: "W4", adoption: 87 }
            ].map((data, i) => (
              <div key={data.week} className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${data.adoption}%` }}
                  transition={{ duration: 0.8, delay: 4 + i * 0.2 }}
                  className="w-3 bg-gradient-to-t from-orange-500 to-red-500 rounded-t mb-1"
                />
                <span className="text-xs text-gray-500">{data.week}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Success Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 5.5 }}
          className="mt-2 flex justify-between text-xs"
        >
          <span className="text-green-400">✓ 87% Adoption Rate</span>
          <span className="text-orange-400">📈 +34% Productivity</span>
        </motion.div>
      </div>
    )
  }
]

export function DigitalConsultingExamples() {
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
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Comprehensive digital consulting services that drive transformation and optimize business performance.
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

                {/* Analytics Animation */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`flex ${isEven ? 'justify-end' : 'justify-start'} ${isEven ? '' : 'lg:col-start-1'}`}
                >
                  <AnalyticsAnimation className="w-full max-w-md" delay={0.3}>
                    {example.content}
                  </AnalyticsAnimation>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
