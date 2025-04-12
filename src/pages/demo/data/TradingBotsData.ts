
import { 
  TrendingUp, LineChart, BarChart4, ArrowUpDown, Workflow
} from "lucide-react";
import { TradingBot, TradingAccount } from "../types/TradingBotTypes";

export const tradingBots: TradingBot[] = [
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

export const tradingAccounts: TradingAccount[] = [
  { id: "paper-1", name: "Paper Trading Account 1", balance: 25000 },
  { id: "paper-2", name: "Paper Trading Account 2", balance: 50000 },
  { id: "paper-3", name: "Paper Trading Account 3", balance: 10000 },
  { id: "coinbase", name: "Personal - Coinbase", balance: 5230.45 },
  { id: "alpaca", name: "Personal - Alpaca", balance: 8750.20 },
  { id: "investment-club", name: "Investment Club", balance: 120500.75 },
];
