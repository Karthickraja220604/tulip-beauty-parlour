export default function Footer() {
  return (
    <footer className="bg-[#2f2727] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-3">

              <span className="text-3xl">
                🌷
              </span>

              <div>
                <p className="font-serif text-2xl">
                  Tulip
                </p>

                <p className="mt-1 text-[9px] tracking-[0.3em] text-[#e8c7c3]">
                  BEAUTY PARLOUR
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              A beautiful space created exclusively for women to relax,
              refresh and feel their best.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">

            <a
              href="#"
              className="transition hover:text-[#e8c7c3]"
            >
              Home
            </a>

            <a
              href="#services"
              className="transition hover:text-[#e8c7c3]"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition hover:text-[#e8c7c3]"
            >
              About
            </a>

            <a
              href="#appointment"
              className="transition hover:text-[#e8c7c3]"
            >
              Appointment
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#e8c7c3]"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex sm:items-center sm:justify-between sm:text-left">

          <p>
            © {new Date().getFullYear()} Tulip Beauty Parlour. All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            Where Beauty Blooms 🌷
          </p>

        </div>

      </div>
    </footer>
  );
}