
import React from "react";
import { TradingBot } from "../types/TradingBotTypes";

interface TradingBotCardProps {
  bot: TradingBot;
  onSelect: (bot: TradingBot) => void;
}

const TradingBotCard: React.FC<TradingBotCardProps> = ({ bot, onSelect }) => {
  return (
    <div 
      key={bot.id} 
      className="border-2 rounded-lg p-4 cursor-pointer hover:border-primary transition-colors duration-200"
      onClick={() => onSelect(bot)}
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
  );
};

export default TradingBotCard;
