"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <div className="flex items-center gap-4 h-4">
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
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          ></ChevronDown>
        </Button>
      </div>

      {isOpen && (
        <>
          <div
            className={cn(
              "absolute inset-x-0 top-full text-sm text-muted-foreground",
              { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen }
            )}
          >
            <div
              className="absolute inset-0 top-1/2 bg-white shadow"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mx-auto max-w-7xl px-8">
                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                  <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                    {category.featured.map((subCategory, index) => {
                      return (
                        <div
                          key={subCategory.name}
                          className="group relative text-base sm:text-sm"
                        >
                          <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <Image
                              src={subCategory.imageSrc}
                              alt={subCategory.name}
                              fill
                              className="object-cover object-center"
                            />
                          </div>
                          <Link
                            href={subCategory.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            {subCategory.name}
                          </Link>
                          <p className="mt-1" aria-hidden="true">
                            Shop Now
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
