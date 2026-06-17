import type { Metadata } from "next";
import { BadgeCheck, HeartHandshake, Languages, MapPin, Truck } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Indy CM Towing & Rescue, a local owner-operated towing company serving Indianapolis and nearby Indiana communities."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A local, owner-operated towing company"
        text="Indy CM Towing & Rescue provides professional towing with direct communication, careful handling, and Spanish-speaking support when requested."
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-ink">Service you can reach directly</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Being stuck, disabled, or waiting after an accident is stressful. Indy CM Towing & Rescue keeps the process straightforward: answer the phone, gather the details, and handle the vehicle with care.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The company serves Indianapolis and nearby communities with 24/7 availability, flatbed towing, and direct phone support.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Se habla espanol. We welcome every driver and are here to help English- and Spanish-speaking customers feel understood when they need towing service.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            {[
              { icon: Truck, label: "Towing focused" },
              { icon: MapPin, label: "Indianapolis local" },
              { icon: Languages, label: "Se habla espanol" },
              { icon: BadgeCheck, label: "Professional service" },
              { icon: HeartHandshake, label: "Owner-operated care" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-4 border-b border-slate-200 py-4 last:border-b-0">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-rescue-blue">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-bold text-ink">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
