
import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Club Members</h2>
        </div>
      </div>

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
    </Card>
  );
};
