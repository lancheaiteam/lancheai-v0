import React from 'react';

const CurrencyDisplay = ({ value }) => {
  const absValue = Math.abs(value);
  const formatted = `$${absValue.toLocaleString()}`;
  return (
    <span className={value >= 0 ? 'text-green-400' : 'text-red-400'}>
      {value >= 0 ? '+' : '-'}
      {formatted}
    </span>
  );
};

const PortfolioSummary = ({ totalValue, totalDailyChange }) => {
  return (
    <div className='text-center'>
      <div className='text-base text-gray-400'>Total Value</div>
      <div className='text-3xl font-bold text-white'>
        ${totalValue.toLocaleString()}
      </div>
      <div className='text-sm text-gray-400 mt-2'>Day Change</div>
      <div className='text-2xl font-bold'>
        <CurrencyDisplay value={totalDailyChange} />
      </div>
    </div>
  );
};

const PortfolioTableRow = ({ item }) => {
  return (
    <tr className='border-b hover:bg-gray-800'>
      <td className='py-3 px-4 flex items-center gap-2 text-white'>
        <span className='font-medium'>{item.token}</span>
      </td>
      <td className='py-3 px-4 text-gray-300'>{item.balance}</td>
      <td className='py-3 px-4 text-right font-medium text-white'>
        ${item.value.toLocaleString()}
      </td>
      <td className='py-3 px-4 text-right font-medium'>
        <CurrencyDisplay value={item.dailyChange} />
      </td>
    </tr>
  );
};

const DashboardHome = () => {
  const portfolioData = [
    { token: 'AVAX', balance: '10 AVAX', value: 2394.0, dailyChange: 30.0 },
    { token: 'USDT', balance: '100 USDT', value: 100.0, dailyChange: -5.0 },
    { token: 'WETH', balance: '0.5 WETH', value: 1363.0, dailyChange: 15.0 },
  ];

  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);
  const totalDailyChange = portfolioData.reduce(
    (sum, item) => sum + item.dailyChange,
    0
  );

  return (
    <div className='w-full max-w-4xl mx-auto shadow-md rounded-lg p-6'>
      <header className='flex flex-col items-center justify-center pb-4 border-b border-gray-700'>
        <PortfolioSummary
          totalValue={totalValue}
          totalDailyChange={totalDailyChange}
        />
      </header>
      <div className='overflow-x-auto mt-4'>
        <table className='w-full border-collapse'>
          <thead>
            <tr className='border-b bg-gray-700'>
              <th className='text-left py-3 px-4 font-medium text-white'>
                Token
              </th>
              <th className='text-left py-3 px-4 font-medium text-white'>
                Balance
              </th>
              <th className='text-right py-3 px-4 font-medium text-white'>
                Value (USD)
              </th>
              <th className='text-right py-3 px-4 font-medium text-white'>
                Day Change (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((item, index) => (
              <PortfolioTableRow key={item.token} item={item} index={index} />
            ))}
            <tr className='font-bold border-b hover:bg-gray-800'>
              <td className='py-4 px-4 text-white' colSpan='2'>
                Total Balance
              </td>
              <td className='py-4 px-4 text-right text-white'>
                ${totalValue.toLocaleString()}
              </td>
              <td className='py-4 px-4 text-right'>
                <CurrencyDisplay value={totalDailyChange} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
