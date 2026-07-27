import Image from "next/image";
import Link from "next/link";
import { audiences } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { CheckIcon, ArrowRightIcon, PhoneIcon } from "@/components/Icons";

const otherOrder = ["residential", "commercial", "agricultural"] as const;

export function AudienceTemplate({ slug }: { slug: keyof typeof audiences }) {
  const a = audiences[slug];
  const others = otherOrder.filter((k) => k !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-steel-950">
        <Image
          src={a.hero}
          alt={a.title}
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-steel-950/85 to-steel-950" />
        <div className="container-x relative py-16 sm:py-24">
          <p className="eyebrow text-netto-400">
            <span className="h-px w-8 bg-netto-500" />
            {a.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            {a.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">{a.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-lg btn-primary">
              Get a Free Quote
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={site.phoneHref} className="btn btn-lg btn-ghost-light">
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">
              {a.eyebrow} concrete services
            </h2>
            <p className="mt-4 text-ink-soft">
              There is no concrete construction project too big or too small for
              the experienced contractors at {site.name}. Here&apos;s a look at
              the {a.eyebrow.toLowerCase()} work we take on:
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {a.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl border border-steel-100 bg-steel-50 px-4 py-3 text-ink-soft"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-netto-600" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lift">
              <Image
                src={a.hero}
                alt={`${a.eyebrow} concrete work`}
                width={720}
                height={540}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-steel-50 py-16">
        <div className="container-x">
          <h2 className="text-center font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
            Explore our other services
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
            {others.map((key) => {
              const o = audiences[key];
              return (
                <Link
                  key={key}
                  href={`/${o.slug}`}
                  className="card group flex items-center justify-between p-6 transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <div>
                    <p className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                      {o.eyebrow}
                    </p>
                    <p className="text-sm text-ink-muted">{o.title}</p>
                  </div>
                  <ArrowRightIcon className="h-6 w-6 text-netto-600 transition group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand title={`Need ${a.eyebrow.toLowerCase()} concrete work?`} />
    </>
  );
}
