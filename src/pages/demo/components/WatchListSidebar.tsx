
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, Newspaper, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WatchListSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const WatchListSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  currentSection,
  setCurrentSection,
}: WatchListSidebarProps) => {
  return (
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
            <span className="text-lg font-semibold">Watch List</span>
          )}
        </div>

        <div className="space-y-2">
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

          <Link to="/demo/watch-list/news">
            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              } ${currentSection === "news" ? "bg-white/10" : ""}`}
              onClick={() => setCurrentSection("news")}
            >
              <Newspaper className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">News Feed</span>}
            </Button>
          </Link>

          <Link to="/demo/watch-list/edit">
            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              } ${currentSection === "edit" ? "bg-white/10" : ""}`}
              onClick={() => setCurrentSection("edit")}
            >
              <ListChecks className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Edit Watch List</span>}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
