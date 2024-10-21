// src/app/api/orders/route.js

let orders = [
    { trackingNumber: 'TRACK-1', product: 'Product A', quantity: 2, status: 'Shipped' },
    { trackingNumber: 'TRACK-2', product: 'Product B', quantity: 1, status: 'Pending' },
    // Add more sample orders as needed
  ];
  
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const trackingNumber = searchParams.get('trackingNumber');
  
    const order = orders.find(order => order.trackingNumber === trackingNumber);
  
    if (order) {
      return new Response(JSON.stringify(order), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'Order not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }