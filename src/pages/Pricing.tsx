import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      title: "Project engagement",
      subtitle: "One focused problem. One senior advisor. A defined scope and outcome.",
      pricing: "Project-based — scoped per engagement",
      features: [
        "A defined scope agreed upfront",
        "Senior-led from day one",
        "Market research, strategy, or advisory — based on your need",
        "Written deliverables and recommendations",
        "Best for: one-off decisions, market entry research, transaction prep"
      ],
      isPopular: false,
      buttonText: "Tell us what you need →",
      buttonVariant: "outline" as const
    },
    {
      title: "Retained advisory",
      subtitle: "Ongoing senior support for founders and CEOs who need a thinking partner, not a one-time report.",
      pricing: "Monthly retainer — scope agreed upfront",
      features: [
        "Dedicated senior advisor on call",
        "Monthly strategy sessions",
        "Covers pharma BD, M&A, market entry, or business development",
        "Priority response and direct access",
        "Best for: founders scaling, manufacturers expanding, CEOs navigating a transition"
      ],
      isPopular: true,
      buttonText: "Book a free intro call →",
      buttonVariant: "default" as const
    },
    {
      title: "Full partnership",
      subtitle: "For complex, multi-workstream engagements where you need a senior team embedded in the process.",
      pricing: "Custom — let's scope it together",
      features: [
        "Multi-workstream coverage across pharma, M&A, BD, and market entry",
        "Senior team involvement throughout",
        "Weekly strategy calls and hands-on execution support",
        "Full documentation, reporting, and governance",
        "Best for: large transactions, international expansions, full business transformations"
      ],
      isPopular: false,
      buttonText: "Contact us directly →",
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#faebd7]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-[#1C3049]">
          <h1 className="text-5xl md:text-6xl font-bold  mb-6">
            How we work with you
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl  opacity-90 leading-relaxed">
            We don't sell packages — we scope every engagement around your specific situation. Here's how most clients start.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-card hover:shadow-elegant transition-all duration-300 ${
                  plan.isPopular ? 'ring-2 ring-business-blue scale-105' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-business-blue text-business-text-light px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold text-business-navy mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 px-2">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-lg font-semibold text-business-blue">{plan.pricing}</span>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-business-blue mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full py-6 text-lg font-semibold ${
                        plan.buttonVariant === 'default'
                          ? 'bg-business-blue hover:bg-business-blue/90 text-business-text-light'
                          : 'border-business-blue text-business-blue hover:bg-business-blue hover:text-white'
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure where to start? */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-business-navy mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Most clients begin with a single conversation. We'll listen to your situation and tell you honestly what level of engagement makes sense — and what it would cost. No templates, no pressure.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-business-blue hover:bg-business-blue/90 text-business-text-light px-8 py-6 text-lg font-semibold"
            >
              Book a free 30-minute call →
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How is pricing determined for custom projects?",
                answer: "Our pricing is based on project scope, complexity, timeline, and required resources. We provide detailed proposals after initial consultation to ensure transparency and value."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment structures including milestone-based payments for projects and monthly retainers for ongoing services."
              },
              {
                question: "What's included in the consultation?",
                answer: "Initial consultations include business assessment, needs analysis, strategic recommendations, and a customized proposal for your specific requirements."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Absolutely. We understand business needs evolve, and we're flexible in adjusting service levels to match your current requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-business-navy mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faebd7] text-[#1C3049]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss the perfect plan for your business needs
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#1c3049] hover:bg-[#1c3049]/85 text-business-text-light px-8 py-6 text-lg font-semibold"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;