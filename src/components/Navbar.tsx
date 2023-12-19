import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-[999] inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Todo: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Icons.logo />
              </div>

              <div className="hidden lg:ml-8 lg:flex lg:items-center lg:self-stretch z-[999]">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
