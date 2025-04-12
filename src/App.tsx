
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";
import Legal from "./pages/Legal";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/demo/Portfolio";
import TradeHistory from "./pages/demo/TradeHistory";
import TradeDesk from "./pages/demo/TradeDesk";
import InvestmentClub from "./pages/demo/InvestmentClub";
import News from "./pages/demo/News";
import TradingBots from "./pages/demo/TradingBots";
import Theses from "./pages/demo/Theses";
import AIChat from "./pages/demo/AIChat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/portfolio" element={<Portfolio />} />
          <Route path="/demo/portfolio/trade" element={<TradeDesk />} />
          <Route path="/demo/portfolio/history" element={<TradeHistory />} />
          <Route path="/demo/investment-club" element={<InvestmentClub />} />
          <Route path="/demo/news" element={<News />} />
          <Route path="/demo/trading-bots" element={<TradingBots />} />
          <Route path="/demo/theses" element={<Theses />} />
          <Route path="/demo/ai-chat" element={<AIChat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
