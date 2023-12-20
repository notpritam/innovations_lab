import Image from "next/image";
import Link from "next/link";

export const Icons = {
  logo: () => (
    <Link
      href={"/"}
      className="md:text-xl text-sm flex gap-1 items-center  uppercase font-bold"
    >
      <Image src={"/logo.png"} height={48} width={48} alt={"logo"} />
      <span className="hidden items-center lg:flex">
        {" "}
        Innovations <span className="text-primary">Lab</span>
      </span>
    </Link>
  ),
  logoText: () => (
    <Link href={"/"} className="md:text-2xl text-sm uppercase font-bold">
      Innovations <span className="text-primary">Lab</span>
    </Link>
  ),
  logoImage: () => (
    <Link
      href={"/"}
      className="md:text-xl text-sm flex gap-1 items-center  uppercase font-bold"
    >
      <Image src={"/logo.png"} height={128} width={128} alt={"logo"} />
    </Link>
  ),
};
