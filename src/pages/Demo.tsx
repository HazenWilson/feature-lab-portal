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
  LineChart,
} from "lucide-react";
import MainNav from "@/components/MainNav";

const Demo = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Nϵα</h1>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
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
