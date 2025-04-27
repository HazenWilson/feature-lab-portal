import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/components/AuthProvider";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AppHome from "./pages/App";
import AppInvestmentClub from "./pages/app/InvestmentClub";

const queryClient = new QueryClient();

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/app/investment-club"
              element={
                <ProtectedRoute>
                  <AppInvestmentClub />
                </ProtectedRoute>
              }
            />
            <Route path="/demo" element={<Demo />} />
            <Route path="/demo/portfolio" element={<Portfolio />} />
            <Route path="/demo/portfolio/trade" element={<TradeDesk />} />
            <Route path="/demo/portfolio/history" element={<TradeHistory />} />
            <Route path="/demo/investment-club" element={<InvestmentClub />} />
            <Route path="/demo/news" element={<News />} />
            <Route path="/demo/trading-bots" element={<TradingBots />} />
            <Route path="/demo/theses" element={<Theses />} />
            <Route path="/demo/ai-chat" element={<AIChat />} />
            <Route path="/demo/watch-list" element={<WatchList />} />
            <Route path="/demo/watch-list/news" element={<WatchListNewsFeed />} />
            <Route path="/demo/watch-list/edit" element={<EditWatchList />} />
            <Route path="/demo/paper-trading" element={<PaperTrading />} />
            <Route path="/demo/paper-trading/trade" element={<PaperTradingDesk />} />
            <Route path="/demo/paper-trading/history" element={<PaperTradingHistory />} />
            <Route path="/demo/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
