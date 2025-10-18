import { TrendingUp, Users, Phone, BarChart3 } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Contractors Served",
      description: "Hardscaping businesses transformed",
    },
    {
      icon: TrendingUp,
      value: "2M+",
      label: "Leads Generated",
      description: "Qualified leads delivered to clients",
    },
    {
      icon: Phone,
      value: "450K+",
      label: "Phone Calls Tracked",
      description: "Conversations with ready buyers",
    },
    {
      icon: BarChart3,
      value: "95%",
      label: "Client Retention",
      description: "Contractors who stay year after year",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Our Track Record Speaks for Itself
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Trusted by hundreds of hardscaping contractors nationwide
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center"
                data-testid={`stat-card-${index}`}
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-transform group-hover:scale-110" data-testid={`icon-stat-${index}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="font-display text-4xl font-bold text-accent sm:text-5xl" data-testid={`value-stat-${index}`}>
                  {stat.value}
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-primary-foreground" data-testid={`label-stat-${index}`}>
                  {stat.label}
                </div>
                <div className="mt-1 text-sm text-primary-foreground/80" data-testid={`description-stat-${index}`}>
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
