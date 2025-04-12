
import React, { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown, 
  Building2, 
  Newspaper, 
  Filter 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ThesisCard } from "./ThesisCard";
import { mockTheses } from "../data/ThesesData";

const ThesisStream = () => {
  const [filters, setFilters] = useState({
    signal: "",
    sector: "",
    company: "",
    newsType: "",
    search: "",
  });
  
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const filteredTheses = mockTheses.filter(thesis => {
    return (
      (filters.signal === "" || thesis.signal === filters.signal) &&
      (filters.sector === "" || thesis.sector === filters.sector) &&
      (filters.company === "" || thesis.company.toLowerCase().includes(filters.company.toLowerCase())) &&
      (filters.newsType === "" || thesis.newsType === filters.newsType) &&
      (filters.search === "" || 
        thesis.title.toLowerCase().includes(filters.search.toLowerCase()) || 
        thesis.summary.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Investment Theses</h1>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <Input 
              placeholder="Search theses..." 
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Select 
              value={filters.signal} 
              onValueChange={(value) => handleFilterChange("signal", value)}
            >
              <SelectTrigger className="w-[130px] bg-white">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <SelectValue placeholder="Signal" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Signals</SelectItem>
                <SelectItem value="buy">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>Buy</span>
                  </div>
                </SelectItem>
                <SelectItem value="sell">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span>Sell</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            
            <Select 
              value={filters.sector} 
              onValueChange={(value) => handleFilterChange("sector", value)}
            >
              <SelectTrigger className="w-[150px] bg-white">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <SelectValue placeholder="Sector" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Sectors</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="consumer">Consumer</SelectItem>
                <SelectItem value="energy">Energy</SelectItem>
              </SelectContent>
            </Select>
            
            <Select 
              value={filters.newsType} 
              onValueChange={(value) => handleFilterChange("newsType", value)}
            >
              <SelectTrigger className="w-[150px] bg-white">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  <SelectValue placeholder="News Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="earnings">Earnings</SelectItem>
                <SelectItem value="merger">Merger/Acquisition</SelectItem>
                <SelectItem value="product">Product Launch</SelectItem>
                <SelectItem value="regulatory">Regulatory</SelectItem>
                <SelectItem value="market">Market Trends</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline"
              onClick={() => setFilters({
                signal: "",
                sector: "",
                company: "",
                newsType: "",
                search: "",
              })}
              className="bg-white"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredTheses.length > 0 ? (
          filteredTheses.map(thesis => (
            <ThesisCard key={thesis.id} thesis={thesis} />
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No theses match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThesisStream;
