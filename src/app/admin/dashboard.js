// pages/admin/dashboard.js
import { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.product} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;