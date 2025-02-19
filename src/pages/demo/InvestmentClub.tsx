
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Users,
  Briefcase,
  FileText,
  Award,
  MessageSquare,
  PlayCircle,
  ChevronDown,
  PlusCircle,
  ArrowLeft,
  UserPlus,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

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

  const renderMembersSection = () => {
    const totalEquity = mockMembers.reduce((sum, member) => sum + member.currentEquity, 0);
    const pieData = mockMembers.map(member => ({
      name: member.name,
      value: member.currentEquity,
      percentage: ((member.currentEquity / totalEquity) * 100).toFixed(1)
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

    return (
      <div className="space-y-6">
        {/* Pending Membership Requests */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Pending Membership Requests</h2>
            </div>
          </div>
          <div className="space-y-4">
            {mockPendingMembers.map((member) => (
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

        {/* Current Members */}
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
                  {mockMembers.map((member) => (
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
      </div>
    );
  };

  const renderContent = () => {
    switch (currentSection) {
      case "members":
        return renderMembersSection();
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
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            {sidebarOpen && (
              <span className="text-lg font-semibold">Nϵα</span>
            )}
          </div>

          <div className="space-y-4">
            <Link to="/demo">
              <Button
                variant="ghost"
                className={`text-white hover:bg-white/10 w-full justify-start ${
                  sidebarOpen ? "px-4" : "px-2"
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                {sidebarOpen && <span className="ml-2">Back to Tools</span>}
              </Button>
            </Link>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("getting-started")}
            >
              <PlayCircle className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Getting Started</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("portfolio")}
            >
              <Briefcase className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Club Portfolio</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("members")}
            >
              <Users className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Members</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("documents")}
            >
              <FileText className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Documents</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("elections")}
            >
              <Award className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Elections</span>}
            </Button>

            <Button
              variant="ghost"
              className={`text-white hover:bg-white/10 w-full justify-start ${
                sidebarOpen ? "px-4" : "px-2"
              }`}
              onClick={() => setCurrentSection("chat")}
            >
              <MessageSquare className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Group Chat</span>}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-8">
          {/* Club Selector and Actions */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              <div className="relative">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setClubSelectorOpen(!clubSelectorOpen)}
                >
                  {selectedClub.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {clubSelectorOpen && (
                  <Card className="absolute top-full left-0 mt-2 w-64 p-2 z-50">
                    {mockClubs.map((club) => (
                      <Button
                        key={club.id}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedClub(club);
                          setClubSelectorOpen(false);
                        }}
                      >
                        {club.name}
                      </Button>
                    ))}
                  </Card>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Join Club
                </Button>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Start New Club
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentClub;
