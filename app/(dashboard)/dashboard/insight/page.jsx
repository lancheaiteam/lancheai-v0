'use client';
import React, { useEffect, useState } from 'react';

// Dummy news data for Cryptocurrency and Trading
const meaningfulCryptoNews = [
  {
    title: 'Bitcoin Breaks Key Resistance as Institutional Interest Grows',
    description:
      'Recent market data shows that Bitcoin has surpassed a critical resistance level, driven by growing interest from institutional investors.',
    url: 'https://news.example.com/bitcoin-breaks-resistance',
  },
  {
    title: 'Ethereum Upgrade Promises Lower Gas Fees and Increased Scalability',
    description:
      'The upcoming Ethereum network upgrade is expected to drastically reduce gas fees while boosting transaction throughput.',
    url: 'https://news.example.com/ethereum-upgrade',
  },
];

const meaningfulTradingNews = [
  {
    title: 'Global Markets React to Central Bank Announcements',
    description:
      'Major global exchanges have seen increased volatility following recent statements and policy shifts from leading central banks.',
    url: 'https://news.example.com/global-markets-central-banks',
  },
  {
    title: 'Algorithmic Trading Firms Adjust Strategies Amid Market Shifts',
    description:
      'As market dynamics evolve, several algorithmic trading firms have begun refining their strategies to optimize for recent trends.',
    url: 'https://news.example.com/algorithmic-trading-strategies',
  },
];

const InsightsPage = () => {
  const [cryptoNews, setCryptoNews] = useState([]);
  const [tradingNews, setTradingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCryptoNews(meaningfulCryptoNews);
    setTradingNews(meaningfulTradingNews);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center text-white'>
        <p>Loading news...</p>
      </div>
    );
  }

  const NewsCard = ({ article }) => (
    <article className='bg-[#303030] border border-gray-700 rounded-lg p-6 transition transform hover:-translate-y-1 hover:shadow-lg'>
      <h3 className='text-xl font-semibold mb-2'>
        <a
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:underline'
        >
          {article.title}
        </a>
      </h3>
      <p className='text-base text-gray-300'>{article.description}</p>
    </article>
  );

  return (
    <main className='max-w-7xl mx-auto p-8 text-white'>
      <section className='mb-12'>
        <h2 className='text-3xl font-medium border-b border-gray-700 pb-2 mb-6'>
          Cryptocurrency News
        </h2>
        {cryptoNews.length === 0 ? (
          <p>No cryptocurrency news available.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {cryptoNews.map((article, index) => (
              <NewsCard key={`crypto-${index}`} article={article} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className='text-3xl font-medium border-b border-gray-700 pb-2 mb-6'>
          Trading News
        </h2>
        {tradingNews.length === 0 ? (
          <p>No trading news available.</p>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {tradingNews.map((article, index) => (
              <NewsCard key={`trading-${index}`} article={article} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default InsightsPage;
