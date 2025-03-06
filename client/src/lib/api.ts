const API_BASE = '/.netlify/functions/api';

export async function fetchProducts() {
  const response = await fetch(`${API_BASE}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function getCart(sessionId: string) {
  const response = await fetch(`${API_BASE}/cart`, {
    headers: {
      'sessionid': sessionId
    }
  });
  if (!response.ok) throw new Error('Failed to fetch cart');
  return response.json();
}

export async function addToCart(productId: number, quantity: number, sessionId: string) {
  const response = await fetch(`${API_BASE}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'sessionid': sessionId
    },
    body: JSON.stringify({ productId, quantity })
  });
  if (!response.ok) throw new Error('Failed to add to cart');
  return response.json();
}
