export const categories = ['All', 'Outerwear', 'Dresses', 'Knitwear', 'Accessories']

export const products = [
  {
    id: 'atlas-trench',
    name: 'Atlas Tailored Trench',
    category: 'Outerwear',
    price: 248,
    rating: 4.9,
    badge: 'Bestseller',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A structured mid-weight trench with a fluid drape, storm flap, and removable tie belt. Built for polished weekday layering.',
    details: ['Water-resistant cotton blend', 'Relaxed tailoring', 'Hidden inner pocket'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Stone', value: '#d6c7b2' },
      { name: 'Black', value: '#151515' },
      { name: 'Olive', value: '#55614b' },
    ],
  },
  {
    id: 'sera-slip-dress',
    name: 'Sera Satin Slip Dress',
    category: 'Dresses',
    price: 156,
    rating: 4.8,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A bias-cut satin dress with a clean neckline and subtle sheen. Elegant alone, sharp under a blazer.',
    details: ['Adjustable straps', 'Midi length', 'Soft recycled satin'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne', value: '#e7d6be' },
      { name: 'Ruby', value: '#8f1f2d' },
      { name: 'Noir', value: '#161616' },
    ],
  },
  {
    id: 'linea-knit-set',
    name: 'Linea Rib Knit Set',
    category: 'Knitwear',
    price: 132,
    rating: 4.7,
    badge: 'Low stock',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A soft matching set with sculpted rib texture, designed for travel days, coffee runs, and quiet luxury weekends.',
    details: ['Stretch rib knit', 'Machine washable', 'Sold as a two-piece set'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ivory', value: '#eee6d6' },
      { name: 'Sage', value: '#a5ae98' },
      { name: 'Charcoal', value: '#3d3d3f' },
    ],
  },
  {
    id: 'noir-leather-tote',
    name: 'Noir Leather Tote',
    category: 'Accessories',
    price: 188,
    rating: 4.9,
    badge: 'Editor pick',
    image:
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A refined everyday tote with a structured silhouette, magnetic closure, and space for a laptop.',
    details: ['Full-grain leather', 'Laptop sleeve', 'Detachable crossbody strap'],
    sizes: ['One size'],
    colors: [
      { name: 'Cognac', value: '#b56a2b' },
      { name: 'Black', value: '#151515' },
      { name: 'Cream', value: '#efe4d1' },
    ],
  },
  {
    id: 'marais-blazer',
    name: 'Marais Double Blazer',
    category: 'Outerwear',
    price: 214,
    rating: 4.8,
    badge: 'Signature',
    image:
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A double-breasted blazer with a crisp shoulder, smooth lining, and tailored waist for instant structure.',
    details: ['Fully lined', 'Horn-look buttons', 'Designed for layering'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', value: '#151515' },
      { name: 'Graphite', value: '#4b4d51' },
      { name: 'Oat', value: '#cabda9' },
    ],
  },
  {
    id: 'aura-silk-scarf',
    name: 'Aura Silk Scarf',
    category: 'Accessories',
    price: 74,
    rating: 4.6,
    badge: 'Giftable',
    image:
      'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=900&q=82',
    gallery: [
      'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=1200&q=82',
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=82',
    ],
    description:
      'A lightweight silk scarf with painterly contrast edges. Tie it at the neck, on a tote, or as a hair accent.',
    details: ['100% silk twill', 'Hand-rolled hem', '70 cm square'],
    sizes: ['One size'],
    colors: [
      { name: 'Ivory print', value: '#f1e9d8' },
      { name: 'Teal print', value: '#0f766e' },
      { name: 'Berry print', value: '#923447' },
    ],
  },
]

export const getProductById = (id) => products.find((product) => product.id === id)
