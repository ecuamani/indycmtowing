import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-ink ring-1 ring-slate-200">
            <Image src="/assets/indy-cm-logo.jpeg" alt="Indy CM Towing & Rescue logo" fill sizes="48px" className="object-cover" priority />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-black text-ink">Indy CM Towing</span>
            <span className="block text-xs font-bold uppercase tracking-wide text-slate-500">& Rescue</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-slate-700 hover:text-rescue-blue">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:3179560975"
          className="hidden items-center gap-2 rounded-lg bg-rescue-blue px-4 py-3 text-sm font-black text-white transition hover:bg-blue-700 sm:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Call 24/7
        </a>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-lg px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
