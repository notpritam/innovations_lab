import Link from "next/link";

export const Icons = {
  logo: (className: string) => (
    <Link href={"/"} className={className}>
      Innovations Lab
    </Link>
  ),
};
