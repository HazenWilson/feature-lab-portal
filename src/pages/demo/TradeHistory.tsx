
import { ArrowDown, ArrowUp, History, Menu, ArrowLeft, Briefcase, ChartLine } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const mockTradeHistory = [
  {
    id: 1,
    symbol: "BTC",
    type: "buy",
    amount: 0.05,
    price: 62450.80,
    total: 3122.54,
    date: "2024-03-15T14:30:00Z",
    status: "completed"
  },
  {
    id: 2,
    symbol: "MSTR",
    type: "sell",
    amount: 12,
    price: 1485.32,
    total: 17823.84,
    date: "2024-03-14T09:15:00Z",
    status: "completed"
  },
  {
    id: 3,
    symbol: "TSLA",
    type: "buy",
    amount: 25,
    price: 172.25,
    total: 4306.25,
    date: "2024-03-13T11:45:00Z",
    status: "completed"
  },
  {
    id: 4,
    symbol: "AVAX",
    type: "sell",
    amount: 50,
    price: 42.15,
    total: 2107.50,
    date: "2024-03-12T16:20:00Z",
    status: "completed"
  },
  {
    id: 5,
    symbol: "ETH",
    type: "buy",
    amount: 1.5,
    price: 3245.75,
    total: 4868.63,
    date: "2024-03-11T13:10:00Z",
    status: "completed"
  }
];

const TradeHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-12">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {sidebarOpen && (
              <span className="text-lg font-semibold">Nϵα</span>
            )}
          </div>

          <nav className="space-y-12">
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
              <Link to="/demo/portfolio">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Dashboard</span>}
                </Button>
              </Link>
            </div>

            <div>
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
            </div>

            <div>
              <Link to="/demo/portfolio/history">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start bg-white/10 ${
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
          <div className="max-w-7xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <History className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Trade History</h2>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-4 px-2">Date</th>
                      <th className="py-4 px-2">Type</th>
                      <th className="py-4 px-2">Symbol</th>
                      <th className="py-4 px-2">Amount</th>
                      <th className="py-4 px-2">Price</th>
                      <th className="py-4 px-2">Total</th>
                      <th className="py-4 px-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {mockTradeHistory.map((trade) => (
                      <tr key={trade.id}>
                        <td className="py-4 px-2">
                          {new Date(trade.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </td>
                        <td className="py-4 px-2">
                          <div className={`flex items-center gap-1 ${
                            trade.type === 'buy' ? 'text-green-500' : 'text-red-500'
                          }`}>
                            {trade.type === 'buy' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                            {trade.type.toUpperCase()}
                          </div>
                        </td>
                        <td className="py-4 px-2 font-medium">{trade.symbol}</td>
                        <td className="py-4 px-2">{trade.amount}</td>
                        <td className="py-4 px-2">${trade.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="py-4 px-2">${trade.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td className="py-4 px-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {trade.status.charAt(0).toUpperCase() + trade.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
