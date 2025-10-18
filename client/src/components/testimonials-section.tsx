import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Within 6 months, we went from getting maybe 2-3 calls a week to 25+ qualified leads. Our patio installation business has tripled in revenue.",
      author: "Michael Rodriguez",
      role: "Owner",
      company: "Rodriguez Hardscaping",
      location: "Phoenix, AZ",
      projectType: "Patio Installation",
      rating: 5,
      initials: "MR",
    },
    {
      quote:
        "The team understands the hardscaping industry inside and out. They optimized our Google Business Profile and now we're showing up first for retaining wall searches in our area.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "Premier Stone & Design",
      location: "Seattle, WA",
      projectType: "Retaining Walls",
      rating: 5,
      initials: "SC",
    },
    {
      quote:
        "Best ROI we've ever had on marketing. The call tracking showed us exactly where our leads were coming from, and we doubled down on what worked.",
      author: "James Thompson",
      role: "Owner",
      company: "Thompson Outdoor Living",
      location: "Nashville, TN",
      projectType: "Outdoor Living Spaces",
      rating: 5,
      initials: "JT",
    },
    {
      quote:
        "Their SEO expertise is unmatched. We now rank #1 for 'driveway pavers' and related keywords in our city. The lead quality is exceptional.",
      author: "David Martinez",
      role: "Founder",
      company: "Elite Pavers & Walkways",
      location: "Miami, FL",
      projectType: "Driveway & Walkways",
      rating: 5,
      initials: "DM",
    },
    {
      quote:
        "Finally, a marketing agency that gets the hardscaping business. They helped us build a website that showcases our work and converts visitors into customers.",
      author: "Jennifer Walsh",
      role: "Co-Owner",
      company: "Walsh Brothers Hardscaping",
      location: "Boston, MA",
      projectType: "Full Service",
      rating: 5,
      initials: "JW",
    },
    {
      quote:
        "Our phone hasn't stopped ringing since we started working with them. The Google Ads campaigns are incredibly targeted and bring in serious buyers.",
      author: "Robert Kim",
      role: "Owner",
      company: "Kim's Landscape & Hardscape",
      location: "Portland, OR",
      projectType: "Landscape & Hardscape",
      rating: 5,
      initials: "RK",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Hardscaping Contractors Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from contractors who've transformed their businesses with our
            marketing expertise
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all duration-200 hover:shadow-lg hover-elevate"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="p-8">
                <Quote className="mb-4 h-8 w-8 text-accent" data-testid={`icon-quote-${index}`} />
                
                <div className="mb-4 flex gap-1" data-testid={`rating-${index}`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="mb-6 italic text-foreground leading-relaxed" data-testid={`text-quote-${index}`}>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 border-t pt-6">
                  <Avatar className="h-12 w-12" data-testid={`avatar-${index}`}>
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`text-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-role-${index}`}>
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-muted-foreground" data-testid={`text-project-type-${index}`}>
                      {testimonial.location} • {testimonial.projectType}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
