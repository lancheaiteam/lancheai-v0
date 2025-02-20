import Image from "next/image";
import lanchbot from "./assets/lanchbot.png";
import AnimatedRobot from "./components/animatedRobot";
import AnimatedCoin from "./components/animatedCoin";
import { FaBell, FaRobot, FaWallet, FaChartLine, FaSearch, FaLink } from "react-icons/fa";

export default function Home() {
    return (
        <div className="relative overflow-hidden p-4 md:px-20 lg:px-44">
            <div className="flex flex-col justify-center items-center px-4 md:px-8 gap-4 relative">
                <div className="absolute left-0 top-2 "><AnimatedCoin /></div>
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-20 md:mt-32">
                    <div className="flex flex-col items-center lg:items-start lg:w-[60%] z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-tight md:leading-[1.2] text-center lg:text-left w-full text-white relative">
                            Experience the Future of
                            <span className="gradient mt-2"> AI-Powered </span>
                            Crypto Management
                        </h1>

                        <p className="text-gray-400 text-center lg:text-left mt-12 text-lg md:text-xl leading-relaxed max-w-2xl">
                            Revolutionize your crypto experience with LancheAI. Access AI-powered market insights, intelligent portfolio tracking, and comprehensive research in one seamless platform.
                        </p>

                        <button className="mt-12 px-10 py-4 bg-gradient-to-r from-[#e84142] to-[#706c6c] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20">
                            Join the Waitlist
                        </button>
                    </div>
                    <AnimatedRobot imageSrc={lanchbot}/>
                </div>

                {/* Features Section */}
                <div className="mt-32 w-full max-w-7xl relative z-10">
                    <h2 className="text-3xl md:text-4xl text-white text-center font-bold mb-16">
                        Powered by Advanced <span className="text-[#e84142]">AI Technology</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {features.map((feature, index) => (
                            <div key={index} 
                                className="p-8 bg-black/40 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-[#e84142] transition-all duration-300 hover:shadow-lg hover:shadow-[#e84142]/10 group">
                                <div className="flex items-center mb-4">
                                    <feature.icon className="text-[#e84142] text-2xl mr-4" />
                                    <h3 className="text-xl text-white font-medium group-hover:text-[#e84142] transition-colors">
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
    );
}

const features = [
    {
        title: "Smart Alerts",
        description: "Get notified instantly about price changes, token trends, and market shifts.",
        icon: FaBell
    },
    {
        title: "Automated Trading",
        description: "Let AI handle your trades based on real-time data and market conditions.",
        icon: FaRobot
    },
    {
        title: "Wallet Management",
        description: "Track your crypto assets with real-time updates and full transaction histories.",
        icon: FaWallet
    },
    {
        title: "Market Insights",
        description: "Real-time token analysis, price trends, and volume data at your fingertips.",
        icon: FaChartLine
    },
    {
        title: "Research Tools",
        description: "Use AI for deep market analysis and uncover the best investment opportunities.",
        icon: FaSearch
    },
    {
        title: "On-Chain Analytics",
        description: "Get instant project sentiment, trend analysis, and aggregated news.",
        icon: FaLink
    }
];