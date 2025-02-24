import { useState } from "react";
import { NewsSidebar } from "./components/NewsSidebar";
import { NewsCard, type NewsItem } from "./components/NewsCard";
import { NewsFilters } from "./components/NewsFilters";
import { Link } from "react-router-dom";

const mockNewsItems: NewsItem[] = [
  {
    source: {
      name: "Bloomberg",
      icon: "B",
    },
    sentiment: "Bullish",
    timeframe: "Short Term",
    impact: "High Impact",
    category: "Earnings",
    title: "Tech Giant Exceeds Quarterly Expectations",
    summary:
      "Major technology company reports record-breaking quarterly results, surpassing analyst estimates by 15%. Strong cloud services growth cited as key driver.",
    timeAgo: "2 hours ago",
  },
  {
    source: {
      name: "Reuters",
      icon: "R",
    },
    sentiment: "Bearish",
    timeframe: "Medium Term",
    impact: "Medium Impact",
    category: "Economic",
    title: "Federal Reserve Signals Potential Rate Hikes",
    summary:
      "Federal Reserve minutes indicate possibility of additional rate increases in coming months, citing persistent inflation concerns.",
    timeAgo: "4 hours ago",
  },
  {
    source: {
      name: "CNBC",
      icon: "C",
    },
    sentiment: "Neutral",
    timeframe: "Long Term",
    impact: "Small Impact",
    category: "Market Recap",
    title: "Market Reacts to Inflation Data",
    summary:
      "Stocks experience volatility as investors digest the latest inflation figures. Analysts remain divided on the long-term outlook.",
    timeAgo: "6 hours ago",
  },
  {
    source: {
      name: "WSJ",
      icon: "W",
    },
    sentiment: "Bullish",
    timeframe: "Medium Term",
    impact: "Medium Impact",
    category: "M&A",
    title: "Mega-Merger Announced in Healthcare Sector",
    summary:
      "Two leading healthcare providers agree to merge in a deal valued at $50 billion. The merger is expected to create significant synergies.",
    timeAgo: "8 hours ago",
  },
  {
    source: {
      name: "FT",
      icon: "F",
    },
    sentiment: "Bearish",
    timeframe: "Short Term",
    impact: "High Impact",
    category: "Legal",
    title: "Antitrust Concerns Raised Over Tech Acquisition",
    summary:
      "Regulators express concerns over potential antitrust violations in a proposed acquisition of a smaller tech firm by a major player.",
    timeAgo: "10 hours ago",
  },
];

const News = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("news-feed");
  const [selectedSentiment, setSelectedSentiment] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSource, setSelectedSource] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");

  return (
    <div className="min-h-screen bg-white">
      <NewsSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <NewsFilters
            selectedSentiment={selectedSentiment}
            setSelectedSentiment={setSelectedSentiment}
            selectedTimeframe={selectedTimeframe}
            setSelectedTimeframe={setSelectedTimeframe}
            selectedImpact={selectedImpact}
            setSelectedImpact={setSelectedImpact}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedSource={setSelectedSource}
            setSelectedSource={setSelectedSource}
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
          />

          <div className="space-y-4">
            {mockNewsItems.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default News;
