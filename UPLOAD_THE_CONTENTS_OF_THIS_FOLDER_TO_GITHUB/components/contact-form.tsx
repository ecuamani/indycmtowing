"use client";

import type { FormEvent } from "react";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      "Tow request for Indy CM Towing & Rescue",
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Preferred language: ${formData.get("language") || ""}`,
      `Vehicle: ${formData.get("vehicle") || ""}`,
      `Pickup: ${formData.get("pickup") || ""}`,
      `Drop-off: ${formData.get("dropoff") || ""}`,
      `Situation: ${formData.get("message") || ""}`
    ];

    window.location.href = `sms:3179560975?&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-black text-ink">Send tow details</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        This prepares a text message with your information. For immediate dispatch, call directly.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Name</span>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="name" type="text" autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Phone</span>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Preferred language</span>
          <select className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="language" defaultValue="English">
            <option>English</option>
            <option>Spanish</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Vehicle</span>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="vehicle" type="text" placeholder="Year, make, model" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-bold text-slate-700">Pickup location</span>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="pickup" type="text" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-bold text-slate-700">Drop-off location</span>
          <input className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="dropoff" type="text" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-bold text-slate-700">Situation</span>
          <textarea className="mt-2 min-h-32 w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-rescue-blue focus:ring-2" name="message" placeholder="Accident, breakdown, no start, transport, etc." />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-rescue-blue px-5 py-4 text-base font-black text-white transition hover:bg-blue-700 sm:w-auto"
      >
        Prepare Text Message
      </button>
    </form>
  );
}
