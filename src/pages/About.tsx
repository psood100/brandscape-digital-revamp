import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Globe, UserCheck, MessageSquare, Focus, CheckCircle, MapPin } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: UserCheck,
      title: "Seniority",
      description: "Every engagement is led by a principal with 35+ years of hands-on experience. We don't delegate your work to graduates."
    },
    {
      icon: MessageSquare,
      title: "Directness",
      description: "We tell you what we actually think — including when the answer is not what you were hoping to hear. That's what you're paying for."
    },
    {
      icon: Focus,
      title: "Specificity",
      description: "We don't do generic frameworks. Every recommendation is built around your specific market, your specific situation, and your specific constraints."
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We measure ourselves against the outcome you hired us for — not the hours we logged or the slides we produced."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "250+", label: "Satisfied Clients" },
    { number: "40+", label: "Years of Experience" },
    { number: "25+", label: "Industry Sectors" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#faebd7]">
        <div className="max-w-4xl mx-auto text-center text-[#1C3049] px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1C3049] mb-6">
            About Taniv Group
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-light opacity-90 leading-relaxed">
            A boutique advisory firm built on 35 years of on-the-ground industry experience — rooted in Gujarat, working globally.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-business-navy mb-6">Our Story</h2>
              <div className="w-16 h-0.5 bg-business-blue mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Taniv Group was founded in Gujarat — the heart of India's pharmaceutical and manufacturing ecosystem — by advisors who spent decades inside the industries they now consult for.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We've sat on both sides of the table: structuring BD deals, managing cross-border market entries, advising on acquisitions, and building commercial strategies from the ground up. That experience is what we bring to every client engagement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work with pharma companies, manufacturers, founders, and business owners — people making high-stakes decisions who need a senior thinking partner, not a junior team with a methodology deck. Every Taniv engagement is led by a principal with real skin in the game.
              </p>
            </div>
            <div className="lg:pl-12">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
                    <div className="text-3xl font-bold text-business-blue mb-2">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-business-blue mr-4" />
                  <h3 className="text-3xl font-bold text-business-navy">Our mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To give founders, business owners, and executives access to the kind of senior strategic thinking that was previously only available inside large corporations or expensive global consulting firms — delivered with the speed and directness of a boutique.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-business-blue mr-4" />
                  <h3 className="text-3xl font-bold text-business-navy">Our vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the most trusted advisory partner for pharma companies and ambitious businesses operating between India and the world — known not for the size of our team, but for the quality of our judgment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4">Our Values</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <value.icon className="h-16 w-16 text-business-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-business-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 bg-[#faebd7] text-[#1C3049]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">What makes us different</h2>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <UserCheck className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">You work with the expert, not a team below them</h3>
              <p className="opacity-90">In most consulting firms, a senior partner sells the engagement and a junior team delivers it. At Taniv, the advisor you speak to is the advisor who does the work.</p>
            </div>
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">We know Gujarat's pharma and manufacturing ecosystem from the inside</h3>
              <p className="opacity-90">35 years in the industry means we know the players, the regulators, the distributors, and the deal dynamics — not from research, but from experience.</p>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">We work remotely with anyone, anywhere</h3>
              <p className="opacity-90">We're based in Gandhinagar but have advised clients across India, the Middle East, Europe, and beyond. Geography has never been a constraint.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
