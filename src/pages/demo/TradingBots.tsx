
import { useState } from "react";
import { TradingBotsSidebar } from "./components/TradingBotsSidebar";

const TradingBots = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("browse-bots");

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
          {currentSection === "browse-bots" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">Browse Trading Bots</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tradingBots.map((bot) => (
                  <div key={bot.id} className="border-2 rounded-lg p-4">
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

// Sample bot data for the browse bots section
import { TrendingUp, LineChart, BarChart4, ArrowUpDown, Workflow } from "lucide-react";

const tradingBots = [
  {
    id: 1,
    name: "Momentum Tracker",
    description: "Identifies and trades stocks with strong upward momentum based on volume and price action.",
    creator: "Neo Algo Trading",
    status: "Active",
    icon: TrendingUp,
  },
  {
    id: 2,
    name: "Mean Reversion",
    description: "Exploits price movements that revert to the mean after temporary deviations.",
    creator: "Quantitative Solutions",
    status: "Active",
    icon: ArrowUpDown,
  },
  {
    id: 3,
    name: "Breakout Detector",
    description: "Identifies and trades breakouts from key chart patterns and resistance levels.",
    creator: "Neo Algo Trading",
    status: "Testing",
    icon: LineChart,
  },
  {
    id: 4,
    name: "Sector Rotator",
    description: "Allocates capital dynamically across sectors based on relative strength and momentum.",
    creator: "Sector Alpha Inc",
    status: "Active",
    icon: BarChart4,
  },
  {
    id: 5,
    name: "Multi-Factor Model",
    description: "Combines value, momentum, quality, and low volatility factors for stock selection.",
    creator: "Quantitative Solutions",
    status: "Testing",
    icon: Workflow,
  },
];

export default TradingBots;
