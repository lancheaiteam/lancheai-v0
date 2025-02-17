import React from 'react';
import Image from 'next/image';
import { FaTimes, FaTelegramPlane } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="w-full bg-transparent">
            <div className="flex justify-between items-center px-4 py-3 sm:px-6 md:px-20 lg:px-44">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image src={logo} width={100} height={100} alt="Logo" className="h-6 w-8 md:h-8 md:w-14 mr-2" />
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Lanche_AI</span>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
                    <a target='_blank' href="https://x.com/LancheAI" className="text-white hover:text-red-400 transition-colors">
                        <FaTimes className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
                    </a>
                    <a target='_blank' href="https://t.me/LancheAI" className="text-white hover:text-red-400 transition-colors">
                        <FaTelegramPlane className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
