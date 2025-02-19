
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NewsFiltersProps {
  selectedSentiment: string;
  setSelectedSentiment: (value: string) => void;
  selectedTimeframe: string;
  setSelectedTimeframe: (value: string) => void;
  selectedImpact: string;
  setSelectedImpact: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedSource: string;
  setSelectedSource: (value: string) => void;
  selectedSector: string;
  setSelectedSector: (value: string) => void;
}

export const categoryOptions = [
  { id: 'corporate', name: 'Corporate Developments' },
  { id: 'research', name: 'Research Analysis' },
  { id: 'stock-picks', name: 'Stock Picks' },
  { id: 'market-recap', name: 'Market Recap' },
  { id: 'insiders', name: 'Insiders' },
  { id: 'legal', name: 'Legal' },
  { id: 'ma', name: 'M&A' },
  { id: 'industry', name: 'Industry News' },
  { id: 'activist', name: 'Activist Investor' },
  { id: 'earnings', name: 'Earnings' },
  { id: 'analyst', name: 'Analyst Rating' },
  { id: 'economic', name: 'Economic' },
  { id: 'other', name: 'Other' }
];

export const NewsFilters = ({
  selectedSentiment,
  setSelectedSentiment,
  selectedTimeframe,
  setSelectedTimeframe,
  selectedImpact,
  setSelectedImpact,
  selectedCategory,
  setSelectedCategory,
  selectedSource,
  setSelectedSource,
  selectedSector,
  setSelectedSector,
}: NewsFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Select value={selectedSentiment} onValueChange={setSelectedSentiment}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Sentiment" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Sentiment</SelectItem>
            <SelectItem value="bullish">Bullish</SelectItem>
            <SelectItem value="bearish">Bearish</SelectItem>
            <SelectItem value="neutral">Neutral</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedImpact} onValueChange={setSelectedImpact}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Impact" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Impact</SelectItem>
            <SelectItem value="high">High Impact</SelectItem>
            <SelectItem value="medium">Medium Impact</SelectItem>
            <SelectItem value="low">Low Impact</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Horizon" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Timeframes</SelectItem>
            <SelectItem value="short">Short Term</SelectItem>
            <SelectItem value="medium">Medium Term</SelectItem>
            <SelectItem value="long">Long Term</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <SelectGroup>
            {categoryOptions.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedSource} onValueChange={setSelectedSource}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Sources" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="bloomberg">Bloomberg</SelectItem>
            <SelectItem value="reuters">Reuters</SelectItem>
            <SelectItem value="cnbc">CNBC</SelectItem>
            <SelectItem value="wsj">Wall Street Journal</SelectItem>
            <SelectItem value="ft">Financial Times</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={selectedSector} onValueChange={setSelectedSector}>
        <SelectTrigger className="w-[140px] border-2 bg-white">
          <SelectValue placeholder="Sector" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All Sectors</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="consumer">Consumer</SelectItem>
            <SelectItem value="energy">Energy</SelectItem>
            <SelectItem value="materials">Materials</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
