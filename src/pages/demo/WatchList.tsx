
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WatchListSidebar } from "./components/WatchListSidebar";

const WatchList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("news-feed");
  const navigate = useNavigate();

  // Handle section changes
  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    if (section === "news-feed") {
      navigate("/demo/watch-list/news");
    } else if (section === "edit") {
      navigate("/demo/watch-list/edit");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <WatchListSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={handleSectionChange}
      />
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Watch List</h1>
          <p className="text-gray-600">
            Select a section from the sidebar to get started.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WatchList;
