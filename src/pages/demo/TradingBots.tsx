import { useState } from "react";
import { TradingBotsSidebar } from "./components/TradingBotsSidebar";
import { Button } from "@/components/ui/button";
import { tradingBots } from "./data/TradingBotsData";

const TradingBots = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("browse-bots");

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
              <div
                key={bot.id}
                className="border rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={bot.imageUrl}
                  alt={bot.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{bot.name}</h2>
                  <p className="text-gray-600 mb-4">{bot.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">
                      Risk: {bot.riskLevel}
                    </span>
                    <Button variant="outline">Deploy</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingBots;
