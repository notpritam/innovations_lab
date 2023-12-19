import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="bg-white sticky top-0 z-[999] inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border border-gray-200">
            <div className="flex h-16 items-center">
              {/* Todo: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Icons.logo />
              </div>

              <div className="hidden lg:ml-8 lg:flex lg:items-center lg:self-stretch z-[999]">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center ">
                <div className="hidden lg:flex items-center flex-1 justify-end lg:space-x-6">
                  {user == null ? (
                    <Link
                      href={"/sign-in"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  ) : null}

                  {user == null ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}
                  {user == null ? (
                    <Link
                      href={"/sign-up"}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign Up
                    </Link>
                  ) : null}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
