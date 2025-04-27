
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export function ClubCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Investment Club Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar mode="single" />
      </CardContent>
    </Card>
  );
}
