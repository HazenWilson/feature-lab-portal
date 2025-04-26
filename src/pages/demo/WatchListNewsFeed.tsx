
import { useState } from "react";
import { WatchListSidebar } from "./components/WatchListSidebar";

const WatchListNewsFeed = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("news");

  return (
    <div className="min-h-screen bg-white">
      <WatchListSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Watch List News Feed</h1>
          <p className="text-gray-600">
            News articles about companies in your watch list will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchListNewsFeed;
