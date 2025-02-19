import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, Rss, Calendar, BookOpen, FileText, Share2, BarChart2, ExternalLink, Users, HandCoins, ArrowUp, ArrowDown, ChartBar, Check } from "lucide-react";
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

const eventTypes = [
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
  { id: 'fda', name: 'FDA Approval', icon: Check }
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
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  const toggleEventType = (eventId: string) => {
    setSelectedEventTypes(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

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

            {/* Events Section */}
            {currentSection === "events" && (
              <div className="space-y-6">
                {/* Event Type Filters */}
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

                {/* Events content will go here */}
                <div className="text-gray-500 text-center py-8">
                  Select event types above to filter events
                </div>
              </div>
            )}

            {/* News Feed Section */}
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

            {/* Other sections */}
            {currentSection !== "news-feed" && currentSection !== "events" && (
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
