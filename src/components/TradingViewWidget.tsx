
import { useEffect } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
}

const TradingViewWidget = ({ symbol = "AAPL" }: TradingViewWidgetProps) => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      if (typeof window.TradingView !== 'undefined') {
        new window.TradingView.widget({
          autosize: true,
          symbol: `NASDAQ:${symbol}`,
          interval: "D",
          timezone: "America/New_York",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart"
        });
      }
    };

    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, [symbol]);

  return null;
};

export default TradingViewWidget;
