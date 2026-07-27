import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

// Sticky call / quote bar shown only on small screens.
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-steel-800 bg-steel-950 lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
      >
        <PhoneIcon className="h-4 w-4 text-netto-500" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-netto-600 py-3.5 text-sm font-bold text-white"
      >
        Free Quote
      </Link>
    </div>
  );
}
