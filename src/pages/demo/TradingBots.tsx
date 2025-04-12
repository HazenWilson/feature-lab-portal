
import { useState } from "react";
import { TradingBotsSidebar } from "./components/TradingBotsSidebar";
import { TradingBot, DeploymentConfig } from "./types/TradingBotTypes";
import { tradingBots, tradingAccounts } from "./data/TradingBotsData";
import TradingBotCard from "./components/TradingBotCard";
import TradingBotDetails from "./components/TradingBotDetails";
import BotDeploymentsList from "./components/BotDeploymentsList";
import BotDevelopmentStudio from "./components/BotDevelopmentStudio";

const TradingBots = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("browse-bots");
  const [selectedBot, setSelectedBot] = useState<TradingBot | null>(null);
  const [deploymentConfig, setDeploymentConfig] = useState<DeploymentConfig>({
    capitalAllocation: 10000,
    maxTradeSize: 5,
    stopLoss: 3.5,
    takeProfit: 8.2,
    usePresetSettings: true,
    account: "paper-1", // Default account
  });

  const handleBotSelect = (bot: TradingBot) => {
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

  const handleDeploymentConfigChange = (field: string, value: any) => {
    setDeploymentConfig({
      ...deploymentConfig,
      [field]: value,
      usePresetSettings: field !== "account" ? false : deploymentConfig.usePresetSettings,
    });
  };

  const handleUsePresetSettings = () => {
    if (!selectedBot) return;
    
    setDeploymentConfig({
      ...deploymentConfig,
      maxTradeSize: selectedBot.settings.suggestedMaxTradeSize,
      stopLoss: selectedBot.settings.defaultStopLoss,
      takeProfit: selectedBot.settings.defaultTakeProfit,
      usePresetSettings: true,
    });
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
                  <TradingBotCard 
                    key={bot.id}
                    bot={bot} 
                    onSelect={handleBotSelect} 
                  />
                ))}
              </div>
            </div>
          )}

          {currentSection === "browse-bots" && selectedBot && (
            <TradingBotDetails 
              selectedBot={selectedBot}
              deploymentConfig={deploymentConfig}
              onDeploymentConfigChange={handleDeploymentConfigChange}
              onUsePresetSettings={handleUsePresetSettings}
              onBackToList={handleBackToList}
              tradingAccounts={tradingAccounts}
            />
          )}

          {currentSection === "deployments" && (
            <BotDeploymentsList />
          )}

          {currentSection === "develop-bot" && (
            <BotDevelopmentStudio />
          )}
        </div>
      </div>
    </div>
  );
};

export default TradingBots;
