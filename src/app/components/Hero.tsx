import Reveal from "./Reveal";

const heroImage = "/images/bridal-makeup.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f1ee] pt-24">
      <Reveal className="mx-auto max-w-7xl">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#e8c7c3]/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#e8c7c3]/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-14 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
              BEAUTY • CARE • CONFIDENCE
            </p>

            <h1 className="font-serif text-[3.2rem] leading-[1.05] tracking-tight text-[#2f2727] sm:text-6xl lg:text-[4.7rem]">
              Your Beauty,
              <span className="mt-2 block italic text-[#b98282]">
                Your Moment.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-7 text-[#6b4a4a] sm:text-base sm:leading-8">
              Welcome to Tulip Beauty Parlour — a beautiful space created
              exclusively for women to relax, refresh, and feel their best.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment"
                className="rounded-full bg-[#b98282] px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#b98282]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#6b4a4a]"
              >
                Book Appointment
              </a>

              <a
                href="#services"
                className="rounded-full border border-[#b98282] bg-white/30 px-8 py-3.5 text-center text-sm font-semibold text-[#6b4a4a] transition duration-300 hover:-translate-y-1 hover:bg-[#e8c7c3]/40"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs text-[#806969] sm:text-sm">
              <span>✦ Ladies Only</span>

              <span>✦ Personalised Care</span>

              <span>✦ Beautiful Experience</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[580px]">
            {/* Decorative outer frame */}
            <div className="absolute -inset-3 rotate-2 rounded-[2.5rem] border border-[#b98282]/25 sm:-inset-5" />

            {/* Decorative inner frame */}
            <div className="absolute -inset-1 -rotate-1 rounded-[2.5rem] border border-[#ead9d5] bg-[#ead8d3]/20" />

            {/* Image */}
            <div className="relative h-[430px] overflow-hidden rounded-[2rem] shadow-2xl sm:h-[540px] lg:h-[590px]">
              <img
                src={heroImage}
                alt="Bridal makeup at Tulip Beauty Parlour"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2727]/60 via-transparent to-transparent" />

              {/* Image Caption */}
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">
                <p className="text-[10px] font-semibold tracking-[0.3em] text-white/80 sm:text-xs">
                  TULIP BEAUTY PARLOUR
                </p>

                <p className="mt-2 font-serif text-2xl italic text-white sm:text-3xl">
                  Where Beauty Blooms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden justify-center pb-6 lg:flex">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-[#b98282]"
            aria-label="Scroll to services"
          >
            <span className="text-[10px] tracking-[0.25em]">EXPLORE</span>

            <span className="animate-bounce text-lg">↓</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
