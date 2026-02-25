import React from 'react';
import { WORK_ORDERS, INVOICES, VEHICLES } from '../types';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Car, 
  ClipboardList, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  Calendar
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000, orders: 24 },
  { name: 'Tue', revenue: 3000, orders: 18 },
  { name: 'Wed', revenue: 5000, orders: 32 },
  { name: 'Thu', revenue: 2780, orders: 15 },
  { name: 'Fri', revenue: 6890, orders: 45 },
  { name: 'Sat', revenue: 2390, orders: 12 },
  { name: 'Sun', revenue: 3490, orders: 20 },
];

export const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-text-main tracking-tight">Dashboard</h1>
        <p className="text-text-secondary">Welcome back, Alex. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$24,500" 
          change="+12.5%" 
          trend="up" 
          icon={TrendingUp} 
          color="primary"
        />
        <StatCard 
          title="Active Orders" 
          value="42" 
          change="+3" 
          trend="up" 
          icon={ClipboardList} 
          color="blue"
        />
        <StatCard 
          title="Fleet Size" 
          value="124" 
          change="-2" 
          trend="down" 
          icon={Car} 
          color="amber"
        />
        <StatCard 
          title="New Clients" 
          value="18" 
          change="+5" 
          trend="up" 
          icon={Users} 
          color="emerald"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-black text-text-main">Revenue Overview</h3>
              <p className="text-xs text-text-secondary font-medium">Weekly performance tracking</p>
            </div>
            <select className="bg-background-light border-none rounded-lg text-xs font-bold px-3 py-1.5 focus:ring-2 focus:ring-primary/20">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7311d4" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#7311d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ede7f3" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#734c9a' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#734c9a' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#7311d4" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-black text-text-main mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {WORK_ORDERS.slice(0, 4).map((order, i) => (
              <div key={order.id} className="flex gap-4">
                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${
                  i % 2 === 0 ? 'bg-primary-light text-primary' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Activity size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-text-main truncate">{order.vehicle}</p>
                  <p className="text-[10px] text-text-secondary font-medium">{order.issue}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={10} className="text-text-secondary" />
                    <span className="text-[10px] text-text-secondary font-bold">{order.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-background-light rounded-xl text-xs font-black text-primary hover:bg-primary-light transition-all uppercase tracking-widest">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ 
  title: string; 
  value: string; 
  change: string; 
  trend: 'up' | 'down'; 
  icon: any;
  color: string;
}> = ({ title, value, change, trend, icon: Icon, color }) => {
  return (
    <div className="card p-6 group hover:border-primary/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2.5 rounded-xl ${
          color === 'primary' ? 'bg-primary-light text-primary' :
          color === 'blue' ? 'bg-blue-50 text-blue-600' :
          color === 'amber' ? 'bg-amber-50 text-amber-600' :
          'bg-emerald-50 text-emerald-600'
        }`}>
          <Icon size={20} />
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-black ${
          trend === 'up' ? 'text-emerald-600' : 'text-red-500'
        }`}>
          {trend === 'up' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {change}
        </div>
      </div>
      <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1 opacity-60">{title}</p>
      <h3 className="text-2xl font-black text-text-main">{value}</h3>
    </div>
  );
};
