export const products = [
  {
    id: 1,
    name: 'Aegean Linen Shirt',
    category: 'Clothes',
    subCategory: 'Shirt',
    brand: 'BlueSail Signature',
    rating: 4.7,
    price: 79,
    variants: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1200'
    ],
    description: 'Breathable premium linen with tailored fit.'
  },
  {
    id: 2,
    name: 'Harbor Runner',
    category: 'Shoes',
    subCategory: 'Sneakers',
    brand: 'Tide Motion',
    rating: 4.5,
    price: 120,
    variants: ['41', '42', '43'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200'
    ],
    description: 'Responsive sole with ocean-inspired silhouette.'
  },
  {
    id: 3,
    name: 'Sapphire Tide Necklace',
    category: 'Jewelry',
    subCategory: 'Necklace',
    brand: 'Moon Pearl',
    rating: 4.9,
    price: 210,
    variants: ['One Size'],
    image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1200',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200'
    ],
    description: 'Sterling silver with lab-created sapphire drop.'
  },
  {
    id: 4,
    name: 'Marina Pleated Dress',
    category: 'Clothes',
    subCategory: 'Dress',
    brand: 'BlueSail Signature',
    rating: 4.8,
    price: 149,
    variants: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200'
    ],
    description: 'Silky pleats with fluid movement and evening elegance.'
  },
  {
    id: 5,
    name: 'Atlantic Derby',
    category: 'Shoes',
    subCategory: 'Formal',
    brand: 'Tide Motion',
    rating: 4.6,
    price: 189,
    variants: ['40', '41', '42', '43', '44'],
    image: 'https://images.unsplash.com/photo-1614253429340-98120bd6d4f1?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1614253429340-98120bd6d4f1?w=1200',
      'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1200'
    ],
    description: 'Hand-finished leather derby with cloud-lite cushioning.'
  },
  {
    id: 6,
    name: 'Celeste Ring Set',
    category: 'Jewelry',
    subCategory: 'Ring',
    brand: 'Moon Pearl',
    rating: 4.4,
    price: 99,
    variants: ['6', '7', '8'],
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200'
    ],
    description: 'Stackable polished rings for elevated daily wear.'
  }
];

export const faqs = [
  { q: 'How fast is shipping?', a: '2-5 business days for domestic orders.' },
  { q: 'Can I return products?', a: 'Yes, within 14 days in original condition.' },
  { q: 'How do I track an order?', a: 'Use the order tracking page with your order ID.' },
  { q: 'Which payment methods are available?', a: 'COD, Stripe, and SSLCommerz are available at checkout.' }
];

export const trackingStages = ['processing', 'shipped', 'out_for_delivery', 'delivered'];
