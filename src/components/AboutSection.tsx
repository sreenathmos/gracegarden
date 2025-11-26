const AboutSection = () => {
  const highlights = [
    "24/7 Qualified Nurses",
    "Elevator Access",
    "Doctor Visits",
    "Scenic Hill Views",
    "Garden Therapy",
    "Emergency Care"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <div className="mb-16 animate-fade-in">
          <div className="space-y-6 mb-12 mx-auto max-w-5xl text-left">
            <p className="text-lg text-sage-700 leading-relaxed">
              Grace Garden is thoughtfully designed to offer a serene, home-like atmosphere 
              supported by modern amenities and continuous care. 
              Every corner is created to ensure comfort, accessibility, and emotional well-being.
            </p>

            <p className="text-xl text-sage-700 leading-relaxed">
              We focus on creating an environment that feels like home, while ensuring the professional 
              care and attention needed for healthy, happy living. 
              With dedicated staff, balanced routines, and warm surroundings, 
              Grace Garden stands as a place where seniors find companionship, wellness, and serenity.
            </p>
          </div>
        </div>

        <div className="mt-8 mx-auto max-w-5xl">
          <h3 className="text-xl font-serif font-semibold text-sage-900 mb-6 text-center">
            Why Choose Grace Garden?
          </h3>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover-lift border border-sage-100 animate-fade-in-up">
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                A Place Built for Well-Being
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Our community blends comfort with care — offering peaceful living spaces, nutritious meals, and access to round-the-clock assistance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover-lift border border-sage-100 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                Holistic Senior Care
              </h3>
              <p className="text-sage-700 leading-relaxed">
                From daily support to recreational activities and wellness programs, we focus on nurturing both physical and emotional well-being.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover-lift border border-sage-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                Safe & Supportive Environment
              </h3>
              <p className="text-sage-700 leading-relaxed">
                With structured routines, secure surroundings, and trained professionals, residents experience a space that is both safe and reassuring.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover-lift border border-sage-100 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">
                Life with Dignity and Joy
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Grace Garden encourages independence, meaningful moments, and social engagement — making every resident feel valued and connected.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart - Highlights */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
          <h3 className="text-xl font-serif font-semibold text-sage-900 mb-6 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-sage-50 rounded-lg hover-lift"
              >
                <div className="w-3 h-3 bg-sage-500 rounded-full mx-auto mb-2"></div>
                <p className="text-sm font-medium text-sage-800">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
