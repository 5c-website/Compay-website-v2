import React from "react"
import { motion } from "framer-motion"

const EnhanceSectionDesign9 = ({ bionicLogoImg }) => {
  const features = [
    {
      title: "Segment",
      description: "Segments key organs and provides radiologists with precise measurements, reducing analysis time.",
    },
    {
      title: "Analyze",
      description:
        "AI-powered analysis replaces traditional DEXA scans for osteoporosis detection by analyzing knee X-rays.",
    },
    {
      title: "Detect",
      description:
        "Autonomously detects pathologies, generating preliminary reports for critical cases, supporting fast, accurate responses for urgent care.",
    },
    {
      title: "Measure",
      description:
        "Quantifies clinical parameters, like 28 intersection angles used in Chiropractic treatment, enhancing diagnostic precision in niche fields.",
    },
  ]

  return (
    <div className="w-full px-4 py-12 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-24"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#1B3363] mb-4 md:mb-8 tracking-tight">Bionic</h1>
          <div className="w-12 md:w-16 h-px bg-[#1B3363] mx-auto mb-4 md:mb-8"></div>
          <p className="text-base md:text-lg text-gray-600 font-semibold px-4">
            Enhancing Radiologist Workflow with Bionic
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1B3363] mb-4 md:mb-6">{feature.title}</h3>
                <div className="w-8 md:w-12 h-px bg-[#1B3363] mb-4 md:mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg px-4 md:px-0">{feature.description}</p>
              </div>

              <div className="hidden md:block w-px h-32 bg-gray-300"></div>

              <div className="flex-1 flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-sm flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-[#1B3363]">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EnhanceSectionDesign9
