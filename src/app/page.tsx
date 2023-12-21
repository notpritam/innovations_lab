import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Lightbulb, Truck } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Fastest Delivery",
    icons: Truck,
    description:
      "Get Your 3D Models ASAP with our lightning-fast delivery service.",
  },
  {
    name: "Quality Assurance",
    icons: CheckCircle,
    description:
      "Rest easy knowing that every 3D model is meticulously designed and verified by our expert team.",
  },
  {
    name: "Custom Prints",
    icons: Lightbulb,
    description:
      "Elevate your ideas by getting custom 3D models and designs printed to perfection.",
  },
];

export default function Home() {
  return (
    <>
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

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          title="Brand New"
          href="/products"
        />
      </MaxWidthWrapper>

      <section className="boder-t border-gray-200 bg-blue-200">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
            {perks.map((item, index) => (
              <div
                key={item.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<item.icons className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
