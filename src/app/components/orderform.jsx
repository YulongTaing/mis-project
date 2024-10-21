// components/OrderForm.jsx
import { useState } from 'react';

const OrderForm = () => {
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add order submission logic here
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Product Name" 
                    value={product} 
                    onChange={(e) => setProduct(e.target.value)} 
                    className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
                    required 
                />
                <input 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)} 
                    className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;