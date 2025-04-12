
import { LucideIcon } from "lucide-react";

export interface ThesisAuthor {
  name: string;
  avatar: string;
}

export interface Thesis {
  id: string;
  title: string;
  company: string;
  sector: string;
  signal: "buy" | "sell";
  date: string;
  summary: string;
  details: string;
  newsType: string;
  author: ThesisAuthor;
}
