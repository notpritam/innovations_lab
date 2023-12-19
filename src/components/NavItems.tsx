"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex gap-4 h-4">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;
        return (
          <NavItem
            category={category}
            isOpen={isOpen}
            handleOpen={handleOpen}
            isAnyOpen={activeIndex !== null}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default NavItems;

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  isOpen: boolean;
  handleOpen: () => void;
  isAnyOpen: boolean;
}

export const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  isOpen,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          ></ChevronDown>
          {category.label}
        </Button>
      </div>
    </div>
  );
};
