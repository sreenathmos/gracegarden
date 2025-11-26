
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
        {/* Trust indicators moved to ServicesSection */}

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-6">
            Stories of Joy & Comfort
          </h2>
          <p className="text-lg text-sage-700 max-w-3xl mx-auto leading-relaxed">
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
