import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Happy Client",
    service: "Beauty Service",
    review:
      "The experience was so comfortable and relaxing. I loved the attention to detail and the final result.",
  },
  {
    name: "Happy Client",
    service: "Bridal Beauty",
    review:
      "Everything felt personal and well taken care of. I felt confident and beautiful for my special occasion.",
  },
  {
    name: "Happy Client",
    service: "Skin Care",
    review:
      "A lovely experience from start to finish. The service was gentle, professional and exactly what I needed.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f8f1ee] px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
              CLIENT LOVE
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#2f2727] sm:text-5xl">
              Kind words from our
              <span className="block italic text-[#b98282]">
                beautiful clients.
              </span>
            </h2>
          </div>

          {/* Testimonials */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-[#ead9d5] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-xl tracking-[0.2em] text-[#b98282]">
                  ★★★★★
                </div>

                <p className="mt-6 text-sm leading-7 text-[#6b4a4a]">
                  “{testimonial.review}”
                </p>

                <div className="mt-7 border-t border-[#ead9d5] pt-5">
                  <p className="font-serif text-lg text-[#2f2727]">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-xs tracking-wide text-[#b98282]">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
