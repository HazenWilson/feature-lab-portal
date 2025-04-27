
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TradingViewWidget } from "@/components/TradingViewWidget";

export function MarketChart() {
  return (
    <Card className="h-[500px]">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Market Overview - SPY</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <TradingViewWidget symbol="SPY" />
      </CardContent>
    </Card>
  );
}
