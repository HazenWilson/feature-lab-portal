
import { useState } from "react";
import { WatchListSidebar } from "./components/WatchListSidebar";

const EditWatchList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <WatchListSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection="edit"
        setCurrentSection={() => {}}
      />
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Edit Watch List</h1>
          <div className="space-y-4">
            {/* Edit watchlist content will be added here */}
            <p className="text-gray-600">
              Add or remove companies and sectors from your watch list.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditWatchList;
