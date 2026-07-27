"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

// Reliable, zero-config contact form: composes a pre-filled email to the
// business and opens the visitor's mail client. Works the moment the site is
// live — no backend, API keys or third-party service required.
//
// UPGRADE PATH: to capture leads server-side (SES SMTP + reCAPTCHA v3, per the
// standard Webit365 recipe), add a POST handler at /api/quote and swap the
// onSubmit below to fetch() that endpoint instead of building a mailto link.

const serviceOptions = [
  "Residential",
  "Commercial",
  "Agricultural / Farm",
  "Poured Foundation",
  "Driveway / Walkway",
  "Stamped / Decorative",
  "Repair",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = `Quote request${service ? ` — ${service}` : ""}${name ? ` from ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-netto-200 bg-netto-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-netto-600 text-white">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-ink">
          Your email is ready to send
        </h3>
        <p className="mt-2 text-ink-soft">
          We opened your email app with the details filled in — just hit send.
          Prefer to talk now? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-netto-700 underline">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink">
          Type of project
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-netto-500 focus:ring-4 focus:ring-netto-100"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project, timeline and location…"
          className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-netto-500 focus:ring-4 focus:ring-netto-100"
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary w-full sm:w-auto">
        Request My Free Quote
        <ArrowRightIcon className="h-5 w-5" />
      </button>
      <p className="text-xs text-ink-muted">
        Submitting opens your email app with the details filled in. You can also
        call or email us directly using the info on this page.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-netto-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-ink outline-none transition focus:border-netto-500 focus:ring-4 focus:ring-netto-100"
      />
    </div>
  );
}
