"use client";
import { Button } from "@/components/ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { useCart } from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { boolean } from "zod";

const Page = () => {
  const { items, removeFromCart } = useCart();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Cart
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div
            className={cn("lg:col-span-7", {
              "rounded-lg border-2 border-dashed border-zinc-200 p-12":
                items.length === 0,
            })}
          >
            <h2 className="sr-only">Items in your shopping cart</h2>

            {isMounted && items.length === 0 ? (
              <div className="flex flex-col h-full items-center justify-center space-y-1">
                <div
                  aria-hidden="true"
                  className="relative mb-4 h-40 w-40 text-muted-foreground "
                >
                  <Image
                    src={"/empty.png"}
                    alt="Empty Shopping Cart"
                    fill
                    loading="eager"
                  />
                </div>

                <h3 className="font-semibold text-2xl">Your cart is empty</h3>
                <p className="text-muted-foreground text-center">
                  Nothing to show here yet..
                </p>
              </div>
            ) : null}
            <ul
              className={cn({
                "divide-y divide-gray-200 border-b border-t border-gray-200 ":
                  isMounted && items.length > 0,
              })}
            >
              {isMounted &&
                items.map(({ product }) => {
                  const category = PRODUCT_CATEGORIES.find(
                    (c) => c.value === product.category
                  )?.label;

                  const { image } = product.images[0];

                  return (
                    <li key={product.id} className="py-6 flex sm:py-10">
                      <div className="flex-shrink-0 ">
                        <div className="relative h-24 w-24">
                          {typeof image !== "string" && image.url ? (
                            <Image
                              fill
                              src={image.url}
                              alt="product image"
                              className="h-full w-full rounded-md object-cover sm:h-48 sm:w-48 object-center"
                            />
                          ) : null}
                        </div>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6 ">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 ">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <Link
                                  href={`/product/${product.id}`}
                                  className="font-medium text-gray-700 hover:text-gray-800"
                                >
                                  {product.name}
                                </Link>
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm">
                              <p className="text-muted-foreground">
                                Category : {category}
                              </p>
                            </div>
                            <div className="mt-1 flex font-medium text-gray-900 text-sm">
                              <p className="text-muted-foreground">
                                {product.price}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9 w-20">
                            <div className="absolute right-0 top-0">
                              <Button
                                onClick={() => removeFromCart(product.id)}
                                variant={"ghost"}
                                aria-label="Remove Product"
                              >
                                <X className="h-5 w-5" aria-hidden="true"></X>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>

          <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
