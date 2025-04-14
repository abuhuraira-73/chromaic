import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper to get auth config with token
const authConfig = () => {
    const token = localStorage.getItem("userToken");
    return {
        headers: { Authorization: `Bearer ${token}` }
    };
};

// Create an order
const createOrder = async (orderData) => {
    try {
        console.log("Creating order with data:", orderData);
        const response = await axios.post(
            `${API_URL}/orders`, 
            orderData,
            authConfig()
        );
        
        console.log("Order creation response:", response.data);
        
        // Clear cart if order is created successfully
        if (response.data) {
            localStorage.setItem('cartUpdated', 'true');
        }
        
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};

// Process payment
const processPayment = async (orderId, paymentDetails) => {
    try {
        console.log("Processing payment for order:", orderId, "with details:", paymentDetails);
        const response = await axios.post(
            `${API_URL}/payment/process`, 
            { orderId, ...paymentDetails },
            authConfig()
        );
        
        console.log("Payment processing response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error processing payment:", error);
        throw error;
    }
};

// Get payment status
const getPaymentStatus = async (paymentId) => {
    try {
        console.log("Getting payment status for:", paymentId);
        const response = await axios.get(
            `${API_URL}/payment/status/${paymentId}`,
            authConfig()
        );
        
        console.log("Payment status response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching payment status:", error);
        throw error;
    }
};

// Get user's order history
const getOrderHistory = async () => {
    try {
        console.log("Getting order history");
        const response = await axios.get(
            `${API_URL}/orders/myorders`,
            authConfig()
        );
        
        console.log("Order history response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching order history:", error);
        throw error;
    }
};

// Get order details
const getOrderDetails = async (orderId) => {
    try {
        console.log("Getting order details for:", orderId);
        const response = await axios.get(
            `${API_URL}/orders/${orderId}`,
            authConfig()
        );
        
        console.log("Order details response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching order details:", error);
        throw error;
    }
};

const paymentService = {
    createOrder,
    processPayment,
    getPaymentStatus,
    getOrderHistory,
    getOrderDetails
};

export default paymentService; 