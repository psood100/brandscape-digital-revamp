import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import pharmaWatercolor from "@/assets/taniv-pharma-watercolor.png";

const Home = () => {
  const services = [
    {
      title: "Pharma strategic advisory",
      description:
        "Market entry, BD deals, licensing strategy, and distribution partnerships for pharma and life sciences companies — India and global."
    },
    {
      title: "M&A & business transactions",
      description:
        "Buy-side and sell-side advisory, business valuation, deal structuring, and succession planning for mid-market companies."
    },
    {
      title: "Market entry & expansion",
      description:
        "Go-to-market strategy for companies entering India or expanding internationally — with deep Gujarat and cross-border expertise."
    },
    {
      title: "Fractional strategy partner",
      description:
        "On-call senior advisory for founders and CEOs who need a thinking partner without the cost of a full-time hire. Monthly retainer."
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "250+" },
    { label: "Years Experience", value: "40+" },
    { label: "Success Rate", value: "98%" }
  ];

  const whoWeWorkWith = [
    {
      title: "Pharma & life sciences companies",
      description:
        "Entering new markets or structuring licensing and distribution deals."
    },
    {
      title: "Business owners and founders",
      description:
        "Preparing for M&A, a sale, or their next stage of growth."
    },
    {
      title: "Manufacturers and exporters",
      description:
        "Needing strategic guidance on cross-border expansion."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[calc(100svh-7rem)] overflow-hidden bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent" />
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-business-blue">
                Strategic advisory · Gujarat to global
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-business-navy leading-[0.98] mb-8">
              45 years of expertise.
              <br />
              <span className="italic text-business-blue">Zero guesswork.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
              Taniv Group is a senior advisory firm for pharma companies,
              manufacturers, and business owners navigating market entry, M&amp;A,
              and growth — from Gujarat, for the world.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-sm bg-business-navy text-business-text-light hover:bg-business-blue px-7 py-6 text-base">
                Book a free 30-minute strategy call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-scale-in">
            <div className="absolute inset-y-8 left-1/2 w-px bg-border" aria-hidden="true" />
            <img
              src={pharmaWatercolor}
              alt="Watercolor scientific illustration of pharmaceutical research and industry"
              width={1200}
              height={1408}
              className="relative w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-business-navy text-business-text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:border-r md:last:border-r-0 border-business-light-blue/25 px-3">
                <div className="text-3xl font-normal text-business-text-light mb-2 font-playfair">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-business-light-blue">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-business-blue font-semibold mb-4">Our clients</p>
            <h2 className="text-4xl md:text-5xl font-normal text-business-navy mb-4 font-playfair">
              Who we work with
            </h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeWorkWith.map((item, index) => (
              <Card
                key={index}
                className="rounded-sm shadow-none bg-card border-border hover:border-business-blue transition-colors duration-300"
              >
                <CardContent className="p-8">
                  <p className="text-xs text-accent font-semibold mb-5">0{index + 1}</p>
                  <h3 className="text-2xl font-normal text-business-navy mb-4 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/45 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-business-blue font-semibold mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-normal text-business-navy mb-4 font-playfair">
              Our services
            </h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business solutions designed to drive growth and
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {services.map((service, index) => (
              <Card
                key={index}
                className="rounded-none shadow-none bg-background/60 border-0 border-r border-b border-border hover:bg-card transition-colors duration-300"
              >
                <CardContent className="p-8">
                  <p className="text-xs text-accent font-semibold mb-5">0{index + 1}</p>
                  <h3 className="text-2xl font-normal text-business-navy mb-4 font-playfair">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm border-business-blue text-business-blue hover:bg-business-blue hover:text-business-text-light font-semibold transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Taniv Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-normal text-business-navy mb-6 font-playfair">
            Why Taniv
          </h2>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We&apos;re not a large firm with junior analysts doing your work. Every
            Taniv engagement is led by a senior advisor with 45 years of
            hands-on industry experience — in pharma, M&A, and business
            development. Based in Gandhinagar, Gujarat. Operating globally.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-business-blue mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold">Office location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-business-navy mb-5">Meet us in Kudasan</h2>
            <address className="not-italic text-lg text-muted-foreground leading-relaxed">
              Office No. W/501, Siddhraj Z Square<br />Kudasan, Gandhinagar, Gujarat
            </address>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href="https://share.google/yoaGCM9rzVYYSW5YE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-b border-business-blue pb-2 text-business-navy font-semibold hover:text-business-blue transition-colors"
            >
              View on Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-business-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl font-normal text-business-text-light mb-6 font-playfair">
            Not sure if we're the right fit?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Book a free 30-minute call. No pitch, no pressure — just a straight
            conversation about your situation and whether we can help.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
               className="rounded-sm bg-business-text-light text-business-navy hover:bg-business-light-blue hover:text-business-navy font-bold px-8 py-6 text-lg transition-all duration-300"
            >
              Book your free call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
