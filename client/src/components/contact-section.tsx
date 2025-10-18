import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertLeadSchema, insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const { toast } = useToast();

  const leadForm = useForm<z.infer<typeof insertLeadSchema>>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      projectType: "",
      budgetRange: "",
      timeline: "",
      message: "",
    },
  });

  const contactForm = useForm<z.infer<typeof insertContactSchema>>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitLeadMutation = useMutation({
    mutationFn: async (data: z.infer<typeof insertLeadSchema>) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      setLeadSubmitted(true);
      leadForm.reset();
      setTimeout(() => setLeadSubmitted(false), 10000);
      toast({
        title: "Success!",
        description: "We've received your information and will contact you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error submitting your information. Please try again.",
      });
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: z.infer<typeof insertContactSchema>) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      setContactSubmitted(true);
      contactForm.reset();
      setTimeout(() => setContactSubmitted(false), 10000);
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will respond within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error sending your message. Please try again.",
      });
    },
  });

  async function onLeadSubmit(values: z.infer<typeof insertLeadSchema>) {
    submitLeadMutation.mutate(values);
  }

  async function onContactSubmit(values: z.infer<typeof insertContactSchema>) {
    submitContactMutation.mutate(values);
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@hardscapepro.com",
      link: "mailto:hello@hardscapepro.com",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "(555) 123-4567",
      link: "tel:5551234567",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Serving Contractors Nationwide",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Grow Your{" "}
            <span className="text-primary">Hardscaping Business?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get your free digital marketing audit and discover how we can help you
            dominate your local market
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
          <Card>
            <CardContent className="p-8">
              <Tabs defaultValue="audit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="audit" data-testid="tab-audit">
                    Get Free Audit
                  </TabsTrigger>
                  <TabsTrigger value="contact" data-testid="tab-contact">
                    General Inquiry
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="audit">
                  {leadSubmitted ? (
                    <div className="rounded-lg bg-accent/10 p-8 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Send className="h-8 w-8" />
                      </div>
                      <h4 className="mb-2 font-heading text-xl font-bold text-foreground">
                        Thank You!
                      </h4>
                      <p className="text-muted-foreground">
                        We've received your information and will contact you within 24
                        hours to schedule your free marketing audit.
                      </p>
                    </div>
                  ) : (
                    <Form {...leadForm}>
                      <form onSubmit={leadForm.handleSubmit(onLeadSubmit)} className="space-y-6">
                        {submitLeadMutation.isError && (
                          <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-destructive">
                              <p className="font-semibold mb-1">Submission Error</p>
                              <p>
                                {submitLeadMutation.error?.message ||
                                  "There was an error submitting your information. Please try again."}
                              </p>
                            </div>
                          </div>
                        )}

                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={leadForm.control}
                            name="businessName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Business Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="e.g., Elite Hardscaping"
                                    {...field}
                                    data-testid="input-business-name"
                                    disabled={submitLeadMutation.isPending}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={leadForm.control}
                            name="contactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Smith"
                                    {...field}
                                    data-testid="input-contact-name"
                                    disabled={submitLeadMutation.isPending}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={leadForm.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    {...field}
                                    data-testid="input-email"
                                    disabled={submitLeadMutation.isPending}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={leadForm.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    {...field}
                                    data-testid="input-phone"
                                    disabled={submitLeadMutation.isPending}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={leadForm.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Services *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                disabled={submitLeadMutation.isPending}
                              >
                                <FormControl>
                                  <SelectTrigger data-testid="select-project-type">
                                    <SelectValue placeholder="Select your main service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="patios">
                                    Patios & Outdoor Living
                                  </SelectItem>
                                  <SelectItem value="driveways">
                                    Driveways & Walkways
                                  </SelectItem>
                                  <SelectItem value="retaining-walls">
                                    Retaining Walls
                                  </SelectItem>
                                  <SelectItem value="full-service">
                                    Full Service Hardscaping
                                  </SelectItem>
                                  <SelectItem value="commercial">
                                    Commercial Projects
                                  </SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid gap-6 sm:grid-cols-2">
                          <FormField
                            control={leadForm.control}
                            name="budgetRange"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Monthly Marketing Budget *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  disabled={submitLeadMutation.isPending}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-budget">
                                      <SelectValue placeholder="Select range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="1k-2k">$1,000 - $2,000</SelectItem>
                                    <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                    <SelectItem value="10k-plus">$10,000+</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={leadForm.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>When to Start? *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  disabled={submitLeadMutation.isPending}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-timeline">
                                      <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="immediately">
                                      Immediately
                                    </SelectItem>
                                    <SelectItem value="1-month">
                                      Within 1 Month
                                    </SelectItem>
                                    <SelectItem value="2-3-months">
                                      2-3 Months
                                    </SelectItem>
                                    <SelectItem value="just-exploring">
                                      Just Exploring
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={leadForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tell Us About Your Goals (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="e.g., We want to increase patio installation leads by 50% this year..."
                                  className="min-h-[100px] resize-none"
                                  {...field}
                                  data-testid="input-message"
                                  disabled={submitLeadMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={submitLeadMutation.isPending}
                          data-testid="button-submit-lead"
                        >
                          {submitLeadMutation.isPending ? (
                            <>Submitting...</>
                          ) : (
                            <>
                              Get My Free Audit
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </TabsContent>

                <TabsContent value="contact">
                  {contactSubmitted ? (
                    <div className="rounded-lg bg-accent/10 p-8 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Send className="h-8 w-8" />
                      </div>
                      <h4 className="mb-2 font-heading text-xl font-bold text-foreground">
                        Message Sent!
                      </h4>
                      <p className="text-muted-foreground">
                        We've received your inquiry and will respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <Form {...contactForm}>
                      <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                        {submitContactMutation.isError && (
                          <div className="flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-destructive">
                              <p className="font-semibold mb-1">Submission Error</p>
                              <p>
                                {submitContactMutation.error?.message ||
                                  "There was an error sending your message. Please try again."}
                              </p>
                            </div>
                          </div>
                        )}

                        <FormField
                          control={contactForm.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Smith"
                                  {...field}
                                  data-testid="input-contact-general-name"
                                  disabled={submitContactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  data-testid="input-contact-general-email"
                                  disabled={submitContactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="How can we help?"
                                  {...field}
                                  data-testid="input-contact-subject"
                                  disabled={submitContactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={contactForm.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your inquiry..."
                                  className="min-h-[150px] resize-none"
                                  {...field}
                                  data-testid="input-contact-general-message"
                                  disabled={submitContactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full"
                          disabled={submitContactMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {submitContactMutation.isPending ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="mb-4 font-heading text-2xl font-bold">
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive website and SEO audit",
                    "Competitor analysis in your local market",
                    "Keyword research for your services",
                    "Google Business Profile evaluation",
                    "Custom growth strategy recommendations",
                    "ROI projections based on your goals",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </div>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="font-semibold text-foreground hover:text-primary transition-colors"
                              data-testid={`link-${info.label.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="font-semibold text-foreground">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
