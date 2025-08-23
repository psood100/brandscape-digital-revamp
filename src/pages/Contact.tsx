import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7874 555 000",
      description: "Mon - Sat: 10:30 AM - 10:30 PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ceo@tanivgroup.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Gandhinagar, Gujarat, India",
      description: "Visit us for in-person consultations"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Message us anytime",
      description: "Quick responses via WhatsApp"
    }
  ];

  const businessHours = [
    { day: "Monday", hours: "10:30 AM - 10:30 PM" },
    { day: "Tuesday", hours: "10:30 AM - 10:30 PM" },
    { day: "Wednesday", hours: "10:30 AM - 10:30 PM" },
    { day: "Thursday", hours: "10:30 AM - 10:30 PM" },
    { day: "Friday", hours: "10:30 AM - 10:30 PM" },
    { day: "Saturday", hours: "10:30 AM - 10:30 PM" },
    { day: "Sunday", hours: "10:30 AM - 10:30 PM" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#faebd7]">
        <div className="max-w-4xl mx-auto text-center text-[#1C3049] px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold  mb-6">
            Contact <span className="">Us</span>
          </h1>
          <div className="w-24 h-0.5 bg-business-blue mx-auto mb-8"></div>
          <p className="text-xl  opacity-90 leading-relaxed">
            Better yet, see us in person! We love our customers, so feel free to visit anytime.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <h2 className="text-3xl font-bold text-business-navy">Get In Touch</h2>
                <p className="text-gray-600">
                  Ready to transform your business? Let's start the conversation.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-business-blue focus:ring-business-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-business-blue focus:ring-business-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 12345 67890"
                        className="border-gray-300 focus:border-business-blue focus:ring-business-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="border-gray-300 focus:border-business-blue focus:ring-business-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-blue focus:border-business-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="projects">Projects</option>
                      <option value="mergers">Mergers & Acquisitions</option>
                      <option value="export-import">Export & Import</option>
                      <option value="technical">Technical Services</option>
                      <option value="business-dev">Business Development</option>
                      <option value="market-research">Market Research</option>
                      <option value="hr">HR Practices</option>
                      <option value="corporate">Corporate Services</option>
                      <option value="system-dev">System Development</option>
                      <option value="training">Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project or requirements..."
                      className="border-gray-300 focus:border-business-blue focus:ring-business-blue"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-business-blue hover:bg-business-blue/90 text-business-text-light py-6 text-lg font-semibold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <info.icon className="h-12 w-12 text-business-blue" />
                      </div>
                      <h3 className="text-lg font-bold text-business-navy mb-2">{info.title}</h3>
                      <p className="text-business-blue font-semibold mb-1">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                      {info.title === "WhatsApp" && (
                        <Button 
                          className="mt-4 bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.open("https://wa.me/917874555000", "_blank")}
                        >
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Chat Now
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="h-8 w-8 text-business-blue mr-3" />
                    <h3 className="text-2xl font-bold text-business-navy">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className={`text-sm ${schedule.hours === "Closed" ? "text-red-500" : "text-business-blue"}`}>
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20   bg-[#faebd7] text-[#1C3049]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold   mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl   mb-8 opacity-90">
            Don't wait - every day you delay is a day your competitors get ahead. 
            Let's discuss how we can accelerate your business growth today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-[#1c3049] hover:bg-business-blue/90 text-business-text-light px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              onClick={() => window.open("https://wa.me/917874555000", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-business-text-light text-business-text-light-lite hover:bg-business-text-light hover:text-business-navy px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              onClick={() => window.open("tel:+917874555000", "_blank")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;