const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

async function request(path, options = {}) {
  const token = localStorage.getItem('bsw_api_token');
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `Request failed with ${response.status}`);
  }

  return response.json();
}

export const api = {
  getProducts: (params = '') => request(`/products${params ? `?${params}` : ''}`),
  checkoutRegister: (payload) => request('/auth/checkout-register', { method: 'POST', body: JSON.stringify(payload) }),
  createOrder: (payload) => request('/orders', { method: 'POST', body: JSON.stringify(payload) }),
  subscribeNewsletter: (email) => request('/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email }) }),
  sendContact: (payload) => request('/contacts', { method: 'POST', body: JSON.stringify(payload) }),
};
