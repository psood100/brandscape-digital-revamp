import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
    { icon: Award, label: "Years of Industry Experience", value: "35+" },
    { icon: Target, label: "Pharma Heartland", value: "Gujarat's" },
    { icon: TrendingUp, label: "Reach", value: "India & Global" },
    { icon: Users, label: "Business Development", value: "Pharma · M&A · BD" }
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-business-text-light mb-6 leading-tight">
            35 years of expertise.
            <br />
            <span className="text-white">Zero guesswork.</span>
          </h1>
          <p className="text-xl md:text-2xl text-business-text-light mb-8 opacity-90">
            Taniv Group is a senior advisory firm for pharma companies,
            manufacturers, and business owners navigating market entry, M&A, and
            growth — from Gujarat, for the world
          </p>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-business-navy hover:bg-white/90 hover:text-business-navy font-bold px-8 py-6 text-lg shadow-elegant transition-all duration-300"
            >
              Book a free 30-minute strategy call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-business-blue" />
                </div>
                <div className="text-3xl font-bold text-business-navy mb-2 font-playfair">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4 font-playfair">
              Who we work with
            </h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeWorkWith.map((item, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-business-blue/30"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-business-navy mb-4 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4 font-playfair">
              OUR SERVICES
            </h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive business solutions designed to drive growth and
              success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-business-blue/30"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-business-navy mb-4 font-playfair">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-medium">
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
                className="border-2 border-business-blue text-business-blue hover:bg-business-blue hover:text-white font-semibold transition-all duration-300"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Taniv Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-navy mb-6 font-playfair">
            Why Taniv
          </h2>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            We're not a large firm with junior analysts doing your work. Every
            Taniv engagement is led by a senior advisor with 35+ years of
            hands-on industry experience — in pharma, M&A, and business
            development. Based in Gandhinagar, Gujarat. Operating globally.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6 font-playfair">
            Not sure if we're the right fit?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Book a free 30-minute call. No pitch, no pressure — just a straight
            conversation about your situation and whether we can help.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-business-navy hover:bg-white/90 hover:text-business-navy font-bold px-8 py-6 text-lg transition-all duration-300"
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
