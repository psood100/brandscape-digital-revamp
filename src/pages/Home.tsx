import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      title: "Projects",
      description: "End to end execution and management of commercial and technical projects, tailored to business goals and industry standards."
    },
    {
      title: "Mergers & Acquisitions", 
      description: "Comprehensive advisory on deal structuring, valuation, and integration to ensure successful M&A outcomes."
    },
    {
      title: "Export & Import",
      description: "Expert guidance on global trade processes, compliance, and logistics to optimize cross-border business operations."
    },
    {
      title: "Technical Services",
      description: "Specialized technical consulting and solutions to enhance performance, efficiency, and innovation."
    }
  ];

  const stats = [
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-business-text-light mb-6 leading-tight">
            Where Businesses Reach
            <br />
            <span className="text-white">Their Full Potential</span>
          </h1>
          <p className="text-xl md:text-2xl text-business-text-light mb-8 opacity-90">
            Smart solutions, sharper strategies, stronger businesses.
          </p>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-business-navy hover:bg-white/90 hover:text-business-navy font-bold px-8 py-6 text-lg shadow-elegant transition-all duration-300"
            >
              GET IN TOUCH TODAY
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
                <div className="text-3xl font-bold text-business-navy mb-2 font-playfair">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4 font-playfair">OUR SERVICES</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive business solutions designed to drive growth and success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-business-blue/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-business-navy mb-4 font-playfair">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">{service.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6 font-playfair">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Let's discuss how we can help you reach your full potential
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-business-navy hover:bg-white/90 hover:text-business-navy font-bold px-8 py-6 text-lg transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;