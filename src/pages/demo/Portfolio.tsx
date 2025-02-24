
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
import { cn } from "@/lib/utils";

type TimeFrame = '24h' | '1w' | '1m' | '3m' | '1y' | 'ytd' | 'all';

const chartData = {
  "24h": [
    { date: "00:00", value: 22000 },
    { date: "04:00", value: 22500 },
    { date: "08:00", value: 22300 },
    { date: "12:00", value: 22800 },
    { date: "16:00", value: 23200 },
    { date: "20:00", value: 23000 },
  ],
  "1w": [
    { date: "Mon", value: 21000 },
    { date: "Tue", value: 21500 },
    { date: "Wed", value: 22000 },
    { date: "Thu", value: 22500 },
    { date: "Fri", value: 23000 },
  ],
  "1m": [
    { date: "Week 1", value: 20000 },
    { date: "Week 2", value: 21000 },
    { date: "Week 3", value: 22000 },
    { date: "Week 4", value: 23000 },
  ],
  "3m": [
    { date: "Jan", value: 19000 },
    { date: "Feb", value: 21000 },
    { date: "Mar", value: 23000 },
  ],
  "1y": [
    { date: "2023 Q2", value: 15000 },
    { date: "2023 Q3", value: 17000 },
    { date: "2023 Q4", value: 20000 },
    { date: "2024 Q1", value: 23000 },
  ],
  "ytd": [
    { date: "Jan", value: 21000 },
    { date: "Feb", value: 22000 },
    { date: "Mar", value: 23000 },
  ],
  "all": [
    { date: "2022", value: 10000 },
    { date: "2023", value: 15000 },
    { date: "2024", value: 23000 },
  ],
};

const mockData = {
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

const timeFrameLabels: Record<TimeFrame, string> = {
  "24h": "24H",
  "1w": "1W",
  "1m": "1M",
  "3m": "3M",
  "1y": "1Y",
  "ytd": "YTD",
  "all": "ALL"
};

const Portfolio = () => {
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
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="space-y-4">
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

            <Link to="/demo/portfolio">
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

            <Link to="#">
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

            <Link to="/demo/portfolio/history">
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
        </div>
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-5xl mx-auto mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Personal Portfolio Value</h2>
                <div className="text-right">
                  <div className="text-3xl font-bold">$23,000.00</div>
                  <div className="text-sm text-green-500">+$8,000.00 (53.33%)</div>
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

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default Portfolio;
