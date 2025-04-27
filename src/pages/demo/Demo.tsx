
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  Newspaper,
  BookOpen,
  MessageSquare,
  ListChecks,
  Briefcase,
  Settings as SettingsIcon,
  Bot,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Nϵα (Demo)</h1>
            <p className="text-gray-600 mt-2">
              This is the demo version of the application. You can explore all features without authentication.
            </p>
            <div className="mt-4">
              <Link to="/">
                <Button variant="outline" className="mr-2">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group p-4 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center text-center cursor-pointer"
                onClick={() => handleNavigate(tool.path)}
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-2">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-medium">{tool.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const tools = [
  {
    name: "Portfolio",
    icon: Briefcase,
    path: "/demo/portfolio",
  },
  {
    name: "Investment Club",
    icon: Users,
    path: "/demo/investment-club",
  },
  {
    name: "News",
    icon: Newspaper,
    path: "/demo/news",
  },
  {
    name: "Theses",
    icon: BookOpen,
    path: "/demo/theses",
  },
  {
    name: "Watch List",
    icon: ListChecks,
    path: "/demo/watch-list",
  },
  {
    name: "AI Chat",
    icon: MessageSquare,
    path: "/demo/ai-chat",
  },
  {
    name: "Trading Bots",
    icon: Bot,
    path: "/demo/trading-bots",
  },
  {
    name: "Paper Trading",
    icon: Play,
    path: "/demo/paper-trading",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    path: "/demo/settings",
  },
];

export default Demo;
