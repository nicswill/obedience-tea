// src/components/Testimonials.tsx
import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Atlanta, GA",
      condition: "Chronic Fatigue",
      testimonial:
        "I started drinking Obedience Tea at night like Dishawn recommended. After 3 months, my energy transformed. I went from dragging through the day to waking up refreshed and full of life. God truly used him to create something miraculous.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Michael T.",
      location: "Houston, TX",
      condition: "High Blood Pressure",
      testimonial:
        "Following Dishawn’s journey, I added Obedience Tea to my routine. My blood pressure has stabilized, and my doctor is stunned. Obedience and natural healing go hand in hand. Glory to God!",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Maria L.",
      location: "Phoenix, AZ",
      condition: "Digestive Issues",
      testimonial:
        "I was skeptical, but I followed the instructions and took the tea consistently at night. My digestion improved within weeks. I believe God placed this healing wisdom in Dishawn’s hands for a reason.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "James W.",
      location: "Chicago, IL",
      condition: "Anxiety & Stress",
      testimonial:
        "Drinking the tea before bed has been life-changing. The calm I feel is unlike anything else. I sleep better and wake up with peace. Dishawn’s obedience to God is blessing others deeply.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "Rebecca K.",
      location: "Miami, FL",
      condition: "Joint Pain",
      testimonial:
        "I’ve had joint issues for years. Since starting Obedience Tea, inflammation is down and I’m moving freely again. The herbs work differently for everyone, just like Dishawn shared — and it’s real.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
    {
      name: "David R.",
      location: "Seattle, WA",
      condition: "Insomnia",
      testimonial:
        "I’ve struggled with sleep for years. Drinking this tea nightly has reset my rest. I now wake up clear-headed and restored. It’s truly more than a product — it’s a gift from God.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="h-12 w-12 text-gold-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-earth-800 mb-6">Testimonies of Healing</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Obedience Tea began as a response to prayer — and now it's changing lives. Each testimony here reflects the
            power of God’s provision, Dishawn’s obedience, and the natural healing found in every cup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sage-50 to-gold-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-100 animate-fade-in-up"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-earth-800">{testimonial.name}</h4>
                  <p className="text-sm text-sage-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
                ))}
              </div>

              <div className="bg-white p-4 rounded-lg mb-4">
                <Quote className="h-6 w-6 text-gold-400 mb-2" />
                <p className="text-sage-700 italic leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="bg-sage-100 p-3 rounded-lg">
                <p className="text-xs font-medium text-sage-600 mb-1">Condition Addressed:</p>
                <p className="text-sm font-semibold text-earth-700">{testimonial.condition}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-extrabold italic text-gold-700 tracking-wide animate-fade-in">
            Drink in faith, stay consistent, and believe God for your breakthrough.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
