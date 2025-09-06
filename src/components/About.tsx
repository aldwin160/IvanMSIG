import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Shield, Clock } from "lucide-react";

export function About() {
  const achievements = [
    { icon: Award, title: "MSIG Official Partner", description: "Agen sekaligus konsultan asuransi resmi dari MSIG" },
    { icon: Users, title: "Client-Focused", description: "Dedikasi menjaga hubungan jangka panjang dengan klien" },
    { icon: Shield, title: "Trusted Advisor", description: "Berkomitmen memberikan yang terbaik untuk anda dan keluarga" },
    { icon: Clock, title: "24/7 Support", description: "Ada untuk Anda, di setiap waktu dan keadaan." }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="mb-6">Your Trusted Insurance Partner</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Saya ingin setiap orang bisa merasa tenang dalam menjalani hidup. Melalui asuransi yang tepat dan pelayanan yang jujur, saya berkomitmen mendampingi Anda dan keluarga agar selalu terlindungi."
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8">
              <ImageWithFallback
                src="/ivan-profile.png"
                alt="Ivan Raharja - Insurance Agent"
                className="w-70 h-70 object-cover rounded-lg object-top self-center"
              />
              <div className="text-center">
                <h3 className="mb-2">Ivan Raharja</h3>
                <p className="text-muted-foreground mb-4">MSIG Insurance Agent & Consultant</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Asuransi Kesehatan</Badge>
                  <Badge variant="secondary">Asuransi Jiwa</Badge>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="mb-4">Mengapa Memilih Saya?</h3>
              <p className="text-muted-foreground mb-6">
                Saya percaya setiap klien punya kebutuhan unik. Karena itu, saya selalu mendengarkan lebih dulu sebelum memberikan solusi.
                Tujuannya untuk memastikan Anda mendapatkan perlindungan yang tepat dengan harga yang sesuai.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}