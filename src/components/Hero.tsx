import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/bright-future.jpg"
          alt="Bright Future"
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-4xl md:text-5xl">
            Masa Depan Aman, Hidup Lebih Tenang
          </h1>
          
          <p className="mb-8 text-lg md:text-xl max-w-3xl mx-auto ">
            Saya hadir untuk memberikan solusi asuransi yang tepat dan terjangkau bagi Anda dan keluarga. Karena perlindungan terbaik adalah ketenangan hati.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="https://wa.me/6287780557401?text=Halo!%20Saya%20tertarik%20untuk%20konsultasi%20gratis%20asuransi.">Konsultasi Gratis</a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl mb-2">2+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-2xl mb-2">Agen Asuransi</div>
              <div className="text-muted-foreground">Profesional dan Terpercaya</div>
            </div>
            <div>
              <div className="text-2xl mb-2">Melayani Anda</div>
              <div className="text-muted-foreground">Dimanapun & Kapanpun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}