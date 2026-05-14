import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Handshake, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FlaskConical,
      title: "Pharma strategic advisory",
      description:
        "We help pharma and life sciences companies navigate the decisions that determine whether a product, partnership, or market move succeeds. From early-stage market research to deal execution and regulatory positioning — senior-led, India and global.",
      features: [
        "Market entry & product positioning",
        "Licensing and distribution deal strategy",
        "Regulatory landscape navigation",
        "Pharma project management (concept to commission)"
      ]
    },
    {
      icon: Handshake,
      title: "M&A & business transactions",
      description:
        "For business owners preparing to buy, sell, merge, or restructure. We handle the full transaction lifecycle — from valuation and due diligence to deal structuring and post-merger integration — with the governance and compliance groundwork built in.",
      features: [
        "Buy-side and sell-side advisory",
        "Business valuation & due diligence",
        "Deal structuring & negotiation",
        "Post-merger integration & compliance"
      ]
    },
    {
      icon: Globe,
      title: "Market entry & global trade",
      description:
        "Whether you're a Gujarat manufacturer looking to export, or a foreign company entering India, we provide the strategic and operational support to get it right — from go-to-market planning to cross-border compliance and partner identification.",
      features: [
        "India market entry strategy for foreign companies",
        "International expansion for Indian manufacturers",
        "Trade compliance & logistics advisory",
        "Partner and distributor identification"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business development & growth",
      description:
        "For founders and CEOs who've hit a growth ceiling. We identify where revenue is being left on the table, build the partnerships and channels to unlock it, and embed the commercial capability to sustain it.",
      features: [
        "Revenue and pipeline strategy",
        "Partnership and collaboration development",
        "Product diversification & new market entry",
        "Leadership and commercial capability building"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#faebd7]">
        <div className="max-w-4xl mx-auto text-center text-[#1C3049] px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1C3049] mb-6">
            What we do
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-text-light-lite opacity-90 leading-relaxed">
            We work across four core areas — pharma advisory, M&A, market entry,
            and business development. Every engagement is led by a senior
            advisor, not delegated to a junior team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-business-blue group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-business-navy ml-4 font-playfair">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-business-navy mb-3">
                      Key features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-business-blue rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4 font-playfair">
              Our Process
            </h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We spend time understanding your business, your market, and where the real problem lies — not just the presenting symptom."
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We build a focused plan with clear priorities. No 80-page decks. Actionable and specific to your situation."
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We work alongside you — not hand over a document and disappear. Senior involvement throughout."
              },
              {
                step: "04",
                title: "Results",
                description:
                  "We measure against the outcome you hired us for, and stay accountable to it."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-business-blue text-business-text-light w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-business-navy mb-2 font-playfair">
                  {phase.title}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faebd7] text-[#1C3049]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Not sure which service fits your situation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Most of our clients come in with a specific problem, not a service in
            mind. Tell us what you're dealing with — we'll tell you honestly
            whether and how we can help.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#1c3049] hover:bg-[#1c3049]/85 px-8 py-6 text-lg font-semibold w-full sm:w-auto text-white"
            >
              Book a free 30-minute call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
