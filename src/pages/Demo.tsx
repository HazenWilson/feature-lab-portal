
import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  Newspaper,
  Bot,
  BookOpen,
  MessageSquare,
  Settings,
  ListChecks,
} from "lucide-react";
import MainNav from "@/components/MainNav";

const Demo = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold">Tools</h1>
            <Link
              to="/"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className="group aspect-square p-4 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center text-center"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-2">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-semibold text-sm">{tool.name}</h2>
              </Link>
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
    name: "Trading Bots",
    icon: Bot,
    path: "/demo/trading-bots",
  },
  {
    name: "Theses",
    icon: BookOpen,
    path: "/demo/theses",
  },
  {
    name: "AI Chat",
    icon: MessageSquare,
    path: "/demo/ai-chat",
  },
  {
    name: "Watch List",
    icon: ListChecks,
    path: "/demo/watch-list",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/demo/settings",
  },
];

export default Demo;
