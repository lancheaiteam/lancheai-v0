"use client"
import React, { useState } from "react";
import Link from "next/link";
import lanchbot from "../assets/lanchbot.png";
import AnimatedRobot from "../components/animatedRobot";
import AnimatedCoin from "../components/animatedCoin";
import JoinWaitlistModal from "../components/joinWaitlistModal"; // Import the modal component
import { FaBell, FaRobot, FaWallet, FaChartLine, FaSearch, FaLink } from "react-icons/fa";

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false); // Modal state

    return (
        <>
            <div className="absolute left-0 top-0 md:top-20 p-2 md:px-20 lg:px-44"><AnimatedCoin /></div>
            <div className="relative p-2 md:px-20 lg:px-44">
                <div className="flex flex-col justify-center items-center px-4 md:px-8 relative">
                    {/* Hero Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-12 md:mt-16 lg:mt-28">
                        <div className="flex flex-col items-center lg:items-start lg:w-[60%] z-10">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight md:leading-[1.2] text-center lg:text-left w-full text-white relative">
                                Experience the Future of
                                <span className="gradient mt-2"> AI-Powered </span>
                                Crypto Management
                            </h1>

                            <p className="text-gray-400 text-center lg:text-left mt-12 text-lg md:text-xl leading-relaxed max-w-2xl">
                                Revolutionize your crypto experience with LancheAI. Access AI-powered market insights, intelligent portfolio tracking, and comprehensive research in one seamless platform.
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    className="text-sm mt-12 mb-2 px-4 md:px-10 py-4 bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/20"
                                    onClick={() => setModalOpen(true)} // Open the modal on click
                                    >
                                    Join the Waitlist
                                </button>

                                <Link href={"/documentation"}>
                                    <button
                                        className="text-sm mt-12 mb-2 px-4 md:px-10 py-4 bg-transparent border-2 border-[#5c5959] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/20"
                                        >
                                        Documentation
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <AnimatedRobot imageSrc={lanchbot} />
                    </div>

                    {/* Features Section */}
                    <div className="-mt-8 md:mt-8 lg:mt-32 z-10">
                        <h2 className="text-3xl md:text-4xl text-white text-center font-bold mb-8 md:mb-16">
                            Powered by <span className="gradient">AI Technology</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-black/50 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-gray-500 transition-all duration-300 hover:shadow-md hover:shadow-gray-900/10 group"
                                >
                                    <div className="flex items-center mb-4">
                                        <feature.icon className="text-[#bd4e61] text-2xl mr-4" />
                                        <h3 className="text-xl text-white font-medium group-hover:text-gray-300 transition-colors">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Waitlist Modal */}
            <JoinWaitlistModal open={modalOpen} handleClose={() => setModalOpen(false)} />
        </>
    );
}

const features = [
    {
        title: "Smart Alerts",
        description: "Get notified instantly about price changes, token trends, and market shifts.",
        icon: FaBell,
    },
    {
        title: "Automated Trading",
        description: "Let AI handle your trades based on real-time data and market conditions.",
        icon: FaRobot,
    },
    {
        title: "Wallet Management",
        description: "Track your crypto assets with real-time updates and full transaction histories.",
        icon: FaWallet,
    },
    {
        title: "Market Insights",
        description: "Real-time token analysis, price trends, and volume data at your fingertips.",
        icon: FaChartLine,
    },
    {
        title: "Research Tools",
        description: "Use AI for deep market analysis and uncover the best investment opportunities.",
        icon: FaSearch,
    },
    {
        title: "On-Chain Analytics",
        description: "Get instant project sentiment, trend analysis, and aggregated news.",
        icon: FaLink,
    },
];
