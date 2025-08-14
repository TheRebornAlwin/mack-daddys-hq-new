import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export { stripePromise };

export const stripeConfig = {
  appearance: {
    theme: 'night' as const,
    variables: {
      colorPrimary: '#FFD700',
      colorBackground: '#000000',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'Inter, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
    rules: {
      '.Tab': {
        border: '1px solid rgba(255, 215, 0, 0.3)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      '.Tab:hover': {
        backgroundColor: 'rgba(255, 215, 0, 0.1)',
      },
      '.Tab--selected': {
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
      },
      '.Input': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        color: '#ffffff',
      },
      '.Input:focus': {
        borderColor: '#FFD700',
        boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.1)',
      },
    },
  },
};