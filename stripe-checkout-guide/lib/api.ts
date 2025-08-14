/**
 * API utilities for making requests to your backend
 */

// Get environment variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Get the API URL for edge functions
 */
export const getApiUrl = (endpoint: string): string => {
  return `${SUPABASE_URL}/functions/v1/${endpoint}`;
};

/**
 * Get headers for API calls
 */
export const getApiHeaders = (additionalHeaders = {}): HeadersInit => {
  return {
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    ...additionalHeaders,
  };
};

/**
 * Make an API request with proper error handling
 */
export const apiRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  try {
    const response = await fetch(getApiUrl(endpoint), {
      ...options,
      headers: {
        ...getApiHeaders(),
        ...options.headers,
      },
    });

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch (e) {
        // If we can't parse the error response, use the default message
      }
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * Create a payment intent
 */
export const createPaymentIntent = async (data: {
  amount: number;
  currency?: string;
  description?: string;
  customer?: {
    email?: string;
    name?: string;
  };
  metadata?: Record<string, any>;
}): Promise<{ clientSecret: string; paymentIntentId: string }> => {
  return apiRequest('stripe-payment', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * Save order details after successful payment
 */
export const saveOrder = async (data: {
  paymentIntentId: string;
  customerEmail: string;
  customerName?: string;
  amount: number;
  products?: string[];
}): Promise<{ orderId: string }> => {
  return apiRequest('save-order', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};