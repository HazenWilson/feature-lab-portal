
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, MessageSquare, Plus, History, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIChatSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  previousChats: { id: string; title: string; date: string }[];
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
}

export const AIChatSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  currentSection,
  setCurrentSection,
  previousChats,
  onNewChat,
  onSelectChat,
}: AIChatSidebarProps) => {
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
            onClick={onNewChat}
          >
            <Plus className="h-5 w-5" />
            {sidebarOpen && <span className="ml-2">New Chat</span>}
          </Button>

          {sidebarOpen && (
            <div className="mt-6">
              <div className="flex items-center mb-2 text-sm text-gray-400">
                <History className="h-4 w-4 mr-2" />
                <span>Recent Chats</span>
              </div>
              <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
                {previousChats.map((chat) => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className={`text-white hover:bg-white/10 w-full justify-start text-sm px-4 py-2 h-auto ${
                      currentSection === chat.id ? "bg-white/10" : ""
                    }`}
                    onClick={() => onSelectChat(chat.id)}
                  >
                    <div className="flex flex-col items-start">
                      <span className="truncate w-full text-left">{chat.title}</span>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{chat.date}</span>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
