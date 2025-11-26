import { Heart, Shield, Utensils, Music, MapPin, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "24/7 Medical Care",
      description: "Round-the-clock nursing care and regular doctor visits ensure your loved one's health and wellbeing."
    },
    {
      icon: Utensils,
      title: "Homely Food",
      description: "Nutritious, freshly prepared vegetarian/non-vegetarian meals that taste like home, catering to dietary preferences."
    },
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Engaging cultural programs, music sessions, and activities that keep spirits high and minds active."
    },
    {
      icon: MapPin,
      title: "Scenic Environment",
      description: "Nestled in the beautiful hills of Wayanad, surrounded by nature's tranquility and fresh air."
    },
    {
      icon: Heart,
      title: "Personal Assistance",
      description: "Dedicated caregivers provide personalized attention and support for daily activities."
    },
    {
      icon: Home,
      title: "Comfortable Living",
      description: "Fully furnished 2BHK homes designed for safety, comfort, and a true sense of belonging."
    }
  ];

  const highlights = [
    "24/7 Nurses",
    "Elevator Access",
    "Doctor Visits",
    "Scenic Hill Views",
    "Garden Therapy",
    "Emergency Care"
  ];

  return (
    <section className="py-20 gradient-bg" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Our Services Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-12 text-center">
          Our Services
        </h2>

        {/* Trust Indicators - At Top */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-sage-100 rounded-lg p-6">
              <div className="space-y-4 text-sage-700 text-left text-lg leading-relaxed">
                <div>
                  Residents enjoy a holistic lifestyle, morning walks, indoor/outdoor games, physiotherapy,
                  fresh meals, reading, gardening, group activities, and festival celebrations all within a
                  secure gated environment with CCTV monitoring, on-site caretaker family, and emergency tie-ups with nearby hospitals.
                </div>
                <div className="mt-4">
                  Grace Garden isn't just a residence — it's a community built on compassion, dignity, and peace of mind. You live independently, cared for with warmth and respect, while your investment remains safe and refundable.
                </div>
              </div>
            </div>

            <div className="col-span-1 bg-sage-100 rounded-lg p-6 flex flex-col justify-center">
              <div className="text-sage-900 text-left">
                <h3 className="text-xl font-semibold text-sage-900 mb-4">Accommodation Options</h3>
                <ul className="space-y-2 list-none text-sage-700">
                  <li>1. Shared Room</li>
                  <li>2. Single Occupancy</li>
                  <li>3. Couple Stay</li>
                  <li>4. Deluxe Room</li>
                  <li>5. 2BHK Option</li>
                </ul>
                <p className="mt-4 text-sm text-sage-600">* Shared/Full Time Personal Caregiver available at an extra cost</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - In Middle */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover-lift bg-white/90 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-full mb-6">
                    <service.icon className="h-8 w-8 text-sage-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sage-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
