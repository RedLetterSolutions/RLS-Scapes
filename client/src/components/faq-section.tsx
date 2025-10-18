import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Most hardscaping contractors see initial improvements within 30-60 days, with significant lead growth by month 3-4. SEO is a longer-term strategy (3-6 months for top rankings), while PPC campaigns can generate leads within days. We provide monthly reports so you can track progress at every stage.",
    },
    {
      question: "Do you work with both residential and commercial hardscaping contractors?",
      answer:
        "Yes! We work with all types of hardscaping businesses—from residential specialists focusing on patios and driveways to commercial contractors handling large-scale projects. Our strategies are customized to your specific target market and project types.",
    },
    {
      question: "What makes your agency different from other marketing companies?",
      answer:
        "We exclusively serve the hardscaping industry, which means we understand your customers, seasonality, project types, and competitive landscape. We know the exact keywords your customers search for, the objections they have, and how to position your services to win more projects. This specialization delivers better results than generic agencies.",
    },
    {
      question: "How much should I budget for hardscaping marketing?",
      answer:
        "Most successful hardscaping contractors invest 5-10% of their revenue in marketing. For a company doing $500K annually, that's $25K-$50K per year. We offer packages starting at $2,000/month that include SEO, Google Business Profile optimization, and reporting. PPC budgets vary based on your market and goals, typically $1,500-$5,000/month in ad spend.",
    },
    {
      question: "Can you help if I'm in a competitive market?",
      answer:
        "Absolutely. Competitive markets require more strategic, comprehensive approaches, but they also represent the biggest opportunities. We've helped contractors rank #1 in highly competitive cities like Phoenix, Denver, and Austin. The key is combining multiple strategies—SEO, PPC, reputation management, and conversion optimization.",
    },
    {
      question: "Do you provide websites for hardscaping contractors?",
      answer:
        "Yes. We build conversion-focused websites specifically designed for hardscaping businesses. These sites showcase your portfolio, include clear calls-to-action, are mobile-optimized, and built for SEO success. If you already have a website, we can optimize it for better performance.",
    },
    {
      question: "How do you track leads and measure ROI?",
      answer:
        "We use advanced call tracking to monitor every phone call, form submission, and chat conversation. You'll see exactly which marketing channels drive leads, the quality of those leads, and your return on investment. Our monthly reports include lead volume, cost per lead, conversion rates, and revenue attribution.",
    },
    {
      question: "What if I only do certain types of hardscaping projects?",
      answer:
        "Perfect! We specialize your marketing to focus on your specific services—whether that's exclusively patios, retaining walls, driveways, or outdoor kitchens. This targeted approach attracts the exact types of projects you want, increasing your close rate and profitability.",
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Common questions from hardscaping contractors about our marketing services
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-6 data-[state=open]:bg-card"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:text-primary hover:no-underline" data-testid={`button-faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
