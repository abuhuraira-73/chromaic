// src/services/cartService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/cart';

// Helper to get auth config with token
const authConfig = () => {
    const token = localStorage.getItem("userToken");
    return {
        headers: { Authorization: `Bearer ${token}` }
    };
};

// Get user's cart
const getCart = async () => {
    try {
        const response = await axios.get(API_URL, authConfig());
        return response.data;
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
};

// Add product to cart
const addToCart = async (productId, options) => {
    try {
        const response = await axios.post(
            API_URL, 
            { 
                productId, 
                quantity: options.quantity,
                color: options.color,
                size: options.size
            },
            authConfig()
        );
        return response.data;
    } catch (error) {
        console.error("Error adding to cart:", error);
        throw error;
    }
};

// Update cart item quantity
const updateCartItem = async (itemId, quantity) => {
    try {
        const response = await axios.put(
            `${API_URL}/${itemId}`,
            { quantity },
            authConfig()
        );
        return response.data;
    } catch (error) {
        console.error("Error updating cart item:", error);
        throw error;
    }
};

// Remove item from cart
const removeFromCart = async (itemId) => {
    try {
        const response = await axios.delete(
            `${API_URL}/${itemId}`,
            authConfig()
        );
        return response.data;
    } catch (error) {
        console.error("Error removing from cart:", error);
        throw error;
    }
};

const cartService = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart
};

export default cartService; 