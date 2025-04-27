
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Mover {
  symbol: string;
  name: string;
  change: number;
}

const mockMovers: Mover[] = [
  { symbol: "AAPL", name: "Apple Inc.", change: 2.5 },
  { symbol: "MSFT", name: "Microsoft", change: 1.8 },
  { symbol: "GOOGL", name: "Alphabet", change: -1.2 },
  { symbol: "AMZN", name: "Amazon", change: -0.9 },
  { symbol: "TSLA", name: "Tesla", change: 3.2 }
];

export function TopMovers() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Top Movers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockMovers.map((mover) => (
            <div key={mover.symbol} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
              <div>
                <h3 className="font-medium">{mover.symbol}</h3>
                <p className="text-sm text-muted-foreground">{mover.name}</p>
              </div>
              <div className={`flex items-center gap-1 ${mover.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {mover.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span className="font-medium">{Math.abs(mover.change)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
