import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
  } from '../../../components/ui/card'; 
  import { orders, products } from '../../../db/mock';
  
  function OrderDetailsCard({ orderId }) {
    const order = orders.find((order) => order.orderId === orderId);
  
    if (!order) {
      return <div>No order found with the specified ID.</div>;
    }
  
    let orderValue = 0;
    order.products.forEach((product) => {
      const orderedProduct = products.find((p) => p.id === product.productId);
      if (orderedProduct) {
        orderValue += orderedProduct.price * product.quantity;
      }
    });
  
    return (
      <Card className="flex items-center justify-center " >
        <CardHeader className="bg-gray-50 border-b border-gray-200 p-4 rounded-t-lg">
        <CardTitle className="text-xl font-semibold text-blue-700">Order Details</CardTitle>
  
          <CardDescription className="text-sm text-gray-500">Order ID: {order.orderId}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 bg-gray-100">
        <p className="mb-2"><span className="font-semibold text-blue-700">Customer Name:</span> {order.customerName}</p>
        <p className="mb-2"><span className="font-semibold text-blue-700">Order Date:</span> {order.orderDate}</p>
        <p className="mb-2"><span className="font-semibold text-blue-700">Expected Delivery:</span> {order.expectedDeliveryDate}</p>
        <p className="mb-2"><span className="font-semibold text-blue-700">Status:</span> {order.status}</p>
        <p className="font-semibold text-blue-700">Total Order Value: ${orderValue.toFixed(2)}</p>
      </CardContent>
  
      </Card>
    );
  }
  
  export default OrderDetailsCard;
  