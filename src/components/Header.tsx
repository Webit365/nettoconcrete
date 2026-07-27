"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon, ChevronDownIcon, ArrowRightIcon } from "@/components/Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-steel-950 text-steel-200 md:block">
        <div className="container-x flex h-10 items-center justify-between text-sm">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-netto-400"
          >
            <PhoneIcon className="h-4 w-4 text-netto-500" />
            {site.phone}
          </a>
          <p className="text-steel-300">{site.serviceAreaLine}</p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-steel-200 bg-white/95 shadow-card backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center" aria-label={site.name}>
            <Image
              src="/brand/netto-logo.png"
              alt={`${site.name} logo`}
              width={110}
              height={82}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-[15px] font-semibold text-ink-soft transition hover:text-netto-600">
                    {item.label}
                    <ChevronDownIcon className="h-4 w-4 transition group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-56 translate-y-1 rounded-2xl border border-steel-100 bg-white p-2 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-[15px] font-medium text-ink-soft transition hover:bg-netto-50 hover:text-netto-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-[15px] font-semibold transition hover:text-netto-600 ${
                    pathname === item.href ? "text-netto-600" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-md btn-primary hidden sm:inline-flex">
              Free Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-steel-200 text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-steel-100 bg-white lg:hidden">
            <nav className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-2 py-3 text-lg font-semibold text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 border-l border-steel-100 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-2 py-2 text-base font-medium text-ink-soft"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href={site.phoneHref} className="btn btn-md btn-outline">
                  <PhoneIcon className="h-4 w-4" />
                  Call
                </a>
                <Link href="/contact" className="btn btn-md btn-primary">
                  Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
