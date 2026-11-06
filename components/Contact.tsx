"use client";
import { useState, type FormEvent } from "react";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";

const EMAIL = "mralamin0001@gmail.com";

const links = [
  { href: `mailto:${EMAIL}`, I: MailIcon, label: "Email", text: EMAIL },
  { href: "tel:+8801710978787", I: PhoneIcon, label: "Call", text: "+8801710978787" },
  { href: "https://wa.me/8801617681536", I: WhatsAppIcon, label: "WhatsApp", text: "+8801617-681536", ext: true },
  { href: "https://www.facebook.com/share/1FCBMd8LEF/", I: FacebookIcon, label: "Facebook", text: " Zaman Film & Poduction", ext: true },
];

const services = [
  "Facebook Ad Video",
  "Documentary",
  "OVC & Commercial",
  "Corporate Work",
  "Drone Videography",
];

const projectTypes = [...services, "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: projectTypes[0], message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.type} enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Project type: ${form.type}\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const input =
    "ff-mono w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:opacity-50 focus:border-[var(--b)]";

  return (
    <section id="contact" className="relative overflow-hidden pt-24" style={{ background: "var(--bg2)" }}>
      <div className="blob -right-20 top-10 h-80 w-80" style={{ background: "var(--a)" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="ff-mono mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--b)" }}>
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Contact · Now booking
          </p>
          <h2 className="ff-head text-4xl font-bold leading-tight sm:text-6xl">
            Let&apos;s make <span className="grad-text">something cinematic.</span>
          </h2>
          <p className="ff-mono mt-4 text-sm uppercase tracking-wider" style={{ color: "var(--b)" }}>
            Asaduzzaman Al Amin · Cinematographer &amp; Drone Pilot
          </p>
          <p className="c-muted mt-4 max-w-md">
            Facebook ad videos, documentaries, OVC &amp; commercials, corporate work and drone videography.
            Tell me about your project and I&apos;ll get back to you.
          </p>

          <div className="ff-mono mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider">
            {services.map((t) => (
              <span key={t} className="c-muted rounded-full border px-3 py-1" style={{ borderColor: "var(--border)" }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-1">
          <Reveal delay={150}>
            <div className="flex flex-col gap-3">
              {links.map(({ href, I, label, text, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="glass spot group flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:translate-x-1"
                >
                  <I className="h-5 w-5 shrink-0" style={{ color: "var(--b)" }} />
                  <span className="min-w-0">
                    <span className="ff-mono c-muted block text-[10.5px] uppercase tracking-wider">{label}</span>
                    <span className="ff-mono block truncate text-sm">{text}</span>
                  </span>
                  <span className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </a>
              ))}

              <div className="glass rounded-2xl px-5 py-4">
                <p className="ff-mono c-muted text-[10.5px] uppercase tracking-wider">Based in</p>
                <p className="ff-head mt-1 text-sm font-semibold">
                  Rajshahi, Bangladesh · available for shoots
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 mt-20 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="ff-mono c-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Asaduzzaman Al Amin · Cinematographer &amp; Drone Pilot</p>
          <p>Rajshahi, Bangladesh</p>
        </div>
      </div>
    </section>
  );
}