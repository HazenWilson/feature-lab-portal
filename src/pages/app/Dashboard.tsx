
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Users } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newClub, setNewClub] = useState({
    name: "",
    description: ""
  });
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const [clubInviteCode, setClubInviteCode] = useState('');

  const fetchClubs = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      
      const { data: ownedClubs, error: ownedError } = await supabase
        .from('investment_clubs')
        .select('*')
        .eq('created_by', user.id);
        
      if (ownedError) throw ownedError;
      
      // For the club members query, simplified to avoid excessive type instantiation
      const { data: memberClubs, error: memberError } = await supabase
        .from('club_members')
        .select('club_id, role, investment_clubs:club_id(*)')
        .eq('user_id', user.id);
        
      if (memberError) throw memberError;
      
      const memberClubsData = memberClubs.map(item => ({
        ...item.investment_clubs,
        role: item.role
      }));
      
      const allClubs = [
        ...ownedClubs.map(club => ({ ...club, role: 'owner' })),
        ...memberClubsData
      ];
      
      const uniqueClubs = allClubs.filter((club, index, self) =>
        index === self.findIndex(c => c.id === club.id)
      );
      
      setClubs(uniqueClubs);
    } catch (error: any) {
      console.error("Error fetching clubs:", error);
      toast.error("Failed to load investment clubs");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateClub = async () => {
    if (!user) return;
    
    try {
      const { data: clubData, error: clubError } = await supabase
        .from('investment_clubs')
        .insert([
          {
            name: newClub.name,
            description: newClub.description,
            created_by: user.id
          }
        ])
        .select();
        
      if (clubError) throw clubError;
      
      if (!clubData || clubData.length === 0) {
        throw new Error("Failed to create club");
      }
      
      const newClubId = clubData[0].id;
      
      const { error: memberError } = await supabase
        .from('club_members')
        .insert([
          {
            club_id: newClubId,
            user_id: user.id,
            role: 'Admin',
            ownership_percentage: 100
          }
        ]);
      
      if (memberError) {
        console.error("Error adding creator as member:", memberError);
        toast.success("Investment club created successfully");
        setIsDialogOpen(false);
        setNewClub({ name: "", description: "" });
        fetchClubs();
      }
    } catch (error: any) {
      console.error("Error creating club:", error);
      toast.error(error.message || "Failed to create investment club");
    }
  };

  const handleJoinClub = async () => {
    if (!user) return;
    
    try {
      const { data: clubData, error: clubError } = await supabase
        .from('investment_clubs')
        .select('id')
        .eq('invite_code', clubInviteCode)
        .single();
      
      if (clubError) throw clubError;
      
      if (!clubData) {
        toast.error("Invalid club invite code");
        return;
      }
      
      const { error: memberError } = await supabase
        .from('club_members')
        .insert({
          club_id: clubData.id,
          user_id: user.id,
          role: 'member',
          ownership_percentage: 0
        });
      
      if (memberError) {
        if (memberError.code === '23505') {
          toast.error("You are already a member of this club");
        } else {
          throw memberError;
        }
        return;
      }
      
      toast.success("Successfully joined the club");
      setIsJoinDialogOpen(false);
      setClubInviteCode('');
      fetchClubs();
    } catch (error: any) {
      console.error("Error joining club:", error);
      toast.error(error.message || "Failed to join investment club");
    }
  };

  useEffect(() => {
    fetchClubs();
  }, [user]);

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="flex gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Investment Club
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a new investment club</DialogTitle>
                <DialogDescription>
                  Create a club to invest together with friends and colleagues.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="club-name">Club Name</Label>
                  <Input 
                    id="club-name" 
                    placeholder="Tech Investors" 
                    value={newClub.name}
                    onChange={(e) => setNewClub({...newClub, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="club-description">Description</Label>
                  <Textarea 
                    id="club-description" 
                    placeholder="A club focused on tech investments..."
                    value={newClub.description || ''}
                    onChange={(e) => setNewClub({...newClub, description: e.target.value})}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleCreateClub} disabled={!newClub.name}>Create Club</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isJoinDialogOpen} onOpenChange={setIsJoinDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="secondary">
                <Users className="w-4 h-4 mr-2" />
                Join Investment Club
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join an Investment Club</DialogTitle>
                <DialogDescription>
                  Enter the invite code to join an existing investment club.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="invite-code">Invite Code</Label>
                  <Input 
                    id="invite-code" 
                    placeholder="Enter invite code" 
                    value={clubInviteCode}
                    onChange={(e) => setClubInviteCode(e.target.value)}
                  />
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsJoinDialogOpen(false)}>Cancel</Button>
                <Button 
                  onClick={handleJoinClub} 
                  disabled={!clubInviteCode}
                >
                  Join Club
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p>Loading your investment clubs...</p>
        ) : clubs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium">No investment clubs yet</h3>
            <p className="mt-1 text-gray-500">Create your first investment club to get started.</p>
            <div className="mt-6">
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Create Investment Club
              </Button>
            </div>
          </div>
        ) : (
          clubs.map((club) => (
            <Card key={club.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate(`/app/investment-club/${club.id}`)}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{club.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{club.description || 'No description'}</p>
                </div>
                <div className="px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                  {club.role === 'owner' ? 'Owner' : club.role}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
