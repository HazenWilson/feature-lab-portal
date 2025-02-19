
import { ChevronDown, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Club {
  id: number;
  name: string;
}

interface ClubHeaderProps {
  selectedClub: Club;
  clubSelectorOpen: boolean;
  setClubSelectorOpen: (open: boolean) => void;
  setSelectedClub: (club: Club) => void;
  clubs: Club[];
}

export const ClubHeader = ({
  selectedClub,
  clubSelectorOpen,
  setClubSelectorOpen,
  setSelectedClub,
  clubs,
}: ClubHeaderProps) => {
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
  );
};
