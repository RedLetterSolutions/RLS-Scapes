import { Search, MapPin, Phone, TrendingUp, BarChart3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Local SEO for Hardscaping",
      description:
        "Dominate local search results with SEO strategies tailored specifically for hardscaping contractors. We optimize your website and content to rank for high-intent keywords like 'patio installation near me' and 'retaining wall contractor.'",
    },
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      description:
        "Maximize your visibility in Google Maps and local pack results. We optimize your GBP with compelling descriptions, strategic keywords, regular posts, and professional photos of your hardscaping projects.",
    },
    {
      icon: Phone,
      title: "Call Tracking & Analytics",
      description:
        "Know exactly which marketing channels drive phone calls from ready-to-buy customers. Our advanced call tracking system provides detailed attribution so you can invest in what works.",
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Campaigns",
      description:
        "Generate qualified leads consistently with targeted advertising campaigns on Google and Facebook. We craft campaigns that speak directly to homeowners planning patios, walkways, and retaining walls.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics & Reporting",
      description:
        "Get transparent, detailed reports on your marketing performance. Track leads, conversions, ROI, and website traffic with custom dashboards built for hardscaping business owners.",
    },
    {
      icon: Users,
      title: "Website Design & Development",
      description:
        "Professional, conversion-focused websites that showcase your hardscaping portfolio. Mobile-optimized designs that turn visitors into leads with clear calls-to-action and stunning project galleries.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Specialized Services for{" "}
            <span className="text-primary">Hardscaping Contractors</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive digital marketing solutions designed exclusively for the
            hardscaping industry
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-visible transition-all duration-200 hover:shadow-lg hover-elevate"
                data-testid={`service-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground" data-testid={`icon-service-${index}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-foreground" data-testid={`heading-service-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
