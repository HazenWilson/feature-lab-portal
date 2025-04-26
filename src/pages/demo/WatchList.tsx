
import { useState } from "react";
import { WatchListSidebar } from "./components/WatchListSidebar";
import { Navigate } from "react-router-dom";

const WatchList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("news");

  return (
    <div className="min-h-screen bg-white">
      <WatchListSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Navigate to="/demo/watch-list/news" replace />
    </div>
  );
};

export default WatchList;
