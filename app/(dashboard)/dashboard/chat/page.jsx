'use client';
import React, { useState } from 'react';
import { Search, Send, Sparkles } from 'lucide-react';

const DashboardUI = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedQuestions = [
    {
      title: 'Investment Advice',
      questions: [
        'How should I invest my $100?',
        'Analyze my portfolio and suggest investments',
        "What's the best strategy for long-term investing?",
        'Should I invest in bonds or stocks?',
      ],
    },
    {
      title: 'Portfolio Analysis',
      questions: [
        'Show my portfolio, with total balance',
        'Calculate my investment returns',
        "What's my asset allocation?",
        'Show my investment performance chart',
      ],
    },
    {
      title: 'Market Data',
      questions: [
        "What's the price of AVAX?",
        'Show Bitcoin price trend',
        'Compare ETH vs BTC performance',
        'List top performing cryptocurrencies',
      ],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching:', searchQuery);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 p-2 sm:p-4'>
        <div className='max-w-4xl mx-auto space-y-4 sm:space-y-6'>
          <div className='bg-gradient-to-r from-[#b02b2c] to-[#5c5959] rounded-xl shadow-lg text-white overflow-hidden'>
            <div className='p-4 sm:p-6'>
              <div className='flex items-center gap-2 sm:gap-3'>
                <Sparkles className='h-5 w-5 sm:h-6 sm:w-6' />
                <h2 className='text-lg sm:text-xl font-semibold'>
                  Your Personal Finance Assistant
                </h2>
              </div>
              <p className='mt-2 text-sm sm:text-base'>
                Ask about investments, analyze your portfolio, and track market
                trends in real-time.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 order-3 sm:order-2'>
            {suggestedQuestions.map((category) => (
              <div
                key={category.title}
                className='bg-[#303030] rounded-xl shadow-md overflow-hidden'
              >
                <div className='p-3 sm:p-4'>
                  <h3 className='font-semibold text-gray-200 mb-2 sm:mb-3 text-sm sm:text-base'>
                    {category.title}
                  </h3>
                  <ul className='space-y-1 sm:space-y-2'>
                    {category.questions.map((question) => (
                      <li key={question}>
                        <button
                          className='w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-300 bg-[#303030] rounded-lg transition-colors duration-200 ease-in-out'
                          onClick={() => setSearchQuery(question)}
                        >
                          {question}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSearch} className='relative order-2 sm:order-3'>
            <div className='flex gap-2'>
              <div className='relative flex-1'>
                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5' />
                <input
                  type='text'
                  placeholder='Ask about investments...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-700 bg-[#303030] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b02b2c] focus:border-transparent transition-all duration-200 ease-in-out'
                />
              </div>
              <button
                type='submit'
                className='bg-gradient-to-r from-[#b02b2c] to-[#5c5959] text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center'
              >
                <Send className='h-4 w-4 sm:h-5 sm:w-5' />
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default DashboardUI;
