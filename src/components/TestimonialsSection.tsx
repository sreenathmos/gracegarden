
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juliet",
      relation: "Daughter",
      content: "It was such pleasant and beautiful surprise .but really happy for you if this is what you had always wanted to do...wishing you all success 🙏❤️ may this venture help you reach your goals, bring you happiness peace and blessings ❤️😊🙏 God bless you and your family abundantly...May he guide you on the right path every step of the way forward❤️🙏😊",
      rating: 5,
      location: "Dubai"
    },
    {
      name: "Shaji vamadevan",
      relation: "CEO VST",
      content: "I am so happy to hear this wonderful news from you. Take this opportunity to wish you all the very best in your maiden and bold step. May God give you all the courage and strength to take this new venture to it's pinnacle of success. May you and the team continue to grow from this venture. My prayers are always with you dear.🎊👏👏👏👍🙏",
      rating: 5,
      location: "Bangalore"
    },
    {
      name: "Malliyoor divakaran Thirumeni Kottayam",
      relation: "Daughter-in-law",
      content: "Ellam bhangiyayi aakatte. 🙏🙏Daivathinte anugrahamode ella karyangalum sundaramaayi nadannukondirikatte. Ente hridayathil ninnulla prarthanakalum aashamsakalum ningalodoppam endinum undayirikkatte.",
      rating: 5,
      location: "Chennai"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicators */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-3 md:col-span-2 bg-sage-100 rounded-lg p-6">
              <div className="space-y-4">
                <div className="text-sage-700 text-left text-lg leading-relaxed">
                  <br></br>
                  Residents enjoy a holistic lifestyle, morning walks, Indoor/Outdoor games physiotherapy, 
                  fresh meals, reading, gardening, group activities, and festival celebrations all within a 
                  secure gated environment with CCTV monitoring, on-site caretaker family, and emergency tie-ups with nearby hospitals.
                </div>
                <div className="text-sage-700 text-left mt-4 text-lg leading-relaxed">
                  {/* <h3 className="text-xl font-semibold text-sage-900 mb-3">Lifestyle</h3> */}
                  Grace Garden isn’t just a residence — it’s a community built on compassion, dignity, and peace of mind. You live independently, cared for with warmth and respect, while your investment remains safe and refundable.
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 bg-sage-100 rounded-lg p-6 flex flex-col justify-center h-full">
              <div className="text-sage-900 text-left">
                <h3 className="text-xl font-semibold text-sage-900 mb-4">Accommodation Options</h3>
                <ul className="space-y-2 list-none">
                  <li>1. Shared Room</li>
                  <li>2. Single Occupancy</li>
                  <li>3. Couple Stay</li>
                  <li>4. Deluxe Room</li>
                  <li>5. 2BHK Option</li>
                  <br></br>
                  * Shared/Full Time Personal Caregiver available at an extra cost
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-900 mb-6">
            Stories of Joy & Comfort
          </h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
            Hear from families who have entrusted us with their most precious relationships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover-lift bg-sage-50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <blockquote className="text-sage-800 text-center italic leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author Info */}
                <div className="text-center">
                  <p className="font-semibold text-sage-900">{testimonial.name}</p>
                  <p className="text-sm text-sage-600">{testimonial.relation} • {testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
