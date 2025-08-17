import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches to solve complex challenges."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our international experience helps businesses navigate global markets with confidence."
    }
  ];

  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Satisfied Clients" },
    { number: "10+", label: "Years of Experience" },
    { number: "25+", label: "Industry Sectors" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-business-text-light mb-6">
            About <span className="text-business-blue">TN Group</span>
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-text-light opacity-90 leading-relaxed">
            Empowering businesses to reach their full potential through strategic consulting and innovative solutions
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
                Founded with a vision to transform the business landscape, TN Group has been at the forefront of 
                providing comprehensive consulting services that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey began with a simple belief: every business has untapped potential waiting to be unleashed. 
                Through strategic planning, expert guidance, and innovative solutions, we help organizations overcome 
                challenges and achieve sustainable success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we stand as a trusted partner to businesses across various industries, from startups to 
                established enterprises, helping them navigate complex markets and achieve their ambitious goals.
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
                  <h3 className="text-3xl font-bold text-business-navy">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses with strategic insights, innovative solutions, and expert guidance that 
                  enables them to overcome challenges, seize opportunities, and achieve sustainable growth in an 
                  ever-evolving marketplace.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-business-blue mr-4" />
                  <h3 className="text-3xl font-bold text-business-navy">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the global leader in business consulting, recognized for our ability to transform 
                  organizations and create lasting value through innovative strategies, exceptional service, 
                  and unwavering commitment to client success.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6">Why Choose TN Group?</h2>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-business-text-light">
            <div>
              <Award className="h-12 w-12 mx-auto mb-4 text-business-blue" />
              <h3 className="text-xl font-bold mb-4">Proven Expertise</h3>
              <p className="opacity-90">Years of experience delivering successful outcomes across diverse industries</p>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-business-blue" />
              <h3 className="text-xl font-bold mb-4">Client-Centric Approach</h3>
              <p className="opacity-90">Tailored solutions that address your unique challenges and objectives</p>
            </div>
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-business-blue" />
              <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
              <p className="opacity-90">Data-driven strategies that deliver tangible business improvements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;