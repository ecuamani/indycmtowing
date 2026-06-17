import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jose",
    quote:
      "Fast, respectful, and easy to communicate with. They made a stressful situation much easier."
  },
  {
    name: "Cayden",
    quote:
      "They showed up professionally, handled the vehicle with care, and kept everything simple from start to finish."
  },
  {
    name: "Javier",
    quote:
      "Reliable service and good communication. I would recommend Indy CM to anyone who needs a tow."
  },
  {
    name: "Daniel",
    quote:
      "They answered quickly, explained the next steps, and handled the tow the right way."
  },
  {
    name: "Kevin",
    quote:
      "Professional truck, friendly service, and a smooth experience when I needed help. Easy company to trust."
  },
  {
    name: "Raul",
    quote:
      "It helps a lot that they speak Spanish. Good people, dependable service, and they make everyone feel welcome."
  },
  {
    name: "Jessica",
    quote:
      "Very respectful and helpful. They made sure the vehicle was moved safely and kept me updated."
  },
  {
    name: "Brianna",
    quote:
      "I appreciated how quick and clear they were. This is the kind of towing company you want to call."
  }
];

export function ReviewsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="text-sm font-black uppercase tracking-wide text-rescue-blue">Customer reviews</div>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
              Customer feedback
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Clear communication, professional handling, and helpful service when it matters.
            </p>
            <a
              href="https://www.google.com/search?q=Indy+CM+Towing+%26+Rescue+Indianapolis+reviews"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-rescue-navy"
            >
              Leave a Review
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex gap-1 text-rescue-blue" aria-label="Five star review">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-black text-ink">{review.name}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
