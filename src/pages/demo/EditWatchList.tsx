
import { useState } from "react";
import { WatchListSidebar } from "./components/WatchListSidebar";

const EditWatchList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("edit");

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
          <h1 className="text-2xl font-bold mb-6">Edit Watch List</h1>
          <p className="text-gray-600">
            Add or remove companies and sectors to your watch list here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditWatchList;
