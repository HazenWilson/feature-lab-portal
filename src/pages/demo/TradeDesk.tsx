
import { useState, useEffect } from "react";
import { Menu, ArrowLeft, Briefcase, ChartLine, History, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TradingViewWidget from "@/components/TradingViewWidget";
import { searchSymbols, type YahooSearchResult } from "@/utils/yahooFinance";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";

// Mock accounts data
const accounts = [
  { id: "1", name: "Main Trading Account" },
  { id: "2", name: "Investment Account" },
  { id: "3", name: "Retirement Account" },
];

const TradeDesk = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");
  const [selectedCompanyName, setSelectedCompanyName] = useState("Apple Inc.");
  const [searchResults, setSearchResults] = useState<YahooSearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState("market");
  const [selectedBuyIn, setSelectedBuyIn] = useState("shares");
  const [quantity, setQuantity] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedSearch) {
        try {
          const results = await searchSymbols(debouncedSearch);
          setSearchResults(results || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [debouncedSearch]);

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
              
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="flex-1 justify-between text-left font-normal"
                  >
                    <div className="flex gap-2 items-center">
                      <Search className="h-4 w-4 shrink-0 opacity-50" />
                      {selectedSymbol ? (
                        <div className="flex flex-col">
                          <span className="font-medium">{selectedSymbol}</span>
                          <span className="text-sm text-muted-foreground">{selectedCompanyName}</span>
                        </div>
                      ) : (
                        "Search symbols..."
                      )}
                    </div>
                    {selectedSymbol && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSymbol("");
                          setSelectedCompanyName("");
                          setSearchQuery("");
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search symbol or company name..."
                      value={searchQuery}
                      onValueChange={setSearchQuery}
                      className="h-9"
                    />
                    <CommandList>
                      {searchResults.length === 0 && searchQuery && (
                        <CommandEmpty>No results found.</CommandEmpty>
                      )}
                      <CommandGroup>
                        {searchResults.map((result) => (
                          <CommandItem
                            key={result.symbol}
                            value={result.symbol}
                            onSelect={() => {
                              setSelectedSymbol(result.symbol);
                              setSelectedCompanyName(result.name);
                              setOpen(false);
                            }}
                          >
                            <div className="flex flex-col">
                              <span>{result.symbol}</span>
                              <span className="text-sm text-muted-foreground">
                                {result.name}
                              </span>
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* TradingView Chart */}
            <Card className="mb-6 p-4 h-[500px]">
              <div className="w-full h-full" id="tradingview_chart">
                <TradingViewWidget symbol={selectedSymbol} />
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
