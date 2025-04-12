
import React from "react";

interface PerformanceChartProps {
  performanceData: number[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ performanceData }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const maxValue = Math.max(...performanceData.map(Math.abs));
  
  return (
    <div className="mt-4">
      <h3 className="text-md font-semibold mb-2">Monthly Performance (%)</h3>
      <div className="flex items-end h-60 gap-1">
        {performanceData.map((value, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-full flex justify-center">
              <div
                className={`w-full ${value >= 0 ? "bg-green-500" : "bg-red-500"}`}
                style={{
                  height: `${Math.abs(value) / maxValue * 80}%`,
                  minHeight: '4px',
                }}
              ></div>
            </div>
            <span className="text-xs mt-1 rotate-45 origin-left">{months[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
