import React from 'react';
import { INVOICES } from '../types';
import { MoreVertical, Download, Search, ChevronLeft, ChevronRight, Receipt } from 'lucide-react';
import { motion } from 'motion/react';

export const InvoicesView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Invoices</h1>
          <p className="text-text-secondary">Manage and track all your billing records efficiently.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-xl text-text-main hover:bg-background-light font-bold text-sm transition-all shadow-sm">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary size-4" />
          <input 
            type="text" 
            placeholder="Search by ID, Client, or Amount" 
            className="w-full pl-10 pr-4 py-2.5 bg-background-light border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <button className="px-4 py-2 bg-primary-light text-primary rounded-lg text-xs font-bold flex items-center gap-2">
            All Dates
            <ChevronRight size={14} className="rotate-90" />
          </button>
          <button className="px-4 py-2 bg-background-light text-text-secondary rounded-lg text-xs font-bold hover:bg-border-light transition-colors">
            This Month
          </button>
          <button className="px-4 py-2 bg-background-light text-text-secondary rounded-lg text-xs font-bold hover:bg-border-light transition-colors flex items-center gap-2">
            Status: Any
            <ChevronRight size={14} className="rotate-90" />
          </button>
        </div>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-light border-b border-border-light">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Invoice ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Client</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60 text-right">Amount</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Due Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60 text-center">Status</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {INVOICES.map((invoice, idx) => (
                <motion.tr 
                  key={invoice.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-background-light transition-colors cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-8 bg-primary-light text-primary rounded flex items-center justify-center">
                        <Receipt size={16} />
                      </div>
                      <span className="font-bold text-text-main">{invoice.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-black">
                        {invoice.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">{invoice.client}</p>
                        <p className="text-[10px] text-text-secondary">{invoice.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <p className="text-sm font-black text-text-main">${invoice.amount.toLocaleString()}</p>
                    <p className="text-[10px] text-text-secondary font-bold">USD</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-sm font-medium ${invoice.status === 'Overdue' ? 'text-red-500 font-bold' : 'text-text-main'}`}>
                      {invoice.dueDate}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`badge ${
                      invoice.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      invoice.status === 'Partial' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                      invoice.status === 'Overdue' ? 'bg-red-50 text-red-600 border border-red-100' :
                      'bg-slate-50 text-slate-600 border border-slate-100'
                    }`}>
                      {invoice.status}
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
          <p className="text-xs text-text-secondary">Showing <span className="font-bold text-text-main">1-6</span> of <span className="font-bold text-text-main">24</span> invoices</p>
          <div className="flex gap-2">
            <button className="p-1.5 rounded-lg border border-border-light bg-white text-text-secondary hover:text-primary transition-all disabled:opacity-30" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="p-1.5 rounded-lg border border-border-light bg-white text-text-secondary hover:text-primary transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
