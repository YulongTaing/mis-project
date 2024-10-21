// src/app/api/orders/route.js

let orders = []; // In-memory array to store orders for demonstration

export async function GET(request) {
  return new Response(JSON.stringify(orders), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = await request.json();
  const newOrder = {
    id: orders.length + 1, // Simple ID generation
    product: data.product,
    quantity: data.quantity,
    trackingNumber: `TRACK-${orders.length + 1}`, // Generate a tracking number
    status: 'Pending',
  };
  
  orders.push(newOrder); // Add new order to the array
  return new Response(JSON.stringify(newOrder), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}