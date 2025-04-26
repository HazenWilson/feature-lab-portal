
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card } from "@/components/ui/card";

interface Member {
  id: number;
  name: string;
  currentEquity: number;
}

interface OwnershipDistributionProps {
  members: Member[];
}

export const OwnershipDistribution = ({ members }: OwnershipDistributionProps) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = members.map((member) => ({
    name: member.name,
    value: member.currentEquity,
  }));

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Ownership Distribution</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
