// components/Header.js
const Header = () => {
    return (
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2x</header>l font-bold">Order Management System</h1>
        <nav className="mt-2">
          <a href="/" className="mr-4 hover:underline">Home</a>
          <a href="/tracker" className="hover:underline">Track Order</a>
          <a href="/admin/dashboard" className="hover:underline">Admin Dashboard</a>
        </nav>
      </header>
    );
  };
  
  export default Header;