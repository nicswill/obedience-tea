// src/components/Order.tsx
import React, { useState } from 'react';
import { Check, Smartphone, Copy, X } from 'lucide-react';


const Order: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState('');
  const [filter, setFilter] = useState<'all' | 'one-time' | 'subscription'>('all');
  const [showModal, setShowModal] = useState(false);
  const [modalPkg, setModalPkg] = useState<any>(null);

  const handleOrder = (pkg: any) => {
    setModalPkg(pkg);
    setShowModal(true);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const commonFeatures = [
    '**Use 1 bag at night, reuse in morning**',
    '**Drink 8–10 oz per cup**'
  ];

  const packages = [
    {
      id: 'starter',
      name: 'Faith Builder (Subscription)',
      description: 'Most popular healing journey',
      price: 79.97,
      originalPrice: 119.97,
      type: 'subscription',
      servings: '90 servings (3 months)',
      savings: 'Save $40',
      popular: true,
      features: [
        ...commonFeatures,
        '3 month supply',
        'Bonus prayer booklet',
        'Personalized prayer card',
        'Priority email support',
        'Free shipping'
      ]
    },
    {
      id: 'transformation',
      name: 'Divine Transformation (Subscription)',
      description: 'Complete healing protocol',
      price: 149.97,
      originalPrice: 239.97,
      type: 'subscription',
      servings: '180 servings (6 months)',
      savings: 'Save $90',
      popular: false,
      features: [
        ...commonFeatures,
        '6 month supply',
        'Personal consultation call',
        'Custom prayer plan',
        'Healing journal',
        'VIP support line',
        'Free expedited shipping'
      ]
    },
    {
      id: 'monthly',
      name: 'Obedient Life (Monthly)',
      description: 'Ongoing health and obedience support',
      price: 29.97,
      type: 'subscription',
      servings: '30 servings (monthly auto-renew)',
      savings: 'Flexible cancel anytime',
      popular: false,
      features: [
        ...commonFeatures,
        'Monthly tea replenishment',
        'Prayer encouragement message',
        'Free shipping',
        'Auto-billed each month'
      ]
    },
    {
      id: 'bag20',
      name: '20 Tea Bags',
      description: 'Best value – full healing supply',
      price: 50,
      type: 'one-time',
      servings: '40 servings (20 bags used twice)',
      popular: false,
      features: [
        ...commonFeatures,
        'Includes full instructions',
        'Blessed and prayed over'
      ]
    },
    {
      id: 'bag15',
      name: '15 Tea Bags',
      description: 'Popular middle-ground package',
      price: 40,
      type: 'one-time',
      servings: '30 servings (15 bags used twice)',
      popular: false,
      features: [
        ...commonFeatures,
        'Includes guidance and prayer card'
      ]
    },
    {
      id: 'bag10',
      name: '10 Tea Bags',
      description: 'A faithful start to healing',
      price: 25,
      type: 'one-time',
      servings: '20 servings (10 bags used twice)',
      popular: false,
      features: [
        ...commonFeatures,
        'Great for beginners',
        'Includes usage tips and support'
      ]
    },
    {
      id: 'bag5',
      name: '5 Tea Bags',
      description: 'Try it with full faith',
      price: 15,
      type: 'one-time',
      servings: '10 servings (5 bags used twice)',
      popular: false,
      features: [
        ...commonFeatures,
        'Good starter or gift option',
        'Prayer card included'
      ]
    }
  ];

  const groupedPackages = {
    subscription: packages.filter(p => p.type === 'subscription'),
    oneTime: packages.filter(p => p.type === 'one-time')
  };

  const renderPackageCard = (pkg: any) => (
    <div
      key={pkg.id}
      className={`relative bg-white rounded-xl shadow-md border transition-all duration-300 cursor-pointer p-5 hover:shadow-xl hover:scale-[1.02] ${
        pkg.popular ? 'ring-4 ring-gold-500 border-gold-500' : 'border-sage-100 hover:border-sage-200'
      }`}
      onClick={() => handleOrder(pkg)}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gold-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow animate-bounce">
            🌟 Featured
          </span>
        </div>
      )}
      <h3 className="text-lg font-bold text-earth-800 mb-1">{pkg.name}</h3>
      <p className="text-sage-600 text-sm mb-2">{pkg.description}</p>

      <div className="mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-earth-800">${pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-sm text-sage-500 line-through">${pkg.originalPrice}</span>
          )}
        </div>
        <p className="text-xs text-sage-600">{pkg.servings}</p>
        {pkg.savings && (
          <p className="text-gold-600 font-semibold text-xs">{pkg.savings}</p>
        )}
      </div>

      <div className="text-sm text-sage-700 mb-1 font-semibold">Usage Instructions</div>
      <ul className="text-sage-700 text-sm space-y-1 mb-4">
        {pkg.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-sage-500" />
            <span dangerouslySetInnerHTML={{ __html: f }} />
          </li>
        ))}
      </ul>

      <button
        className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 rounded-full text-sm"
      >
        Order Now
      </button>
    </div>
  );

  return (
    <section id="order" className="py-16 bg-gradient-to-br from-sage-50 via-gold-50 to-earth-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8 gap-4">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-medium text-sm border ${filter === 'all' ? 'bg-gold-400 text-white' : 'text-sage-700 border-sage-300 hover:bg-sage-100'}`}>All</button>
          <button onClick={() => setFilter('one-time')} className={`px-4 py-2 rounded-full font-medium text-sm border ${filter === 'one-time' ? 'bg-gold-400 text-white' : 'text-sage-700 border-sage-300 hover:bg-sage-100'}`}>One-Time</button>
          <button onClick={() => setFilter('subscription')} className={`px-4 py-2 rounded-full font-medium text-sm border ${filter === 'subscription' ? 'bg-gold-400 text-white' : 'text-sage-700 border-sage-300 hover:bg-sage-100'}`}>Subscription</button>
        </div>

        {(filter === 'all' || filter === 'subscription') && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-sage-700 mb-3">Subscription Packages</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {groupedPackages.subscription.map(renderPackageCard)}
            </div>
          </div>
        )}

        {(filter === 'all' || filter === 'one-time') && (
          <div>
            <h2 className="text-lg font-semibold text-sage-700 mb-3">One-Time Purchases</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {groupedPackages.oneTime.map(renderPackageCard)}
            </div>
          </div>
        )}

        <div className="mt-16 text-left max-w-xl mx-auto bg-white p-6 border border-sage-200 rounded-xl shadow-lg">
          <h4 className="text-xl font-bold text-earth-800 mb-4 flex items-center">
            <Smartphone className="w-5 h-5 mr-2 text-gold-500" /> Order Directly from Dishawn
          </h4>
          <ul className="space-y-3 text-sage-700 text-sm">
            {[
              { label: 'Phone', value: '973-517-3382', display: '📱 Call or Text' },
              { label: 'Email', value: 'Shawn.0778@yahoo.com', display: '📧 Email' },
              { label: 'Cash App', value: '$DishawnEvans', display: '💵 Cash App' },
              { label: 'Apple Pay', value: '973-517-3382', display: '🍎 Apple Pay' },
              { label: 'Zelle', value: 'ggmb2022@gmail.com', display: '🏦 Zelle' }
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between">
                <span><strong>{item.display}:</strong> {item.value}</span>
                <button
                  onClick={() => copyToClipboard(item.value, item.label)}
                  className="text-gold-500 hover:text-gold-600"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          {copiedItem && (
            <p className="mt-2 text-xs text-gold-600 italic">{copiedItem} copied to clipboard</p>
          )}
          <p className="mt-4 text-sm italic text-sage-600">
            Include your name, order size, and shipping address when paying directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Order;
