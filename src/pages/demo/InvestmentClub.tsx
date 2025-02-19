
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ClubSidebar } from "./components/ClubSidebar";
import { ClubHeader } from "./components/ClubHeader";
import { PendingMembershipRequests } from "./components/PendingMembershipRequests";
import { MembersList } from "./components/MembersList";

const mockClubs = [
  { id: 1, name: "Tech Investors Club" },
  { id: 2, name: "Value Investing Group" },
  { id: 3, name: "Crypto Trading Club" },
];

const mockPendingMembers = [
  { id: 1, name: "John Doe", requestDate: "1/23/2025" },
  { id: 2, name: "Jane Smith", requestDate: "1/23/2025" },
];

const mockMembers = [
  { id: 1, name: "John Smith", role: "Admin", joinDate: "Dec 31, 2023", initialInvestment: 25000, currentEquity: 27500 },
  { id: 2, name: "Sarah Johnson", role: "Member", joinDate: "Jan 14, 2024", initialInvestment: 15000, currentEquity: 16200 },
  { id: 3, name: "Michael Brown", role: "Member", joinDate: "Jan 31, 2024", initialInvestment: 10000, currentEquity: 10800 },
];

const InvestmentClub = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState(mockClubs[0]);
  const [clubSelectorOpen, setClubSelectorOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("getting-started");

  const renderContent = () => {
    switch (currentSection) {
      case "members":
        return (
          <div className="space-y-6">
            <PendingMembershipRequests pendingMembers={mockPendingMembers} />
            <MembersList members={mockMembers} />
          </div>
        );
      case "getting-started":
        return (
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Initial Club Setup: Structuring the Club</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Club Name & Purpose</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Define your investment club's name</li>
                    <li>Establish clear investment goals (e.g., long-term growth, day trading)</li>
                    <li>Specify sector focus if applicable</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Legal Structure</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Default: Form as an LLC for liability protection</li>
                    <li>Alternative: Consider Corporation for larger clubs</li>
                    <li>Use recommended LLC formation service</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Member Roles & Privileges</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Admins:</strong> Manage club, members, and settings</li>
                    <li><strong>Traders:</strong> Execute trades for club or individual portfolios</li>
                    <li><strong>Members:</strong> Contribute funds, vote, receive returns</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Defining the Capital Model</h2>
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Determine pooled fund percentage</li>
                  <li>Set individual trader allocations</li>
                  <li>Establish risk control limits</li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Governance: Member Management</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Adding Members</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Invite-only system (recommended)</li>
                    <li>Optional member voting process</li>
                    <li>Define member limits</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h3 className="font-medium mb-2">Removing Members</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Voluntary withdrawal process</li>
                    <li>Rule violation consequences</li>
                    <li>Automatic buyout procedures</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Trading & Risk Management</h2>
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Define trading permissions</li>
                  <li>Set risk limits and stop-loss rules</li>
                  <li>Establish trading restrictions</li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Voting & Decision-Making</h2>
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Equal voting vs. contribution-weighted</li>
                  <li>Define vote-required decisions</li>
                  <li>Set up election procedures</li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Payouts & Withdrawals</h2>
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Set withdrawal periods</li>
                  <li>Define partial withdrawal rules</li>
                  <li>Establish profit distribution schedule</li>
                </ul>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Tax & Compliance</h2>
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Automated K-1 tax statement generation</li>
                  <li>Operating agreement management</li>
                  <li>Regulatory compliance monitoring</li>
                </ul>
              </Card>
            </section>
          </div>
        );
      default:
        return (
          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to {selectedClub.name}</h1>
            <p className="text-gray-600">
              Select an option from the sidebar to get started with your investment club activities.
            </p>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <ClubSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          <ClubHeader
            selectedClub={selectedClub}
            clubSelectorOpen={clubSelectorOpen}
            setClubSelectorOpen={setClubSelectorOpen}
            setSelectedClub={setSelectedClub}
            clubs={mockClubs}
            currentSection={currentSection}
          />

          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentClub;
