
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ConnectBrokerageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  brokerageName: string;
  onSave: (data: {
    accountType: string;
    apiKey: string;
    accountName: string;
  }) => void;
}

export const ConnectBrokerageDialog = ({
  isOpen,
  onClose,
  brokerageName,
  onSave,
}: ConnectBrokerageDialogProps) => {
  const [accountType, setAccountType] = useState("personal");
  const [apiKey, setApiKey] = useState("");
  const [accountName, setAccountName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      accountType,
      apiKey,
      accountName: accountName || `My ${brokerageName} Account`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add {brokerageName} Account
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
            <p className="text-yellow-800 text-sm">
              This is just a demo. Please do not enter real API keys.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Account Type</Label>
            <RadioGroup
              value={accountType}
              onValueChange={setAccountType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="personal" />
                <Label htmlFor="personal">Personal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="trade-club" id="trade-club" />
                <Label htmlFor="trade-club">Trade Club</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter API Key"
              className="bg-gray-100"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder={`My ${brokerageName} Account`}
            />
          </div>

          <Button type="submit" className="w-full">
            Save Account
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
