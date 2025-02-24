
const YAHOO_FINANCE_API_BASE = "https://query1.finance.yahoo.com";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

export interface YahooSearchResult {
  symbol: string;
  name: string;
  exch: string;
  type: string;
  exchDisp: string;
  typeDisp: string;
}

export const searchSymbols = async (query: string): Promise<YahooSearchResult[]> => {
  if (!query) return [];
  
  try {
    const encodedUrl = encodeURIComponent(`${YAHOO_FINANCE_API_BASE}/v1/finance/search?q=${query}&quotesCount=6&newsCount=0&enableFuzzyQuery=false&enableEnhancedTrivialQuery=true&quotesQueryId=tss_match_phrase_query`);
    const response = await fetch(`${CORS_PROXY}${encodedUrl}`);
    
    if (!response.ok) {
      console.error('Yahoo Finance API Error:', await response.text());
      throw new Error('Failed to fetch data from Yahoo Finance');
    }

    const data = await response.json();
    console.log('Yahoo Finance API Response:', data); // Debug log
    return data.quotes || [];
  } catch (error) {
    console.error('Error fetching symbol data:', error);
    return [];
  }
};
