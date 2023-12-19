import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { IndianRupee } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
