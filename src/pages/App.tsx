
import { Link } from "react-router-dom";
import {
  Users,
  Newspaper,
  BookOpen,
  MessageSquare,
  ListChecks,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { useNavigate } from "react-router-dom";

const AppHome = () => {
  const navigate = useNavigate();
  const { user, signOut, profile } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Nϵα</h1>
              {profile && (
                <p className="text-gray-600 mt-2">
                  Welcome, {profile.full_name || profile.username || user?.email}
                </p>
              )}
            </div>
            <Button 
              variant="ghost" 
              className="gap-2" 
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
          
          <div className="grid grid-cols-5 lg:grid-cols-8 gap-1 mb-10">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className="group aspect-square border-2 border-gray-200 rounded-md bg-white transition-all duration-300 hover:shadow-sm hover:border-primary flex flex-col items-center justify-center text-center p-0.5"
              >
                <div className="p-0.5 rounded-sm bg-gray-50 group-hover:bg-primary/10 transition-colors mb-0.5 flex items-center justify-center aspect-square">
                  <tool.icon className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                </div>
                <h2 className="font-medium text-xs truncate max-w-full px-0.5">{tool.name}</h2>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>Join or create an investment club in the Investment Clubs tool to collaborate with others</li>
              <li>Read and filter through the latest news articles to stay informed</li>
              <li>Review investment theses to understand different perspectives</li>
              <li>Create and manage your watchlist of potential investments</li>
              <li>Chat with our AI system about companies or news for deeper insights</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const tools = [
  {
    name: "Investment Club",
    icon: Users,
    path: "/app/investment-club",
  },
  {
    name: "News",
    icon: Newspaper,
    path: "/app/news",
  },
  {
    name: "Theses",
    icon: BookOpen,
    path: "/app/theses",
  },
  {
    name: "Watch List",
    icon: ListChecks,
    path: "/app/watch-list",
  },
  {
    name: "AI Chat",
    icon: MessageSquare,
    path: "/app/ai-chat",
  },
];

export default AppHome;

