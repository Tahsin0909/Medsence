/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"


import { useRef, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Bot, Send, Sparkles } from "lucide-react"
import Image from 'next/image'
import sideIMage from "@/assets/image-removebg-preview.png"
import { HeartIcon, PrescriptionIcon, RecordsIcon, VitalsIcon } from '@/lib/icon'


export default function Component() {

    const [input, setInput] = useState<string>("")
    // const { messages, input, handleInputChange, handleSubmit } = {}
    const messages = [{
        role: "",
        content: ""
    }]





    const [result, setResult] = useState<{ role: string, messages: string }[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userMsg = {
            role: "user",
            messages: input
        }
        setResult(prev => [...prev, userMsg]); // update state
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt: input }),
        });

        const data = await res.json();
        console.log(data)
        const msg = {
            role: "ai",
            messages: data.result
        }
        setResult(prev => [...prev, msg]); // update state
    };

    const messagesContainerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    console.log(result)

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
                            {result.map((message, index) => (
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
                                        {message.messages}
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
                                    onChange={(e) => setInput(e.target.value)}
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