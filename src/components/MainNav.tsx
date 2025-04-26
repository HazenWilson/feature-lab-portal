
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

const MainNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { name: "Features", path: "/" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Legal", path: "/legal" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="border-b-2 border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  isActive(tab.path)
                    ? "bg-black text-white"
                    : "hover:bg-black/5"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="gap-2"
            >
              <Link to="/app">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button
              asChild
              className="gap-2 bg-black text-white hover:bg-gray-800"
            >
              <Link to="/app">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
