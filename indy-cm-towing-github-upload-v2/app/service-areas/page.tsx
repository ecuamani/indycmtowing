import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Towing across Indianapolis and nearby Indiana communities including Frankfort, Kokomo, Bloomington, Lafayette, and surrounding areas."
};

const areas = [
  "Indianapolis",
  "Downtown Indianapolis",
  "Speedway",
  "Beech Grove",
  "Lawrence",
  "Greenwood",
  "Plainfield",
  "Carmel",
  "Fishers",
  "Avon",
  "Noblesville",
  "Westfield",
  "Zionsville",
  "Brownsburg",
  "Frankfort",
  "Kokomo",
  "Bloomington",
  "Lafayette",
  "Muncie"
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Serving Indianapolis and nearby cities"
        text="Available across Indianapolis and surrounding Indiana communities, including Frankfort, Kokomo, Bloomington, Lafayette, and more."
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black text-ink">Call to confirm pickup and drop-off details</h2>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              Service availability can depend on distance, vehicle condition, and timing. Share your pickup location and destination, and the team will confirm the best option.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rescue-light text-rescue-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-bold text-ink">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-slate-50 p-6 md:p-8">
            <h2 className="text-2xl font-black text-ink">Need service outside the list?</h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Call anyway. If the route can be handled safely and professionally, Indy CM Towing & Rescue will let you know what is possible.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CallButton phone="317-956-0975" label="Call 317-956-0975" />
              <CallButton phone="317-441-5776" label="Call 317-441-5776" variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
