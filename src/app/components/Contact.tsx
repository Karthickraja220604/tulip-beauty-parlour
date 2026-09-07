import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8f1ee] px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
              GET IN TOUCH
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#2f2727] sm:text-5xl lg:text-6xl">
              We'd love to
              <span className="italic text-[#b98282]"> hear from you.</span>
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Location */}
            <div className="rounded-[2rem] border border-[#ead9d5] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8c7c3]/40 text-xl">
                ♡
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#2f2727]">
                Visit Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#806969]">
                Your beauty, comfort and confidence come first.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=2/149/11,TNHB+1st+Phase,+Wahab+Nagar,+Bayanapalli,+Tamil+Nadu+635002"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-start gap-2 text-sm font-medium leading-6 text-[#b98282] transition hover:text-[#6b4a4a]"
              >
                <span className="mt-1">📍</span>

                <span>
                  2/149/11, TNHB 1st Phase, Wahab Nagar,
                  <br />
                  Bayanapalli, Tamil Nadu 635002
                </span>
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-[2rem] border border-[#ead9d5] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8c7c3]/40 text-xl">
                ✦
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#2f2727]">
                Call Us
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#806969]">
                Have a question or want to book a service?
              </p>

              <a
                href="tel:+918754644252"
                className="mt-4 inline-block text-sm font-medium text-[#b98282] transition hover:text-[#6b4a4a]"
              >
                +91 87546 44252
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-[2rem] border border-[#ead9d5] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8c7c3]/40 text-xl">
                ⏰
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#2f2727]">
                Opening Hours
              </h3>

              <div className="mt-3 space-y-2 text-sm leading-7 text-[#806969]">
                <p>Monday – Saturday</p>
                <p>9:00 AM – 7:00 PM</p>
                <p>Sunday – By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
