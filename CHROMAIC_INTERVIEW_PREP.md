# 🧪 Chromaic: Interview Preparation Guide

---

## 🔧 Tech Stack & Architecture

- **Frontend (Dual-App):** 
    - **Customer Store:** React (v19), Tailwind CSS, Bootstrap, Swiper.js, Nouislider.
    - **Admin Panel:** Dedicated React application for internal management and analytics.
- **Backend:** Node.js, Express.js (Modular RESTful API with `express-async-handler` for robust error management).
- **Database:** MongoDB with Mongoose (v8) ODM.
- **Security:** JWT (JSON Web Tokens) for stateless auth, `bcryptjs` for one-way password hashing, and custom `protect`/`admin` middleware.
- **Media:** Cloudinary API for image storage and transformation, handled via `multer`.
- **Architecture:** **Separation of Concerns (SoC)**. The frontend and backend are completely decoupled. The backend follows a controller-based pattern where logic is isolated from routes, ensuring scalability.

### 💡 Deeper Explanation
In **Chromaic**, the architecture is a **Split-Frontend MERN Stack**. We use a single Express backend (`backend/server.js`) that serves as the "Source of Truth" for two completely different React environments. 

- The **Customer Site (`chromaic/`)** focuses on high-speed rendering using React 19's improved concurrent features. We used `nouislider` specifically in the `Shop.js` page to handle complex price filtering without triggering unnecessary re-renders. 
- The **Admin Dashboard (`chromaic-admin/`)** is a data-heavy application that uses Bootstrap for complex layouts like the `OrderList` and `Report` pages. 
- On the backend, we implemented a custom **Centralized Error Handler** using `express-async-handler` across all controllers (like `productController.js`), which ensures that if a database query fails, the frontend receives a clean JSON error message instead of a server crash.

---

## 💡 Project Overview

- **What problem does it solve?** Chromaic provides a "Pro-level" e-commerce experience for niche GenZ fashion, handling complex product attributes (color/size) while offering a separate, high-control admin interface for business operations.
- **Who is it for?**
    - **GenZ Shoppers:** Seeking a fast, modern UI with features like "Quick View" and "Product Comparison."
    - **Admins:** Need a visual way to manage orders, track shipments, and update inventory in real-time.
- **Key Features:**
    - **End-to-End E-commerce:** Cart, wishlist, and multi-step checkout with address validation.
    - **Advanced Admin Controls:** Order tracking, category management, and user oversight.
    - **Real-time Attributes:** Dynamic price updates based on variant selection.

### 💡 Deeper Explanation
The "Core Problem" Chromaic solves is the **Management of Product Complexity**. In the fashion industry, a single T-shirt isn't just one item; it's a matrix of colors and sizes. 

Our implementation handles this by allowing the Admin to upload specific images for each color variant via the `AddProduct.jsx` page. For the customer, we implemented a **Dynamic Swatch System** in the `ProductDetails.js` page. When a user clicks a color swatch, the UI doesn't just change the text; it swaps the entire image gallery and updates the available size list in real-time by filtering the `colors` array stored in our MongoDB `Product` schema.

---

## ⚙️ How It Works (Technical Flow)

- **User Flow End-to-End:** 
    1. **Discovery:** User browses products via REST API calls (`GET /api/products`).
    2. **Engagement:** User selects variants (color/size) which updates local React state.
    3. **Cart/Wishlist:** Items are stored in MongoDB linked to the User model (`PUT /api/users/cart`).
    4. **Checkout:** User submits shipping details; backend generates a unique `orderNumber` and stores the order with a "Processing" status.
    5. **Management:** Admin views the order on the Admin Panel and updates status (Shipped/Delivered) via `PATCH /api/orders/:id`.
- **Frontend-Backend Communication:** Axios-driven REST calls. All protected requests include a `Bearer <token>` in the Authorization header.
- **Database Schema:** 
    - **User:** Stores profile, hashed password, and an embedded array for the cart.
    - **Product:** Rich document containing images, variants (swatches), and inventory levels.
- **Authentication & Authorization:** 
    - **Login:** Returns a JWT containing the User ID.
    - **Authorization:** `protect` middleware verifies the token; `admin` middleware checks the `isAdmin` boolean on the user document before allowing access to dashboard routes.

### 💡 Deeper Explanation
The technical "heart" of the project is the **State-to-Database Sync**. Unlike simpler apps that store the cart only in `localStorage`, Chromaic syncs the cart to the MongoDB `User` model. This is handled in `userController.js`. 

When a user adds an item, an API call is made to `PUT /api/users/cart`. This ensures that if a user logs in from their phone after browsing on a laptop, their items are still there. Furthermore, our `Order` flow uses a **Snapshotting Pattern**. When an order is placed, we don't just link to the product; we copy the price and image into the `orderItems` array in `Order.js`. This prevents "Price Drift"—if an admin changes a price tomorrow, the user's past receipt remains legally and financially accurate.

---

## 🧠 Challenges & Solutions

- **Hardest Part to Build: Multi-Variant Product Management**
    - **Challenge:** Managing products with multiple colors, sizes, and specific images for each color required a complex data structure that remained easy for the Admin to update.
    - **Solution:** Designed a nested Mongoose schema for `colors` and `attributes`. On the frontend, I implemented a "variant picker" that dynamically filters the available images and sizes based on the user's color selection, ensuring they only see valid combinations.
- **Tricky Bug & Resolution: Secure Admin-Only Routing**
    - **Challenge:** Initially, the Admin Panel was accessible to any logged-in user if they knew the URL.
    - **Solution:** Implemented a dual-layer middleware in the backend (`protect` + `admin`). The `protect` middleware decodes the JWT to find the user, and the `admin` middleware checks the `isAdmin` boolean. If both aren't true, the request is rejected with a 401 Unauthorized before any sensitive data is fetched.
- **Performance Optimization: Image Transformation with Cloudinary**
    - **Challenge:** High-resolution product images were causing slow page loads on the customer site.
    - **Solution:** Instead of serving raw files, I integrated the Cloudinary API. During the upload process (via `multer-storage-cloudinary`), I configured automatic resizing and format optimization (delivering WebP to modern browsers). This reduced initial payload sizes by over 60%.

### 💡 Deeper Explanation
A specific technical hurdle was the **Multipart Form Data Upload**. In `productController.js`, we had to handle both text data (title, price) and binary files (images) in a single request. 

We solved this using `multer` and `multer-storage-cloudinary`. The tricky part was that the Admin needed to upload *multiple* images, but then assign those images to *specific* color variants. We solved this by first uploading all images to Cloudinary, receiving an array of URLs, and then using a mapping logic in the frontend to link those URLs to the respective color objects before the final `POST` to the database.

---

## 🔐 Security

- **Authentication Handling:**
    - **Password Hashing:** Used `bcryptjs` with a salt factor of 10 to ensure one-way encryption of user passwords before they ever touch the database (implemented in a Mongoose `pre-save` hook).
    - **Stateless Tokens:** Implemented JWT (JSON Web Tokens) to handle sessions, allowing the frontend to store the token in `localStorage` and send it via HTTP headers for authenticated requests.
- **Input Validation & Sanitization:**
    - **Server-Side Validation:** Used `express-async-handler` to catch and manage errors gracefully. Every critical endpoint (like registration) checks for required fields and existing data (e.g., unique email checks) before processing.
    - **Data Sanitization:** Leveraging Mongoose schemas to strictly enforce data types (e.g., forcing `Number` for prices) and `select('-password')` to ensure sensitive data is never returned in API responses.
- **Protected Routes & Role-Based Access (RBAC):**
    - **Custom Middleware:** Created `protect` (verifies JWT) and `admin` (checks `isAdmin` flag) middleware functions.
    - **Route Guarding:** Applied these to sensitive endpoints like `GET /api/admin/users` or `POST /api/products`, ensuring only authorized personnel can perform CRUD operations on global inventory.

### 💡 Deeper Explanation
For security, we focused on **Defense in Depth**. In `User.js`, we use a Mongoose `pre('save')` hook to hash passwords automatically. This means even the "Update Profile" logic is secure—if a user changes their name but not their password, `isModified('password')` returns false, and we don't re-hash an already hashed string. 

Furthermore, in our `authMiddleware.js`, we don't just check if a token is valid; we fetch the user from the database and attach it to the `req` object. This allows us to perform "Active Account Checks"—if an admin deactivates a user (setting `active: false`), their token becomes useless instantly, even if it hasn't expired yet.

---

## 📦 APIs & Integrations

- **Third-Party APIs:**
    - **Cloudinary:** Integrated for high-performance image hosting. Used `multer-storage-cloudinary` to directly stream uploads from the admin form to Cloudinary, receiving back permanent secure URLs for the database.
    - **Mock Payment Processing:** Developed a `paymentController` that simulates real-world credit card validation (Luhn-like checks) and order status updates to demonstrate a full transactional lifecycle.
- **Internal API Endpoints:**
    - **Product CRUD:** `POST /api/products` (with file upload support), `GET /api/products`, and `GET /api/products/:id`.
    - **Order Management:** `POST /api/orders` to create new purchases and `PATCH /api/orders/:id` for admin status tracking.
    - **User Services:** `POST /api/users/login`, `PUT /api/users/cart` for persistent shopping sessions.

### 💡 Deeper Explanation
The most sophisticated integration is the **Payment Simulator** in `paymentController.js`. Instead of a simple "Success" button, we built a validator that checks for card format and specific "test failure" numbers (like `4000...0002`). 

Upon success, it generates a unique `paymentId` using the `uuid` library and updates the `Order` model with a `paymentResult` object. This "Fake Gateway" allowed us to build and test the entire **Web-Hook style flow**, where the frontend waits for a success response before redirecting to the `Invoice.js` page, mimicking the behavior of Stripe or PayPal.

---

## 🗄️ Database Design

- **Collections/Schemas & Relationships:**
    - **User:** Stores profile, hashed password, and an embedded array for the cart.
    - **Product:** Rich document containing images, variants (swatches), and inventory levels.
    - **Order:** Links `User` ID to a list of `orderItems`, `shippingAddress`, and `paymentResult`.
    - **Category & Attribute:** Separate collections to maintain dynamic lists for filtering and inventory categorization.
- **Why MongoDB (NoSQL) vs SQL?**
    - **Flexible Schema:** Fashion products often have varying attributes. MongoDB allows storing these as embedded arrays without complex SQL joins.
    - **Scalability:** Handles the dynamic nature of e-commerce catalogs where product structures evolve.
    - **Developer Speed:** Directly mapping JSON-like documents from React to the database simplified development.

### 💡 Deeper Explanation
We chose a **Hybrid Data Model**. For static data that rarely changes, like `Categories` and `Attributes`, we use separate collections and reference them. 

However, for the `Product` variants, we use **Embedding**. Each product document contains an array of `colors`, each with its own image and name. This is a classic "Denormalization" strategy—it makes the database slightly larger, but it makes the `GET /api/products/:id` call incredibly fast because all the data for one product is fetched in a single "disk read," rather than joining 4 or 5 different tables.

---

## 🚀 Deployment

- **Hosting Platforms:** 
    - **Frontend:** Vercel (or Netlify) for high-speed CDN delivery and React routing.
    - **Backend:** Render (or Railway) for handling the Express.js server.
- **Environment Variable Management:**
    - Securely stored keys like `MONGO_URI`, `JWT_SECRET`, and `CLOUDINARY_API_KEY` in platform secret managers.
- **CI/CD Pipeline:** Integrated with GitHub for automatic deployments on push to `main`.

### 💡 Deeper Explanation
Our deployment emphasizes **CORS Security**. In `backend/server.js`, we don't just use `app.use(cors())`. Instead, we check `process.env.FRONTEND_URL`. 

This ensures that only our official Vercel-hosted storefront can talk to our API. If a malicious user tries to build their own site and call our backend, the browser will block the request. This "Whitelist" approach is critical for protecting our product and user data in a live production environment.

---

## 📈 What You'd Improve

- **Future Feature Roadmap:**
    - **Real-time Inventory:** Use WebSockets to alert users if stock is running low.
    - **Actual Payment Gateway:** Replace the mock controller with **Stripe** or **Razorpay**.
    - **Search Optimization:** Integrate **Algolia** for faster product discovery.
- **Technical Debt & Refactoring:**
    - **Unit Testing:** Implement **Jest** for the backend to ensure zero regressions.
    - **TypeScript Migration:** Convert the project to TypeScript for better type safety.
- **Scalability Considerations:**
    - Implementing **Redis** for caching frequently accessed products.

### 💡 Deeper Explanation
If I had more time, the #1 priority would be **Real-time Inventory Synchronization**. Right now, if two users buy the last item at the exact same second, we might have an "Over-sell" issue. 

I would implement a **Database Transaction (Mongoose Sessions)** in `orderController.js`. This would ensure that the "Reduce Stock" and "Create Order" steps happen as one single unit—if the stock is 0, the order creation automatically rolls back, preventing inventory errors.

---

## 🏁 End-to-End System Walkthrough (Startup to Checkout)

### 1. System Initialization (Startup)
- **Environment Setup:** Before any code runs, the system requires a `.env` file in the `backend/` folder containing `MONGO_URI`, `JWT_SECRET`, and `CLOUDINARY` credentials.
- **Backend Boot:** Running `npm run dev` in the `backend` folder initializes the Express server on port 5000. It establishes a persistent connection to MongoDB using Mongoose.
- **Frontend Boot:** Running `npm start` in the `chromaic` (User) and `chromaic-admin` (Admin) folders starts the development servers. The two frontends are now ready to communicate with the shared API via Axios.

### 2. The Authentication Lifecycle (Login Logic)
- **The Request:** The user enters credentials in `LoginPage.jsx`. A `POST` request is sent to `/api/users/login`.
- **The Verification:** In `userController.js`, the backend finds the user by email. It uses `user.matchPassword(password)`, which triggers **bcryptjs** to compare the plain-text input with the salted hash in the database.
- **The Token:** If valid, the server calls `generateToken(user._id)`, creating a signed **JWT**. This token, along with user details (Name, Email, isAdmin), is sent back to the frontend.
- **Persistence:** The React app stores this JWT in `localStorage`. For every subsequent "Private" request, Axios automatically attaches this token to the `Authorization: Bearer <token>` header.

### 3. The User Journey (Engagement & Persistence)
- **Wishlist & Cart:** When a user clicks "Add to Cart," the `cartController.js` is triggered. Unlike local-only carts, Chromaic sends a `POST` request to the backend. The `protect` middleware extracts the User ID from the JWT, and the item is saved directly into the `User` document's `cart` array in MongoDB.
- **Variant Selection:** On the `ProductDetails.js` page, selecting a color swatch updates the local React state. This filters the `product.colors` array to swap the main image gallery and update available sizes dynamically.
- **Checkout:** The `Checkout.js` page collects shipping info. Upon submission, the `orderController.js` creates a new `Order` document, "snapshots" the current product prices (to prevent future price-change issues), and clears the user's cart in the database.

### 4. The Backend Engine (Middleware & Controllers)
- **The Gatekeeper:** Every sensitive request passes through `authMiddleware.js`. 
    - **Stage 1 (protect):** Verifies the JWT is valid and hasn't expired.
    - **Stage 2 (admin):** If the route is an admin route, it checks the `isAdmin` boolean on the `req.user` object attached in Stage 1.
- **Controller Logic:** The controllers (e.g., `productController.js`) use `express-async-handler` to wrap database calls. This ensures that if a user tries to fetch a deleted product, the `errorMiddleware.js` catches it and sends a structured `{ message: "Product not found" }` response instead of crashing the server.

### 5. The Admin Command Center (Business Operations)
- **Inventory Management:** Through the `chromaic-admin` panel, an admin can use the `AddProduct.jsx` form. This form uses a **Multipart/Form-Data** request. **Multer** handles the images, uploads them to **Cloudinary**, and the controller saves the resulting URLs into MongoDB.
- **Order Tracking:** The Admin sees a live list of orders. When they click "Mark as Shipped," a `PATCH` request is sent to `/api/orders/:id`. This updates the `status` enum in the database, which the customer then sees on their "My Orders" page.
- **Analytics:** The `AdminHome.jsx` page fetches aggregated data (Total Earnings, Order Count) and renders it using interactive charts, providing a bird's-eye view of the business performance.

### 6. Session Termination (Logout)
- **Frontend:** The `logout` function simply removes the `userInfo` and token from `localStorage`.
- **Stateless Effect:** Because the backend is stateless (JWT), it doesn't need to "know" the user logged out. Without the token in the header, all future requests to `protect` routes will automatically fail with a 401 Unauthorized error.
