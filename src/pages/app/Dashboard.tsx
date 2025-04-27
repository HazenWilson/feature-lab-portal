
import { TopStories } from "@/components/dashboard/TopStories";
import { TopMovers } from "@/components/dashboard/TopMovers";
import { MarketChart } from "@/components/dashboard/MarketChart";
import { ClubCalendar } from "@/components/dashboard/ClubCalendar";

export default function Dashboard() {
  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopStories />
        <TopMovers />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <MarketChart />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <ClubCalendar />
      </div>
    </div>
  );
}
