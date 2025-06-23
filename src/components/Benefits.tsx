// src/components/Benefits.tsx
import React from 'react';
import { Shield, Heart, Zap, Moon, Droplet, Sparkles, BookOpen } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Immune System Support",
      description: "Strengthen your body's natural defenses with God's protective herbs.",
      herbs: "Echinacea, Elderberry, Ginger",
      scripture: "Exodus 15:26",
      verse: "\"For I am the Lord who heals you.\""
    },
    {
      icon: Heart,
      title: "Heart & Circulation",
      description: "Promote cardiovascular health through divine botanical wisdom.",
      herbs: "Hawthorn, Hibiscus, Cayenne",
      scripture: "Proverbs 4:23",
      verse: "\"Guard your heart, for everything you do flows from it.\""
    },
    {
      icon: Zap,
      title: "Natural Energy",
      description: "Sustained vitality without jitters, as the Creator intended.",
      herbs: "Green Tea, Ginseng, Peppermint",
      scripture: "Isaiah 40:31",
      verse: "\"They will run and not grow weary.\""
    },
    {
      icon: Moon,
      title: "Peaceful Rest",
      description: "Gentle herbs to calm your spirit and promote restful sleep.",
      herbs: "Chamomile, Lavender, Passionflower",
      scripture: "Psalm 4:8",
      verse: "\"In peace I will lie down and sleep.\""
    },
    {
      icon: Droplet,
      title: "Detoxification",
      description: "Cleanse your temple with purifying herbs blessed by God.",
      herbs: "Dandelion, Milk Thistle, Nettle",
      scripture: "2 Corinthians 7:1",
      verse: "\"Let us purify ourselves from everything that contaminates.\""
    },
    {
      icon: Sparkles,
      title: "Mental Clarity",
      description: "Clear thinking and a focused mind through natural nootropics.",
      herbs: "Ginkgo, Rosemary, Brahmi",
      scripture: "Romans 12:2",
      verse: "\"Be transformed by the renewing of your mind.\""
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-sage-50 via-white to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-earth-800 mb-6">Heaven's Healing Benefits</h2>
          <p className="text-xl text-sage-700 max-w-3xl mx-auto">
            Each sip is a prayer answered, each benefit a testimony to God's goodness. 
            Experience the restoration He has prepared for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-100 hover:border-gold-200 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sage-100 to-gold-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-sage-600" />
              </div>
              
              <h3 className="text-xl font-bold text-earth-800 mb-3">{benefit.title}</h3>
              <p className="text-sage-700 mb-4 leading-relaxed">{benefit.description}</p>
              
              <div className="bg-sage-50 p-3 rounded-lg mb-2">
                <p className="text-sm font-medium text-sage-600 mb-1">Key Herbs:</p>
                <p className="text-sm text-earth-700">{benefit.herbs}</p>
              </div>

              <p className="text-xs italic text-gold-700 mt-2">
                <BookOpen className="w-4 h-4 inline-block mr-1" />
                <span className="font-semibold">{benefit.scripture}</span> — <span className="italic">{benefit.verse}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gold-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-earth-800 mb-4">100% Natural & Faith-Blessed</h3>
            <p className="text-sage-700 mb-6 max-w-3xl mx-auto">
              Every ingredient is carefully sourced, organically grown, and blessed through prayer. 
              No artificial additives, preservatives, or chemicals — just God's pure creation 
              working in perfect harmony for your healing.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-sage-100 text-sage-700 px-4 py-2 rounded-full">Organic</span>
              <span className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full">Prayer Blessed</span>
              <span className="bg-earth-100 text-earth-700 px-4 py-2 rounded-full">No Additives</span>
              <span className="bg-sage-100 text-sage-700 px-4 py-2 rounded-full">Gluten Free</span>
              <span className="bg-gold-100 text-gold-700 px-4 py-2 rounded-full">Vegan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
