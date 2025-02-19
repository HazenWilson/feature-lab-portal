
import { DollarSign, Bot, Users, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-600 mb-12">
            Choose the plan that best fits your investment needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="border-2 border-black rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Free</h2>
              </div>
              <div className="text-3xl font-bold mb-6">$0</div>
              <ul className="space-y-3 text-sm text-gray-600 flex-grow mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  AI News Feed Access
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Personal Portfolio Connection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Basic Market Analysis
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                <a href="/signup">Get Started</a>
              </Button>
            </div>

            {/* Pro Tier */}
            <div className="border-2 border-black rounded-lg p-6 flex flex-col relative bg-black text-white">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                MOST POPULAR
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Pro</h2>
              </div>
              <div className="text-3xl font-bold mb-6">$11<span className="text-sm font-normal">/month</span></div>
              <ul className="space-y-3 text-sm text-gray-200 flex-grow mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Trading Bots Access
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  AI Investment Theses
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Advanced Analytics
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-white text-black hover:bg-gray-100"
              >
                <a href="/signup">Start Free Trial</a>
              </Button>
            </div>

            {/* Investment Club Tier */}
            <div className="border-2 border-black rounded-lg p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Investment Club</h2>
              </div>
              <div className="text-3xl font-bold mb-6">$4<span className="text-sm font-normal">/member/month</span></div>
              <ul className="space-y-3 text-sm text-gray-600 flex-grow mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Club Portfolio Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Member Equity Tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Voting System
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Club Analytics Dashboard
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                <a href="/signup">Create Club</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
