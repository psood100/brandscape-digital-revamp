import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "Contact Us",
      period: "Project Based",
      description: "Perfect for emerging businesses and startups looking to establish their foundation",
      features: [
        "Business Strategy Consultation",
        "Market Research & Analysis",
        "Basic Project Management",
        "Email Support",
        "Quarterly Reviews",
        "Documentation & Reports"
      ],
      isPopular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Growth",
      price: "Contact Us",
      period: "Monthly Retainer",
      description: "Ideal for growing companies ready to scale their operations and expand market reach",
      features: [
        "Everything in Startup",
        "Advanced Business Development",
        "M&A Advisory Services",
        "Export/Import Consulting",
        "Dedicated Account Manager",
        "Priority Support",
        "Monthly Strategy Sessions",
        "Custom Training Programs"
      ],
      isPopular: true,
      buttonText: "Most Popular",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "Custom Package",
      description: "Comprehensive solutions for established enterprises with complex business needs",
      features: [
        "Everything in Growth",
        "Full Technical Services",
        "System Development",
        "Corporate Services",
        "HR Strategy & Implementation",
        "24/7 Priority Support",
        "Weekly Strategy Calls",
        "Custom Solution Development",
        "Multi-location Support",
        "Dedicated Project Team"
      ],
      isPopular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

  const addOns = [
    {
      title: "Technical Audit",
      description: "Comprehensive technical assessment and optimization recommendations",
      price: "Contact for Quote"
    },
    {
      title: "Training Programs",
      description: "Custom training modules for your team and leadership development",
      price: "Contact for Quote"
    },
    {
      title: "Market Entry Strategy",
      description: "Detailed strategy for entering new markets or launching new products",
      price: "Contact for Quote"
    },
    {
      title: "System Integration",
      description: "Complete system integration and digital transformation services",
      price: "Contact for Quote"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-business-text-light mb-6">
            Pricing <span className="text-business-blue">Plans</span>
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-text-light opacity-90 leading-relaxed">
            Flexible pricing options tailored to your business needs and growth stage
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
                  <h3 className="text-2xl font-bold text-business-navy mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-business-blue">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-business-blue mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
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
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4">Additional Services</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your package with specialized add-on services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-business-navy mb-3">{addon.title}</h3>
                  <p className="text-gray-600 mb-4">{addon.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-business-blue">{addon.price}</span>
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Let's discuss the perfect plan for your business needs
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-business-blue hover:bg-business-blue/90 text-business-text-light px-8 py-6 text-lg font-semibold"
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