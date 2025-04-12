
import React from "react";
import { X } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TradingBot } from "../types/TradingBotTypes";
import PerformanceChart from "./PerformanceChart";
import BacktestResultsGrid from "./BacktestResultsGrid";
import BotDeploymentConfiguration from "./BotDeploymentConfiguration";

interface TradingBotDetailsProps {
  selectedBot: TradingBot;
  deploymentConfig: any;
  onDeploymentConfigChange: (field: string, value: any) => void;
  onUsePresetSettings: () => void;
  onBackToList: () => void;
  tradingAccounts: Array<{ id: string; name: string; balance: number }>;
}

const TradingBotDetails: React.FC<TradingBotDetailsProps> = ({
  selectedBot,
  deploymentConfig,
  onDeploymentConfigChange,
  onUsePresetSettings,
  onBackToList,
  tradingAccounts
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{selectedBot.name}</h1>
        <Button variant="outline" onClick={onBackToList}>
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
            
            <BacktestResultsGrid results={selectedBot.backtest} />

            <PerformanceChart performanceData={selectedBot.backtest.performanceByMonth} />
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

        <BotDeploymentConfiguration 
          deploymentConfig={deploymentConfig}
          onDeploymentConfigChange={onDeploymentConfigChange}
          onUsePresetSettings={onUsePresetSettings}
          tradingAccounts={tradingAccounts}
          botSettings={selectedBot.settings}
        />
      </div>
    </div>
  );
};

export default TradingBotDetails;
