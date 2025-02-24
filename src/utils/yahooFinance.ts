
const YAHOO_FINANCE_API_BASE = "https://query1.finance.yahoo.com";
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

export interface YahooSearchResult {
  symbol: string;
  shortname: string;
  longname?: string;
  exchDisp: string;
  typeDisp: string;
}

export interface YahooQuoteResult {
  regularMarketPrice: number;
  regularMarketPreviousClose: number;
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

export const getQuote = async (symbol: string): Promise<YahooQuoteResult | null> => {
  if (!symbol) return null;
  
  try {
    const encodedUrl = encodeURIComponent(`${YAHOO_FINANCE_API_BASE}/v6/finance/quote?symbols=${symbol}`);
    const response = await fetch(`${CORS_PROXY}${encodedUrl}`);
    
    if (!response.ok) {
      console.error('Yahoo Finance API Error:', await response.text());
      throw new Error('Failed to fetch quote data from Yahoo Finance');
    }

    const data = await response.json();
    console.log('Yahoo Finance Quote Response:', data);
    return data.quoteResponse?.result?.[0] || null;
  } catch (error) {
    console.error('Error fetching quote data:', error);
    return null;
  }
};
