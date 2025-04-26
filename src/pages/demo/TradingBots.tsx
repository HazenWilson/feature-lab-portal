
import { useState } from "react";
import { TradingBotsSidebar } from "./components/TradingBotsSidebar";
import { Button } from "@/components/ui/button";
import { tradingBots } from "./data/TradingBotsData";
import TradingBotCard from "./components/TradingBotCard";
import { TradingBot } from "./types/TradingBotTypes";

const TradingBots = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("browse-bots");
  const [selectedBot, setSelectedBot] = useState<TradingBot | null>(null);

  const handleSelectBot = (bot: TradingBot) => {
    setSelectedBot(bot);
  };

  return (
    <div className="min-h-screen bg-white">
      <TradingBotsSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Trading Bots</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tradingBots.map((bot) => (
              <TradingBotCard 
                key={bot.id}
                bot={bot}
                onSelect={handleSelectBot}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingBots;
