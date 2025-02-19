
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Boxes, DollarSign, Vote, Shield, Scale, Newspaper, Bot, BarChart, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Welcome to Nϵα
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 mb-8 animate-slide-up">
            Transform your investment strategy with powerful tools for portfolio management, 
            market analysis, and AI-driven insights. Experience the future of investing today.
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

        {/* Investment Club Feature Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Investment Club Management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamline your investment club operations with powerful tools designed for 
              collaboration, transparency, and efficient decision-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI News Feed Section */}
        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI-Powered News Analysis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the market with our advanced AI news analysis system. Get real-time insights,
              categorized updates, and intelligent market tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 border-2 border-black rounded-lg bg-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <ul className="mt-4 space-y-2">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-32 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-16">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
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

const clubFeatures = [
  {
    title: "Equity Management",
    description: "Automated tracking and management of member equity positions with real-time updates.",
    icon: DollarSign,
    bullets: [
      "Automatic member equity tracking",
      "Pro rata calculations",
      "Individual return management",
      "Hybrid return structures",
    ],
  },
  {
    title: "Democratic Governance",
    description: "Streamlined voting system for club decisions and rule changes.",
    icon: Vote,
    bullets: [
      "Club elections management",
      "Proposal creation and voting",
      "Rule amendment system",
      "Voting history tracking",
    ],
  },
  {
    title: "Compliance & Documentation",
    description: "Comprehensive tools for maintaining club records and ensuring compliance.",
    icon: Shield,
    bullets: [
      "Operating agreement templates",
      "Regulatory compliance checks",
      "Document storage",
      "Audit trail maintenance",
    ],
  },
  {
    title: "Performance Analytics",
    description: "Detailed insights into club and individual member performance.",
    icon: Scale,
    bullets: [
      "Portfolio performance tracking",
      "Member contribution analysis",
      "Return on investment metrics",
      "Comparative benchmarks",
    ],
  },
];

const newsFeatures = [
  {
    title: "Comprehensive News Analysis",
    description: "AI-powered analysis of news articles from multiple sources in real-time.",
    icon: Bot,
    bullets: [
      "Automated news source tracking",
      "Real-time article analysis",
      "Event type categorization",
      "News sentiment analysis",
    ],
  },
  {
    title: "Market Impact Tracking",
    description: "Identify and track market impacts from news events.",
    icon: BarChart,
    bullets: [
      "Bullish/bearish ticker identification",
      "Sector impact analysis",
      "Market sentiment tracking",
      "Related stocks discovery",
    ],
  },
  {
    title: "Story Tracking",
    description: "Follow developing stories and their market implications.",
    icon: Newspaper,
    bullets: [
      "Related article grouping",
      "Story timeline tracking",
      "Impact progression analysis",
      "Historical context integration",
    ],
  },
  {
    title: "Watchlist Management",
    description: "Create and manage custom watchlists with AI-enhanced insights.",
    icon: ListChecks,
    bullets: [
      "Custom watchlist creation",
      "Automated news alerts",
      "Sector-based monitoring",
      "Price movement correlation",
    ],
  },
];

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
