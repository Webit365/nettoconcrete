import Image from "next/image";
import Link from "next/link";
import { coreServices, audiences } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldIcon,
  HammerIcon,
  StarIcon,
  ClockIcon,
} from "@/components/Icons";

const trust = [
  { icon: HammerIcon, title: `${site.yearsExperience} Years`, sub: "Experienced local contractors" },
  { icon: ShieldIcon, title: "Residential to Commercial", sub: "Design through completion" },
  { icon: StarIcon, title: "Quality Service", sub: "Detail-oriented craftsmanship" },
  { icon: ClockIcon, title: "24-Hr Emergency", sub: "Service when you need it" },
];

const audienceOrder = ["residential", "commercial", "agricultural"] as const;

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-steel-950">
        <Image
          src="/photos/service_5.jpg"
          alt="Freshly finished concrete work by Netto Concrete Construction"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/80 via-steel-950/70 to-steel-950" />
        <div className="container-x relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-netto-400">
              <span className="h-px w-8 bg-netto-500" />
              {site.city}, New York
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl">
              Concrete Construction <span className="text-netto-500">Done Right</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-steel-200">
              Commercial, farm &amp; residential concrete contractor serving
              Jefferson County, Lewis County, St. Lawrence and all of Northern
              New York. Quality service counts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-lg btn-primary">
                Get a Free Quote
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a href={site.phoneHref} className="btn btn-lg btn-ghost-light">
                <PhoneIcon className="h-5 w-5" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST BAR ---------- */}
      <section className="border-b border-steel-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-netto-50 text-netto-600">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-lg font-bold uppercase leading-tight text-ink">
                  {title}
                </p>
                <p className="text-sm text-ink-muted">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES GRID ---------- */}
      <section className="bg-steel-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Our Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Everything concrete, start to finish
            </h2>
            <p className="mt-3 text-ink-soft">
              From poured foundations to decorative stamped patios, our
              experienced crew handles every project with precision.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((s) => (
              <div key={s.slug} className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <div className="mb-4 h-1 w-10 rounded-full bg-netto-500 transition-all group-hover:w-16" />
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <Image
                src="/photos/service_4.jpg"
                alt="Netto Concrete Construction crew pouring a commercial slab"
                width={720}
                height={480}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-netto-600 p-6 text-white shadow-lift sm:block">
              <p className="font-display text-4xl font-bold">{site.yearsExperience}</p>
              <p className="text-sm font-semibold uppercase tracking-wide">Years of experience</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Precise Installation &amp; Repair</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Detail-oriented concrete, built to last
            </h2>
            <p className="mt-4 text-ink-soft">
              The experienced staff at Netto Concrete Construction have provided
              clients throughout Watertown, New York with concrete construction
              and installation — including flatwork, foundations and decorative
              resurfacing. Our clientele includes residential, commercial and
              industrial clients who need detail-oriented work done right.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Poured foundations & walls",
                "Flatwork & slabs",
                "Stamped & decorative finishes",
                "Repairs & resurfacing",
                "Competitive local pricing",
                "Free written estimates",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-soft">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-netto-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/our-work" className="btn btn-lg btn-dark">
                See Our Work
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AUDIENCES ---------- */}
      <section className="bg-steel-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Who We Serve</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              Concrete for every kind of project
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audienceOrder.map((key) => {
              const a = audiences[key];
              return (
                <Link
                  key={key}
                  href={`/${a.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-steel-950 shadow-card transition hover:shadow-lift"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={a.hero}
                      alt={a.title}
                      fill
                      className="object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-950 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold uppercase tracking-tight text-white">
                      {a.eyebrow}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-steel-300">{a.intro}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-netto-400">
                      Explore
                      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
