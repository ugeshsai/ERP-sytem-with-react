import React, { useState } from 'react';
import { orders as mockOrders } from '../../db/mock';
import { DataTable } from './components/data-table';
import { columns } from './components/columns';
import { Calendar } from '../../components/ui/calendar';
import { Separator } from '../../components/ui/separator';
import OrderDetailsCard from './components/order-details-card';

const filterOrdersByDate = (orders, selectedDate) => {
  return orders.filter(order => {
    const orderDate = new Date(order.orderDate);
    return (
      orderDate.getDate() === selectedDate.getDate() &&
      orderDate.getMonth() === selectedDate.getMonth() &&
      orderDate.getFullYear() === selectedDate.getFullYear()
    );
  });
};

const OrdersPage = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [calendarView, setCalendarView] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDelete = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => {
        return order.id !== orderId.original.id;
      })
    );
  };

  const handleEdit = (orderId, newData) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, ...newData } : order
      )
    );
  };

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'YourFontName', fontSize: '3rem', fontWeight: 'bold', letterSpacing: 'tight' }}>Orders Management</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-blue-500 hover:underline" onClick={() => setCalendarView(false)}>Table View</button>
          <span>|</span>
          <button className="text-blue-500 hover:underline" onClick={() => setCalendarView(true)}>Calendar View</button>
        </div>
      </div>
      {calendarView ? (
        <CalendarDemo selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      ) : (
        <DataTable
          data={orders}
          columns={columns}
          onDelete={handleDelete}
          onEdit={handleEdit}
          setOrders={setOrders}
        />
      )}
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
        Developed by Vaishnavi Purkar <br />
        Mobile: +919767966853 <br />
        Email: vaishnavipurkar7@gmail.com
      </footer>
    </div>
  );
};

const CalendarDemo = ({ selectedDate, setSelectedDate }) => {
  const [date, setDate] = useState(selectedDate);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate);
  };

  const filteredOrders = filterOrdersByDate(mockOrders, date);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-x-16 pt-10">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-medium mb-4">Orders for {date.toDateString()}</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateChange}
            className="rounded-md border mb-4 w-fit"
          />
          <Separator className="my-4 w-10" />
          <div>
            {filteredOrders.length === 0 ? (
              <p className="text-gray-500">No orders for this date</p>
            ) : (
              <ul>
                {filteredOrders.map(order => (
                  <li key={order.id}>
                    <span className="font-medium">{order.customerName}</span> - Order ID: {order.orderId}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-medium pt-7 mb-4">Order Details</h3>
          {filteredOrders.length === 0 ? (
            <p className="text-gray-500">No orders for this date</p>
          ) : (
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredOrders.map(order => (
                <OrderDetailsCard orderId={order.orderId} key={order.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;