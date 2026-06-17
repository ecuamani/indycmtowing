const faqs = [
  {
    question: "Are you available 24/7?",
    answer: "Yes. Call any time for towing, vehicle transport, and after-hours help."
  },
  {
    question: "Do you speak Spanish?",
    answer: "Yes. Spanish-speaking support is available for customers who prefer it."
  },
  {
    question: "What information should I have ready?",
    answer: "Pickup location, drop-off location, vehicle type, and a quick description of what happened."
  },
  {
    question: "Do you tow outside Indianapolis?",
    answer: "Yes. Call with the route details so availability and timing can be confirmed."
  }
];

export function FaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-black uppercase tracking-wide text-rescue-blue">Quick answers</div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Before you call</h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-black text-ink">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
