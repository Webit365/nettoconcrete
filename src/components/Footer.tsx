import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  FacebookIcon,
} from "@/components/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-steel-950 text-steel-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/netto-logo.png"
            alt={`${site.name} logo`}
            width={120}
            height={89}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">
            {site.shortDescription}
          </p>
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-steel-800 text-steel-200 transition hover:bg-netto-600 hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/residential" className="transition hover:text-netto-400">Residential Concrete</Link></li>
            <li><Link href="/commercial" className="transition hover:text-netto-400">Commercial Concrete</Link></li>
            <li><Link href="/agricultural" className="transition hover:text-netto-400">Agricultural Concrete</Link></li>
            <li><Link href="/our-work" className="transition hover:text-netto-400">Our Work</Link></li>
            <li><Link href="/contact" className="transition hover:text-netto-400">Free Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="group flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-netto-500" />
                <span className="transition group-hover:text-netto-400">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="group flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-netto-500" />
                <span className="transition group-hover:text-netto-400">{site.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-netto-500" />
              <span>{site.city}, {site.regionName}</span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-netto-500" />
              <span>{site.hours}<br /><span className="text-netto-400">{site.emergency}</span></span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
            Service Area
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.serviceArea.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-steel-500 sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-4">
            {nav.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-netto-400">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
