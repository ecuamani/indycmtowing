import type { Metadata } from "next";
import { Clock3, Languages, MapPin, Phone } from "lucide-react";
import { CallButton } from "@/components/call-button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Indy CM Towing & Rescue for towing, vehicle transport, and 24/7 dispatch support."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call for towing help"
        text="For the fastest response, call direct. Spanish-speaking support is available."
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 p-6">
              <Phone className="h-7 w-7 text-rescue-blue" />
              <h2 className="mt-4 text-2xl font-black text-ink">Direct dispatch</h2>
              <p className="mt-3 leading-7 text-slate-600">Available 24/7 for towing and vehicle transport.</p>
              <div className="mt-6 grid gap-3">
                <CallButton phone="317-956-0975" label="Call 317-956-0975" />
                <CallButton phone="317-441-5776" label="Call 317-441-5776" variant="dark" />
              </div>
            </div>
            <div className="rounded-lg bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-slate-700">
                <Clock3 className="h-5 w-5 text-rescue-blue" />
                <span className="font-semibold">Open 24/7</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-700">
                <MapPin className="h-5 w-5 text-rescue-blue" />
                <span className="font-semibold">Indianapolis, Indiana</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-700">
                <Languages className="h-5 w-5 text-rescue-blue" />
                <span className="font-semibold">Se habla espanol</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
