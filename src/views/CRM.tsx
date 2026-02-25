import React from 'react';
import { CLIENTS } from '../types';
import { MoreVertical, Search, Plus, UserPlus, Filter } from 'lucide-react';
import { motion } from 'motion/react';

export const CRMView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Clients Directory</h1>
          <p className="text-text-secondary">Manage your customer base and vehicle history.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 bg-white border border-border-light rounded-xl text-text-secondary hover:text-primary transition-all">
            <Filter size={20} />
          </button>
          <button className="btn-primary">
            <UserPlus size={20} />
            Add Client
          </button>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary size-5" />
        <input 
          type="text" 
          placeholder="Search clients by name, phone, or email..." 
          className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-light border-b border-border-light">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Customer Name</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Phone</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Email</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Linked Vehicles</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60 text-right">Total Lifetime Spend</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {CLIENTS.map((client, idx) => (
                <motion.tr 
                  key={client.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-background-light transition-colors cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full bg-gradient-to-br ${client.avatarGradient} shadow-sm`} />
                      <span className="font-bold text-text-main">{client.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-text-secondary">{client.phone}</td>
                  <td className="px-6 py-5 text-sm text-text-secondary">{client.email}</td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {client.vehicles.map((v, i) => (
                        <span key={i} className="px-2 py-1 bg-background-light border border-border-light rounded text-[10px] font-bold text-text-main">
                          {v}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-black text-text-main">
                    ${client.spend.toLocaleString()}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-text-secondary hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
