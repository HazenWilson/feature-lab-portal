
import React from "react";

const BotDevelopmentStudio: React.FC = () => {
  return (
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
  );
};

export default BotDevelopmentStudio;
