import { useState } from "react";
import { Menu, ArrowLeft, Briefcase, ChartLine, History } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TradingViewWidget from "@/components/TradingViewWidget";

// Mock accounts data
const accounts = [
  { id: "1", name: "Main Trading Account" },
  { id: "2", name: "Investment Account" },
  { id: "3", name: "Retirement Account" },
];

const TradeDesk = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].id);
  const [searchQuery, setSearchQuery] = useState("AAPL");
  const [selectedOrderType, setSelectedOrderType] = useState("market");
  const [selectedBuyIn, setSelectedBuyIn] = useState("shares");
  const [quantity, setQuantity] = useState("");

  // Mock price data
  const marketPrice = 100.00;
  const estimatedCost = quantity ? Number(quantity) * marketPrice : 0;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
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
            {sidebarOpen && <span className="text-lg font-semibold">Nϵα</span>}
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
              <Link to="/demo/portfolio/trade">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start bg-white/10 ${
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

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Top bar with account selector and search */}
            <div className="flex gap-4 mb-6">
              <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id}>
                      {account.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="Search symbol..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
            </div>

            {/* TradingView Chart */}
            <Card className="mb-6 p-4 h-[500px]">
              <div className="w-full h-full" id="tradingview_chart">
                <TradingViewWidget symbol={searchQuery} />
              </div>
            </Card>

            {/* Buy/Sell Card */}
            <Card className="mb-6 p-6">
              <div className="flex gap-4 mb-6">
                <Button 
                  className="flex-1 text-lg py-6 bg-green-600 hover:bg-green-700"
                >
                  Buy {searchQuery}
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 text-lg py-6"
                >
                  Sell {searchQuery}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-lg mb-2">Order Type</label>
                    <Select value={selectedOrderType} onValueChange={setSelectedOrderType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select order type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="market">Market</SelectItem>
                        <SelectItem value="limit">Limit</SelectItem>
                        <SelectItem value="stop">Stop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-lg mb-2">Buy in</label>
                    <Select value={selectedBuyIn} onValueChange={setSelectedBuyIn}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select buy in type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shares">Shares</SelectItem>
                        <SelectItem value="dollars">Dollars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-lg mb-2">Quantity</label>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="0"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Market Price</span>
                    <span className="text-lg">${marketPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Estimated Cost</span>
                    <span className="text-lg font-semibold">${estimatedCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 py-6 text-lg bg-green-600 hover:bg-green-700">
                Review Purchase
              </Button>
            </Card>

            {/* Additional Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Trade Options</h3>
                <p>View and trade options contracts for {searchQuery}</p>
                <Button variant="outline" className="w-full mt-4">
                  View Options Chain
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Market Value</h3>
                <div className="text-2xl font-bold">$23,450.00</div>
                <div className="text-sm text-gray-500">Average Cost: $142.50</div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Options Contracts Value</h3>
                <div className="text-2xl font-bold">$1,250.00</div>
                <div className="text-sm text-gray-500">3 Active Contracts</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDesk;
