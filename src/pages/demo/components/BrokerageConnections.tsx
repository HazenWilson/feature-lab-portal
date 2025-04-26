import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { ConnectBrokerageDialog } from "./ConnectBrokerageDialog";

type ConnectedAccount = {
  id: string;
  name: string;
  type: string;
};

type BrokerageService = {
  name: string;
  description: string;
  connectedAccounts: ConnectedAccount[];
};

export const BrokerageConnections = () => {
  const [brokerages, setBrokerages] = useState<BrokerageService[]>([
    {
      name: "Alpaca",
      description: "Connect your Alpaca live trading account",
      connectedAccounts: [],
    },
    {
      name: "Alpaca Paper Trading",
      description: "Connect your Alpaca paper trading account",
      connectedAccounts: [],
    },
    {
      name: "Interactive Brokers",
      description: "Connect your Interactive Brokers account",
      connectedAccounts: [],
    },
    {
      name: "Trade Station",
      description: "Connect your Trade Station account",
      connectedAccounts: [],
    },
    {
      name: "Coinbase",
      description: "Connect your Coinbase account",
      connectedAccounts: [],
    },
    {
      name: "Kraken",
      description: "Connect your Kraken account",
      connectedAccounts: [],
    },
  ]);

  const [selectedBrokerage, setSelectedBrokerage] = useState<string | null>(null);

  const handleConnect = (brokerageName: string) => {
    setSelectedBrokerage(brokerageName);
  };

  const handleSaveAccount = (brokerageName: string, data: {
    accountType: string;
    apiKey: string;
    accountName: string;
  }) => {
    setBrokerages(brokerages.map(brokerage => {
      if (brokerage.name === brokerageName) {
        return {
          ...brokerage,
          connectedAccounts: [
            ...brokerage.connectedAccounts,
            {
              id: Math.random().toString(36).substr(2, 9),
              name: data.accountName,
              type: data.accountType,
            },
          ],
        };
      }
      return brokerage;
    }));
  };

  const handleDisconnect = (brokerageName: string, accountId: string) => {
    setBrokerages(brokerages.map(brokerage => {
      if (brokerage.name === brokerageName) {
        return {
          ...brokerage,
          connectedAccounts: brokerage.connectedAccounts.filter(
            account => account.id !== accountId
          ),
        };
      }
      return brokerage;
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {brokerages.map((brokerage) => (
        <Card key={brokerage.name} className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{brokerage.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-gray-500 mb-4">{brokerage.description}</p>
            
            <Button
              onClick={() => handleConnect(brokerage.name)}
              className="w-full mb-4"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add API Key
            </Button>

            {brokerage.connectedAccounts.length > 0 ? (
              <div className="space-y-2">
                <h3 className="text-sm font-medium mb-2">Connected Accounts</h3>
                {brokerage.connectedAccounts.map((account) => (
                  <div
                    key={account.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
                  >
                    <span className="text-sm">{account.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDisconnect(brokerage.name, account.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 text-center">
                No accounts connected
              </p>
            )}
          </CardContent>
        </Card>
      ))}

      {selectedBrokerage && (
        <ConnectBrokerageDialog
          isOpen={true}
          onClose={() => setSelectedBrokerage(null)}
          brokerageName={selectedBrokerage}
          onSave={(data) => handleSaveAccount(selectedBrokerage, data)}
        />
      )}
    </div>
  );
};
