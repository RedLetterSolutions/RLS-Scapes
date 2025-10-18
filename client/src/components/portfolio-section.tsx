import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PortfolioSection() {
  const caseStudies = [
    {
      clientName: "Elite Patios & Walkways",
      location: "Austin, TX",
      service: "Local SEO + Google Ads",
      results: [
        { metric: "+215%", label: "Website Traffic" },
        { metric: "+180%", label: "Lead Volume" },
        { metric: "3.2x", label: "ROI" },
      ],
      description:
        "Transformed their online presence from page 3 to dominating the first page for 'patio installation Austin' and related keywords. Generated 847 qualified leads in 12 months.",
      industry: "Residential Hardscaping",
    },
    {
      clientName: "Precision Retaining Walls",
      location: "Denver, CO",
      service: "GMB Optimization + Content Marketing",
      results: [
        { metric: "+340%", label: "Google Maps Views" },
        { metric: "+195%", label: "Phone Calls" },
        { metric: "#1", label: "Local Pack Ranking" },
      ],
      description:
        "Achieved top 3 rankings for all major retaining wall keywords in Denver metro. Phone call volume increased from 12 to 35+ per week within 6 months.",
      industry: "Commercial & Residential",
    },
    {
      clientName: "Heritage Stone & Design",
      location: "Charlotte, NC",
      service: "Full Digital Marketing",
      results: [
        { metric: "+425%", label: "Organic Leads" },
        { metric: "+265%", label: "Revenue Growth" },
        { metric: "92%", label: "Client Retention" },
      ],
      description:
        "Complete digital transformation including website redesign, SEO, PPC, and social media. Grew from a team of 3 to 12 installers in 18 months.",
      industry: "High-End Residential",
    },
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proven Results for{" "}
            <span className="text-primary">Hardscaping Businesses</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real case studies from hardscaping contractors who transformed their
            business with our marketing strategies
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-200 hover:shadow-xl hover-elevate"
              data-testid={`case-study-${index}`}
            >
              <div className="h-2 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
              <CardContent className="p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground" data-testid={`heading-case-study-${index}`}>
                      {study.clientName}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-location-${index}`}>{study.location}</p>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap" data-testid={`badge-industry-${index}`}>
                    {study.industry}
                  </Badge>
                </div>

                <div className="mb-6">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {study.service}
                  </Badge>
                </div>

                <p className="mb-6 text-foreground leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 rounded-lg bg-muted/50 p-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center" data-testid={`metric-${index}-${resultIndex}`}>
                      <div className="font-display text-2xl font-bold text-accent">
                        {result.metric}
                      </div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="mt-6 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                  data-testid={`button-view-case-study-${index}`}
                >
                  View Full Case Study
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold">
                Ready to See Similar Results?
              </h3>
              <p className="mt-2 text-primary-foreground/90">
                Get your free digital marketing audit and discover your growth
                potential
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all hover:bg-accent/90"
                data-testid="button-get-audit"
              >
                Get Your Free Audit
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
