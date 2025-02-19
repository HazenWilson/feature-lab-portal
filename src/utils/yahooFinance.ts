
const YAHOO_FINANCE_API_BASE = "https://query2.finance.yahoo.com";

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
    const response = await fetch(
      `${YAHOO_FINANCE_API_BASE}/v1/finance/search?q=${encodeURIComponent(query)}&quotesCount=6&newsCount=0&listsCount=0`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch data from Yahoo Finance');
    }

    const data = await response.json();
    return data.quotes || [];
  } catch (error) {
    console.error('Error fetching symbol data:', error);
    return [];
  }
};
