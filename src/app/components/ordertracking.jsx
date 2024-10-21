// components/OrderTracking.jsx
import { useState } from 'react';

const OrderTracking = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);

    const fetchOrderStatus = async () => {
        // Add logic to fetch order status based on tracking number
        // Simulate fetching order status for demonstration purposes
        setOrderStatus('Your order is being processed.');
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
            <button onClick={fetchOrderStatus} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                Track Order
            </button>
            {orderStatus && <p className="mt-4">{orderStatus}</p>}
        </div>
    );
};

export default OrderTracking;