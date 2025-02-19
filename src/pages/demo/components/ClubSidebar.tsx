
import { Link } from "react-router-dom";
import { Menu, PlayCircle, Briefcase, Users, FileText, Award, MessageSquare, ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ClubSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const ClubSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  currentSection,
  setCurrentSection,
}: ClubSidebarProps) => {
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
            onClick={() => setCurrentSection("getting-started")}
          >
            <PlayCircle className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Getting Started</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("portfolio")}
          >
            <Briefcase className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Club Portfolio</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("trading-desk")}
          >
            <TrendingUp className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Trading Desk</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("members")}
          >
            <Users className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Members</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("documents")}
          >
            <FileText className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Documents</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("elections")}
          >
            <Award className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Elections</span>}
          </Button>

          <Button
            variant="ghost"
            className={`text-white hover:bg-white/10 w-full justify-start ${
              sidebarOpen ? "px-4" : "px-2"
            }`}
            onClick={() => setCurrentSection("chat")}
          >
            <MessageSquare className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">Group Chat</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
