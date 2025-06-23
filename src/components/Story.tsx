// src/components/Story.tsx
import React from 'react';
import DishawnImage from '../assets/dishawn-headshot.jpg';

const Story: React.FC = () => {
  return (
    <section
      id="story"
      className="relative bg-fixed bg-center bg-cover py-24 px-6 md:px-12 text-earth-900"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/4041393/pexels-photo-4041393.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}
    >
      <div className="bg-white bg-opacity-90 p-8 md:p-12 rounded-xl max-w-4xl mx-auto shadow-2xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <img
            src={DishawnImage}
            alt="Dishawn headshot"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-gold-400 shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold mb-2">Dishawn’s Journey of Obedience</h2>
            <p className="text-sage-600 italic">Founder of Obedience Tea</p>
          </div>
        </div>

        <p className="text-lg leading-relaxed mb-4">
          When my blood pressure started rising and falling unpredictably, I didn’t want to rely on man-made
          medicine. So I prayed and asked God to reveal what He already placed on this earth for healing. The answer
          came through a divine combination of herbs — and obedience.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          At first, I drank the tea every morning and felt no different. Then one night I took it instead, and the
          next morning I felt like a 10-year-old again — energized and restored. God tapped me and said, “Drink it at
          night.” That obedience unlocked everything.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          As I shared the tea, testimonies poured in: people with high blood pressure saw it drop. Those with high
          sugar saw it level out. Some found relief from anxiety, others from pain, insomnia, or chronic fatigue.
          Everyone had their own story. I just kept listening, documenting, and thanking God.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I take no credit. This tea belongs to God. I’m just grateful to play a part in His healing work. I’m
          obedient to what He asked me to do — and now I pass that blessing to you.
        </p>
        <p className="text-lg font-semibold italic text-center text-sage-700">
          “It’s not about the coins. It’s about the testimonies.” — Dishawn
        </p>
      </div>
    </section>
  );
};

export default Story;
