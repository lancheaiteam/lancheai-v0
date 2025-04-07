'use client';
import React, { useState } from 'react';
import { Clipboard, CheckCircle, ChevronDown } from 'lucide-react';
import { FaTimes, FaTelegramPlane } from 'react-icons/fa';

const Settings = () => {
  const [copied, setCopied] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const referralCode = 'https://app.lanche.ai/ref/ww22o';

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);
  };

  return (
    <div className='w-full max-w-4xl mx-auto rounded-lg p-6'>
      <div className='mt-4'>
        <h3 className='text-lg font-semibold text-gray-100'>Language</h3>
        <p className='text-gray-400 text-sm'>English</p>
      </div>

      <div className='mt-6'>
        <h3 className='text-lg font-semibold text-gray-100'>
          Currency Preference
        </h3>
        <div className='relative mt-2'>
          <button
            onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
            className='flex items-center justify-between w-full md:w-64 p-3 border rounded-lg bg-gray-700 text-gray-200'
          >
            <span>
              {selectedCurrency} -{' '}
              {currencies.find((c) => c.code === selectedCurrency)?.name}
            </span>
            <ChevronDown className='w-4 h-4 text-gray-300' />
          </button>

          {showCurrencyDropdown && (
            <div className='absolute z-10 w-full md:w-64 mt-1 bg-gray-700 border border-gray-700 rounded-lg shadow-lg'>
              {currencies.map((currency) => (
                <div
                  key={currency.code}
                  onClick={() => selectCurrency(currency.code)}
                  className='p-3 hover:bg-gray-600 cursor-pointer text-gray-200'
                >
                  {currency.code} - {currency.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='text-lg font-semibold text-gray-100'>Follow us</h3>
        <div className='flex items-center gap-4 mt-2'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://x.com/LancheAI'
            className='text-gray-400 hover:text-gray-200 transition-colors'
          >
            <FaTimes className='text-xl' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://t.me/LancheAI'
            className='text-gray-400 hover:text-blue-400 transition-colors'
          >
            <FaTelegramPlane className='text-xl' />
          </a>
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='text-lg font-semibold text-gray-100'>Refer & Earn</h3>
        <div className='flex items-center mt-2 border p-3 rounded-lg bg-gray-700 border-gray-700'>
          <input
            type='text'
            value={referralCode}
            readOnly
            className='w-full bg-transparent text-gray-200 font-medium focus:outline-none'
          />
          <button
            onClick={handleCopy}
            className='ml-3 text-blue-400 hover:text-blue-500'
          >
            {copied ? (
              <CheckCircle className='w-5 h-5 text-green-500' />
            ) : (
              <Clipboard className='w-5 h-5' />
            )}
          </button>
        </div>
      </div>

      <div className='mt-6 border-t border-gray-700 pt-4'>
        <h3 className='text-lg font-semibold text-gray-100'>Feedback</h3>
        <p className='text-gray-400 text-sm'>
          Share your thoughts and suggestions.
        </p>
      </div>

      <div className='mt-6 border-t border-gray-700 pt-4'>
        <h3 className='text-lg font-semibold text-gray-100'>Contact Support</h3>
        <p className='text-gray-400 text-sm'>
          Need help? Reach out to our support team.
        </p>
      </div>
    </div>
  );
};

export default Settings;
