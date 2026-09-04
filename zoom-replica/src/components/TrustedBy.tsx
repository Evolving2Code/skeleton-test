const LOGOS = [
  { name: "Walmart", style: "font-bold tracking-tight" },
  { name: "Werner", style: "font-semibold italic" },
  { name: "Moffitt", style: "font-medium" },
  { name: "ExxonMobil", style: "font-bold" },
  { name: "Capital One", style: "font-semibold" },
  { name: "NYT", style: "font-serif font-bold" },
];

const RATINGS = [
  {
    score: "4.5/5",
    reviews: "out of 7.9k+ reviews",
    platform: "Gartner Peer Insights",
    stars: 4.5,
  },
  {
    score: "4.6/5",
    reviews: "out of 54.9k+ reviews",
    platform: "G2",
    stars: 4.5,
  },
  {
    score: "8.5/10",
    reviews: "out of 5.8k+ reviews",
    platform: "TrustRadius",
    stars: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
            star <= Math.floor(rating)
              ? "text-yellow-400"
              : star - 0.5 <= rating
                ? "text-yellow-400"
                : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <h2 className="font-display text-2xl md:text-3xl text-center text-zoom-navy mb-12">
          Trusted by millions. Built for you.
        </h2>

        {/* Logo marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex animate-marquee">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <span
                  className={`text-xl text-gray-400 whitespace-nowrap ${logo.style}`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {RATINGS.map((rating, i) => (
            <div
              key={rating.platform}
              className={`text-center ${
                i > 0 ? "md:border-l md:border-gray-200" : ""
              }`}
            >
              <div className="font-display text-4xl text-zoom-navy mb-2">
                {rating.score}
              </div>
              <StarRating rating={rating.stars} />
              <p className="text-sm text-zoom-gray mt-2">{rating.reviews}</p>
              <p className="text-sm font-medium text-zoom-dark mt-3">
                {rating.platform}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
