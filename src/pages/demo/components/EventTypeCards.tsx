
import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, ArrowDown, HandCoins, ArrowUp, ChartBar, Check, AlertOctagon } from "lucide-react";

export const eventTypes = [
  { id: 'ma', name: 'M&A', icon: Users },
  { id: 'mass-contract', name: 'Mass Contract', icon: FileText },
  { id: 'short-seller', name: 'Short Seller', icon: ArrowDown },
  { id: 'lawsuit', name: 'Law Suit', icon: FileText },
  { id: 'buyback', name: 'Shares Buyback', icon: HandCoins },
  { id: 'dividend', name: 'Dividend Change', icon: ArrowUp },
  { id: 'layoff', name: 'Layoff', icon: Users },
  { id: 'leadership', name: 'Leadership Change', icon: Users },
  { id: 'activist', name: 'Activist', icon: Users },
  { id: 'earnings', name: 'Earnings', icon: ChartBar },
  { id: 'stock-split', name: 'Stock Split', icon: ArrowUp },
  { id: 'fda', name: 'FDA Approval', icon: Check },
  { id: 'bankruptcy', name: 'Bankruptcy', icon: AlertOctagon }
];

interface EventTypeCardsProps {
  selectedEventTypes: string[];
  toggleEventType: (eventId: string) => void;
}

export const EventTypeCards = ({ selectedEventTypes, toggleEventType }: EventTypeCardsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {eventTypes.map((eventType) => {
        const isSelected = selectedEventTypes.includes(eventType.id);
        const Icon = eventType.icon;
        return (
          <Card 
            key={eventType.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              isSelected ? 'border-primary bg-primary/10' : 'bg-white'
            }`}
            onClick={() => toggleEventType(eventType.id)}
          >
            <CardContent className="p-3 flex flex-col items-center justify-center text-center">
              <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary/20' : 'bg-gray-100'} mb-2`}>
                <Icon className={`w-4 h-4 ${isSelected ? 'text-primary' : 'text-gray-600'}`} />
              </div>
              <span className="text-xs font-medium">{eventType.name}</span>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
