
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

interface Story {
  title: string;
  source: string;
  time: string;
}

const mockStories: Story[] = [
  {
    title: "Fed Signals Potential Rate Cuts in 2024",
    source: "Financial Times",
    time: "2h ago"
  },
  {
    title: "Tech Sector Shows Strong Q4 Growth",
    source: "Bloomberg",
    time: "3h ago"
  },
  {
    title: "Market Volatility Expected Ahead of Economic Data",
    source: "Reuters",
    time: "4h ago"
  }
];

export function TopStories() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Top Stories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockStories.map((story, index) => (
            <div key={index} className="flex items-start gap-4 p-2 hover:bg-muted/50 rounded-lg cursor-pointer">
              <AlertCircle className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">{story.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {story.source} • {story.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
