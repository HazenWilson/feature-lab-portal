
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            <Link
              to="/app/dashboard"
              className="group p-3 border-2 border-primary rounded-lg bg-primary/5 transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center text-center"
            >
              <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors mb-1">
                <LayoutDashboard className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-medium text-xs">Dashboard</h2>
            </Link>
            
            {tools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className="group p-3 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center text-center"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-1">
                  <tool.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-medium text-xs">{tool.name}</h2>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Visit your <Link to="/app/dashboard" className="text-blue-600 hover:underline">Dashboard</Link> to create or join investment clubs</li>
              <li>Collaborate with other members by inviting them to your clubs</li>
              <li>Track investments and monitor performance together</li>
              <li>Create watchlists to follow potential investments</li>
              <li>Discuss investment strategies within your club</li>
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
    path: "/app/dashboard",
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
