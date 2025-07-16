import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import teaImage from '../assets/obedience-tea.jpg';

const products = [
  {
    id: 'prod_SgiJPXw6o49qBg',
    name: 'The Obedience Bundle (30 Tea Bags)',
    price: '$82.00',
    link: 'https://buy.stripe.com/cNi4gy9br2YDdLOdEvao80e',
    description: 'Full obedience package — 60 servings (30 bags used twice). Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: '🌟 Most Healing',
  },
  {
    id: 'prod_SePIYLkkBeKoTz',
    name: 'Faith Fuel (20 Tea Bags)',
    price: '$57.00',
    link: 'https://buy.stripe.com/fZu00i87ngPtfTW6c3ao80a',
    description: 'Best value — 40 servings (20 bags used twice). Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: '🏆 Best Value',
  },
  {
    id: 'prod_SePjJLG64V37nO',
    name: 'The Middle Ground (15 Tea Bags)',
    price: '$47.00',
    link: 'https://buy.stripe.com/aFaaEW9br1UzbDGcArao809',
    description: 'Popular middle-ground package — 30 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null,
  },
  {
    id: 'prod_SePyXRAEQqysy2',
    name: 'Healing Start (10 Tea Bags)',
    price: '$32.00',
    link: 'https://buy.stripe.com/14A28qcnDbv9fTWasjao808',
    description: 'A faithful start to healing — 20 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null,
  },
  {
    id: 'prod_SeQBMuGbQbikIn',
    name: 'First Sip of Faith (5 Tea Bags)',
    price: '$22.00',
    link: 'https://buy.stripe.com/9B628qafvgPtgY0bwnao807',
    description: 'Try it with full faith — 10 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null,
  },
];

const CopyField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex items-center justify-between space-x-2">
      <span className="text-sage-800 font-medium">{label}</span>
      <button
        onClick={handleCopy}
        className="text-xs text-gold-500 hover:text-gold-600 flex items-center space-x-1"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        <span>{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
};

const Order: React.FC = () => {
  return (
    <section id="order" className="py-20 px-4 bg-sage-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-earth-800 mb-3">
          📦 Order Your Tea – Delivered with Faith
        </h2>
        <p className="text-sage-700 text-lg">Choose your blend and begin your healing journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 shadow-md relative border border-sage-200"
          >
            {product.badge && (
              <div className="absolute top-0 right-0 translate-x-[-0.5rem] -translate-y-1 bg-gold-400 text-white px-3 py-1 text-xs font-bold rounded-bl-xl shadow-sm z-10">
                {product.badge}
              </div>
            )}
            <div className="min-h-[120px] mb-2">
              <h3 className="text-xl font-bold text-earth-900">{product.name}</h3>
            </div>
            <p className="text-xl text-gold-600 font-semibold mb-2">{product.price}</p>
            <p className="text-sage-700 mb-3">{product.description}</p>
            <p className="text-sage-900 italic font-semibold mb-4">{product.instructions}</p>
            <p className="text-xs text-sage-500 italic mb-4">Product ID: {product.id}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-4 rounded-full transition duration-200"
            >
              Purchase
            </a>
          </div>
        ))}

        {/* Order Directly from Dishawn */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-sage-200">
          <h3 className="text-xl font-bold text-earth-900 mb-4">📬 Order Directly from Dishawn</h3>
          <ul className="space-y-3 text-sm">
            <li><CopyField label="📞 Call or Text: 973-517-3382" value="973-517-3382" /></li>
            <li><CopyField label="📧 Email: Shawn.0778@yahoo.com" value="Shawn.0778@yahoo.com" /></li>
            <li><CopyField label="💵 Cash App: $DishawnEvans" value="$DishawnEvans" /></li>
            <li><CopyField label="🍎 Apple Pay: 973-517-3382" value="973-517-3382" /></li>
            <li><CopyField label="🏦 Zelle: 973-517-3382" value="973-517-3382" /></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Order;
