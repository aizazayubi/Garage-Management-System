import React from 'react';
import { WORK_ORDERS } from '../types';
import { MoreVertical, AlertCircle, Download, Filter, Plus } from 'lucide-react';
import { motion } from 'motion/react';

export const WorkOrdersView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Active Work Orders</h1>
          <p className="text-text-secondary">Manage maintenance tasks and track real-time progress.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white border border-border-light rounded-xl text-text-secondary hover:text-primary hover:border-primary transition-all shadow-sm">
            <Filter size={20} />
          </button>
          <button className="p-2.5 bg-white border border-border-light rounded-xl text-text-secondary hover:text-primary hover:border-primary transition-all shadow-sm">
            <Download size={20} />
          </button>
          <button className="btn-primary">
            <Plus size={20} />
            Create Order
          </button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <button className="px-5 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-md shadow-primary/20">All Status</button>
        <button className="px-5 py-2 bg-white border border-border-light text-text-main rounded-full text-sm font-medium hover:border-primary transition-all flex items-center gap-2">
          <span className="size-2 rounded-full bg-blue-500"></span>
          In Progress
          <span className="bg-primary-light text-primary text-[10px] font-black px-1.5 py-0.5 rounded ml-1">12</span>
        </button>
        <button className="px-5 py-2 bg-white border border-border-light text-text-main rounded-full text-sm font-medium hover:border-primary transition-all flex items-center gap-2">
          <span className="size-2 rounded-full bg-amber-500"></span>
          QA Review
          <span className="bg-primary-light text-primary text-[10px] font-black px-1.5 py-0.5 rounded ml-1">5</span>
        </button>
        <button className="px-5 py-2 bg-white border border-border-light text-text-main rounded-full text-sm font-medium hover:border-primary transition-all flex items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500"></span>
          Completed
        </button>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-light border-b border-border-light">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Vehicle & Issue</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Assigned Tech</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Progress</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Status</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {WORK_ORDERS.map((order, idx) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-background-light transition-colors cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-text-main">{order.id}</span>
                      {order.priority === 'High' && <AlertCircle size={14} className="text-red-500" />}
                    </div>
                    <p className="text-[10px] text-text-secondary font-medium">Created {order.createdAt}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-text-main">{order.vehicle}</p>
                    <p className="text-xs text-text-secondary">{order.issue}</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <img src={order.tech.avatar} alt={order.tech.name} className="size-8 rounded-full border-2 border-white shadow-sm" />
                      <span className="text-sm font-medium text-text-main">{order.tech.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-48 space-y-1.5">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-wider">
                        <span className="text-text-secondary opacity-60">Working</span>
                        <span className="text-primary">{order.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-primary-light rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${order.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full rounded-full ${order.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`badge ${
                      order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      order.status === 'QA Review' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                      'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-background-light/30 border-t border-border-light flex items-center justify-between">
          <p className="text-xs text-text-secondary">Showing <span className="font-bold text-text-main">1-5</span> of <span className="font-bold text-text-main">42</span> orders</p>
          <div className="flex gap-1">
            <button className="size-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="size-8 flex items-center justify-center rounded-lg text-text-secondary hover:bg-white transition-all text-xs font-bold">2</button>
            <button className="size-8 flex items-center justify-center rounded-lg text-text-secondary hover:bg-white transition-all text-xs font-bold">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};
