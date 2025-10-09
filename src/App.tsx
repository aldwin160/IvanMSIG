import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Pricelist } from "./components/Pricelist";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Pricelist />
      </main>

   {/*      
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact /> 
      <Footer />*/}
    </div>
  );
}