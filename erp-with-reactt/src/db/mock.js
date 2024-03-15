// Mock data for products
import { addDays } from 'date-fns'; 

export const products = [
  {
    id: 21,
    name: 'Blue Jeans',
    category: 'Apparel',
    price: 29.99,
    stockQuantity: 120,
  },
  {
    id: 22,
    name: 'Running Shoes',
    category: 'Footwear',
    price: 59.99,
    stockQuantity: 80,
  },
  {
    id: 23,
    name: 'Smartwatch',
    category: 'Electronics',
    price: 149.99,
    stockQuantity: 35,
  },
  {
    id: 24,
    name: 'Hoodie',
    category: 'Apparel',
    price: 39.99,
    stockQuantity: 65,
  },
  {
    id: 25,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 79.99,
    stockQuantity: 50,
  },
  {
    id: 26,
    name: 'Backpack',
    category: 'Accessories',
    price: 49.99,
    stockQuantity: 90,
  },
  {
    id: 27,
    name: 'Sunglasses',
    category: 'Accessories',
    price: 34.99,
    stockQuantity: 70,
  },
  {
    id: 28,
    name: 'Leather Belt',
    category: 'Accessories',
    price: 19.99,
    stockQuantity: 110,
  },
  {
    id: 29,
    name: 'Portable Speaker',
    category: 'Electronics',
    price: 89.99,
    stockQuantity: 40,
  },
  {
    id: 30,
    name: 'Denim Jacket',
    category: 'Apparel',
    price: 69.99,
    stockQuantity: 55,
  },
  {
    id: 31,
    name: 'Running Shorts',
    category: 'Apparel',
    price: 24.99,
    stockQuantity: 75,
  },
  {
    id: 32,
    name: 'Dress Shoes',
    category: 'Footwear',
    price: 89.99,
    stockQuantity: 60,
  },
  {
    id: 33,
    name: 'Fitness Tracker',
    category: 'Electronics',
    price: 129.99,
    stockQuantity: 25,
  },
  {
    id: 34,
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 39.99,
    stockQuantity: 85,
  },
  {
    id: 35,
    name: 'Cotton T-shirt',
    category: 'Apparel',
    price: 14.99,
    stockQuantity: 100,
  },
];


const deliveryTimeframe = 3;

export const calculateExpectedDeliveryDate = (orderDate) => {
  return addDays(new Date(orderDate), deliveryTimeframe).toISOString().slice(0, 10);
};

export const orders = [
  {
    id: 1,
    orderId: 'BN852001',
    customerName: 'Ugesh Sai',
    orderDate: '2024-03-01',
    status: 'processing',
    products: [
      { productId: 1, quantity: 2 },
      { productId: 3, quantity: 1 },
    ],
  },
  {
    id: 2,
    orderId: 'BN852002',
    customerName: 'Mahesh Sai',
    orderDate: '2024-03-02',
    status: 'shipped',
    products: [
      { productId: 2, quantity: 3 },
    ],
  },
  {
    id: 3,
    orderId: 'BN852003',
    customerName: 'Chaitanya',
    orderDate: '2024-03-03',
    status: 'delivered',
    products: [
      { productId: 1, quantity: 1 },
      { productId: 5, quantity: 2 },
    ],
  },
  {
    id: 4,
    orderId: 'BN852004',
    customerName: 'Yamini',
    orderDate: '2024-03-04',
    status: 'pending',
    products: [
      { productId: 4, quantity: 1 },
      { productId: 6, quantity: 1 },
    ],
  },
  {
    id: 5,
    orderId: 'BN852005',
    customerName: 'Jeevan',
    orderDate: '2024-03-05',
    status: 'processing',
    products: [
      { productId: 3, quantity: 2 },
      { productId: 7, quantity: 1 },
    ],
  },
  {
    id: 6,
    orderId: 'BN852006',
    customerName: 'Lavan',
    orderDate: '2024-03-06',
    status: 'shipped',
    products: [
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 7,
    orderId: 'BN852007',
    customerName: 'Lucky',
    orderDate: '2024-03-07',
    status: 'processing',
    products: [
      { productId: 4, quantity: 2 },
      { productId: 8, quantity: 1 },
    ],
  },
  {
    id: 8,
    orderId: 'BN852008',
    customerName: 'Lasya',
    orderDate: '2024-03-08',
    status: 'shipped',
    products: [
      { productId: 5, quantity: 2 },
    ],
  },
  {
    id: 9,
    orderId: 'BN852009',
    customerName: 'Vignesh',
    orderDate: '2024-03-09',
    status: 'pending',
    products: [
      { productId: 6, quantity: 3 },
    ],
  },
  {
    id: 10,
    orderId: 'BN852010',
    customerName: 'Pooja sree',
    orderDate: '2024-03-10',
    status: 'processing',
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 2 },
    ],
  },
];





orders.forEach((order) => {
  let orderValue = 0;
  order.products.forEach((product) => {
    const orderedProduct = products.find((p) => p.id === product.productId);
    if (orderedProduct) {
      orderValue += orderedProduct.price * product.quantity;
    }
  });
  order.orderValue = orderValue.toFixed(2); // Rounded to 2 decimal places
});

orders.forEach((order) => {
  order.expectedDeliveryDate = calculateExpectedDeliveryDate(order.orderDate);
});
