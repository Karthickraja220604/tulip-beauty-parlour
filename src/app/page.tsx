import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyTulip from "./components/WhyTulip";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyTulip />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
