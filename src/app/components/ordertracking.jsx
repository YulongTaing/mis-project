// src/components/OrderTracking.jsx

import { useState } from 'react';

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchOrderStatus = async () => {
    setError(''); // Reset error message
    const response = await fetch(`/api/orders?trackingNumber=${trackingNumber}`);
    
    if (response.ok) {
      const data = await response.json();
      setOrderDetails(data);
    } else {
      setError('Order not found. Please check your tracking number.');
      setOrderDetails(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Track Your Order</h2>
      <input 
        type="text" 
        placeholder="Enter Tracking Number" 
        value={trackingNumber} 
        onChange={(e) => setTrackingNumber(e.target.value)} 
        className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
      />
      <button 
        onClick={fetchOrderStatus} 
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Track Order
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {orderDetails && (
        <div className="mt-4">
          <h3 className="font-bold">Order Details:</h3>
          <p>Product: {orderDetails.product}</p>
          <p>Quantity: {orderDetails.quantity}</p>
          <p>Status: {orderDetails.status}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;