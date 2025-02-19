
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Users,
  Briefcase,
  FileText,
  Award,
  MessageSquare,
  PlayCircle,
  ChevronDown,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const mockClubs = [
  { id: 1, name: "Tech Investors Club" },
  { id: 2, name: "Value Investing Group" },
  { id: 3, name: "Crypto Trading Club" },
];

const InvestmentClub = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(mockClubs[0]);
  const [clubSelectorOpen, setClubSelectorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="space-y-4">
            <Link to="/demo">
              <Button
                variant="ghost"
                className={`text-white hover:bg-white/10 w-full justify-start ${
                  sidebarOpen ? "px-4" : "px-2"
                }`}
              >
                <PlayCircle className="h-5 w-5" />
                {sidebarOpen && <span className="ml-2">Getting Started</span>}
              </Button>
            </Link>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <Briefcase className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Club Portfolio</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <Users className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Members</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <FileText className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Documents</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <Award className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Elections</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Group Chat</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          {/* Club Selector and Actions */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setClubSelectorOpen(!clubSelectorOpen)}
                >
                  {selectedClub.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {clubSelectorOpen && (
                  <Card className="absolute top-full left-0 mt-2 w-64 p-2 z-50">
                    {mockClubs.map((club) => (
                      <Button
                        key={club.id}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedClub(club);
                          setClubSelectorOpen(false);
                        }}
                      >
                        {club.name}
                      </Button>
                    ))}
                  </Card>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Join Club
                </Button>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Start New Club
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-5xl mx-auto">
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-4">Welcome to {selectedClub.name}</h1>
              <p className="text-gray-600">
                Select an option from the sidebar to get started with your investment club activities.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentClub;
