import { useState } from "react";
import { TradingBotsSidebar } from "./components/TradingBotsSidebar";
import { 
  TrendingUp, LineChart, BarChart4, ArrowUpDown, Workflow, 
  X, AlertCircle, Check
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tradingBots = [
  {
    id: 1,
    name: "Momentum Tracker",
    description: "Identifies and trades stocks with strong upward momentum based on volume and price action.",
    longDescription: "This algorithm identifies stocks with strong upward momentum by analyzing recent price action and volume patterns. It looks for stocks that are breaking out of consolidation patterns with increased volume, indicating potential for continued upward movement. The bot uses a combination of moving averages, relative strength indicators, and volume analysis to filter for the most promising momentum candidates.",
    creator: "Neo Algo Trading",
    status: "Active",
    icon: TrendingUp,
    backtest: {
      annualReturn: 28.5,
      maxDrawdown: 22.4,
      sharpeRatio: 1.8,
      winRate: 65.2,
      tradesPerMonth: 14,
      avgHoldingPeriod: 8.3,
      performanceByMonth: [12.2, 8.4, -3.2, 5.3, -1.7, 7.8, 9.2, -2.1, 6.5, 3.2, 10.1, 4.8]
    },
    settings: {
      suggestedMaxTradeSize: 5, // percentage
      defaultStopLoss: 3.5, // percentage
      defaultTakeProfit: 8.2, // percentage
    }
  },
  {
    id: 2,
    name: "Mean Reversion",
    description: "Exploits price movements that revert to the mean after temporary deviations.",
    longDescription: "The Mean Reversion bot exploits the tendency of asset prices to return to their average levels over time. When prices deviate significantly from their historical averages, the algorithm identifies potential reversal opportunities. It uses statistical measures like standard deviation bands, RSI oversold/overbought conditions, and Bollinger Bands to determine entry and exit points for trades.",
    creator: "Quantitative Solutions",
    status: "Active",
    icon: ArrowUpDown,
    backtest: {
      annualReturn: 22.1,
      maxDrawdown: 16.8,
      sharpeRatio: 1.6,
      winRate: 72.5,
      tradesPerMonth: 22,
      avgHoldingPeriod: 3.2,
      performanceByMonth: [5.1, 6.8, -2.3, 4.2, 6.7, -1.8, 3.9, 5.2, -0.9, 4.3, 3.7, 5.6]
    },
    settings: {
      suggestedMaxTradeSize: 4, // percentage
      defaultStopLoss: 2.5, // percentage
      defaultTakeProfit: 5.0, // percentage
    }
  },
  {
    id: 3,
    name: "Breakout Detector",
    description: "Identifies and trades breakouts from key chart patterns and resistance levels.",
    longDescription: "The Breakout Detector bot scans for stocks breaking out of established chart patterns or key resistance levels. It recognizes patterns such as triangles, flags, and rectangles, and waits for confirmation of breakouts with increased volume. The algorithm includes filters to avoid false breakouts and has mechanisms for pyramiding into positions as the breakout develops.",
    creator: "Neo Algo Trading",
    status: "Testing",
    icon: LineChart,
    backtest: {
      annualReturn: 32.7,
      maxDrawdown: 28.9,
      sharpeRatio: 1.5,
      winRate: 58.1,
      tradesPerMonth: 9,
      avgHoldingPeriod: 12.5,
      performanceByMonth: [14.3, -5.2, 8.7, 9.5, -8.3, 12.2, -2.5, 7.9, 6.1, -3.8, 11.5, 5.2]
    },
    settings: {
      suggestedMaxTradeSize: 6, // percentage
      defaultStopLoss: 5.0, // percentage
      defaultTakeProfit: 15.0, // percentage
    }
  },
  {
    id: 4,
    name: "Sector Rotator",
    description: "Allocates capital dynamically across sectors based on relative strength and momentum.",
    longDescription: "The Sector Rotator bot takes advantage of the cyclical nature of market sectors. It tracks the relative performance of different sectors and rotates capital to those showing the strongest momentum. The algorithm incorporates both technical indicators like relative strength and fundamentals such as earnings growth and valuation metrics to determine optimal sector allocations.",
    creator: "Sector Alpha Inc",
    status: "Active",
    icon: BarChart4,
    backtest: {
      annualReturn: 25.3,
      maxDrawdown: 19.6,
      sharpeRatio: 1.7,
      winRate: 68.4,
      tradesPerMonth: 6,
      avgHoldingPeriod: 22.8,
      performanceByMonth: [5.8, 3.2, 6.9, -2.1, 4.7, 5.3, -3.5, 7.8, 2.9, 4.2, -1.8, 8.6]
    },
    settings: {
      suggestedMaxTradeSize: 10, // percentage
      defaultStopLoss: 7.5, // percentage
      defaultTakeProfit: 20.0, // percentage
    }
  },
  {
    id: 5,
    name: "Multi-Factor Model",
    description: "Combines value, momentum, quality, and low volatility factors for stock selection.",
    longDescription: "The Multi-Factor Model bot employs a sophisticated approach that blends multiple investment factors. It evaluates stocks based on value metrics (P/E, P/B ratios), momentum indicators (price performance over various timeframes), quality metrics (ROE, earnings stability), and volatility measures. By combining these factors, it creates a diversified portfolio that aims to outperform in various market conditions.",
    creator: "Quantitative Solutions",
    status: "Testing",
    icon: Workflow,
    backtest: {
      annualReturn: 21.2,
      maxDrawdown: 15.3,
      sharpeRatio: 1.9,
      winRate: 67.0,
      tradesPerMonth: 12,
      avgHoldingPeriod: 18.5,
      performanceByMonth: [3.5, 4.2, 2.9, -1.3, 3.8, 2.7, 4.1, -2.0, 3.4, 2.9, 3.6, 2.8]
    },
    settings: {
      suggestedMaxTradeSize: 7, // percentage
      defaultStopLoss: 5.0, // percentage
      defaultTakeProfit: 12.0, // percentage
    }
  },
];

const TradingBots = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("browse-bots");
  const [selectedBot, setSelectedBot] = useState(null);
  const [deploymentConfig, setDeploymentConfig] = useState({
    capitalAllocation: 10000,
    maxTradeSize: 5,
    stopLoss: 3.5,
    takeProfit: 8.2,
    usePresetSettings: true,
    account: "paper-1", // Default account
  });

  const tradingAccounts = [
    { id: "paper-1", name: "Paper Trading Account 1", balance: 25000 },
    { id: "paper-2", name: "Paper Trading Account 2", balance: 50000 },
    { id: "paper-3", name: "Paper Trading Account 3", balance: 10000 },
    { id: "coinbase", name: "Personal - Coinbase", balance: 5230.45 },
    { id: "alpaca", name: "Personal - Alpaca", balance: 8750.20 },
    { id: "investment-club", name: "Investment Club", balance: 120500.75 },
  ];

  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
    setDeploymentConfig({
      capitalAllocation: 10000,
      maxTradeSize: bot.settings.suggestedMaxTradeSize,
      stopLoss: bot.settings.defaultStopLoss,
      takeProfit: bot.settings.defaultTakeProfit,
      usePresetSettings: true,
      account: "paper-1", // Default account
    });
  };

  const handleBackToList = () => {
    setSelectedBot(null);
  };

  const handleDeploymentConfigChange = (field, value) => {
    setDeploymentConfig({
      ...deploymentConfig,
      [field]: value,
      usePresetSettings: field !== "account" ? false : deploymentConfig.usePresetSettings,
    });
  };

  const handleUsePresetSettings = () => {
    setDeploymentConfig({
      ...deploymentConfig,
      maxTradeSize: selectedBot.settings.suggestedMaxTradeSize,
      stopLoss: selectedBot.settings.defaultStopLoss,
      takeProfit: selectedBot.settings.defaultTakeProfit,
      usePresetSettings: true,
    });
  };

  const renderPerformanceChart = (bot) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const maxValue = Math.max(...bot.backtest.performanceByMonth.map(Math.abs));
    
    return (
      <div className="mt-4">
        <h3 className="text-md font-semibold mb-2">Monthly Performance (%)</h3>
        <div className="flex items-end h-60 gap-1">
          {bot.backtest.performanceByMonth.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex justify-center">
                <div
                  className={`w-full ${value >= 0 ? "bg-green-500" : "bg-red-500"}`}
                  style={{
                    height: `${Math.abs(value) / maxValue * 80}%`,
                    minHeight: '4px',
                  }}
                ></div>
              </div>
              <span className="text-xs mt-1 rotate-45 origin-left">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex">
      <TradingBotsSidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <div 
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-6">
          {currentSection === "browse-bots" && !selectedBot && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Browse Trading Bots</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingBots.map((bot) => (
                  <div 
                    key={bot.id} 
                    className="border-2 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors duration-200"
                    onClick={() => handleBotSelect(bot)}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <bot.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="font-semibold text-lg">{bot.name}</h2>
                    </div>
                    <p className="text-gray-600 mb-4">{bot.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{bot.creator}</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        bot.status === "Active" ? "bg-green-100 text-green-800" :
                        bot.status === "Testing" ? "bg-yellow-100 text-yellow-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>{bot.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentSection === "browse-bots" && selectedBot && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">{selectedBot.name}</h1>
                <Button variant="outline" onClick={handleBackToList}>
                  <X className="mr-2 h-4 w-4" />
                  Back to List
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{selectedBot.longDescription}</p>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold mb-3">Backtest Results</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Annual Return</p>
                          <p className="text-xl font-semibold text-green-600">{selectedBot.backtest.annualReturn}%</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Max Drawdown</p>
                          <p className="text-xl font-semibold text-red-600">{selectedBot.backtest.maxDrawdown}%</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Sharpe Ratio</p>
                          <p className="text-xl font-semibold">{selectedBot.backtest.sharpeRatio}</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Win Rate</p>
                          <p className="text-xl font-semibold">{selectedBot.backtest.winRate}%</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Trades / Month</p>
                          <p className="text-xl font-semibold">{selectedBot.backtest.tradesPerMonth}</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <p className="text-sm text-gray-500">Avg. Holding (days)</p>
                          <p className="text-xl font-semibold">{selectedBot.backtest.avgHoldingPeriod}</p>
                        </div>
                      </div>
                    </div>

                    {renderPerformanceChart(selectedBot)}
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm text-gray-500">
                      Created by <span className="font-semibold">{selectedBot.creator}</span> • 
                      <span className={`ml-2 ${
                        selectedBot.status === "Active" ? "text-green-600" :
                        selectedBot.status === "Testing" ? "text-yellow-600" :
                        "text-gray-600"
                      }`}>
                        {selectedBot.status} Status
                      </span>
                    </div>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Deployment Configuration</CardTitle>
                    <CardDescription>Configure and deploy this bot</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="account">Deploy to Account</Label>
                        <Select
                          value={deploymentConfig.account}
                          onValueChange={(value) => handleDeploymentConfigChange("account", value)}
                        >
                          <SelectTrigger id="account" className="w-full">
                            <SelectValue placeholder="Select an account" />
                          </SelectTrigger>
                          <SelectContent>
                            {tradingAccounts.map((account) => (
                              <SelectItem key={account.id} value={account.id}>
                                <div className="flex justify-between w-full items-center">
                                  <span>{account.name}</span>
                                  <span className="text-sm font-medium text-green-600 ml-4">
                                    ${account.balance.toLocaleString()}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="capital">Capital Allocation ($)</Label>
                        <Input 
                          id="capital"
                          type="number"
                          value={deploymentConfig.capitalAllocation}
                          onChange={(e) => handleDeploymentConfigChange("capitalAllocation", parseFloat(e.target.value))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="maxTradeSize">Max Trade Size (%)</Label>
                          <span className="text-xs text-gray-500">
                            Suggested: {selectedBot.settings.suggestedMaxTradeSize}%
                          </span>
                        </div>
                        <Input 
                          id="maxTradeSize"
                          type="number"
                          value={deploymentConfig.maxTradeSize}
                          onChange={(e) => handleDeploymentConfigChange("maxTradeSize", parseFloat(e.target.value))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="stopLoss">Stop Loss (%)</Label>
                        <Input 
                          id="stopLoss"
                          type="number"
                          value={deploymentConfig.stopLoss}
                          onChange={(e) => handleDeploymentConfigChange("stopLoss", parseFloat(e.target.value))}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="takeProfit">Take Profit (%)</Label>
                        <Input 
                          id="takeProfit"
                          type="number"
                          value={deploymentConfig.takeProfit}
                          onChange={(e) => handleDeploymentConfigChange("takeProfit", parseFloat(e.target.value))}
                        />
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={handleUsePresetSettings}
                      >
                        {deploymentConfig.usePresetSettings ? (
                          <Check className="mr-2 h-4 w-4" />
                        ) : (
                          <span className="mr-2 h-4 w-4" />
                        )}
                        Use Preset Settings
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Deploy Bot</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}

          {currentSection === "deployments" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Bot Deployments</h1>
              <div className="border-2 rounded-lg p-6 max-w-4xl">
                <p className="text-lg text-center text-gray-500 my-8">
                  You don't have any active bot deployments.
                  <br />
                  Browse available bots to deploy one.
                </p>
              </div>
            </div>
          )}

          {currentSection === "develop-bot" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Develop Trading Bot</h1>
              <div className="border-2 rounded-lg p-6 max-w-4xl">
                <h2 className="text-xl font-semibold mb-4">Bot Development Studio</h2>
                <p className="text-gray-600 mb-6">
                  Create custom trading bots using our intuitive development interface.
                  Design algorithms, backtest your strategies, and deploy them to live markets.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="border-2 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Strategy Builder</h3>
                    <p className="text-sm text-gray-600">
                      Visually design your trading strategy with our block-based editor.
                    </p>
                  </div>
                  <div className="border-2 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Backtesting Engine</h3>
                    <p className="text-sm text-gray-600">
                      Test your strategy against historical data to validate performance.
                    </p>
                  </div>
                  <div className="border-2 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Code Editor</h3>
                    <p className="text-sm text-gray-600">
                      Write custom Python or JavaScript code for advanced strategies.
                    </p>
                  </div>
                  <div className="border-2 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Risk Management</h3>
                    <p className="text-sm text-gray-600">
                      Set stop-loss, take-profit, and maximum drawdown parameters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingBots;
