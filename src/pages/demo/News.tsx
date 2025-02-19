import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, Rss, Calendar, BookOpen, FileText, Share2, BarChart2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSource, setSelectedSource] = useState<string>("all");
  const [selectedSector, setSelectedSector] = useState<string>("all");

  const getSentimentColor = (sentiment: NewsItem["sentiment"]) => {
    switch (sentiment) {
      case "Bearish":
        return "bg-red-100 text-black";
      case "Bullish":
        return "bg-green-100 text-black";
      default:
        return "bg-gray-100 text-black";
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
              <div className="mb-6">
                <div className="flex flex-wrap gap-4">
                  <Select onValueChange={setSelectedSentiment} value={selectedSentiment}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sentiment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Sentiment</SelectItem>
                        <SelectItem value="very-bullish">Very Bullish</SelectItem>
                        <SelectItem value="bullish">Bullish</SelectItem>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="mixed">Mixed Sentiment</SelectItem>
                        <SelectItem value="bearish">Bearish</SelectItem>
                        <SelectItem value="very-bearish">Very Bearish</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setSelectedImpact} value={selectedImpact}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Impact" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Impact</SelectItem>
                        <SelectItem value="high">High Impact</SelectItem>
                        <SelectItem value="medium">Medium Impact</SelectItem>
                        <SelectItem value="small">Small Impact</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setSelectedTimeframe} value={selectedTimeframe}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Horizon" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Horizons</SelectItem>
                        <SelectItem value="short">Short Term</SelectItem>
                        <SelectItem value="medium">Medium Term</SelectItem>
                        <SelectItem value="long">Long Term</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="housing">Housing</SelectItem>
                        <SelectItem value="equity">Equity Markets</SelectItem>
                        <SelectItem value="forex">Forex</SelectItem>
                        <SelectItem value="crypto">Crypto</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setSelectedSource} value={selectedSource}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sources" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Sources</SelectItem>
                        <SelectItem value="benzinga">Benzinga</SelectItem>
                        <SelectItem value="schwab">Schwab Network</SelectItem>
                        <SelectItem value="reuters">Reuters</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={setSelectedSector} value={selectedSector}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="all">All Sectors</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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
