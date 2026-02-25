import React from 'react';
import { VEHICLES } from '../types';
import { MoreVertical, Download, Search, History, Car, Truck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const FleetView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Vehicles Directory</h1>
          <p className="text-text-secondary">Manage and track your entire fleet inventory. View detailed specs and history.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-xl text-text-main hover:bg-background-light font-bold text-sm transition-all shadow-sm">
          <Download size={18} />
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary size-5" />
            <input 
              type="text" 
              placeholder="Search by Plate, Make, Model, or Owner" 
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="lg:col-span-7 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          <button className="px-5 py-2 bg-text-main text-white rounded-full text-sm font-bold shadow-md">All Vehicles <span className="opacity-60 ml-1">124</span></button>
          <button className="px-5 py-2 bg-white border border-border-light text-text-main rounded-full text-sm font-bold hover:border-primary transition-all flex items-center gap-2">
            <span className="size-2 rounded-full bg-green-500"></span>
            Active <span className="text-text-secondary opacity-60 ml-1">98</span>
          </button>
          <button className="px-5 py-2 bg-white border border-border-light text-text-main rounded-full text-sm font-bold hover:border-primary transition-all flex items-center gap-2">
            <span className="size-2 rounded-full bg-orange-500"></span>
            Maintenance <span className="text-text-secondary opacity-60 ml-1">12</span>
          </button>
        </div>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-background-light border-b border-border-light">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Vehicle Info</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Plate Number</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Year</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Owner</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-text-secondary opacity-60">Status</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {VEHICLES.map((vehicle, idx) => (
                <motion.tr 
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group hover:bg-background-light transition-colors cursor-pointer"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`size-10 rounded-xl flex items-center justify-center ${
                        vehicle.icon === 'electric_car' ? 'bg-teal-50 text-teal-600' :
                        vehicle.icon === 'local_shipping' ? 'bg-orange-50 text-orange-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {vehicle.icon === 'electric_car' ? <Zap size={20} /> : vehicle.icon === 'local_shipping' ? <Truck size={20} /> : <Car size={20} />}
                      </div>
                      <div>
                        <p className="font-bold text-text-main">{vehicle.make} {vehicle.model}</p>
                        <p className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">{vehicle.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-mono text-xs bg-background-light px-2 py-1 rounded border border-border-light font-bold text-text-main">
                      {vehicle.plate}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-text-secondary">{vehicle.year}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      {vehicle.ownerAvatar ? (
                        <img src={vehicle.ownerAvatar} alt={vehicle.owner} className="size-6 rounded-full object-cover" />
                      ) : (
                        <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[8px] font-black">
                          {vehicle.owner.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                      <span className="text-sm font-bold text-text-main">{vehicle.owner}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`badge ${
                      vehicle.status === 'Active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      vehicle.status === 'Maintenance' ? 'bg-orange-50 text-orange-600 border border-orange-100' :
                      'bg-slate-50 text-slate-600 border border-slate-100'
                    }`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary-light rounded-lg transition-all">
                      <History size={14} />
                      History
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
