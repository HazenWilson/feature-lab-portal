
import { Link } from "react-router-dom";
import { Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  backLink: string;
  backText?: string;
  children?: React.ReactNode;
}

export const AppSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  backLink,
  backText = "Back to Tools",
  children
}: AppSidebarProps) => {
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
          <Link to={backLink}>
            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
            >
              <ArrowLeft className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">{backText}</span>}
            </Button>
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
};
