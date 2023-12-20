"use client";
import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 animate-spin w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-sm text-center">
          This won&apos;t take long.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">Something went wrong!</h3>
        <p className="text-muted-foreground text-sm text-center">
          There is problem with token , it might be expired or invalid.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative h-60 w-60 text-muted-foreground mb-4">
          <Image src="/email.png" fill alt="Email was sent" />
        </div>
        <h3 className="font-semibold text-2xl">You&apos;re all done!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you , your email is now verified.
        </p>

        <Link
          href={"/sign-in"}
          className={buttonVariants({ className: "mt-4" })}
        >
          Sign in
        </Link>
      </div>
    );
  }
};

export default VerifyEmail;
