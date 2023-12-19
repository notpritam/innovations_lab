import { IndianRupee, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemCount = 0;
  const fee = 10;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {0}</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* Todo : Cart Items*/}
              Cart Items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 pr-6 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span className="">Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transcation Fee</span>
                  <span className="flex items-center">
                    {/* <IndianRupee className="h-3 " />  */}₹ {fee}
                  </span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span className="flex items-center">
                    {/* <IndianRupee className="h-3 " />  */}₹ {fee}
                  </span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href={"/cart"}
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <>
            <div
              aria-hidden="true"
              className="flex flex-col  h-full items-center justify-center space-y-1"
            >
              <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                <Image
                  src="/empty.png"
                  className="object-cover object-center"
                  fill
                  alt="empty cart logo"
                />
              </div>
              <div className="text-xl text-muted-foreground font-semibold">
                Your Cart is empty
              </div>

              <SheetTrigger asChild>
                <Link
                  href={"/products"}
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })}
                >
                  Add some items to your cart
                </Link>
              </SheetTrigger>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;