import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar, Filter } from 'lucide-react';

const MarketInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trends');
  const [timeframe, setTimeframe] = useState('6M');

  // Mock data for the charts
  const marketTrends = {
    '1M': [3.2, 3.5, 3.4, 3.6, 3.7, 3.9, 4.1, 4.0, 4.2],
    '6M': [2.8, 3.0, 3.1, 3.3, 3.4, 3.6, 3.5, 3.7, 3.8, 3.9, 4.1, 4.2, 4.3, 4.5, 4.6, 4.8],
    '1Y': [2.5, 2.7, 2.9, 3.0, 2.8, 2.9, 3.2, 3.5, 3.7, 3.8, 3.9, 4.1, 4.0, 4.2, 4.3, 4.5, 4.6, 4.8, 5.0],
    '5Y': [1.8, 2.0, 2.3, 2.5, 2.7, 2.9, 3.2, 3.5, 3.7, 3.9, 4.2, 4.5, 4.8, 4.9, 5.1],
  };

  const selectedData = marketTrends[timeframe as keyof typeof marketTrends];
  const changePercent = ((selectedData[selectedData.length - 1] - selectedData[0]) / selectedData[0] * 100).toFixed(1);
  const isPositive = Number(changePercent) > 0;

  // Calculate max value for scaling the chart
  const maxValue = Math.max(...selectedData) * 1.1;

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real-Time Market Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest market trends, price analyses, and investment opportunities to make confident decisions.
          </p>
        </div>

        {/* Insights Dashboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Dashboard Tabs */}
          <div className="flex border-b border-gray-200">
            <button 
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'trends' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('trends')}
            >
              Market Trends
            </button>
            <button 
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'predictions' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('predictions')}
            >
              Price Predictions
            </button>
            <button 
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === 'neighborhoods' 
                  ? 'text-indigo-600 border-b-2 border-indigo-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
              onClick={() => setActiveTab('neighborhoods')}
            >
              Neighborhood Analysis
            </button>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            {/* Filters and Controls */}
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Filter size={16} />
                <span>Filters:</span>
                <select className="border border-gray-300 rounded-md px-3 py-1.5">
                  <option>All Property Types</option>
                  <option>Houses</option>
                  <option>Condos</option>
                  <option>Villas</option>
                </select>
                <select className="border border-gray-300 rounded-md px-3 py-1.5">
                  <option>All Areas</option>
                  <option>Paradise Cove</option>
                  <option>Financial District</option>
                  <option>Park Slope</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-1 mt-4 sm:mt-0">
                <button 
                  className={`px-3 py-1.5 text-xs font-medium rounded-l-md ${
                    timeframe === '1M' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTimeframe('1M')}
                >
                  1M
                </button>
                <button 
                  className={`px-3 py-1.5 text-xs font-medium ${
                    timeframe === '6M' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTimeframe('6M')}
                >
                  6M
                </button>
                <button 
                  className={`px-3 py-1.5 text-xs font-medium ${
                    timeframe === '1Y' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTimeframe('1Y')}
                >
                  1Y
                </button>
                <button 
                  className={`px-3 py-1.5 text-xs font-medium rounded-r-md ${
                    timeframe === '5Y' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setTimeframe('5Y')}
                >
                  5Y
                </button>
              </div>
            </div>
            
            {/* Market Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Average Price</p>
                    <h3 className="text-2xl font-bold mt-1">$4.2M</h3>
                  </div>
                  <div className={`flex items-center px-2 py-1 rounded-full text-sm ${
                    isPositive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {isPositive ? (
                      <TrendingUp size={14} className="mr-1" />
                    ) : (
                      <TrendingDown size={14} className="mr-1" />
                    )}
                    <span>{changePercent}%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-4 flex items-center">
                  <Calendar size={12} className="mr-1" />
                  Compared to {timeframe === '1M' ? 'last month' : timeframe === '6M' ? '6 months ago' : timeframe === '1Y' ? 'last year' : '5 years ago'}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Price per Sq.Ft</p>
                    <h3 className="text-2xl font-bold mt-1">$1,250</h3>
                  </div>
                  <div className="flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <TrendingUp size={14} className="mr-1" />
                    <span>5.4%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-4 flex items-center">
                  <DollarSign size={12} className="mr-1" />
                  30% higher than city average
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Days on Market</p>
                    <h3 className="text-2xl font-bold mt-1">42</h3>
                  </div>
                  <div className="flex items-center px-2 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                    <TrendingDown size={14} className="mr-1" />
                    <span>8.7%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-xs mt-4 flex items-center">
                  <Calendar size={12} className="mr-1" />
                  Selling faster than previous period
                </p>
              </div>
            </div>
            
            {/* Price Chart */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Price Trends</h3>
                <div className="text-gray-500 text-sm">Million USD</div>
              </div>
              
              <div className="h-64 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                <div className="flex h-full items-end">
                  {selectedData.map((value, index) => (
                    <div 
                      key={index}
                      className="flex-grow flex flex-col items-center justify-end mx-0.5"
                    >
                      <div className="group relative">
                        <div 
                          className="w-full bg-indigo-600 rounded-t-sm transition-all duration-300 hover:bg-indigo-700 hover:scale-x-105"
                          style={{ 
                            height: `${(value / maxValue) * 100}%`,
                            minHeight: '1px',
                          }}
                        ></div>
                        
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity">
                          ${value}M
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;