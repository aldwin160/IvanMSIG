import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4">
            <img src="/ivan-profile.png" className="w-12 m-2 rounded-lg"></img>
            <div className="flex flex-col justify-center">
              <h1 className="text-primary">Ivan Raharja</h1>
              <span className="text-muted-foreground">
                MSIG Insurance Partner
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                    <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                    <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
                  <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
                    <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a> */}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-lg">0877-8055-7401</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 " />
                <span className="text-lg">ivanraha1028@gmail.com</span>
              </div>
            </div>
            <Button size="lg" className="px-3" asChild>
              <a href="https://wa.me/6287780557401?text=Halo!%20Saya%20tertarik%20untuk%20konsultasi%20gratis%20asuransi.">
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
