import { Link } from "react-router-dom";
import {
  Briefcase,
  Users,
  Newspaper,
  Bot,
  BookOpen,
  MessageSquare,
  Settings,
} from "lucide-react";
import MainNav from "@/components/MainNav";

const Demo = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold">Demo Dashboard</h1>
            <Link
              to="/"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.path}
                className="group p-6 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-semibold text-xl">{tool.name}</h2>
                </div>
                <p className="text-gray-600">{tool.description}</p>
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
    description: "Manage and track your investment portfolio",
    icon: Briefcase,
    path: "/demo/portfolio",
  },
  {
    name: "Investment Club",
    description: "Join and collaborate with other investors",
    icon: Users,
    path: "/demo/investment-club",
  },
  {
    name: "News",
    description: "Stay updated with the latest market news",
    icon: Newspaper,
    path: "/demo/news",
  },
  {
    name: "Trading Bots",
    description: "Automate your trading strategies",
    icon: Bot,
    path: "/demo/trading-bots",
  },
  {
    name: "Theses",
    description: "Research and investment theses",
    icon: BookOpen,
    path: "/demo/theses",
  },
  {
    name: "AI Chat",
    description: "Get AI-powered investment insights",
    icon: MessageSquare,
    path: "/demo/ai-chat",
  },
  {
    name: "Settings",
    description: "Customize your experience",
    icon: Settings,
    path: "/demo/settings",
  },
];

export default Demo;
