import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Patel",
      position: "Chief Executive Officer",
      expertise: "Strategic Leadership & Business Development",
      experience: "15+ years",
      description: "Visionary leader with extensive experience in driving business transformation and growth strategies across multiple industries.",
      skills: ["Strategic Planning", "Business Development", "Leadership", "M&A Advisory"]
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      expertise: "Project Management & Operations Excellence",
      experience: "12+ years",
      description: "Operations expert specializing in process optimization, project management, and organizational efficiency improvements.",
      skills: ["Project Management", "Process Optimization", "Operations Strategy", "Team Leadership"]
    },
    {
      name: "Amit Kumar",
      position: "Technical Director",
      expertise: "Technology & System Development",
      experience: "14+ years",
      description: "Technology strategist with deep expertise in system architecture, digital transformation, and technical consulting.",
      skills: ["System Architecture", "Digital Transformation", "Technical Consulting", "Innovation Strategy"]
    },
    {
      name: "Neha Gupta",
      position: "Business Development Manager",
      expertise: "Market Research & Client Relations",
      experience: "10+ years",
      description: "Market research specialist focused on identifying growth opportunities and building strong client relationships.",
      skills: ["Market Research", "Client Relations", "Business Analysis", "Growth Strategy"]
    },
    {
      name: "Vikash Singh",
      position: "Financial Advisor",
      expertise: "Financial Planning & M&A Advisory",
      experience: "13+ years",
      description: "Financial expert specializing in business valuation, M&A transactions, and strategic financial planning.",
      skills: ["Financial Planning", "M&A Advisory", "Business Valuation", "Risk Assessment"]
    },
    {
      name: "Kavya Reddy",
      position: "HR Consultant",
      expertise: "Human Resources & Organizational Development",
      experience: "11+ years",
      description: "HR strategist focused on talent management, organizational development, and building high-performance teams.",
      skills: ["Talent Management", "Organizational Development", "HR Strategy", "Performance Management"]
    }
  ];

  const values = [
    {
      title: "Collaborative Excellence",
      description: "We believe in the power of teamwork and collective expertise to deliver exceptional results."
    },
    {
      title: "Continuous Learning",
      description: "Our team is committed to staying at the forefront of industry trends and best practices."
    },
    {
      title: "Client Success Focus",
      description: "Every team member is dedicated to ensuring our clients achieve their business objectives."
    },
    {
      title: "Innovation Mindset",
      description: "We embrace new ideas and innovative approaches to solve complex business challenges."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-business-text-light mb-6">
            Our <span className="text-business-blue">Team</span>
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl text-business-text-light opacity-90 leading-relaxed">
            Meet the experts behind our success - a diverse team of professionals committed to your business growth
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-navy mb-6">
            Expertise That Drives Results
          </h2>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our team combines decades of experience across various industries with a passion for helping 
            businesses reach their full potential. Each member brings unique expertise and a collaborative 
            approach to solving complex business challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-bold text-business-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-business-navy mb-4">Leadership Team</h2>
            <div className="w-24 h-0.5 bg-business-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-business-text-light">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-business-navy mb-2">{member.name}</h3>
                    <p className="text-business-blue font-semibold mb-1">{member.position}</p>
                    <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
                    <p className="text-sm text-gray-500">{member.experience} Experience</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-business-navy mb-3 text-sm">Core Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-business-light-blue text-business-navy px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm" className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-business-navy mb-6">Our Culture</h2>
              <div className="w-16 h-0.5 bg-business-blue mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At TN Group, we foster a culture of innovation, collaboration, and continuous growth. 
                Our team members are encouraged to think creatively, challenge conventional approaches, 
                and pursue excellence in everything they do.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that diverse perspectives and experiences drive better solutions. Our inclusive 
                environment ensures that every team member can contribute their unique strengths to deliver 
                exceptional value for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-business-blue mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-business-blue mb-2">95%</div>
                  <div className="text-gray-600">Employee Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-gradient-hero rounded-lg p-8 text-business-text-light">
                <h3 className="text-2xl font-bold mb-6">Why Join Our Team?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-business-blue rounded-full mr-3"></div>
                    Collaborative and supportive work environment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-business-blue rounded-full mr-3"></div>
                    Opportunities for professional growth and development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-business-blue rounded-full mr-3"></div>
                    Work on challenging and impactful projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-business-blue rounded-full mr-3"></div>
                    Competitive compensation and benefits
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-business-blue rounded-full mr-3"></div>
                    Flexible work arrangements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-section">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-business-text-light mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-business-text-light mb-8 opacity-90">
            Let's discuss how our expertise can help drive your business forward
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-business-blue hover:bg-business-blue/90 text-business-text-light px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg" 
              className="border-business-text-light text-business-text-light hover:bg-business-text-light hover:text-business-navy px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;