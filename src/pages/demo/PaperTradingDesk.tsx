
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft, Briefcase, ChartLine, History } from "lucide-react";

const PaperTradingDesk = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-50 ${
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
              <span className="text-lg font-semibold">Paper Trading</span>
            )}
          </div>

          <nav className="space-y-6">
            <div>
              <Link to="/demo">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Back to Tools</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Dashboard</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading/trade">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start bg-white/10 ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <ChartLine className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Trade Desk</span>}
                </Button>
              </Link>
            </div>

            <div>
              <Link to="/demo/paper-trading/history">
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-white/10 w-full justify-start ${
                    sidebarOpen ? "px-4" : "px-2"
                  }`}
                >
                  <History className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Trade History</span>}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Trade Desk</h1>
          <p className="text-gray-600">Place your paper trades here.</p>
        </div>
      </div>
    </div>
  );
};

export default PaperTradingDesk;
