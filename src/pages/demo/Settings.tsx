
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ArrowLeft, Settings as SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrokerageConnections } from "./components/BrokerageConnections";

const Settings = () => {
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
              <span className="text-lg font-semibold">Settings</span>
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
              <Button
                variant="ghost"
                className={`text-white hover:bg-white/10 w-full justify-start bg-white/10 ${
                  sidebarOpen ? "px-4" : "px-2"
                }`}
              >
                <SettingsIcon className="h-5 w-5" />
                {sidebarOpen && <span className="ml-2">Brokerage Connect</span>}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Brokerage Connect</h1>
          <BrokerageConnections />
        </div>
      </div>
    </div>
  );
};

export default Settings;
