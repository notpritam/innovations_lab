import Image from "next/image";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const VerifyPage = ({ searchParams }: PageProps) => {
  const token = searchParams.token;
  const email = searchParams.to;
  <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
    <div className="mx-auto flex w-full  flex-col justify-center space-y-6 sm:w-[350px]">
      {token && typeof token === "string" ? (
        <div className="grid gap-6"></div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center space-y-1">
          <div className="relative mb-4 h-60 w-60 text-muted-foreground">
            <Image fill src="/email.png" alt="Sent Email Image" />
          </div>
          <h3 className="font-semibold text-2xl">Check your email</h3>
          {email ? (
            <p className="text-muted-foreground text-center">
              We&apos;ve sent a verification email to{" "}
              <span className="font-semibold">{email}</span>.
            </p>
          ) : (
            <p className="text-muted-foreground text-center">
              We&apos;ve sent a verification link to your email.
            </p>
          )}
        </div>
      )}
    </div>
  </div>;
};

export default VerifyPage;
