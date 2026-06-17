import Link from "next/link";
import Image from "next/image";
import { Clock3, Languages, ShieldCheck, Star, Truck, Wrench } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { ActionGallery } from "@/components/action-gallery";
import { FaqSection } from "@/components/faq-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SectionHeading } from "@/components/section-heading";
import { TruckScene } from "@/components/truck-scene";

const stats = [
  { label: "Availability", value: "24/7" },
  { label: "Language", value: "English / Spanish" },
  { label: "Dispatch", value: "Call direct" }
];

const trust = [
  {
    icon: Clock3,
    title: "Available 24/7",
    text: "Ready for breakdowns, accident pickups, late-night calls, and scheduled vehicle moves."
  },
  {
    icon: ShieldCheck,
    title: "Careful handling",
    text: "Flatbed towing with attention to secure loading, safe transport, and clear communication."
  },
  {
    icon: Languages,
    title: "English and Spanish",
    text: "Helpful service for English- and Spanish-speaking customers across Central Indiana."
  }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,102,255,0.25),transparent_34%),linear-gradient(135deg,#070b12_0%,#071b39_55%,#0a0f18_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-steel">
              <Clock3 className="h-4 w-4 text-rescue-blue" />
              24/7 towing service - Se habla espanol
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Indy CM Towing & Rescue
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Reliable flatbed towing in Indianapolis and nearby Indiana communities. Call direct for fast help, clear pricing, and careful vehicle transport.
            </p>
            <div className="mt-5 flex w-fit items-center gap-3 rounded-lg border border-rescue-blue/40 bg-rescue-blue/15 px-4 py-3 text-sm font-bold text-white">
              <Languages className="h-5 w-5 text-rescue-blue" />
              Spanish-speaking support available for customers who prefer it.
            </div>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <CallButton phone="317-956-0975" label="Call 317-956-0975" size="lg" />
              <CallButton phone="317-441-5776" label="Call 317-441-5776" size="lg" variant="secondary" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur">
              {stats.map((item) => (
                <div key={item.label} className="px-2 py-3">
                  <div className="text-sm font-semibold text-rescue-blue">{item.value}</div>
                  <div className="mt-1 text-xs text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <TruckScene />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why drivers call"
            title="Professional help when your vehicle needs to move"
            text="From the first call to final drop-off, the focus is simple: answer quickly, communicate clearly, and move your vehicle with care."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {trust.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-rescue-light text-rescue-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Towing services"
              title="Flatbed towing for everyday situations"
              text="Call for disabled vehicles, accident pickups, local transport, and after-hours towing."
            />
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-rescue-navy"
            >
              <Truck className="h-4 w-4" />
              View towing services
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Flatbed towing", "Accident pickups", "Vehicle transport", "After-hours calls"].map((service) => (
              <div key={service} className="rounded-lg border border-slate-200 bg-white p-5">
                <Wrench className="h-5 w-5 text-rescue-blue" />
                <h3 className="mt-4 font-bold text-ink">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Direct phone support for timing, pickup details, and safe transport.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our truck"
            title="Real equipment. Real service."
            text="Photos from recent towing work around Indianapolis and nearby communities."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <Image src="/assets/tow-truck-day.jpeg" alt="Indy CM tow truck in a parking lot" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm">
              <Image src="/assets/tow-truck-night.jpeg" alt="Indy CM tow truck towing a vehicle at night" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <ActionGallery />

      <FaqSection />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 rounded-lg border border-slate-200 bg-ink p-6 text-white shadow-glow md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rescue-blue">
                <Star className="h-4 w-4" />
                Need a tow truck in Indianapolis?
              </div>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">Call Indy CM Towing & Rescue now.</h2>
              <p className="mt-2 text-slate-300">Direct phone support, 24/7 availability, and Spanish-speaking help when requested.</p>
            </div>
            <div className="grid gap-3 sm:flex">
              <CallButton phone="317-956-0975" label="317-956-0975" />
              <CallButton phone="317-441-5776" label="317-441-5776" variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
