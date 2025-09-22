'use client'

import { motion } from "framer-motion"
import {
  Brain,
  UserCog,
  Shield,
  MessageSquare,
  Download,
  ArrowRight,
  LucideIcon
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"
import teamImage from "@/assets/image-removebg-preview (1).png"
import Image from "next/image"
import TechUsed from "@/components/service/TechUsed"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features = [] }) => (
  <motion.div
    variants={itemVariants}
    // whileHover={{ scale: 1.02 }}
    className="relative"
  >
    <Card className="h-full backdrop-blur-sm bg-white/70">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-[#DB2777] flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl text-text_title">{title}</CardTitle>
        <CardDescription className="text-text_default">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="w-5 h-5 text-[#DB2777] shrink-0 mt-0.5" />
              <span className="text-sm text-text_default">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
)

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen section-gap lg:mt-0 md:mt-20 mt-28">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <SectionHeader
            toolText="Our Services"
            title=" AI-Powered Medication Explanations"
            subtitle="Empowering you with clear, accessible medication information through advanced AI technology"
          />
        </motion.div>

        {/* TechUsed component */}
        <TechUsed />

        {/* Introduction */}
        <motion.p
          variants={itemVariants}
          className="text-center text-lg text-text_default max-w-3xl mx-auto mb-16 mt-20"
        >
          At ExplainMyMeds, we use advanced AI technology to help you understand your medications.
          Our services are designed to provide clear, concise information that empowers you to make
          informed decisions about your health.
        </motion.p>

        {/* AI-Powered Explanations Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold text-text_title mb-4 text-center">AI-Powered Explanations</h2>
          <p className="text-text_default mb-8 text-center">
            Our AI technology breaks down complex medical information into easy-to-understand explanations,
            ensuring you have a clear grasp of your medication details.
          </p>
          <ServiceCard
            icon={Brain}
            title="AI-Powered Medication Explanations"
            description="Get detailed, easy-to-understand explanations of your medications from our advanced AI system."
            features={[
              "Complex medical terms simplified",
              "Detailed dosage instructions",
              "Side effects explained clearly",
              "Drug interactions identified",
            ]}
          />
        </motion.div>

        {/* Personalized Information Section */}
        <motion.div variants={itemVariants} className="mb-16" >
          <h2 className="text-2xl font-semibold text-text_title mb-4 text-center">Personalized Information</h2>
          <p className="text-text_default mb-8 text-center">
            Our service tailors information to your individual needs, considering your unique health profile and circumstances.
          </p>
          <ServiceCard
            icon={UserCog}
            title="Custom Explanations Tailored to You"
            description="Receive personalized medication information based on your specific health profile."
            features={[
              "Age-specific recommendations",
              "Health condition considerations",
              "Lifestyle factor adjustments",
              "Personalized dosage guidance",
            ]}
          />
        </motion.div>

        {/* Other Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <ServiceCard
            icon={Shield}
            title="Data Privacy and Security"
            description="Your medical information is protected with enterprise-grade security."
            features={[
              "End-to-end encryption",
              "Secure data storage",
              "HIPAA compliance",
              "Private browsing options",
            ]}
          />
          <ServiceCard
            icon={MessageSquare}
            title="AI Chat Support"
            description="Get instant answers to your medication questions through our AI chat."
            features={[
              "Real-time responses",
              "24/7 availability",
              "Context-aware answers",
              "Follow-up questions handled",
            ]}
          />
        </div>

        {/* Feature Highlight */}
        <motion.div
          // whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={itemVariants}
          className="bg-gradient-to-r from-[#DB2777]/10 to-[#BE185D]/10 rounded-lg mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-text_title mb-4">
                Why Choose ExplainMyMeds?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Instant access to medication information
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Easy-to-understand explanations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Download className="w-5 h-5 text-[#DB2777] shrink-0 mt-1" />
                  <span className="text-text_default">
                    Secure and private platform
                  </span>
                </li>
              </ul>
            </div>
            <Image alt="image of doctors in Team" className="object-contain h-full lg:h-64 border" src={teamImage} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ServicesPage