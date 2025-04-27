
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/shared/AppSidebar";
import { PlayCircle, Briefcase, Users, FileText, Award, MessageSquare, TrendingUp } from "lucide-react";

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
    <AppSidebar 
      sidebarOpen={sidebarOpen} 
      setSidebarOpen={setSidebarOpen}
      backLink="/app"
      backText="Back to Tools"
    >
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
    </AppSidebar>
  );
};
