import React from "react";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Workflow, Bot, ScanLine, Target, Clock } from "lucide-react"

const ConfigureSection = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariant = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: Workflow,
      title: "Workflow Optimization",
      description: "Streamlines clinical workflows in radiology",
    },
    {
      icon: Bot,
      title: "Automated Processing",
      description: "Automates the initial review process",
    },
    {
      icon: ScanLine,
      title: "Intelligent Classification",
      description: "Categorizes scans into normal, simple abnormalities, and complex abnormalities",
    },
    {
      icon: Target,
      title: "Priority Routing",
      description: "Assists in prioritizing cases and directing them to appropriate radiological expertise",
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Helps in reducing the turnaround time significantly",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-slate-900 mb-6 font-bold">Configuring AI to Work for You</h2>
          <div className="w-20 h-0.5 bg-slate-800 mx-auto"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                className="group bg-white p-8 rounded-lg border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-slate-50 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-slate-600" />
                  </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ConfigureSection
