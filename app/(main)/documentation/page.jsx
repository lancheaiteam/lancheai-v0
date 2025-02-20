"use client"
import React from "react";

export default function Documentation() {
    return (
        <div className="p-6 md:px-24 lg:px-48 text-white">
            {/* Hero Section */}
            <div className="text-center my-12 flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-medium leading-tight gradient-text w-full md:w-[80%]">LancheAI: A Smart Solution for Wallet, Trade, and Research Management</h1>
                <p className="text-gray-300 mt-4 md:mt-8 text-lg md:text-xl max-w-3xl mx-auto">An AI-powered assistant designed to revolutionize cryptocurrency management through automation, insights, and blockchain security.</p>
            </div>

            {/* Content Sections */}
            {sections.map((section, index) => (
                <div key={index} className="mb-12 p-8 bg-black/60 rounded-2xl border border-gray-700 backdrop-blur-md shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-6 border-l-4 pl-4 border-red-500">{section.title}</h2>
                    <div className="space-y-6">
                        {section.content.map((item, idx) => (
                            <div key={idx} className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-md hover:shadow-gray-700 transition-all">
                                <h3 className="text-xl font-semibold text-red-400 mb-2">{item.heading}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

const sections = [
    {
        title: "Introduction",
        content: [
            {
                heading: "Why LancheAI?",
                text: "LancheAI provides an intelligent and automated approach to wallet management, trading, and market research."
            }
        ]
    },
    {
        title: "Key Features",
        content: [
            { heading: "Wallet Management", text: "Track your assets, monitor balances, and manage transactions seamlessly." },
            { heading: "Automated Trading", text: "Use AI-powered execution to optimize your trades with real-time market analysis." },
            { heading: "Market Insights", text: "Stay ahead with AI-driven token analysis, price trends, and volume data." },
            { heading: "Smart Notifications", text: "Receive alerts for price movements, news updates, and portfolio changes." }
        ]
    },
    {
        title: "Technical Architecture",
        content: [
            { heading: "Blockchain Integration", text: "Secure your transactions with decentralized technology and transparency." },
            { heading: "AI & Machine Learning", text: "Predictive analytics and data-driven strategies enhance decision-making." }
        ]
    },
    {
        title: "Security & Privacy",
        content: [
            { heading: "End-to-End Encryption", text: "All transactions and user data are protected using top-tier security protocols." },
            { heading: "Multi-Layer Authentication", text: "Enhance security with multi-factor authentication for account protection." }
        ]
    },
    {
        title: "Roadmap: Creator Marketplace & Security",
        content: [
            { heading: "Incognito Mode", text: "Prevent unauthorized downloads and maintain secure interactions." },
            { heading: "Escrow Payments", text: "Ensure fair compensation with blockchain-backed escrow transactions." }
        ]
    }
];