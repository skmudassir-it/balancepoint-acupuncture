import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-9xl font-extrabold tracking-tighter text-primary/20">
          404
        </p>
        <h1 className="-mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-muted-foreground">
          This pressure point doesn&apos;t exist. Let us guide you back to
          balance.
        </p>
        <div className="gradient-divider mx-auto mt-6 w-16" />
        <Link href="/" className="mt-8 inline-flex">
          <Button size="lg">Back Home</Button>
        </Link>
      </div>
    </main>
  );
}
