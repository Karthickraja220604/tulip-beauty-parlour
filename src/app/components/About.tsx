import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-[#f8f1ee] px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
              ABOUT TULIP
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2f2727] sm:text-5xl lg:text-6xl">
              A little care can make
              <span className="block italic text-[#b98282]">
                a beautiful difference.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#6b4a4a] sm:text-base">
              <p>
                Tulip Beauty Parlour is a welcoming beauty space created
                exclusively for women. We believe beauty is not just about
                looking good — it is about feeling confident, comfortable, and
                cared for.
              </p>

              <p>
                From everyday grooming to special occasions, our services are
                designed to give every woman a moment to relax, refresh, and
                leave feeling her best.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#dfc9c5] pt-7">
              <div>
                <p className="font-serif text-3xl text-[#b98282]">Care</p>

                <p className="mt-1 text-xs text-[#806969]">
                  Personal attention
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#b98282]">Beauty</p>

                <p className="mt-1 text-xs text-[#806969]">
                  Thoughtful services
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Outer decorative frame */}
            <div className="absolute -inset-4 rotate-2 rounded-[2.5rem] border border-[#b98282]/20" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#ead8d3] p-7 sm:p-10">
              {/* Inner Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 px-7 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#e8c7c3]/40" />

                <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#e8c7c3]/30" />

                {/* Tulip Logo */}
                <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                  <img
                    src="/images/tulip-logo.png"
                    alt="Tulip Beauty Parlour"
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="relative mt-2 text-[10px] font-semibold tracking-[0.35em] text-[#b98282]">
                  BEAUTY PARLOUR
                </p>

                <div className="relative mx-auto mt-7 h-px w-16 bg-[#b98282]/40" />

                <p className="relative mx-auto mt-6 max-w-sm font-serif text-xl italic leading-8 text-[#6b4a4a]">
                  Where Beauty Blooms
                </p>

                {/* Mini Features */}
                <div className="relative mt-10 grid grid-cols-3 border-t border-[#dfc9c5] pt-7">
                  <div>
                    <p className="font-serif text-lg text-[#b98282]">Care</p>

                    <p className="mt-1 text-[10px] text-[#806969]">Personal</p>
                  </div>

                  <div className="border-x border-[#dfc9c5]">
                    <p className="font-serif text-lg text-[#b98282]">Style</p>

                    <p className="mt-1 text-[10px] text-[#806969]">Elegant</p>
                  </div>

                  <div>
                    <p className="font-serif text-lg text-[#b98282]">Glow</p>

                    <p className="mt-1 text-[10px] text-[#806969]">Confident</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
