import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto flex-col flex text-center items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your Marketplace for high quality{" "}
          <span className="text-blue-600">3D Printed Assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to Innovations Lab. Every 3D Assets available on site is
          modeled by our team.{" "}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className={buttonVariants()} href={"/products"}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our Quality Promises &rarr;</Button>
        </div>
      </div>

      {/* TODO: List Products */}
    </MaxWidthWrapper>
  );
}
