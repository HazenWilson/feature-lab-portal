
import { Link } from "react-router-dom";
import {
  Users,
  Newspaper,
  BookOpen,
  MessageSquare,
  ListChecks,
} from "lucide-react";

const AppHome = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Nϵα</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
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
