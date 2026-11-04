import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BannerHero from "@/components/BannerHero";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import homeHero from "@/assets/home-hero-watercolor.jpg";

const Home = () => {
  const services = [
    {
      title: "Pharma strategic advisory",
      id: "pharma-advisory",
      description:
        "Business development, technical expertise and team training for pharma and life sciences companies, in India and globally."
    },
    {
      title: "M&A & business transactions",
      id: "ma-transactions",
      description:
        "Buy-side and sell-side deals, from first conversation to signed agreement, backed by corporate structuring and compliance."
    },
    {
      title: "Market entry & expansion",
      id: "market-entry",
      description:
        "Market surveys, export and import support, and project execution to take you into India or out to the world."
    },
    {
      title: "Fractional strategy partner",
      id: "fractional-partner",
      description:
        "Senior advice on call, plus the systems and HR practices that keep growth running. A monthly retainer instead of a full-time hire."
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
        "Entering new markets, licensing products or building distribution. We get you from approval to shelf."
    },
    {
      title: "Business owners and founders",
      description:
        "Buying, selling or scaling. We run the deal and tidy the company behind it."
    },
    {
      title: "Manufacturers and exporters",
      description:
        "Ready to sell beyond your borders. We find the markets, partners and paperwork."
    }
  ];

  return (
    <div className="min-h-screen">
      <BannerHero
        title={<>45 years of expertise.<br /><span className="italic text-business-blue">Zero guesswork.</span></>}
        description="Taniv Group is a senior advisory firm for pharma companies, manufacturers, and business owners navigating market entry, M&A, and growth — from Gujarat, for the world."
        label="Strategic advisory · Gujarat to global"
        image={homeHero}
        imageAlt="Watercolor sunrise over a calm sea with a winding gold path leading to a distant glowing city skyline, a small cargo ship and a subtle molecule motif in the sky"
        heightClass="h-[240px] md:h-[480px]"
      >
        <Link to="/contact">
          <Button size="lg" className="rounded-sm bg-business-navy text-business-text-light hover:bg-business-blue px-7 py-6 text-base">
            Book a free 30-minute strategy call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </BannerHero>

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
            <p className="text-lg text-muted-foreground">Founders, manufacturers and CEOs who'd rather move than wait.</p>
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
              Ten services. Four ways in. One partner since 1994.
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
                  <Button asChild variant="link" className="mt-5 px-0 text-business-blue"><Link to={`/services#${service.id}`}>Read more <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
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
