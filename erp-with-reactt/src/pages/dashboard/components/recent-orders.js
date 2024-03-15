import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../../components/ui/avatar";
  
  export function RecentOrders() {
    const orders = [
      {
        name: "Ugesh Sai",
        email: "ugesh.sai@example.com",
        amount: "+₹2,999.00",
        status: "pending",
        avatarSrc: "/avatars/01.png",
        avatarFallback: "AG"
      },
      {
        name: "Mahesh Sai",
        email: "mahesh.sai@example.com",
        amount: "+₹1,499.00",
        status: "shipped",
        avatarSrc: "/avatars/02.png",
        avatarFallback: "PS"
      },
      {
        name: "Pooja sree",
        email: "pooja.sree@example.com",
        amount: "+₹899.00",
        status: "delivered",
        avatarSrc: "/avatars/03.png",
        avatarFallback: "AP"
      },
      {
        name: "Yamini",
        email: "Yamini@example.com",
        amount: "+₹499.00",
        status: "pending",
        avatarSrc: "/avatars/04.png",
        avatarFallback: "RS"
      },
      {
        name: "Lasya",
        email: "Lasya@example.com",
        amount: "+₹199.00",
        status: "shipped",
        avatarSrc: "/avatars/05.png",
        avatarFallback: "NJ"
      },
    ];
  
    const sortedOrders = orders.sort((a, b) => {
      const amountA = parseFloat(a.amount.replace(/[^\d.-]/g, ""));
      const amountB = parseFloat(b.amount.replace(/[^\d.-]/g, ""));
      return amountB - amountA;
    });
  
    return (
      <div className="space-y-4">
        {sortedOrders.map((order, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={order.avatarSrc} alt="Avatar" />
                <AvatarFallback>{order.avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium dark:text-gray-200">{order.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{order.email}</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{order.amount}</p>
              <span
                className={`ml-2 px-2 py-1 text-xs font-medium rounded ${
                  order.status === "pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : order.status === "shipped"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  