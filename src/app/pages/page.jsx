// src/app/page.jsx

import OrderForm from '../components/OrderForm'; // Import OrderForm component
import OrderTracking from '../components/OrderTracking'; // Import OrderTracking component

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Order Management System</h1>
      <div className="flex flex-col items-center">
        <OrderForm /> {/* Render Order Form */}
        <OrderTracking /> {/* Render Order Tracking */}
      </div>
    </>
  );
}