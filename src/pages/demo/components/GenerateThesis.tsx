
import React, { useState } from "react";
import { SendHorizonal, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ThesisCard } from "./ThesisCard";
import { Thesis } from "../types/ThesisTypes";

const GenerateThesis = () => {
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [context, setContext] = useState("");
  const [signalType, setSignalType] = useState("buy");
  const [generatedThesis, setGeneratedThesis] = useState<Thesis | null>(null);
  
  const handleGenerate = () => {
    if (!company) return;
    
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const newThesis: Thesis = {
        id: "generated-1",
        title: `${signalType === "buy" ? "Buy" : "Sell"} Thesis for ${company}`,
        company: company,
        sector: "Technology", // This would come from real data
        signal: signalType as "buy" | "sell",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        summary: context 
          ? `Based on ${context}`
          : `${company} shows strong potential based on recent market movements and company performance.`,
        details: context 
          ? `Based on the provided context: ${context}\n\nOur analysis indicates that ${company} is a ${signalType === "buy" ? "strong buy" : "sell"} at current levels. Market conditions and technical indicators suggest this is an opportune time for this position.\n\nKey factors supporting this thesis include recent price action, volume trends, and fundamental business developments. Risk factors should be carefully considered and appropriate position sizing is recommended.`
          : `${company} has demonstrated consistent performance in recent quarters, with revenue growth exceeding market expectations. The company's strategic initiatives in expanding market share and improving operational efficiency have contributed to its strong financial position.\n\nMarket conditions and technical indicators suggest this is an opportune time for a ${signalType} position. Key metrics supporting this thesis include valuation multiples, technical indicators, and sentiment analysis of market participants.\n\nInvestors should consider a ${signalType === "buy" ? "long position" : "short position"} with appropriate risk management strategies in place.`,
        newsType: "analysis",
        author: {
          name: "AI Analyst",
          avatar: "/placeholder.svg",
        }
      };
      
      setGeneratedThesis(newThesis);
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Generate Investment Thesis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card className="p-4">
            <h3 className="font-medium mb-4">Thesis Parameters</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <Input
                  placeholder="Enter company name or ticker"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Signal Type</label>
                <Select value={signalType} onValueChange={setSignalType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy Signal</SelectItem>
                    <SelectItem value="sell">Sell Signal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Context (Optional)</label>
                <Textarea 
                  placeholder="Add any additional context or insights..."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  rows={4}
                />
              </div>
              
              <Button 
                onClick={handleGenerate} 
                disabled={!company || loading} 
                className="w-full"
              >
                {loading ? (
                  <span className="flex items-center gap-2">Generating... <Sparkles className="h-4 w-4" /></span>
                ) : (
                  <span className="flex items-center gap-2">Generate Thesis <SendHorizonal className="h-4 w-4" /></span>
                )}
              </Button>
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <div className="flex items-center gap-2 text-amber-600">
                <AlertCircle className="h-4 w-4" />
                <p className="text-xs">
                  Generated theses are for informational purposes only and should not be considered as financial advice.
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          {generatedThesis ? (
            <ThesisCard thesis={generatedThesis} />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700">Enter company details</h3>
                <p className="text-gray-500 mt-1">
                  Fill out the form to generate an investment thesis
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateThesis;
