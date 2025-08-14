# Stripe Checkout Setup Instructions

Follow these exact steps to implement Stripe checkout on any website.

## 🔧 Step 1: Environment Setup

### 1.1 Get Stripe Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Navigate to Developers > API keys
3. Copy both keys:
   - **Publishable key** (starts with `pk_`)
   - **Secret key** (starts with `sk_`)

### 1.2 Set Environment Variables
Add to your `.env` file:
```env
# Frontend (safe to expose)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_or_live_your_publishable_key

# Backend (keep secret!)
STRIPE_SECRET_KEY=sk_test_or_live_your_secret_key

# If using Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 📦 Step 2: Install Dependencies

```bash
npm install @stripe/stripe-js @stripe/react-stripe-js stripe
```

For TypeScript projects, also install:
```bash
npm install --save-dev @types/stripe
```

## 🗂️ Step 3: Copy Files to Your Project

### Copy these files exactly:

**Frontend Components:**
- `components/StripeCheckout.tsx` → Main checkout component
- `components/PaymentForm.tsx` → Payment form with Stripe Elements  
- `components/CheckoutSuccess.tsx` → Success page component

**Configuration:**
- `lib/stripe.ts` → Stripe configuration and utilities
- `lib/api.ts` → API request utilities

**Styling:**
- `styles/checkout.css` → Complete checkout styling

**Backend (if using Supabase):**
- `supabase/functions/stripe-payment/index.ts` → Payment processing
- `supabase/functions/save-order/index.ts` → Order saving

## 🚀 Step 4: Basic Implementation

### 4.1 Add to Your Main Component
```tsx
import React from 'react';
import StripeCheckout from './components/StripeCheckout';
import './styles/checkout.css';

function App() {
  return (
    <StripeCheckout
      amount={2999} // $29.99 in cents
      currency="usd"
      description="Your Product Name"
      customerEmail="customer@example.com"
      customerName="John Doe"
      onSuccess={(paymentIntent) => {
        // Payment succeeded!
        console.log('Payment ID:', paymentIntent.id);
        // Redirect user, grant access, send email, etc.
      }}
      onError={(error) => {
        // Payment failed
        console.error('Payment error:', error.message);
        // Show error message to user
      }}
      onCancel={() => {
        // User cancelled payment
        console.log('Payment cancelled');
      }}
    />
  );
}

export default App;
```

### 4.2 Deploy Backend Functions

If using Supabase:
1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Deploy functions: `supabase functions deploy stripe-payment`
4. Deploy functions: `supabase functions deploy save-order`

## 🎯 Step 5: Test Your Implementation

### 5.1 Test Mode Cards
Use these test card numbers:

**Successful payment:**
- `4242424242424242` (Visa)
- `5555555555554444` (Mastercard)

**Failed payment:**
- `4000000000000002` (Card declined)

**3D Secure:**
- `4000000000003220` (3DS authentication required)

### 5.2 Test the Flow
1. Enter test card details
2. Submit payment
3. Verify success/failure handling
4. Check Stripe Dashboard for payment records

## 🔒 Step 6: Security Checklist

- ✅ Never expose your secret key in frontend code
- ✅ Always validate payments on your backend
- ✅ Use HTTPS in production
- ✅ Implement webhooks for reliable order processing
- ✅ Handle all error cases gracefully

## 🌐 Step 7: Go Live

### 7.1 Switch to Live Mode
1. Get live API keys from Stripe Dashboard
2. Update environment variables with live keys
3. Test with real cards (small amounts)
4. Remove test mode indicators

### 7.2 Production Considerations
- Add webhook endpoints for order confirmation
- Implement proper logging and monitoring
- Add customer support contact information
- Set up automated receipt emails
- Add refund/cancellation handling

## 📊 Advanced Features (Optional)

### Subscription Payments
```tsx
<StripeCheckout
  amount={999} // $9.99/month
  currency="usd"
  mode="subscription" // Add subscription mode
  priceId="price_your_stripe_price_id"
  onSuccess={handleSubscriptionSuccess}
/>
```

### Custom Styling
```tsx
<StripeCheckout
  amount={2999}
  appearance={{
    theme: 'stripe',
    variables: {
      colorPrimary: '#your-brand-color',
      borderRadius: '12px',
    }
  }}
/>
```

### International Payments
```tsx
<StripeCheckout
  amount={2999}
  currency="eur" // Support multiple currencies
  locale="fr" // Localize for different countries
/>
```

## 🆘 Troubleshooting

**Common Issues:**

1. **"Stripe publishable key not found"**
   - Check your `.env` file has `VITE_STRIPE_PUBLISHABLE_KEY`
   - Restart your dev server after adding environment variables

2. **"Payment intent creation failed"**
   - Verify your backend endpoint is working
   - Check your secret key is correctly set
   - Ensure CORS headers are properly configured

3. **"Card declined"**
   - Normal for test cards - use the test numbers provided above
   - In live mode, customer should try a different card

4. **Payment succeeds but order not saved**
   - Check your `save-order` function is deployed
   - Verify database permissions
   - Check function logs for errors

## 📈 Analytics & Monitoring

Track these metrics:
- Payment success rate
- Average order value  
- Failed payment reasons
- Customer checkout abandonment

Stripe Dashboard provides detailed analytics, or integrate with your preferred analytics tool.

---

**🎉 That's it! You now have a complete, production-ready Stripe checkout system.**

Need help? Check the Stripe documentation or contact their support team.