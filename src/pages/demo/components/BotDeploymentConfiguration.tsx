
import React from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BotSettings } from "../types/TradingBotTypes";

interface BotDeploymentConfigurationProps {
  deploymentConfig: {
    capitalAllocation: number;
    maxTradeSize: number;
    stopLoss: number;
    takeProfit: number;
    usePresetSettings: boolean;
    account: string;
  };
  onDeploymentConfigChange: (field: string, value: any) => void;
  onUsePresetSettings: () => void;
  tradingAccounts: Array<{ id: string; name: string; balance: number }>;
  botSettings: BotSettings;
}

const BotDeploymentConfiguration: React.FC<BotDeploymentConfigurationProps> = ({
  deploymentConfig,
  onDeploymentConfigChange,
  onUsePresetSettings,
  tradingAccounts,
  botSettings
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Configuration</CardTitle>
        <CardDescription>Configure and deploy this bot</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="account">Deploy to Account</Label>
            <Select
              value={deploymentConfig.account}
              onValueChange={(value) => onDeploymentConfigChange("account", value)}
            >
              <SelectTrigger id="account" className="w-full">
                <SelectValue placeholder="Select an account" />
              </SelectTrigger>
              <SelectContent>
                {tradingAccounts.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    <div className="flex justify-between w-full items-center">
                      <span>{account.name}</span>
                      <span className="text-sm font-medium text-green-600 ml-4">
                        ${account.balance.toLocaleString()}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="capital">Capital Allocation ($)</Label>
            <Input 
              id="capital"
              type="number"
              value={deploymentConfig.capitalAllocation}
              onChange={(e) => onDeploymentConfigChange("capitalAllocation", parseFloat(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxTradeSize">Max Trade Size (%)</Label>
              <span className="text-xs text-gray-500">
                Suggested: {botSettings.suggestedMaxTradeSize}%
              </span>
            </div>
            <Input 
              id="maxTradeSize"
              type="number"
              value={deploymentConfig.maxTradeSize}
              onChange={(e) => onDeploymentConfigChange("maxTradeSize", parseFloat(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="stopLoss">Stop Loss (%)</Label>
            <Input 
              id="stopLoss"
              type="number"
              value={deploymentConfig.stopLoss}
              onChange={(e) => onDeploymentConfigChange("stopLoss", parseFloat(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="takeProfit">Take Profit (%)</Label>
            <Input 
              id="takeProfit"
              type="number"
              value={deploymentConfig.takeProfit}
              onChange={(e) => onDeploymentConfigChange("takeProfit", parseFloat(e.target.value))}
            />
          </div>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={onUsePresetSettings}
          >
            {deploymentConfig.usePresetSettings ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <span className="mr-2 h-4 w-4" />
            )}
            Use Preset Settings
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Deploy Bot</Button>
      </CardFooter>
    </Card>
  );
};

export default BotDeploymentConfiguration;
