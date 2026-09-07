"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Reveal from "./Reveal";

export default function Appointment() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [customerName, setCustomerName] = useState("");

  const services = [
    "Hair Care",
    "Skin Care",
    "Makeup",
    "Nail Care",
    "Bridal Beauty",
    "Threading & Waxing",
  ];

  const times = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleAppointment = () => {
    if (!selectedService || !selectedDate || !selectedTime) {
      alert("Please enter your name and select a service, date and time.");
      return;
    }

    const formattedDate = selectedDate.toLocaleDateString("en-GB");

    const message = `Hi Tulip Beauty Parlour 🌷

I'd like to book an appointment.

Name: ${customerName}
Service: ${selectedService}
Date: ${formattedDate}
Time: ${selectedTime}

Please let me know if this slot is available. Thank you!`;

    const whatsappNumber = "918754644525";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="appointment" className="bg-white px-6 py-24 sm:py-28 lg:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.35em] text-[#b98282] sm:text-sm">
              BOOK YOUR VISIT
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2f2727] sm:text-5xl lg:text-6xl">
              Your beauty moment
              <span className="block italic text-[#b98282]">starts here.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#806969] sm:text-base">
              Choose your service, date and preferred time.
              <br className="hidden sm:block" />
              We'll get in touch to confirm your appointment.
            </p>
          </div>

          {/* Booking Card */}
          <div className="mt-14 overflow-visible rounded-[2.5rem] border border-[#ead9d5] bg-[#f8f1ee] p-6 shadow-sm sm:p-10 lg:p-12">
            {/* Customer Details */}
            <div className="my-10 h-px bg-[#dfc9c5]" />

            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b98282] text-xs font-semibold text-white">
                  01
                </span>

                <div>
                  <p className="font-serif text-xl text-[#2f2727]">
                    Your details
                  </p>

                  <p className="mt-1 text-xs text-[#806969]">
                    Tell us who we're booking for
                  </p>
                </div>
              </div>

              <div className="mt-6 max-w-md">
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="h-14 w-full rounded-2xl border border-[#ead9d5] bg-white px-5 text-sm text-[#6b4a4a] outline-none transition placeholder:text-[#b49b9b] focus:border-[#b98282] focus:ring-4 focus:ring-[#b98282]/10"
                />
              </div>
            </div>
            <div className="my-10 h-px bg-[#dfc9c5]" />

            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b98282] text-xs font-semibold text-white">
                  02
                </span>

                <div>
                  <p className="font-serif text-xl text-[#2f2727]">
                    Choose your service
                  </p>

                  <p className="mt-1 text-xs text-[#806969]">
                    What would you like to book?
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`rounded-2xl border px-5 py-4 text-left text-sm transition duration-300 ${
                      selectedService === service
                        ? "border-[#b98282] bg-[#b98282] text-white shadow-md"
                        : "border-[#ead9d5] bg-white text-[#6b4a4a] hover:-translate-y-0.5 hover:border-[#b98282]"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-10 h-px bg-[#dfc9c5]" />

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b98282] text-xs font-semibold text-white">
                  03
                </span>

                <div>
                  <p className="font-serif text-xl text-[#2f2727]">
                    Select a date
                  </p>

                  <p className="mt-1 text-xs text-[#806969]">
                    Pick your preferred day
                  </p>
                </div>
              </div>

              {/* Custom Date Picker */}
              <div className="mt-6 max-w-sm">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  minDate={new Date()}
                  dateFormat="dd - MM - yyyy"
                  placeholderText="Select a date"
                  className="tulip-datepicker-input"
                  calendarClassName="tulip-calendar"
                  wrapperClassName="tulip-datepicker-wrapper"
                  showPopperArrow={false}
                />
              </div>
            </div>

            <div className="my-10 h-px bg-[#dfc9c5]" />

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b98282] text-xs font-semibold text-white">
                  04
                </span>

                <div>
                  <p className="font-serif text-xl text-[#2f2727]">
                    Choose a time
                  </p>

                  <p className="mt-1 text-xs text-[#806969]">
                    Select a convenient time for you
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {times.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-2xl border px-4 py-3.5 text-sm transition duration-300 ${
                      selectedTime === time
                        ? "border-[#b98282] bg-[#b98282] text-white shadow-md"
                        : "border-[#ead9d5] bg-white text-[#6b4a4a] hover:-translate-y-0.5 hover:border-[#b98282]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-10 rounded-2xl border border-[#ead9d5] bg-white/70 p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#b98282]">
                YOUR SELECTION
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm text-[#6b4a4a] sm:flex-row sm:flex-wrap sm:gap-x-6">
                <span>{customerName || "No name entered"}</span>

                <span className="hidden text-[#d5b9b5] sm:block">•</span>
                <span>{customerName || "No service selected"}</span>

                <span className="hidden text-[#d5b9b5] sm:block">•</span>

                <span>
                  {selectedDate
                    ? selectedDate.toLocaleDateString("en-GB")
                    : "No date selected"}
                </span>

                <span className="hidden text-[#d5b9b5] sm:block">•</span>

                <span>{selectedTime || "No time selected"}</span>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={handleAppointment}
                className="rounded-full bg-[#b98282] px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-[#b98282]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#6b4a4a]"
              >
                Request Appointment
              </button>

              <p className="mt-4 text-xs text-[#806969]">
                Appointment will be confirmed by our team.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
