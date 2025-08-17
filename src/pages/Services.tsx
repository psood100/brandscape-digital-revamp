import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  Handshake, 
  Ship, 
  Settings, 
  TrendingUp, 
  Search, 
  Users, 
  Building, 
  Code, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FolderOpen,
      title: "Projects",
      description: "End to end execution and management of commercial and technical projects, tailored to business goals and industry standards.",
      features: ["Project Planning", "Resource Management", "Quality Assurance", "Timeline Optimization"]
    },
    {
      icon: Handshake,
      title: "Mergers & Acquisitions",
      description: "Comprehensive advisory on deal structuring, valuation, and integration to ensure successful M&A outcomes.",
      features: ["Due Diligence", "Valuation Analysis", "Deal Structuring", "Post-Merger Integration"]
    },
    {
      icon: Ship,
      title: "Export & Import",
      description: "Expert guidance on global trade processes, compliance, and logistics to optimize cross-border business operations.",
      features: ["Trade Documentation", "Customs Compliance", "Logistics Planning", "Market Entry Strategy"]
    },
    {
      icon: Settings,
      title: "Technical Services",
      description: "Specialized technical consulting and solutions to enhance performance, efficiency, and innovation.",
      features: ["Technical Audits", "Process Optimization", "Technology Integration", "Performance Enhancement"]
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description: "Strategic planning and support to identify new opportunities, enter new markets, and drive sustainable growth.",
      features: ["Market Analysis", "Growth Strategy", "Partnership Development", "Revenue Optimization"]
    },
    {
      icon: Search,
      title: "Market Research",
      description: "Insight driven market research to support data-backed decisions, product positioning, and competitive analysis.",
      features: ["Market Analysis", "Consumer Insights", "Competitive Intelligence", "Trend Forecasting"]
    },
    {
      icon: Users,
      title: "HR Practices",
      description: "Modern human resource strategies and systems to attract, retain, and nurture top talent.",
      features: ["Talent Acquisition", "Performance Management", "Training & Development", "HR Policy Development"]
    },
    {
      icon: Building,
      title: "Corporate Services",
      description: "Support services that streamline corporate functions including compliance, governance, and administration.",
      features: ["Corporate Governance", "Compliance Management", "Administrative Support", "Risk Assessment"]
    },
    {
      icon: Code,
      title: "System Development",
      description: "Custom system architecture and development to digitize operations and improve workflow efficiency.",
      features: ["Software Development", "System Integration", "Process Automation", "Digital Transformation"]
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Training programs designed to upskill teams and empower leadership with industry relevant knowledge.",
      features: ["Leadership Development", "Skill Enhancement", "Professional Certification", "Corporate Training"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-business-text-light mb-6">
            Our <span className="text-business-blue">Services</span>
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-text-light opacity-90 leading-relaxed">
            Comprehensive business solutions designed to drive growth, efficiency, and success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-business-blue group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-business-navy ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-business-navy mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
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
            <h2 className="text-4xl font-bold text-business-navy mb-4">Our Process</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business, challenges, and objectives" },
              { step: "02", title: "Strategy", description: "Developing customized solutions and strategic plans" },
              { step: "03", title: "Implementation", description: "Executing the plan with precision and expertise" },
              { step: "04", title: "Optimization", description: "Continuous improvement and performance monitoring" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-business-blue text-business-text-light w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-business-navy mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Let's discuss how our services can help transform your business
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-business-blue hover:bg-business-blue/90 text-business-text-light px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline"
                size="lg" 
                className="border-business-text-light text-business-text-light hover:bg-business-text-light hover:text-business-navy px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;