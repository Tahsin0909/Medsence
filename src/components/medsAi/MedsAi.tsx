/* eslint-disable react-hooks/exhaustive-deps */
"use client"


import { useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import { Bot, Send, Sparkles } from "lucide-react"
import Image from 'next/image'
import sideIMage from "@/assets/image-removebg-preview.png"
// Custom medical icons that match the screenshot
function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}

function PrescriptionIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M3 3h18v18H3z" />
            <path d="M7 7h10v2H7z" />
            <path d="M7 11h10v2H7z" />
            <path d="M7 15h4v2H7z" />
        </svg>
    )
}

function RecordsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
            <path d="M10 9H8" />
        </svg>
    )
}

function VitalsIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}

export default function Component() {

    // const { messages, input, handleInputChange, handleSubmit } = {}
    const messages = [{
        role: "",
        content: ""
    }]
    const input = ""

    const handleInputChange = () => { }
    const handleSubmit = () => { }




    const messagesContainerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    console.log(messages)

    const scrollToBottom = () => {
        messagesContainerRef.current?.scrollTo({
            top: messagesContainerRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const icons = [
        { Icon: HeartIcon, label: "Diagnosis" },
        { Icon: PrescriptionIcon, label: "Medication" },
        { Icon: RecordsIcon, label: "Records" },
        { Icon: VitalsIcon, label: "Vitals" },
    ]

    return (
        <main id='aiChat' className="min-h-screen section-gap">
            <section className="container">
                <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-12">
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-between"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Image
                            src={sideIMage}
                            width={400}
                            height={400}
                            alt="Medical illustration"
                            className="w-full max-w-md h-auto object-contain mb-8"
                        />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-md">
                            {icons.map(({ Icon, label }, index) => (
                                <motion.div
                                    key={label}
                                    className="flex flex-col items-center p-4 bg-white rounded-lg  shadow-xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                    <Icon className="h-8 w-8 text-gray-500 mb-2" />
                                    <span className="text-sm text-gray-500">{label}</span>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full lg:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="p-6 bg-gradient-to-r from-[#DB2777] to-[#BE185D] text-white flex items-center justify-between">
                            <div className="flex items-center space-x-2 md:space-x-3">
                                <div className="p-2 bg-white rounded-full">
                                    <Bot className="md:h-6 h-5 w-5 md:w-6 text-[#DB2777]" />
                                </div>
                                <h2 className="md:text-2xl text-xl text-nowrap font-bold">Meds AI Assistant</h2>
                            </div>
                            <Sparkles className="h-6 w-6 animate-pulse" />
                        </div>
                        <div
                            ref={messagesContainerRef}
                            className="h-[50vh] overflow-y-auto p-4 space-y-4"
                        >
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[70%] rounded-lg p-3 ${message.role === 'user'
                                            ? 'bg-[#DB2777] text-white'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 border-t">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Type your message here..."
                                    className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#DB2777]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#DB2777] text-white p-2 rounded-full hover:bg-[#BE185D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DB2777] focus:ring-offset-2"
                                >
                                    <Send className="h-6 w-6" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}