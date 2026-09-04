import Image from "next/image";

const CARDS = [
  {
    type: "gartner",
    title: "See why Zoom is a Leader in the 2026 Gartner® Magic Quadrant™ for UCaaS.",
    cta: "Read the report",
    bg: "bg-zoom-navy",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/gartner-2026-mobile.webp",
  },
  {
    type: "voice",
    title:
      "Zoom recognized in the 2026 Gartner Voice of the Customer for CCaaS.",
    cta: "Explore the report",
    bg: "bg-white",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/Zoom-recognized-2026.webp",
  },
  {
    type: "frost",
    title: "See how Zoom leads in the Frost Radar™ for UCaaS.",
    cta: "Read the report",
    bg: "bg-white",
    image:
      "https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/forrester-block-img.webp",
  },
];

export default function RecognitionCards() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.type}
              className={`relative rounded-2xl overflow-hidden ${
                card.bg === "bg-zoom-navy" ? "bg-zoom-navy" : "bg-white border border-gray-200"
              } min-h-[320px] flex flex-col`}
            >
              {card.type === "gartner" ? (
                <div className="p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-4">
                      <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
                        Gartner
                      </span>
                      <div className="text-white text-3xl font-bold mt-1">
                        LEADER
                      </div>
                      <div className="text-white/80 text-sm mt-1">
                        7th YEAR IN A ROW
                      </div>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mt-6">
                      {card.title}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block mt-6 px-5 py-2.5 text-sm font-medium rounded-lg bg-zoom-blue text-white hover:bg-blue-700 transition-colors w-fit"
                  >
                    {card.cta}
                  </a>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="relative h-[200px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <p className="text-zoom-dark text-sm leading-relaxed">
                      {card.title}
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 px-5 py-2.5 text-sm font-medium rounded-lg bg-zoom-blue text-white hover:bg-blue-700 transition-colors w-fit"
                    >
                      {card.cta}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
