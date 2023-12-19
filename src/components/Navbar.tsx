import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 z-[999] inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Todo: Mobile Nav */}

              <div className="ml-4 flex lg:ml-0">
                <Icons.logo className="text-3xl" />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
