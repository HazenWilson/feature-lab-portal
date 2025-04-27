
import { ChevronDown, PlusCircle, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ClubHeaderProps {
  selectedClub: any;
  clubSelectorOpen: boolean;
  setClubSelectorOpen: (open: boolean) => void;
  currentSection: string;
}

export const ClubHeader = ({
  selectedClub,
  clubSelectorOpen,
  setClubSelectorOpen,
  currentSection,
}: ClubHeaderProps) => {
  const { data: clubs = [] } = useQuery({
    queryKey: ['user-clubs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('investment_clubs')
        .select('*');
      
      if (error) throw error;
      return data;
    },
  });

  const renderActionButtons = () => {
    switch (currentSection) {
      case "getting-started":
        return (
          <>
            <Button variant="outline">
              <PlusCircle className="h-4 w-4 mr-2" />
              Join Club
            </Button>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Start New Club
            </Button>
          </>
        );
      case "members":
        return (
          <>
            <Button variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Onboard Members
            </Button>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Member
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  if (!selectedClub) return null;

  return (
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
              {clubs.map((club) => (
                <Button
                  key={club.id}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    window.location.href = `/app/investment-club/${club.id}`;
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
          {renderActionButtons()}
        </div>
      </div>
    </div>
  );
};
