import { Award, Target, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Industry-Specialized",
      description:
        "We exclusively focus on hardscaping contractors, understanding your unique challenges, customer journey, and competitive landscape.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description:
        "Every strategy is built around measurable ROI. We track leads, calls, conversions, and revenue to ensure your marketing investment pays off.",
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description:
        "We become an extension of your team, working collaboratively to understand your goals and craft custom strategies that fit your business.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "With 500+ contractors served and millions of leads generated, we have the experience and expertise to grow your hardscaping business.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Your Hardscaping Marketing Experts
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Born from <span className="font-semibold text-foreground">Red Letter Solutions</span>, 
                we're a specialized division dedicated exclusively to helping hardscaping 
                contractors dominate their local markets through strategic digital marketing.
              </p>
              <p>
                Unlike generic marketing agencies, we live and breathe the hardscaping 
                industry. We understand that selling patios isn't the same as selling 
                software, and that your customers make buying decisions differently than 
                other industries.
              </p>
              <p>
                Our team combines deep expertise in Local SEO, Google Business Profile 
                optimization, PPC advertising, and conversion optimization with real-world 
                knowledge of the hardscaping business. We know your customers are searching 
                for "patio installation near me" and "retaining wall contractors," and we 
                know exactly how to make sure they find you first.
              </p>
              <p className="font-semibold text-foreground">
                Whether you specialize in patios, driveways, retaining walls, walkways, or 
                full outdoor living spaces—we have the proven strategies to fill your pipeline 
                with qualified leads.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow"
                  data-testid={`value-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
