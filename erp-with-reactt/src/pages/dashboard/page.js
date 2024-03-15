import { ArrowUpRightSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Overview } from './components/overview.js';
import { RecentOrders } from './components/recent-orders.js';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold tracking-tight mb-8">Dashboard</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <Link to="/products">
          <Card className="bg-blue-500 text-white">
            <CardContent className="flex items-center justify-between">
              <span className="font-bold">Products</span>
              <img src="https://pic.onlinewebfonts.com/thumbnails/icons_121650.svg" alt="Product Logo" className="h-10 w-20" />
            </CardContent>
          </Card>
        </Link>
        <Link to="/orders">
          <Card className="bg-green-500 text-white">
            <CardContent className="flex items-center justify-between">
              <span className="font-bold">Orders</span>
              <img src="https://pic.onlinewebfonts.com/thumbnails/icons_255516.svg" alt="Order Logo" className="h-8 w-8" />
            </CardContent>
          </Card>
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold">$84,884.12</div>
            <p className="text-xs text-gray-500">+29.1% from last month</p>
            <img src="https://cdn.dribbble.com/users/1623326/screenshots/3346162/media/857350854f42b04d3a0076eadb588e34.gif" alt="Total Revenue Image" className="mt-4 rounded-lg" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold">+8410</div>
            <p className="text-xs text-gray-500">+116.1% from last month</p>
            <img src="https://jonmgomes.com/wp-content/uploads/2020/06/Pie-Chart-GIF.gif" alt="Total Orders Image" className="mt-4 rounded-lg" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Orders</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold">+12,821</div>
            <p className="text-xs text-gray-500">+59% from last month</p>
            <img src="https://i.stack.imgur.com/WoASS.png" alt="Completed Orders Image" className="mt-4 rounded-lg" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Orders</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold">+842</div>
            <p className="text-xs text-gray-500">+752 since last hour</p>
            <img src="https://i.stack.imgur.com/kGP9y.gif" alt="Active Orders Image" className="mt-4 rounded-lg" />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-7 xl:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3 max-md:col-span-4">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      </div>
      <footer className="text-center py-4">Developed by Ugesh Sai <br />Mobile: +918074370329 <br />Email: ugeshsai2001@gmail.com</footer>
    </div>
  );
}

export default Dashboard;
