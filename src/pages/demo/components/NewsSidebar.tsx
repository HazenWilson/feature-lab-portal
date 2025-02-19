
import { Menu, ArrowLeft, Rss, Calendar, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NewsSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const NewsSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  currentSection,
  setCurrentSection,
}: NewsSidebarProps) => {
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
            <span className="text-lg font-semibold">Nϵα</span>
          )}
        </div>

        <div className="space-y-4">
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

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("news-feed")}
          >
            <Rss className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">News Feed</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("events")}
          >
            <Calendar className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Events</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("stories")}
          >
            <BookOpen className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Stories</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("company-narratives")}
          >
            <FileText className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Company Narratives</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
