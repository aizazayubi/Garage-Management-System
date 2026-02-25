import React from 'react';
import { INVOICES } from '../types';
import { MoreVertical, Download, Search, AlertTriangle, TrendingUp, CheckCircle2, Calendar, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const PaymentsView: React.FC = () => {
  const overdueInvoices = INVOICES.filter(i => i.status === 'Overdue' || i.status === 'Partial');

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Pending Payments Recovery</h1>
          <p className="text-text-secondary">Manage outstanding debts and track payment schedules.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-xl text-text-main hover:bg-background-light font-bold text-sm transition-all shadow-sm">
            <Download size={18} />
            Export Report
          </button>
          <button className="btn-primary">
            <Plus size={20} />
            Create Payment Plan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp size={80} className="text-primary" />
          </div>
          <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Total Overdue</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-text-main">$42,500.00</h3>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
              <TrendingUp size={10} className="mr-1" /> 5.2%
            </span>
          </div>
          <p className="text-[10px] text-text-secondary font-medium mt-2">from last month</p>
        </div>

        <div className="card p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <AlertTriangle size={80} className="text-red-500" />
          </div>
          <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Critical (30+ Days)</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-text-main">$12,200.00</h3>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded flex items-center">
              <TrendingUp size={10} className="mr-1" /> 2.1%
            </span>
          </div>
          <p className="text-[10px] text-text-secondary font-medium mt-2">Requires immediate attention</p>
        </div>

        <div className="card p-6 relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <CheckCircle2 size={80} className="text-emerald-500" />
          </div>
          <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mb-1">Recovered This Month</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-text-main">$8,450.00</h3>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
              <TrendingUp size={10} className="mr-1" /> 12%
            </span>
          </div>
          <p className="text-[10px] text-text-secondary font-medium mt-2">Target: $10,000</p>
        </div>
      </div>

      <div className="card p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary size-4" />
          <input 
            type="text" 
            placeholder="Search by Invoice ID or Client Name" 
            className="w-full pl-10 pr-4 py-2.5 bg-background-light border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold">All Status</button>
          <button className="px-4 py-2 bg-background-light text-text-secondary rounded-lg text-xs font-bold hover:bg-border-light transition-colors">Overdue</button>
          <button className="px-4 py-2 bg-background-light text-text-secondary rounded-lg text-xs font-bold hover:bg-border-light transition-colors">Critical</button>
        </div>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-light border-b border-border-light">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Invoice ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Client Details</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Total Amount</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Due Amount</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Status & Days</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {overdueInvoices.map((invoice, idx) => (
                <motion.tr 
                  key={invoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-background-light transition-colors cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-primary">{invoice.id}</p>
                    <p className="text-[10px] text-text-secondary font-medium">Issued {invoice.dueDate}</p>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black">
                        {invoice.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">{invoice.client}</p>
                        <p className="text-[10px] text-text-secondary">Fleet: 12 Vehicles</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-text-secondary font-medium">${invoice.amount.toLocaleString()}</td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-black text-text-main">${invoice.amount.toLocaleString()}</p>
                    {invoice.status === 'Partial' && <p className="text-[10px] text-emerald-600 font-bold">Partially Paid</p>}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`badge ${invoice.status === 'Overdue' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                      {invoice.status}
                    </span>
                    <div className={`text-[10px] font-black mt-1 flex items-center gap-1 ${invoice.status === 'Overdue' ? 'text-red-500' : 'text-amber-600'}`}>
                      <Calendar size={12} />
                      {idx === 0 ? '45 Days' : idx === 1 ? '5 Days' : '62 Days'}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-all">
                        <Send size={18} />
                      </button>
                      <button className="px-3 py-1.5 bg-primary text-white rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm shadow-primary/20">
                        Make Payment
                      </button>
                    </div>
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

const Plus: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
