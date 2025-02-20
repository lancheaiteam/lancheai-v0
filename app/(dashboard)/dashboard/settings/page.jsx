'use client'
import React, { useState } from 'react';
import { Clipboard, CheckCircle } from 'lucide-react';
import { FaTimes, FaTelegramPlane } from 'react-icons/fa';

const Settings = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "https://app.lanche.ai/ref/ww22o";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="pb-4 border-b">
        <h2 className="text-xl font-bold">Settings</h2>
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Language</h3>
        <p className="text-gray-500 text-sm">English</p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Follow us</h3>
        <div className="flex items-center gap-4 mt-2">
          <a target='_blank' href="https://x.com/LancheAI" className="text-gray-600 hover:text-black transition-colors">
            <FaTimes className="text-xl" />
          </a>
          <a target='_blank' href="https://t.me/LancheAI" className="text-gray-600 hover:text-blue-500 transition-colors">
            <FaTelegramPlane className="text-xl" />
          </a>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Refer & Earn</h3>
        <div className="flex items-center mt-2 border p-3 rounded-lg bg-gray-100">
          <input 
            type="text" 
            value={referralCode} 
            readOnly 
            className="w-full bg-transparent text-gray-700 font-medium focus:outline-none"
          />
          <button onClick={handleCopy} className="ml-3 text-blue-600 hover:text-blue-800">
            {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Clipboard className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Feedback</h3>
        <p className="text-gray-500 text-sm">Share your thoughts and suggestions.</p>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Contact Support</h3>
        <p className="text-gray-500 text-sm">Need help? Reach out to our support team.</p>
      </div>
    </div>
  );
};

export default Settings;
