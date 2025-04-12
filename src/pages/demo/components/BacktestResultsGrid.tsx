
import React from "react";
import { BotBacktestResults } from "../types/TradingBotTypes";

interface BacktestResultsGridProps {
  results: BotBacktestResults;
}

const BacktestResultsGrid: React.FC<BacktestResultsGridProps> = ({ results }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">Backtest Results</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Annual Return</p>
          <p className="text-xl font-semibold text-green-600">{results.annualReturn}%</p>
        </div>
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Max Drawdown</p>
          <p className="text-xl font-semibold text-red-600">{results.maxDrawdown}%</p>
        </div>
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Sharpe Ratio</p>
          <p className="text-xl font-semibold">{results.sharpeRatio}</p>
        </div>
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Win Rate</p>
          <p className="text-xl font-semibold">{results.winRate}%</p>
        </div>
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Trades / Month</p>
          <p className="text-xl font-semibold">{results.tradesPerMonth}</p>
        </div>
        <div className="border rounded-md p-3">
          <p className="text-sm text-gray-500">Avg. Holding (days)</p>
          <p className="text-xl font-semibold">{results.avgHoldingPeriod}</p>
        </div>
      </div>
    </div>
  );
};

export default BacktestResultsGrid;
