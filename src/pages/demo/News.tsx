
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, Rss, Calendar, BookOpen, FileText, Share2, BarChart2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type NewsItem = {
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
};

const mockNews: NewsItem[] = [
  {
    source: {
      name: "Benzinga",
      icon: "B",
    },
    sentiment: "Bearish",
    timeframe: "Short Term",
    impact: "Small Impact",
    category: "Housing",
    title: "Dow Dips 150 Points; US Housing Starts Fall In January",
    summary: "U.S. stocks traded lower this morning, with the Dow Jones index falling around 150 points on Wednesday.",
    timeAgo: "10 mins",
  },
  {
    source: {
      name: "Schwab Network",
      icon: "S",
    },
    sentiment: "Bullish",
    timeframe: "Short Term",
    impact: "Small Impact",
    category: "Equity Indexes",
    title: "Bullish Positioning in SPX Compression, VIX Expiration Today",
    summary: "The SPX continues to drift near all-time highs but isn't breaking through the record quite yet. Kevin Green says conviction through volume will be needed to make that push, and bullish positioning in the technicals may point to the set up.",
    timeAgo: "10 mins",
  },
];

const News = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("news-feed");
  const [selectedSentiment, setSelectedSentiment] = useState<string>("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>("all");
  const [selectedImpact, setSelectedImpact] = useState<string>("all");

  const getSentimentColor = (sentiment: NewsItem["sentiment"]) => {
    switch (sentiment) {
      case "Bearish":
        return "text-red-500";
      case "Bullish":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {sidebarOpen && (
              <span className="text-lg font-semibold">Nϵα</span>
            )}
          </div>

          <div className="space-y-4">
            <Link to="/demo">
              <Button
                variant="ghost"
                className={`text-white hover:bg-white/10 w-full justify-start ${
                  sidebarOpen ? "px-4" : "px-2"
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                {sidebarOpen && <span className="ml-2">Back to Tools</span>}
              </Button>
            </Link>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("news-feed")}
            >
              <Rss className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">News Feed</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("events")}
            >
              <Calendar className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Events</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("stories")}
            >
              <BookOpen className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Stories</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("company-narratives")}
            >
              <FileText className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Company Narratives</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
              {currentSection === "news-feed" && "News Feed"}
              {currentSection === "events" && "Events"}
              {currentSection === "stories" && "Stories"}
              {currentSection === "company-narratives" && "Company Narratives"}
            </h1>

            {/* Filters Section */}
            {currentSection === "news-feed" && (
              <div className="mb-6 space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Sentiment</label>
                    <div className="flex gap-2">
                      <Button 
                        variant={selectedSentiment === "all" ? "default" : "outline"}
                        onClick={() => setSelectedSentiment("all")}
                        size="sm"
                      >
                        All
                      </Button>
                      <Button 
                        variant={selectedSentiment === "bullish" ? "default" : "outline"}
                        onClick={() => setSelectedSentiment("bullish")}
                        size="sm"
                        className="text-green-500"
                      >
                        Bullish
                      </Button>
                      <Button 
                        variant={selectedSentiment === "bearish" ? "default" : "outline"}
                        onClick={() => setSelectedSentiment("bearish")}
                        size="sm"
                        className="text-red-500"
                      >
                        Bearish
                      </Button>
                      <Button 
                        variant={selectedSentiment === "neutral" ? "default" : "outline"}
                        onClick={() => setSelectedSentiment("neutral")}
                        size="sm"
                      >
                        Neutral
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Timeframe</label>
                    <div className="flex gap-2">
                      <Button 
                        variant={selectedTimeframe === "all" ? "default" : "outline"}
                        onClick={() => setSelectedTimeframe("all")}
                        size="sm"
                      >
                        All
                      </Button>
                      <Button 
                        variant={selectedTimeframe === "short" ? "default" : "outline"}
                        onClick={() => setSelectedTimeframe("short")}
                        size="sm"
                      >
                        Short Term
                      </Button>
                      <Button 
                        variant={selectedTimeframe === "medium" ? "default" : "outline"}
                        onClick={() => setSelectedTimeframe("medium")}
                        size="sm"
                      >
                        Medium Term
                      </Button>
                      <Button 
                        variant={selectedTimeframe === "long" ? "default" : "outline"}
                        onClick={() => setSelectedTimeframe("long")}
                        size="sm"
                      >
                        Long Term
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Impact</label>
                    <div className="flex gap-2">
                      <Button 
                        variant={selectedImpact === "all" ? "default" : "outline"}
                        onClick={() => setSelectedImpact("all")}
                        size="sm"
                      >
                        All
                      </Button>
                      <Button 
                        variant={selectedImpact === "high" ? "default" : "outline"}
                        onClick={() => setSelectedImpact("high")}
                        size="sm"
                      >
                        High Impact
                      </Button>
                      <Button 
                        variant={selectedImpact === "medium" ? "default" : "outline"}
                        onClick={() => setSelectedImpact("medium")}
                        size="sm"
                      >
                        Medium Impact
                      </Button>
                      <Button 
                        variant={selectedImpact === "small" ? "default" : "outline"}
                        onClick={() => setSelectedImpact("small")}
                        size="sm"
                      >
                        Small Impact
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSection === "news-feed" && (
              <div className="space-y-4">
                {mockNews.map((item, index) => (
                  <Card key={index} className="overflow-hidden">
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
                ))}
              </div>
            )}

            {currentSection !== "news-feed" && (
              <div className="text-gray-500">
                Select a section from the sidebar to view content
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
