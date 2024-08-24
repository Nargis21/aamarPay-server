# AamarPay Server

### **Directory Structure**

```plaintext
src/
├── app/                     # Core application logic
│   ├── config/              # Configuration files
│   │   ├── db.ts            # Database configuration
│   │   └── seed.ts          # Data seeding script
│   └── modules/            # Application modules (e.g., order, product)
│       ├── order/          # Order module
│       │   ├── order.controller.ts   # Controller for order-related routes
│       │   ├── order.model.ts        # Mongoose model for orders
│       │   ├── order.routes.ts       # Routes for order-related endpoints
│       │   └── order.service.ts      # Service layer for order logic
│       └── product/        # Product module
│           ├── product.controller.ts # Controller for product-related routes
│           ├── product.model.ts      # Mongoose model for products
│           ├── product.routes.ts     # Routes for product-related endpoints
│           └── product.service.ts    # Service layer for product logic
├── app.ts                   # Main application entry point
└── index.ts                 # Server initialization
.env                         # Environment variables
```

---

### **Environment Variables**

Create a `.env` file in the root of your project directory with the following content:

```plaintext
DB_URL="YOUR MONGO URI"
PORT=3000
STORE_ID="aamarpaytest"
SIGNATURE_KEY="dbb74894e82415a2f7ff0ec3a97e4183"
PAYMENT_URL="https://sandbox.aamarpay.com/jsonpost.php"
PAYMENT_VERIFY_URL="https://sandbox.aamarpay.com/api/v1/trxcheck/request.php"
```

- **`DB_URL`**: The connection string for your MongoDB database.
- **`PORT`**: The port on which the server will run.
- **`SIGNATURE_KEY`**: Replace "your_signature_key" with your actual AamarPay signature key.
- **`STORE_ID`**: Replace "your_store_id" with your actual AamarPay store ID.
- **`PAYMENT_URL`**: The URL to which payment requests are sent in the AamarPay sandbox environment.
- **`PAYMENT_VERIFY_URL`**: The URL to verify payment transactions in the AamarPay sandbox environment.

---

### **Getting Started**

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Nargis21/aamarPay-server.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd aamarPay-server
   ```

3. **Install Dependencies:**

   Make sure you have Node.js installed. Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root of your project directory and add the environment variables specified above.

5. **Run the Development Server:**

   Start the development server with:

   ```bash
   npm run dev
   ```

   The server will be available at `http://localhost:3000` (or your configured port).

---
