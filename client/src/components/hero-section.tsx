import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Premium_hardscaping_patio_project_9a51cd7a.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustIndicators = [
    "500+ Hardscaping Contractors Served",
    "95% Client Retention Rate",
    "Industry-Specialized Expertise",
  ];

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/70" />
        <img
          src={heroImage}
          alt="Professional hardscaping patio installation showcasing premium stone work"
          className="h-full w-full object-cover"
          data-testid="img-hero-background"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl" data-testid="heading-hero">
            Dominate Local Search for Your{" "}
            <span className="text-accent">Hardscaping Business</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl" data-testid="text-hero-subtitle">
            Specialized digital marketing solutions that drive qualified leads to
            hardscaping contractors. Expert Local SEO, Google Business Profile
            optimization, and proven lead generation strategies built exclusively for
            the hardscaping industry.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent-border group min-w-[200px]"
              data-testid="button-hero-contact"
            >
              Get Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="min-w-[200px] border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              data-testid="button-hero-services"
            >
              View Our Services
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
                data-testid={`text-trust-indicator-${index}`}
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
