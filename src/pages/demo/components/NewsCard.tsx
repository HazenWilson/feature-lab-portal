
import { Share2, BarChart2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface NewsItem {
  source: {
    name: string;
    icon: string;
  };
  sentiment: "Bearish" | "Bullish" | "Neutral";
  timeframe: "Short Term" | "Medium Term" | "Long Term";
  impact: "Small Impact" | "Medium Impact" | "High Impact";
  category: string;
  title: string;
  summary: string;
  timeAgo: string;
}

interface NewsCardProps {
  item: NewsItem;
}

export const getSentimentColor = (sentiment: NewsItem["sentiment"]) => {
  switch (sentiment) {
    case "Bearish":
      return "bg-red-100 text-black";
    case "Bullish":
      return "bg-green-100 text-black";
    default:
      return "bg-gray-100 text-black";
  }
};

export const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-semibold">
              {item.source.icon}
            </div>
            <span className="font-medium">{item.source.name}</span>
            <Badge className={`${getSentimentColor(item.sentiment)}`}>
              {item.sentiment}
            </Badge>
            <Badge variant="secondary" className="bg-orange-100">
              {item.timeframe}
            </Badge>
            <Badge variant="secondary" className="bg-gray-100">
              {item.impact}
            </Badge>
          </div>
          
          <div className="text-gray-600 text-sm">
            {item.category}
          </div>

          <h2 className="text-xl font-bold">
            {item.title}
          </h2>

          <p className="text-gray-600">
            {item.summary}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2 text-gray-500">
              <span>{item.timeAgo} saved</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <BarChart2 className="h-4 w-4 mr-2" />
                Breakdown
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Full Article
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
