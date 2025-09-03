import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import img from "../../public/lovable-uploads/ab7aac31-80e9-4d23-a35f-8773a90a9640.png";
const Footer = () => {
  return (
    <footer className="bg-business-dark text-business-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold">
                {/* <span> {img} </span> */}
                <img className="h-8 w-auto invert brightness-0" src={img} alt="logo"></img>
                 
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
            | Smart Solutions <br/>
            | Sharper Strategies <br/>
            | Stronger Businesses
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white"
                onClick={() => window.open("https://wa.me/917874555000", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
             <div className="flex space-x-4 mt-1">
              <Button
                variant="outline"
                size="sm"
                className="border-business-blue text-business-blue hover:bg-business-blue hover:text-white"
                onClick={() => window.open("https://www.linkedin.com/company/tanivgroup/", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Linkedin
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-business-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-business-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-business-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-business-blue transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Project Management</li>
              <li className="text-gray-300">Market Research</li>
              <li className="text-gray-300">Export & Import</li>
              <li className="text-gray-300">Technical Services</li>
              <li className="text-gray-300">Business Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-business-blue" />
                <span className="text-gray-300">+91 7874 555 000</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-business-blue" />
                <span className="text-gray-300">ceo@tanivgroup.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-business-blue flex-shrink-0" />
                <span className="text-gray-300">Gandhinagar, Gujarat, India</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-sm text-gray-300">Mon - Fri: 10:00 AM - 05:30 PM <br/>( Appointment Only )</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Taniv Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;