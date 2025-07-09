import React, { useState } from 'react';

const products = [
  {
    id: 'prod_SZn0tyIc7I5aSN',
    name: 'Obedient Life (Monthly)',
    price: '$29.97 / month',
    link: 'https://buy.stripe.com/7sYcN42N32YDazCcArao800',
    description: 'Stay obedient with our foundational monthly plan.',
    badge: null,
    type: 'subscription'
  },
  {
    id: 'prod_SeI2rpT2WrUZKn',
    name: 'Faith Builder',
    price: '$79.97 every 3 months',
    link: 'https://buy.stripe.com/7sY9AS4Vb9n1cHK0RJao801',
    description: 'Most popular healing journey — 3-month supply.',
    badge: '🌟 Most Popular',
    type: 'subscription'
  },
  {
    id: 'prod_SeOskNYSOPw8Yp',
    name: 'Divine Transformation',
    price: '$149.97 every 6 months',
    link: 'https://buy.stripe.com/bJe14m5ZfdDh6jm6c3ao802',
    description: 'Complete healing protocol — 6-month supply.',
    badge: null,
    type: 'subscription'
  },
  {
    id: 'prod_SePIYLkkBeKoTz',
    name: '20 Tea Bags',
    price: '$50.00',
    link: 'https://buy.stripe.com/6oU00ievL6aP37a57Zao803',
    description: 'Best value — 40 servings (20 bags used twice).',
    badge: null,
    type: 'one-time'
  },
  {
    id: 'prod_SePjJLG64V37nO',
    name: '15 Tea Bags',
    price: '$40.00',
    link: 'https://buy.stripe.com/5kQ9ASgDTczdgY0gQHao804',
    description: 'Popular middle-ground package — 30 servings.',
    badge: null,
    type: 'one-time'
  },
  {
    id: 'prod_SePyXRAEQqysy2',
    name: '10 Tea Bags',
    price: '$25.00',
    link: 'https://buy.stripe.com/cNifZg4Vb0Qv37a7g7ao805',
    description: 'A faithful start to healing — 20 servings.',
    badge: null,
    type: 'one-time'
  },
  {
    id: 'prod_SeQBMuGbQbikIn',
    name: '5 Tea Bags',
    price: '$15.00',
    link: 'https://buy.stripe.com/fZu8wObjz9n12360RJao806',
    description: 'Try it with full faith — 10 servings.',
    badge: null,
    type: 'one-time'
  }
];

const Order: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'one-time' | 'subscription'>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
    console.log(`Product Clicked: ${id}, Quantity: ${value}`);
  };

  const filteredProducts =
    filter === 'all' ? products : products.filter((p) => p.type === filter);

  return (
    <section id="order" className="py-20 bg-sage-50 text-earth-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-6">Order Now</h2>

        <div className="flex justify-center gap-4 mb-10">
          {['all', 'subscription', 'one-time'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type as any)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                filter === type ? 'bg-gold-500 text-white' : 'text-sage-800 border-sage-300 hover:bg-sage-100'
              }`}
            >
              {type === 'all'
                ? 'All'
                : type === 'subscription'
                ? 'Subscriptions'
                : 'One-Time'}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gold-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between relative"
            >
              {product.badge && (
                <span className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded animate-bounce">
                  {product.badge}
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-earth-900 mb-2">{product.name}</h3>
                <p className="text-gold-600 font-semibold text-lg mb-2">{product.price}</p>
                <p className="text-sage-700 text-sm mb-4">{product.description}</p>
                <p className="text-xs text-sage-500 italic">Product ID: {product.id}</p>
                <label className="block mt-4 text-sm font-medium text-sage-700">
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    className="ml-2 w-16 border border-sage-300 rounded px-2 py-1 text-sm"
                  />
                </label>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
