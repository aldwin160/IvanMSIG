import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  const services = [
    { name: "Asuransi Jiwa", href: "#services" },
    { name: "Asuransi Kesehatan", href: "#services" }
  ];

  const resources = [
    { name: "Insurance Calculator", href: "#" },
    { name: "Claims Center", href: "#" },
    { name: "Payment Center", href: "#" },
    { name: "Policy Documents", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl">Ivan Raharja - MSIG</h3>
            <p className="text-primary-foreground/80 text-sm">
              Spesialis perlindungan dan manajemen risiko. Berkomitmen membangun hubungan jangka panjang dengan nasabah melalui solusi asuransi yang tepat.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="secondary" className="w-8 h-8 p-0" asChild>
                <a href="https://www.linkedin.com/in/ivan-raharja-248700a0/?originalSubdomain=id">
                  <Linkedin className="w-4 h-4"/>
                </a>
              </Button>
              <Button size="sm" variant="secondary" className="w-8 h-8 p-0" asChild>
                <a href="https://www.instagram.com/ivanra1028/?hl=en">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Insurance Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>0877-8055-7401</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4" />
                <span>ivanraha1028@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Kelapa Gading <br />
                Jakarta Utara <br /> 
                Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2025 Ivan Raharja - MSIG. All rights reserved.
          </div>
          {/* <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
              License Information
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}