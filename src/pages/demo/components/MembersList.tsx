
import { Users, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Member {
  id: number;
  name: string;
  role: string;
  joinDate: string;
  initialInvestment: number;
  currentEquity: number;
}

interface MembersListProps {
  members: Member[];
}

export const MembersList = ({ members }: MembersListProps) => {
  const totalEquity = members.reduce((sum, member) => sum + member.currentEquity, 0);
  const pieData = members.map(member => ({
    name: member.name,
    value: member.currentEquity,
    percentage: ((member.currentEquity / totalEquity) * 100).toFixed(1)
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Club Members</h2>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4">Member</th>
                <th className="pb-4">Role</th>
                <th className="pb-4">Join Date</th>
                <th className="pb-4">Initial Investment</th>
                <th className="pb-4">Current Equity</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {members.map((member) => (
                <tr key={member.id}>
                  <td className="py-4">{member.name}</td>
                  <td className={`py-4 ${member.role === 'Admin' ? 'text-blue-600' : 'text-green-600'}`}>
                    {member.role}
                  </td>
                  <td className="py-4">{member.joinDate}</td>
                  <td className="py-4">${member.initialInvestment.toLocaleString()}</td>
                  <td className="py-4">${member.currentEquity.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-[300px]">
          <h3 className="text-lg font-medium mb-4">Ownership Distribution</h3>
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
      </div>
    </Card>
  );
};
