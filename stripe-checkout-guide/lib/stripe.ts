import { loadStripe, Stripe } from '@stripe/stripe-js';

// Get the publishable key from environment variables
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error('Missing VITE_STRIPE_PUBLISHABLE_KEY environment variable');
}

// Create a single instance of the Stripe promise
let stripePromise: Promise<Stripe | null> | null = null;

/**
 * Get the Stripe instance
 * This ensures we only load Stripe once and reuse the instance
 */
export const getStripe = (): Promise<Stripe | null> => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublishableKey);
  }
  return stripePromise;
};

/**
 * Stripe configuration object
 */
export const stripeConfig = {
  publishableKey: stripePublishableKey,
  apiVersion: '2023-10-16' as const,
  locale: 'auto' as const,
};

/**
 * Payment Element appearance configuration
 */
export const paymentElementOptions = {
  layout: 'tabs' as const,
  wallets: {
    applePay: 'auto' as const,
    googlePay: 'auto' as const,
  },
  business: {
    name: 'Your Business Name', // Replace with your business name
  },
};

/**
 * Default Stripe Elements appearance theme
 */
export const stripeAppearance = {
  theme: 'stripe' as const,
  variables: {
    colorPrimary: '#3b82f6', // Blue-600
    colorBackground: '#ffffff',
    colorText: '#1f2937', // Gray-800
    colorDanger: '#ef4444', // Red-500
    fontFamily: 'system-ui, -apple-system, sans-serif',
    spacingUnit: '4px',
    borderRadius: '8px',
    fontSizeBase: '16px',
    fontWeightNormal: '400',
    fontWeightBold: '600',
  },
  rules: {
    '.Tab': {
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      boxShadow: 'none',
    },
    '.Tab:hover': {
      backgroundColor: '#f9fafb',
    },
    '.Tab--selected': {
      borderColor: '#3b82f6',
      backgroundColor: '#eff6ff',
    },
    '.Input': {
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      fontSize: '16px',
      padding: '12px',
    },
    '.Input:focus': {
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
    '.Label': {
      fontWeight: '500',
      fontSize: '14px',
      color: '#374151',
    },
  },
};