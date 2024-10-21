// src/app/api/users/route.js

let users = []; // In-memory array to store users for demonstration

export async function GET(request) {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = await request.json();
  
  const newUser = {
    id: users.length + 1, // Simple ID generation
    name: data.name,
    email: data.email,
  };

  users.push(newUser); // Add new user to the array
  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}