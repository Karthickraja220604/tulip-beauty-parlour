import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    title: "Ladies Only",
    description:
      "A comfortable and welcoming environment created exclusively for women.",
  },
  {
    number: "02",
    title: "Personalised Care",
    description:
      "We take the time to understand your needs and make every service feel personal.",
  },
  {
    number: "03",
    title: "Quality Experience",
    description:
      "Thoughtful beauty services with attention to detail, comfort and presentation.",
  },
  {
    number: "04",
    title: "Special Moments",
    description:
      "From everyday grooming to bridal beauty, we're here for life's beautiful occasions.",
  },
];

export default function WhyTulip() {
  return (
    <section className="bg-white px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
            WHY TULIP
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2f2727] sm:text-5xl">
            More than beauty,
            <span className="block italic text-[#b98282]">it's your time.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#806969] sm:text-base">
            We want every visit to feel comfortable, personal and worth
            remembering.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.number} delay={index * 100}>
              <div className="group rounded-[2rem] border border-[#ead9d5] bg-[#f8f1ee] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6b4a4a]/10">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl italic text-[#b98282]">
                    {reason.number}
                  </span>

                  <span className="h-px w-12 bg-[#b98282]/30 transition-all duration-300 group-hover:w-16" />
                </div>

                <h3 className="mt-10 font-serif text-2xl text-[#2f2727]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#806969]">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
