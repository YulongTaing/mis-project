// src/app/api/products/route.js

let products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
  ]; // Sample products for demonstration
  
  export async function GET(request) {
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  export async function POST(request) {
    const data = await request.json();
    
    const newProduct = {
      id: products.length + 1, // Simple ID generation
      name: data.name,
      price: data.price,
    };
  
    products.push(newProduct); // Add new product to the array
    return new Response(JSON.stringify(newProduct), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  }