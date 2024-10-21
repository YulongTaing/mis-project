// src/app/tracker/page.jsx

import OrderTracking from '../../components/ordertracking'; // Import OrderTracking component

export default function TrackerPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>
      <OrderTracking /> {/* Render the OrderTracking component */}
    </>
  );
}