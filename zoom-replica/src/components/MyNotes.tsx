import Image from "next/image";

export default function MyNotes() {
  return (
    <section className="py-20 bg-zoom-light">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/My-notes-icon-new.svg"
                alt="My Notes"
                width={24}
                height={24}
              />
              <span className="text-sm font-medium text-zoom-blue">
                My Notes
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-zoom-navy mb-4 leading-tight">
              Your new AI note taker
            </h2>
            <p className="text-zoom-gray text-lg leading-relaxed mb-6">
              Capture every detail from your meetings automatically. My Notes
              uses AI to transcribe, summarize, and organize your conversations
              so you can focus on what matters.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 text-sm font-medium rounded-lg bg-zoom-blue text-white hover:bg-blue-700 transition-colors"
            >
              Learn more
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
            <Image
              src="https://st1.zoom.us/homepage/20260825-1235/primary/dist/assets/zoommedia/MyNotes-mobileimg.webp"
              alt="My Notes interface"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
