
import { useState } from "react";
import { WatchListSidebar } from "./components/WatchListSidebar";

const WatchListNewsFeed = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <WatchListSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection="news-feed"
        setCurrentSection={() => {}}
      />
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Watch List News Feed</h1>
          <div className="space-y-4">
            {/* News feed content will be added here */}
            <p className="text-gray-600">
              News articles for your watched companies will appear here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchListNewsFeed;
