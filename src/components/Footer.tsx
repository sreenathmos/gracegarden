import { Heart, Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="bg-sage-900 text-sage-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-2 gap-8 h-full">
            {/* Contact Info */}
            <div className="h-full flex flex-col">
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="flex flex-col h-full space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0" />
                    <a href="tel:9100773861" className="text-sage-200 hover:text-white transition-colors">
                      +91 9100773861
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0" />
                    <a href="mailto:gracegarden1983@gmail.com" className="text-sage-200 hover:text-white transition-colors">
                      gracegarden1983@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-sage-200">
                      Chendakuni, Meenangadi<br />
                      Wayanad, Kerala, 673591
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-sage-200">
                      <a href="https://www.instagram.com/gracegarden_care?utm_source=qr&igsh=OW1icHRscjU4ZTR4" 
                         className="hover:text-white transition-colors"
                         target="_blank" 
                         rel="noopener noreferrer">
                        ig@gracegarden_care
                      </a>
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Youtube className="h-4 w-4 text-sage-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-sage-200">
                      <a href="https://www.youtube.com/@GraceGardenCare"
                         className="hover:text-white transition-colors"
                         target="_blank" 
                         rel="noopener noreferrer">
                        yt@GraceGardenCare
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="h-full flex flex-col">
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <div className="flex flex-col h-full space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-sage-200">24/7 Medical Care</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-200">Personal Assistance</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-200">Vegetarian Meals</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-200">Cultural Activities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-200">Physiotherapy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sage-200">Garden Therapy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in-up h-full">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full" style={{ height: '280px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500197.54034429154!2d75.61942433790553!3d11.638074864205304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60b4e26c87ef5%3A0x13d0be64ec1a4a14!2sGrace%20Garden%20(Care%20Home)!5e0!3m2!1sen!2sin!4v1750110945505!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Grace Garden Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            
            {/* <div className="mt-6 text-center">
              <p className="text-sage-200 mb-4">
                Located in the heart of Wayanad's scenic beauty
              </p>
              <a
                href="https://maps.app.goo.gl/pUkmDf1o6E3Htx6dA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sage-200 hover:text-white font-medium transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Open in Google Maps
              </a>
            </div> */}
          </div>
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8">
          <div className="text-center mb-4">
            <Link 
              to="/privacy-policy" 
              className="text-sage-300 hover:text-white transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-sage-300 text-center">
            © 2024 Grace Garden Eldercare. All rights reserved. | Made with{" "}
            <Heart className="h-4 w-4 text-red-400 inline mx-1" /> for our elders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
