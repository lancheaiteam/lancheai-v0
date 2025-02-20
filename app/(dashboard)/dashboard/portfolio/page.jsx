import React from 'react';
import { Wallet } from 'lucide-react';


const Portfolio = () => {
  const portfolioData = [
    { token: 'AVAX', balance: '10 AVAX', value: 2394.00 },
    { token: 'USDT', balance: '100 USDT', value: 100.00 },
    { token: 'WETH', balance: '0.5 WETH', value: 1363.00 }
  ];

  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-row items-center justify-between pb-4 border-b">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Portfolio Balance
        </h2>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total Value</div>
          <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
        </div>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Token</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Balance</th>
              <th className="text-right py-3 px-4 font-medium text-gray-600">Value (USD)</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((item, index) => (
              <tr key={item.token} className={`border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="py-3 px-4 flex items-center gap-2">
                  <span className="font-medium">{item.token}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{item.balance}</td>
                <td className="py-3 px-4 text-right font-medium">${item.value.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="py-4 px-4" colSpan="2">Total Balance</td>
              <td className="py-4 px-4 text-right">${totalValue.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Portfolio;
