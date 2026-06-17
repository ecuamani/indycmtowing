import Link from "next/link";
import Image from "next/image";
import { Clock3, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-12 text-white sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-black ring-1 ring-white/10">
              <Image src="/assets/indy-cm-logo.jpeg" alt="Indy CM Towing & Rescue logo" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <div className="font-black">Indy CM Towing & Rescue</div>
              <div className="text-sm text-slate-300">Towing and vehicle transport</div>
            </div>
          </div>
          <p className="mt-5 leading-7 text-slate-300">
            Professional flatbed towing in Indianapolis and nearby Indiana communities. Se habla espanol.
          </p>
        </div>
        <div>
          <h2 className="font-black">Contact</h2>
          <div className="mt-4 space-y-3 text-slate-300">
            <a className="flex items-center gap-2 hover:text-white" href="tel:3179560975">
              <Phone className="h-4 w-4 text-rescue-blue" />
              317-956-0975
            </a>
            <a className="flex items-center gap-2 hover:text-white" href="tel:3174415776">
              <Phone className="h-4 w-4 text-rescue-blue" />
              317-441-5776
            </a>
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-rescue-blue" />
              Available 24/7
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rescue-blue" />
              Indianapolis, Indiana
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-black">Pages</h2>
          <div className="mt-4 grid gap-3 text-slate-300">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-sm text-slate-400 sm:px-6 lg:px-8">
        &copy; {new Date().getFullYear()} Indy CM Towing & Rescue. All rights reserved.
      </div>
    </footer>
  );
}
