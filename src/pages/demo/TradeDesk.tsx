
import { useState, useEffect } from "react";
import { Menu, ArrowLeft, Briefcase, ChartLine, History, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import TradingViewWidget from "@/components/TradingViewWidget";
import { searchSymbols, getQuote, type YahooSearchResult } from "@/utils/yahooFinance";
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { useDebounce } from "@/hooks/use-debounce";

const accounts = [
  { id: "1", name: "Main Trading Account", positions: { AAPL: 100, GOOGL: 50, MSFT: 75 } },
  { id: "2", name: "Investment Account", positions: { TSLA: 25, AMZN: 30 } },
  { id: "3", name: "Retirement Account", positions: { VOO: 200, VTI: 150 } },
];

const TradeDesk = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("AAPL");
  const [selectedCompanyName, setSelectedCompanyName] = useState("Apple Inc.");
  const [searchResults, setSearchResults] = useState<YahooSearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState("market");
  const [selectedBuyIn, setSelectedBuyIn] = useState("shares");
  const [quantity, setQuantity] = useState("");
  const [tradeMode, setTradeMode] = useState<"buy" | "sell">("buy");
  const [marketPrice, setMarketPrice] = useState<number | null>(null);

  const debouncedSearch = useDebounce(searchQuery, 300);

  // Handle symbol search
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

  // Fetch market price when symbol changes
  useEffect(() => {
    const fetchQuote = async () => {
      if (selectedSymbol) {
        const quote = await getQuote(selectedSymbol);
        setMarketPrice(quote?.regularMarketPrice || null);
      }
    };

    fetchQuote();
    // Refresh quote every 10 seconds
    const interval = setInterval(fetchQuote, 10000);
    return () => clearInterval(interval);
  }, [selectedSymbol]);

  const selectedAccountData = accounts.find(acc => acc.id === selectedAccount);
  const availableShares = selectedAccountData?.positions[selectedSymbol] || 0;
  const estimatedCost = quantity && marketPrice ? Number(quantity) * marketPrice : 0;

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

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
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
              
              <div className="flex-1 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowResults(true);
                    }}
                    onFocus={() => setShowResults(true)}
                    placeholder="Search symbol or company name..."
                    className="w-full pl-9 pr-8"
                  />
                  {searchQuery && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 p-0"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedSymbol("");
                        setSelectedCompanyName("");
                        setSearchResults([]);
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {showResults && (searchResults.length > 0 || searchQuery) && (
                  <div className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-50">
                    <Command className="rounded-lg border shadow-md">
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
                                setSelectedCompanyName(result.longname || result.shortname);
                                setSearchQuery(`${result.symbol} - ${result.longname || result.shortname}`);
                                setShowResults(false);
                              }}
                              className="flex flex-col items-start"
                            >
                              <span className="font-medium">{result.symbol}</span>
                              <span className="text-sm text-muted-foreground">
                                {result.longname || result.shortname}
                              </span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </div>
                )}
              </div>
            </div>

            <Card className="mb-6 p-4 h-[500px]">
              <div className="w-full h-full" id="tradingview_chart">
                <TradingViewWidget symbol={selectedSymbol} />
              </div>
            </Card>

            <Card className="mb-6 p-6">
              <div className="flex gap-4 mb-6">
                <Button 
                  className={`flex-1 text-lg py-6 ${tradeMode === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  onClick={() => setTradeMode('buy')}
                >
                  Buy {selectedSymbol}
                </Button>
                <Button 
                  className={`flex-1 text-lg py-6 ${tradeMode === 'sell' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                  onClick={() => setTradeMode('sell')}
                >
                  Sell {selectedSymbol}
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
                  {tradeMode === 'sell' && (
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Available Shares</span>
                      <span className="text-lg">{availableShares}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-lg mb-2">Quantity</label>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="0"
                      max={tradeMode === 'sell' ? availableShares : undefined}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Market Price</span>
                    <span className="text-lg">
                      {marketPrice ? `$${marketPrice.toFixed(2)}` : 'Loading...'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Estimated {tradeMode === 'buy' ? 'Cost' : 'Credit'}</span>
                    <span className="text-lg font-semibold">${estimatedCost.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button 
                className={`w-full mt-6 py-6 text-lg ${
                  tradeMode === 'buy' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                Review {tradeMode === 'buy' ? 'Purchase' : 'Sale'}
              </Button>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Trade Options</h3>
                <p>View and trade options contracts for {selectedSymbol}</p>
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
