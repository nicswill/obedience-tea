import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-green-50 to-white">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your subscription was successful. We're honored you chose <strong>Obedience Tea by Dishawn</strong>.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
      >
        Return Home
      </a>
    </div>
  );
};

export default ThankYou;
