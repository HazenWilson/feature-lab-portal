
import { Users, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PendingMember {
  id: number;
  name: string;
  requestDate: string;
}

interface PendingMembershipRequestsProps {
  pendingMembers: PendingMember[];
}

export const PendingMembershipRequests = ({ pendingMembers }: PendingMembershipRequestsProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Pending Membership Requests</h2>
        </div>
      </div>
      <div className="space-y-4">
        {pendingMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-500">Requested {member.requestDate}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-green-600">
                <Check className="h-4 w-4 mr-1" />
                Approve
              </Button>
              <Button variant="outline" className="text-red-600">
                <X className="h-4 w-4 mr-1" />
                Reject
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
