
import { Search, DollarSign, Bot, Briefcase, ChartLine, Database, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = {
  chart: [
    { date: "2024-01", value: 15000 },
    { date: "2024-02", value: 18000 },
    { date: "2024-03", value: 16500 },
    { date: "2024-04", value: 21000 },
    { date: "2024-05", value: 19500 },
    { date: "2024-06", value: 23000 },
  ],
  cash: {
    total: 25000,
    allocated: 15000,
    available: 10000,
  },
  options: [
    {
      symbol: "GOEV2",
      type: "$1 Call",
      expiry: "1/15/2027",
      quantity: "2 Buys",
      value: 0.01,
      change: 0.00,
    },
  ],
  crypto: [
    {
      symbol: "BTC",
      quantity: 0.00159325,
      value: 104298.82,
      change: 2.93,
    },
    {
      symbol: "AVAX",
      quantity: 1.5147,
      value: 41.33,
      change: 1.55,
    },
  ],
  stocks: [
    {
      symbol: "MSTR",
      shares: "35.20 Shares",
      value: 398.55,
      change: 8.60,
    },
    {
      symbol: "TSLA",
      shares: "0.600034 Shares",
      value: 428.55,
      change: 3.56,
    },
  ],
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Search Bar */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search stocks, options, or crypto..."
            className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Portfolio Chart */}
      <div className="max-w-5xl mx-auto mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Portfolio Value</h2>
            <div className="text-right">
              <div className="text-3xl font-bold">$23,000.00</div>
              <div className="text-sm text-green-500">+$8,000.00 (53.33%)</div>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.chart}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#34D399"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Cash Balance Cards */}
      <div className="max-w-5xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Total Cash</h3>
          </div>
          <div className="text-2xl font-bold">${mockData.cash.total.toLocaleString()}</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Allocated to Bots</h3>
          </div>
          <div className="text-2xl font-bold">${mockData.cash.allocated.toLocaleString()}</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Available Cash</h3>
          </div>
          <div className="text-2xl font-bold">${mockData.cash.available.toLocaleString()}</div>
        </Card>
      </div>

      {/* Holdings Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Options */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Options</h3>
            </div>
          </div>
          <div className="space-y-4">
            {mockData.options.map((option) => (
              <div key={option.symbol} className="border-b pb-4 last:border-0">
                <div className="flex justify-between mb-1">
                  <div className="font-semibold">{option.symbol} {option.type}</div>
                  <div>${option.value}</div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>{option.expiry} • {option.quantity}</div>
                  <div className="text-gray-500">{option.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Crypto */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Crypto</h3>
            </div>
          </div>
          <div className="space-y-4">
            {mockData.crypto.map((crypto) => (
              <div key={crypto.symbol} className="border-b pb-4 last:border-0">
                <div className="flex justify-between mb-1">
                  <div className="font-semibold">{crypto.symbol}</div>
                  <div>${crypto.value.toLocaleString()}</div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>{crypto.quantity}</div>
                  <div className="text-green-500">+{crypto.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Stocks */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Stocks</h3>
            </div>
          </div>
          <div className="space-y-4">
            {mockData.stocks.map((stock) => (
              <div key={stock.symbol} className="border-b pb-4 last:border-0">
                <div className="flex justify-between mb-1">
                  <div className="font-semibold">{stock.symbol}</div>
                  <div>${stock.value}</div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div>{stock.shares}</div>
                  <div className="text-green-500">+{stock.change}%</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;
