import Image from "next/image";
import { BadgeCheck } from "lucide-react";

export function TruckScene() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 bg-ink shadow-glow sm:min-h-[560px] lg:min-h-[620px]">
      <Image
        src="/assets/tow-truck-night.jpeg"
        alt="Indy CM Towing & Rescue tow truck at night"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/15" />
      <div className="absolute left-5 top-5 rounded-lg bg-white/95 p-4 text-ink shadow-lg">
        <div className="flex items-center gap-2 text-sm font-black">
          <BadgeCheck className="h-5 w-5 text-rescue-blue" />
          Real Indy CM truck
        </div>
        <div className="mt-1 text-xs font-semibold text-slate-500">Indianapolis - 24/7</div>
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/15 bg-black/55 p-4 backdrop-blur">
        <div className="text-sm font-black text-white">Flatbed towing services</div>
        <div className="mt-1 text-xs font-semibold text-slate-300">Call direct for fast towing in Indianapolis.</div>
      </div>
    </div>
  );
}
