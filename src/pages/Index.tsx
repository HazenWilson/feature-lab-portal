
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Transform Your Investment Strategy
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-8 animate-slide-up">
            Powerful tools for portfolio management, market analysis, and AI-driven insights.
            Experience the future of investing today.
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-800 border-2 border-black px-8 py-6 text-lg"
            >
              <Link to="/demo">Try Demo</Link>
            </Button>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-50 border-2 border-black px-8 py-6 text-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Link to="/signup" className="flex items-center gap-2">
                Get Started
                <ArrowRight
                  className={`transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-32 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative group p-6 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Portfolio Analytics",
    description: "Track and analyze your investments with advanced portfolio management tools.",
    icon: Boxes,
  },
  {
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations and market analysis powered by AI.",
    icon: Boxes,
  },
  {
    title: "Real-time Updates",
    description: "Stay informed with real-time market data and notifications.",
    icon: Boxes,
  },
];

export default Index;
