
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Member {
  name: string;
  currentEquity: number;
}

interface OwnershipDistributionProps {
  members: Member[];
}

export const OwnershipDistribution = ({ members }: OwnershipDistributionProps) => {
  const totalEquity = members.reduce((sum, member) => sum + member.currentEquity, 0);
  const pieData = members.map(member => ({
    name: member.name,
    value: member.currentEquity,
    percentage: ((member.currentEquity / totalEquity) * 100).toFixed(1)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Ownership Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label={({ name, percentage }) => `${name}: ${percentage}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
