import type { Metadata } from "next";
import { Car, Clock3, Phone, ShieldCheck, Truck } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Towing Services",
  description:
    "Flatbed towing, accident pickups, vehicle transport, and after-hours towing from Indy CM Towing & Rescue."
};

const services = [
  "Flatbed towing",
  "Accident pickups",
  "Disabled vehicle towing",
  "Local vehicle transport",
  "After-hours calls",
  "English and Spanish support"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Towing services"
        title="Flatbed towing and vehicle transport"
        text="Professional towing for breakdowns, accident pickups, and local vehicle moves across Indianapolis and nearby communities."
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Truck className="h-10 w-10 text-rescue-blue" />
              <h2 className="mt-5 text-2xl font-black text-ink">Built for fast, careful response</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Whether your vehicle will not start, was involved in an accident, or needs to be moved safely, call for direct dispatch support and clear next steps.
              </p>
              <div className="mt-6 grid gap-3">
                <CallButton phone="317-956-0975" label="Call 317-956-0975" />
                <CallButton phone="317-441-5776" label="Call 317-441-5776" variant="dark" />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-lg border border-slate-200 p-5">
                <ShieldCheck className="h-5 w-5 text-rescue-blue" />
                <h3 className="mt-4 font-bold text-ink">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: Clock3, label: "24/7 availability", text: "Day, night, weekend, and holiday calls." },
            { icon: Phone, label: "Direct phone support", text: "Speak with the towing team before dispatch." },
            { icon: Car, label: "Vehicle care", text: "Professional handling from loading to drop-off." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <Icon className="h-7 w-7 text-rescue-blue" />
                <h3 className="mt-4 text-xl font-bold">{item.label}</h3>
                <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
