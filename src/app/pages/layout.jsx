// src/app/layout.jsx

import '/home/gnol/Downloads/Y4S1/mis_proj/mis-project/src/app/styles/globals.css'; // Import global styles
import Header from '../components/Header'; // Import Header component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Order Management System</title>
        <meta name="description" content="Manage your orders efficiently." />
      </head>
      <body>
        <Header /> {/* Render the Header component */}
        <main className="container mx-auto p-5">{children}</main> {/* Main content area */}
      </body>
    </html>
  );
}