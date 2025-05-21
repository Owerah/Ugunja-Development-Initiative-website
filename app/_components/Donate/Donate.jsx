'use client';

import React, { useState } from 'react';

function Donate() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const renderDetails = () => {
    switch (selectedMethod) {
      case 'mpesa':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">How to Donate with M-Pesa</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Go to M-Pesa</li>
              <li>Select "Lipa na M-Pesa"</li>
              <li>Choose "Paybill"</li>
              <li>Enter Business Number: <strong>4019689</strong></li>
              <li>Enter Account Number: <strong>YourName</strong></li>
              <li>Enter Amount and your PIN</li>
              <li>Press OK</li>
            </ol>
          </div>
        );
      case 'kcb':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">KCB Bank Details</h3>
            <p><strong>Bank Name:</strong> KENYA COMMERCIAL BANK</p>
            <p><strong>Account Name:</strong>UGUNJA DEVELOPMENT INITIATIVE</p>
            <p><strong>Account Number:</strong>1205132848</p>
            <p><strong>Branch:</strong> UGUNJA</p>
            <p><strong>SWIFT Code:</strong> KCBLKENX</p>
          </div>
        );
      case 'paypal':
        return (
          <div>
            <h3 className="text-xl font-semibold mb-2">Donate via PayPal</h3>
            <p>You can donate using the button below:</p>
            <a href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID" target="_blank" rel="noopener noreferrer">
              <button className="mt-2 bg-blue-500 text-white p-2 rounded">Donate with PayPal</button>
            </a>
          </div>
        );
      default:
        return <p>Select a donation method to see instructions.</p>;
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Support Us Through Donation</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        {[
          { method: 'mpesa', label: 'M-Pesa', bg: 'bg-green-600', hover: 'hover:bg-green-700', icon: 'mpesa.png' },
          { method: 'kcb', label: 'KCB Bank', bg: 'bg-yellow-600', hover: 'hover:bg-yellow-700', icon: 'kcb.png' },
          { method: 'paypal', label: 'PayPal', bg: 'bg-blue-600', hover: 'hover:bg-blue-700', icon: 'paypal.png' }
        ].map(({ method, label, bg, hover, icon }) => (
          <button
            key={method}
            className={`flex flex-col items-center ${bg} ${hover} text-white px-4 py-3 rounded w-full sm:w-auto transition-transform hover:scale-105`}
            onClick={() => setSelectedMethod(method)}
          >
            <img
              src={icon}
              alt={label}
              className="h-20 mb-2 animate-bounce hover:animate-none transition duration-900"
            />
            {label}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded shadow">
        {renderDetails()}
      </div>
    </div>
  );
}

export default Donate;
