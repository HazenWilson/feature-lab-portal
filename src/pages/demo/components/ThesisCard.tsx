
import React, { useState } from "react";
import { TrendingUp, TrendingDown, Calendar, Building2, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Thesis } from "../types/ThesisTypes";

interface ThesisCardProps {
  thesis: Thesis;
}

export const ThesisCard: React.FC<ThesisCardProps> = ({ thesis }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="border rounded-lg bg-white shadow-sm hover:shadow transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-full ${thesis.signal === "buy" ? "bg-green-100" : "bg-red-100"}`}>
              {thesis.signal === "buy" ? (
                <TrendingUp className="h-5 w-5 text-green-600" />
              ) : (
                <TrendingDown className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg">{thesis.title}</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                  <Building2 className="h-3 w-3" />
                  {thesis.company}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                  <Tag className="h-3 w-3" />
                  {thesis.sector}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 bg-gray-50">
                  <Calendar className="h-3 w-3" />
                  {thesis.date}
                </Badge>
              </div>
            </div>
          </div>
          <Badge variant={thesis.signal === "buy" ? "default" : "destructive"}>
            {thesis.signal === "buy" ? "BUY" : "SELL"}
          </Badge>
        </div>
        
        <p className="mt-3 text-gray-700">{thesis.summary}</p>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t">
            <div className="prose prose-sm max-w-none">
              {thesis.details.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-3">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <img src={thesis.author.avatar} alt={thesis.author.name} />
                </Avatar>
                <span className="text-sm font-medium">{thesis.author.name}</span>
              </div>
              <div>
                <Badge variant="outline" className="bg-gray-50">{thesis.newsType}</Badge>
              </div>
            </div>
          </div>
        )}
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)} 
          className="mt-2 text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Read More
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
