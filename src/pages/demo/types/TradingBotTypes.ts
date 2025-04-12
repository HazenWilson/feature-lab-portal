
import { LucideIcon } from "lucide-react";

export interface BotSettings {
  suggestedMaxTradeSize: number;
  defaultStopLoss: number;
  defaultTakeProfit: number;
}

export interface BotBacktestResults {
  annualReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
  winRate: number;
  tradesPerMonth: number;
  avgHoldingPeriod: number;
  performanceByMonth: number[];
}

export interface TradingBot {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  creator: string;
  status: "Active" | "Testing" | "Inactive";
  icon: LucideIcon;
  backtest: BotBacktestResults;
  settings: BotSettings;
}

export interface DeploymentConfig {
  capitalAllocation: number;
  maxTradeSize: number;
  stopLoss: number;
  takeProfit: number;
  usePresetSettings: boolean;
  account: string;
}

export interface TradingAccount {
  id: string;
  name: string;
  balance: number;
}
