// frontend/src/services/wishlistService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Helper to get auth config
const getConfig = () => {
    const token = localStorage.getItem("userToken");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Content-Type needed for POST
        },
    };
};

// Get user's wishlist
const getWishlist = async () => {
    const config = getConfig();
    // Omit Content-Type for GET request
    delete config.headers["Content-Type"];
    const response = await axios.get(`${API_URL}/wishlist`, config);
    return response.data; // Returns the populated wishlist array
};


// Add product to wishlist
const addToWishlist = async (productId) => {
    const config = getConfig();
    const response = await axios.post(`${API_URL}/wishlist`, { productId }, config);
    return response.data; // Returns { message: '...' }
};

// Remove product from wishlist
const removeFromWishlist = async (productId) => {
    const config = getConfig();
    // Omit Content-Type for DELETE request
    delete config.headers["Content-Type"];
    const response = await axios.delete(`${API_URL}/wishlist/${productId}`, config);
    return response.data; // Returns { message: '...' }
};

export default { getWishlist, addToWishlist, removeFromWishlist };
