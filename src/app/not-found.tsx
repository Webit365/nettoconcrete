import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="bg-steel-950">
      <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-bold text-netto-500">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-steel-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on solid ground.
        </p>
        <Link href="/" className="btn btn-lg btn-primary mt-8">
          Back to home
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
