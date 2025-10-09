import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShieldPlus, Heart, } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: ShieldPlus,
      title: "Asuransi Kesehatan",
      description: "Perlindungan kesehatan menyeluruh dengan premi terjangkau dan layanan yang selalu siap mendukung.",
      image: "/health-insurance.jpg",
      features: ["Pertanggungan Rawat Inap", "Perawatan Rawat Jalan", "Perlindungan Penyakit Kritis", "Manfaat Pencegahan & Kesehatan"]
    },
    {
      icon: Heart,
      title: "Asuransi Jiwa",
      description: "Perlindungan jiwa menyeluruh dengan premi terjangkau dan kepastian bagi keluarga tercinta.",
      image: "/life-insurance.jpg",
      features: ["Uang Pertanggungan Jiwa", "Perlindungan Penyakit Kritis", "Manfaat Kematian & Cacat Tetap", "Perencanaan Warisan & Keuangan"]
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">Services</Badge>
          <h2 className="mb-6">Solusi Lengkap Produk Asuransi</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Saya siap membantu Anda dengan berbagai pilihan produk asuransi dari perusahaan terpercaya. Komitmen saya adalah memastikan Anda mendapatkan perlindungan terbaik dengan harga yang tetap terjangkau.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {service.title}
                  <Badge variant="secondary">Popular</Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
               {/*} <Button variant="outline" className="w-full">
                  Learn More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}