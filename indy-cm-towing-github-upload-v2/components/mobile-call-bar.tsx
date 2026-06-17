import { Phone } from "lucide-react";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink p-3 shadow-2xl sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href="tel:3179560975" className="flex items-center justify-center gap-2 rounded-lg bg-rescue-blue px-3 py-3 text-sm font-black text-white">
          <Phone className="h-4 w-4" />
          317-956-0975
        </a>
        <a href="tel:3174415776" className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-3 text-sm font-black text-ink">
          <Phone className="h-4 w-4" />
          317-441-5776
        </a>
      </div>
    </div>
  );
}
