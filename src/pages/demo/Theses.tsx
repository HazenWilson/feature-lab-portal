
import React, { useState } from "react";
import { ThesesSidebar } from "./components/ThesesSidebar";
import ThesisStream from "./components/ThesisStream";
import GenerateThesis from "./components/GenerateThesis";

const Theses = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState<string>("thesis-stream");

  return (
    <div className="flex min-h-screen bg-white">
      <ThesesSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-8">
          {currentSection === "thesis-stream" ? (
            <ThesisStream />
          ) : currentSection === "generate-thesis" ? (
            <GenerateThesis />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Theses;
