import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    pendingOrders: Math.floor(Math.random() * 100) + 50,
    completedOrders: Math.floor(Math.random() * 100) + 50,
    revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {
    name: "Feb",
    pendingOrders: Math.floor(Math.random() * 100) + 50,
    completedOrders: Math.floor(Math.random() * 100) + 50,
    revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {
    name: "Mar",
    pendingOrders: Math.floor(Math.random() * 100) + 50,
    completedOrders: Math.floor(Math.random() * 100) + 50,
    revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Apr",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "May",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "June",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "July",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Aug",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Sept",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Oct",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Nov",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  },
  {name: "Dec",
  pendingOrders: Math.floor(Math.random() * 100) + 50,
  completedOrders: Math.floor(Math.random() * 100) + 50,
  revenue: Math.floor(Math.random() * 5000) + 5000,
  }
  // Add more months as needed
];

export function Overview() {
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pendingOrders" stackId="a" fill="#ffba08">
            {data.map((entry, index) => (
              <Cell key={`pending-${index}`} />
            ))}
          </Bar>
          <Bar dataKey="completedOrders" stackId="a" fill="#00a896">
            {data.map((entry, index) => (
              <Cell key={`completed-${index}`} />
            ))}
          </Bar>
          <Bar dataKey="revenue" stackId="b" fill="#6c5ce7">
            {data.map((entry, index) => (
              <Cell key={`revenue-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
