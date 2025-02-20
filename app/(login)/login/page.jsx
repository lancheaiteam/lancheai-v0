
import React from "react";
import Image from "next/image";
import metamaskIcon from "../../assets/metamaskIcon.png";
import { FaWallet  } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
      {/* Main Content */}
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          LancheAI
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-4">
          Your gateway to easy DeFi interactions on the Avalanche chain.
          Get market insights, swap tokens, and stay updated.
        </p>

        {/* Connect Message */}
        <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 md:mb-12">
          Connect your wallet to continue
        </p>

        {/* Wallet Buttons */}
        <div className="grid gap-4 sm:gap-6 w-full max-w-xl mx-auto px-4">
          <button className="bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-medium shadow-lg hover:opacity-90">
            <Image
              src={metamaskIcon}
              alt="metamask"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-200"
            />
            <span className="whitespace-nowrap">Connect Metamask</span>
          </button>
          
          <button className="bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-medium shadow-lg hover:opacity-90">
            <FaWallet className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-200" />
            <span className="whitespace-nowrap">Connect Core Wallet</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-500 mt-8 sm:mt-12 md:mt-16 max-w-lg mx-auto text-xs sm:text-sm px-4">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;