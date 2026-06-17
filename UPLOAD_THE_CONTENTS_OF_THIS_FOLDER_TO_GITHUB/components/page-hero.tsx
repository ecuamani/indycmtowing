type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-black uppercase tracking-wide text-rescue-blue">{eyebrow}</div>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
        </div>
      </div>
    </section>
  );
}
