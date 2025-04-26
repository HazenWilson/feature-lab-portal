
import { DollarSign, Bot, Briefcase, ChartLine, Database, BarChart, ArrowLeft, History, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area
} from "recharts";

type TimeFrame = '24h' | '1w' | '1m' | '3m' | '1y' | 'ytd' | 'all';

const chartData = {
  "24h": [
    { date: "00:00", value: 10000 },
    { date: "04:00", value: 10200 },
    { date: "08:00", value: 10150 },
    { date: "12:00", value: 10300 },
    { date: "16:00", value: 10400 },
    { date: "20:00", value: 10350 },
  ],
  "1w": [
    { date: "Mon", value: 10000 },
    { date: "Tue", value: 10200 },
    { date: "Wed", value: 10300 },
    { date: "Thu", value: 10400 },
    { date: "Fri", value: 10350 },
  ],
  "1m": [
    { date: "Week 1", value: 10000 },
    { date: "Week 2", value: 10200 },
    { date: "Week 3", value: 10300 },
    { date: "Week 4", value: 10350 },
  ],
  "3m": [
    { date: "Jan", value: 10000 },
    { date: "Feb", value: 10200 },
    { date: "Mar", value: 10350 },
  ],
  "1y": [
    { date: "2023 Q2", value: 9000 },
    { date: "2023 Q3", value: 9500 },
    { date: "2023 Q4", value: 10000 },
    { date: "2024 Q1", value: 10350 },
  ],
  "ytd": [
    { date: "Jan", value: 10000 },
    { date: "Feb", value: 10200 },
    { date: "Mar", value: 10350 },
  ],
  "all": [
    { date: "2022", value: 8000 },
    { date: "2023", value: 9000 },
    { date: "2024", value: 10350 },
  ],
};

const mockData = {
  cash: {
    total: 10000,
    allocated: 5000,
    available: 5000,
  },
  options: [
    {
      symbol: "AAPL24C200",
      type: "$200 Call",
      expiry: "1/17/2024",
      quantity: "1 Buy",
      value: 5.50,
      change: 1.20,
    },
  ],
  crypto: [
    {
      symbol: "BTC",
      quantity: 0.00052365,
      value: 25.82,
      change: 2.93,
    },
    {
      symbol: "ETH",
      quantity: 0.0147,
      value: 41.33,
      change: 1.55,
    },
  ],
  stocks: [
    {
      symbol: "AAPL",
      shares: "2.5 Shares",
      value: 398.55,
      change: 1.20,
    },
    {
      symbol: "MSFT",
      shares: "1.2 Shares",
      value: 428.55,
      change: 0.85,
    },
  ],
};

const timeFrameLabels: Record<TimeFrame, string> = {
  "24h": "24H",
  "1w": "1W",
  "1m": "1M",
  "3m": "3M",
  "1y": "1Y",
  "ytd": "YTD",
  "all": "ALL"
};

const PaperTrading = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>("1m");

  return (
    <div className="min-h-screen bg-white flex">
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {sidebarOpen && (
              <span className="text-lg font-semibold">Paper Trading</span>
            )}
          </div>

          <nav className="space-y-6">
            <div>
              <Link to="/demo">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Back to Tools</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start bg-white/10 ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Dashboard</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading/trade">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <ChartLine className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Trade Desk</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading/history">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <History className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Trade History</span>}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-7xl mx-auto mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Paper Trading Portfolio Value</h2>
                <div className="text-right">
                  <div className="text-3xl font-bold">$10,350.00</div>
                  <div className="text-sm text-green-500">+$350.00 (3.50%)</div>
                </div>
              </div>

              <div className="h-[400px] mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData[selectedTimeFrame]} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#34D399" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#666666', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#666666', fontSize: 12 }}
                      width={80}
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: '2px solid #f0f0f0',
                        borderRadius: '8px',
                        padding: '8px'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#34D399"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#34D399"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex gap-2 justify-center">
                {(Object.keys(timeFrameLabels) as TimeFrame[]).map((timeFrame) => (
                  <Button
                    key={timeFrame}
                    variant={selectedTimeFrame === timeFrame ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTimeFrame(timeFrame)}
                    className="min-w-12 transition-all duration-200 hover:scale-105"
                  >
                    {timeFrameLabels[timeFrame]}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <h3 className="font-semibold">Allocated to Positions</h3>
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

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      <div className="text-green-500">+{option.change}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

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
      </div>
    </div>
  );
};

export default PaperTrading;
