import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Get a Free Concrete Quote",
  description:
    "Contact Netto Concrete Construction in Watertown, NY for a free concrete estimate. Call (315) 408-4158 or email info@nettoconcrete.com. 24-hour emergency service available.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPinIcon,
    label: "Service Area",
    value: "Jefferson, Lewis, St. Lawrence & all of Northern New York",
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: `${site.hours} · ${site.emergency}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-steel-950 py-16 sm:py-20">
        <div className="container-x">
          <p className="eyebrow text-netto-400">
            <span className="h-px w-8 bg-netto-500" />
            Get In Touch
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-300">
            For a free, no-obligation estimate, reach us directly by phone or
            email — we look forward to hearing from you soon.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <div className="card p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
                More info
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                Thank you for your interest. For questions or a free quote, use
                the details below.
              </p>
              <ul className="mt-6 space-y-5">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-netto-50 text-netto-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-lg font-semibold text-ink transition hover:text-netto-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-netto-600 p-6 text-white sm:p-8">
              <p className="font-display text-xl font-bold uppercase tracking-tight">
                Prefer to talk now?
              </p>
              <p className="mt-1 text-netto-50">
                Call us for the fastest response — including 24-hour emergency
                service.
              </p>
              <a href={site.phoneHref} className="btn btn-lg btn-white mt-4">
                <PhoneIcon className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
