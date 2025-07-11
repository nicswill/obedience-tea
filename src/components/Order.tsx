import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const products = [
  {
    id: 'prod_SZn0tyIc7I5aSN',
    name: 'Obedient Life (Monthly)',
    price: '$36.97 / month',
    link: 'https://buy.stripe.com/6oUaEW4Vb0QvfTWasjao80d',
    description: 'Stay obedient with our foundational monthly plan. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null
  },
  {
    id: 'prod_SeI2rpT2WrUZKn',
    name: 'Faith Builder',
    price: '$86.97 every 3 months',
    link: 'https://buy.stripe.com/fZueVc3R79n1bDGeIzao80c',
    description: 'Most popular healing journey — 3-month supply. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: '🌟 Most Popular'
  },
  {
    id: 'prod_SeOskNYSOPw8Yp',
    name: 'Divine Transformation',
    price: '$156.97 every 6 months',
    link: 'https://buy.stripe.com/00w00ifzPczd4beasjao80b',
    description: 'Complete healing protocol — 6-month supply. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null
  },
  {
    id: 'prod_SePIYLkkBeKoTz',
    name: '20 Tea Bags',
    price: '$57.00',
    link: 'https://buy.stripe.com/fZu00i87ngPtfTW6c3ao80a',
    description: 'Best value — 40 servings (20 bags used twice). Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: '🏆 Best Value'
  },
  {
    id: 'prod_SePjJLG64V37nO',
    name: '15 Tea Bags',
    price: '$47.00',
    link: 'https://buy.stripe.com/aFaaEW9br1UzbDGcArao809',
    description: 'Popular middle-ground package — 30 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null
  },
  {
    id: 'prod_SePyXRAEQqysy2',
    name: '10 Tea Bags',
    price: '$32.00',
    link: 'https://buy.stripe.com/14A28qcnDbv9fTWasjao808',
    description: 'A faithful start to healing — 20 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null
  },
  {
    id: 'prod_SeQBMuGbQbikIn',
    name: '5 Tea Bags',
    price: '$22.00',
    link: 'https://buy.stripe.com/9B628qafvgPtgY0bwnao807',
    description: 'Try it with full faith — 10 servings. Includes estimated shipping and handling.',
    instructions: 'Use 1 bag at night, reuse in morning. Drink 8–10 oz per cup.',
    badge: null
  }
];

const Order: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="order" className="py-20 bg-sage-50 text-earth-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Order Now</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <div className="bg-white border border-gold-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between relative">
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                    {product.badge}
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">{product.name}</h3>
                  <p className="text-gold-600 font-semibold text-lg mb-2">{product.price}</p>
                  <p className="text-sage-700 text-sm mb-2">{product.description}</p>
                  <p className="text-sage-800 text-sm font-medium italic mb-4">{product.instructions}</p>
                  <p className="text-xs text-sage-500 italic">Product ID: {product.id}</p>
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2 px-4 rounded-lg text-center"
                >
                  Purchase
                </a>
              </div>

              {/* Show direct order after last product */}
              {product.id === 'prod_SeQBMuGbQbikIn' && (
                <div className="bg-white border border-sage-200 rounded-2xl shadow-md p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-bold text-gold-700 mb-4">📦 Order Directly from Dishawn</h3>
                  <ul className="space-y-3 text-sage-700 text-sm">
                    {[
                      { label: 'Call or Text', value: '973-517-3382' },
                      { label: 'Email', value: 'Shawn.0778@yahoo.com' },
                      { label: 'Cash App', value: '$DishawnEvans' },
                      { label: 'Apple Pay', value: '973-517-3382' },
                      { label: 'Zelle', value: '973-517-3382' }
                    ].map(({ label, value }) => (
                      <li key={label} className="flex justify-between items-center">
                        <span>📌 <strong>{label}:</strong> {value}</span>
                        <button
                          onClick={() => copyToClipboard(value, label)}
                          className="ml-2 text-sage-400 hover:text-gold-500 transition"
                          title="Copy"
                        >
                          {copiedField === label ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-sage-500 italic">
                    Include your name, order size, and shipping address when paying directly.
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
