import Image from "next/image";

const photos = [
  {
    src: "/assets/tow-action-roadside-suv.jpeg",
    alt: "Indy CM Towing & Rescue towing an SUV roadside",
    title: "Roadside towing",
    className: "md:col-span-2"
  },
  {
    src: "/assets/tow-action-black-car.jpeg",
    alt: "Indy CM Towing & Rescue towing a black car",
    title: "Vehicle transport",
    className: ""
  },
  {
    src: "/assets/tow-action-white-van.jpeg",
    alt: "Indy CM Towing & Rescue towing a white work van",
    title: "Work van towing",
    className: ""
  },
  {
    src: "/assets/tow-action-white-suv.jpeg",
    alt: "Indy CM Towing & Rescue towing a white SUV",
    title: "SUV towing",
    className: ""
  },
  {
    src: "/assets/tow-action-night-suv.jpeg",
    alt: "Indy CM Towing & Rescue night towing service",
    title: "Night towing",
    className: "md:col-span-2"
  }
];

export function ActionGallery() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-black uppercase tracking-wide text-rescue-blue">Truck in action</div>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">
            Recent towing work
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Real photos of flatbed towing, vehicle transport, and after-hours calls.
          </p>
        </div>
        <div className="mt-10 grid auto-rows-[320px] gap-4 md:grid-cols-3 lg:auto-rows-[360px]">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                <span className="text-sm font-black text-white">{photo.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
