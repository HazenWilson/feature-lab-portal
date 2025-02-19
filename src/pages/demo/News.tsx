
import { useState } from "react";
import { NewsSidebar } from "./components/NewsSidebar";
import { NewsFilters } from "./components/NewsFilters";
import { EventTypeCards } from "./components/EventTypeCards";
import { NewsCard, type NewsItem } from "./components/NewsCard";

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
  const [selectedEventTypes, setSelectedEventTypes] = useState<string[]>([]);

  const toggleEventType = (eventId: string) => {
    setSelectedEventTypes(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className="min-h-screen bg-white flex">
      <NewsSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
              {currentSection === "news-feed" && "News Feed"}
              {currentSection === "events" && "Events"}
              {currentSection === "stories" && "Stories"}
              {currentSection === "company-narratives" && "Company Narratives"}
            </h1>

            {(currentSection === "events" || currentSection === "news-feed") && (
              <NewsFilters
                selectedSentiment={selectedSentiment}
                setSelectedSentiment={setSelectedSentiment}
                selectedTimeframe={selectedTimeframe}
                setSelectedTimeframe={setSelectedTimeframe}
                selectedImpact={selectedImpact}
                setSelectedImpact={setSelectedImpact}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSource={selectedSource}
                setSelectedSource={setSelectedSource}
                selectedSector={selectedSector}
                setSelectedSector={setSelectedSector}
              />
            )}

            {currentSection === "events" && (
              <div className="space-y-6">
                <EventTypeCards
                  selectedEventTypes={selectedEventTypes}
                  toggleEventType={toggleEventType}
                />
                
                <div className="text-gray-500 text-center py-8">
                  Select event types and filters above to view events
                </div>
              </div>
            )}

            {currentSection === "news-feed" && (
              <div className="space-y-4">
                {mockNews.map((item, index) => (
                  <NewsCard key={index} item={item} />
                ))}
              </div>
            )}

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
