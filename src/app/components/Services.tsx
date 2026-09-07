import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    image: "/images/hair-spa.webp",
    title: "Hair Care",
    description:
      "Thoughtful haircuts, styling, spa treatments and care for healthy, beautiful hair.",
  },
  {
    number: "02",
    image: "/images/skin-care.webp",
    title: "Skin Care",
    description:
      "Relaxing facials, cleanups and skincare treatments for a fresh natural glow.",
  },
  {
    number: "03",
    image: "/images/makeup.png",
    title: "Makeup",
    description:
      "Elegant makeup looks created for celebrations, parties and special occasions.",
  },
  
  {
    number: "04",
    image: "/images/bridal-makeup.png",
    title: "Bridal Beauty",
    description:
      "Complete bridal beauty services designed to make your most special moments memorable.",
  },
  {
    number: "05",
    image: "/images/threading-waxing.jpg",
    title: "Threading & Waxing",
    description:
      "Gentle grooming services with attention to comfort, precision and beautiful results.",
  },
  {
  number: "06",
  image: "/images/saree-draping.jpg",
  title: "Saree Draping",
  description:
    "Elegant and professional saree draping to complete your look for weddings, functions and special occasions.",
},
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl tulip-reveal">
          {/* Section Heading */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
                OUR SERVICES
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2f2727] sm:text-5xl lg:text-6xl">
                Beauty care,
                <span className="block italic text-[#b98282]">
                  made for you.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#806969] lg:pb-1">
              From everyday self-care to your most special occasions, discover
              beauty services designed around you.
            </p>
          </div>

          {/* Service Cards */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service, index) => (
                <Reveal key={service.number} delay={index * 100}>
              <article
                key={service.number}
                className="group overflow-hidden rounded-[2rem] border border-[#ead9d5] bg-[#f8f1ee] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6b4a4a]/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f2727]/35 via-transparent to-transparent" />

                  {/* Service number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-[#6b4a4a] shadow-sm backdrop-blur-sm">
                    {service.number}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <h3 className="font-serif text-2xl text-[#2f2727]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#806969]">
                    {service.description}
                  </p>

                  <a
                    href="#appointment"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b98282] transition-all duration-300 group-hover:gap-3 group-hover:text-[#6b4a4a]"
                  >
                    Book this service
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[2rem] bg-[#f8f1ee] px-7 py-8 text-center sm:px-10 lg:flex-row lg:text-left">
            <div>
              <p className="font-serif text-2xl text-[#2f2727]">
                Not sure what you need?
              </p>

              <p className="mt-2 text-sm text-[#806969]">
                Talk to us and we'll help you choose the right service.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-full border border-[#b98282] px-7 py-3 text-sm font-semibold text-[#6b4a4a] transition duration-300 hover:bg-[#b98282] hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
