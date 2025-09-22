'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import SectionHeader from "@/components/shared/sectionHeader/SectionHeader"
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}


export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await emailjs.send(
        'service_qyac2ww', 'template_an21w53',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        'd5dJg25GGc6KH0ycL'
      )

      // console.log(result.text)
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            title="Reach out to us for personalized assistance"
            toolText="Contact Us"
            subtitle="Email, call, or complete the form to learn how we can solve your needs."
          />
        </motion.div>


        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-text_title mb-6">Get in Touch</h2>
              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                >
                  <Mail className="w-6 h-6 text-[#DB2777]" />
                  <span className="text-text_default">info@example.com</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                >
                  <Phone className="w-6 h-6 text-[#DB2777]" />
                  <span className="text-text_default">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/50 rounded-lg"
                >
                  <MapPin className="w-6 h-6 text-[#DB2777]" />
                  <span className="text-text_default">123 Business Ave, Suite 456, San Francisco, CA 94107</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Support Categories */}
            <motion.div
              variants={containerVariants}
              className="grid gap-4  lg:grid-cols-2"
            >
              <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-text_title">Customer Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text_default">
                      Our support team is available around the clock to address any concerns.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-text_title">Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text_default">
                      We value your feedback and are continuously working to improve.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
          // whileHover={{ y: -5 }}
          >
            <Card className="backdrop-blur-sm bg-white/70">
              <CardHeader>
                <CardTitle className="text-text_title">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <motion.div
                      className="space-y-2"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="space-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help?"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </motion.div>
                  <motion.div
                    // whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full bg-[#DB2777] hover:bg-[#BE185D]"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">Message sent successfully!</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">Error sending message. Please try again.</p>
                  )}
                  <p className="text-sm text-text_default text-center">
                    By contacting us, you agree to our{" "}
                    <Link href="/terms" className="text-[#DB2777] hover:text-[#BE185D] underline">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-[#DB2777] hover:text-[#BE185D] underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold text-text_title mb-8 text-center">Our Location</h2>
          <motion.div
            className="aspect-video rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}