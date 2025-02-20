'use client'
import React, { useState } from 'react';
import { Clipboard, CheckCircle } from 'lucide-react';

const Points = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://app.lanche.ai/ref/ww22o";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="pb-4 border-b">
        <h2 className="text-xl font-bold">Interact with Lanche AI, and earn points!</h2>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm">Points earned so far</p>
        <p className="text-3xl font-bold">2,000</p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Invite friends</h3>
        <div className="flex items-center mt-2 border p-3 rounded-lg bg-gray-100">
          <input 
            type="text" 
            value={referralLink} 
            readOnly 
            className="w-full bg-transparent text-gray-700 font-medium focus:outline-none"
          />
          <button onClick={handleCopy} className="ml-3 text-blue-600 hover:text-blue-800">
            {copied ? <CheckCircle className="w-5 h-5 text-green-500" /> : <Clipboard className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">How to earn points?</h3>
        <p className="text-gray-500 text-sm">Earn points by completing actions such as referring friends, interacting with Lanche AI, and completing tasks.</p>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">History</h3>
        <p className="text-gray-500 text-sm">Track your points earned over time.</p>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Leaderboard</h3>
        <p className="text-gray-500 text-sm">See the top earners and compete for rewards.</p>
      </div>
    </div>
  );
};

export default Points;
