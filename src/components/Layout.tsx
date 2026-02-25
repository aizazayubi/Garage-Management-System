import React from 'react';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Package, 
  Users, 
  Receipt, 
  Car, 
  Settings, 
  LogOut,
  Bell,
  MessageSquare,
  Search,
  Plus
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'work-orders', label: 'Work Orders', icon: ClipboardList },
    { id: 'pos', label: 'Counter Sales', icon: Receipt },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'fleet', label: 'Fleet Mgmt', icon: Car },
    { id: 'crm', label: 'Clients', icon: Users },
    { id: 'payments', label: 'Payments', icon: Receipt },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 flex flex-col border-r border-border-light bg-white h-screen sticky top-0 shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
          <Car size={24} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight text-text-main">Sianty</h1>
          <p className="text-[10px] uppercase font-bold tracking-widest text-text-secondary opacity-60">Automotive OS</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              currentView === item.id 
                ? 'bg-primary-light text-primary font-bold shadow-sm' 
                : 'text-text-secondary hover:bg-background-light hover:text-text-main'
            }`}
          >
            <item.icon size={20} className={currentView === item.id ? 'text-primary' : 'opacity-60'} />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border-light">
        <div className="bg-primary/5 rounded-2xl p-4 mb-4">
          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Support</p>
          <p className="text-[11px] text-text-secondary leading-relaxed mb-3">Need help with recovery? Contact our team.</p>
          <button className="w-full py-2 bg-white border border-primary/20 rounded-lg text-xs font-bold text-primary hover:bg-primary-light transition-colors">
            Contact Support
          </button>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:bg-red-50 hover:text-red-600 transition-all">
          <LogOut size={20} className="opacity-60" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="h-16 border-b border-border-light bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <h2 className="text-lg font-bold text-text-main">{title}</h2>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary size-4" />
          <input 
            type="text" 
            placeholder="Search global..." 
            className="pl-10 pr-4 py-2 bg-background-light border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 text-text-secondary hover:bg-background-light rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-text-secondary hover:bg-background-light rounded-full transition-colors">
          <MessageSquare size={20} />
        </button>
        <div className="h-8 w-px bg-border-light mx-2"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">Alex Rivera</p>
            <p className="text-[10px] text-text-secondary font-medium">Service Manager</p>
          </div>
          <div className="size-10 rounded-full border-2 border-primary/20 p-0.5 group-hover:border-primary transition-all">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf8qekIIA2JjcRmebKvgGOLDK4_cqu2lMRJjJ5x8Sx8C_8V3HF3xPGGvQ1xv_cx2btIUBJg2Mn4w_FrzbUu4KwWdsPGi_FmPPyC7at-V7dgi_pwh7u5lfpng8ouRr43_Jv9lKZ2knZRf16v_cfE_vlL9fxflxIHyQPTlJ_NbeUH0h0nlLvQuRFVs37eecf2KkKv0LHhlODixm9v6QLfQwS54P2n3nJ-WrXCW1qqiLd-mKvM4y4RnMXTfSYJBkda2DTpVPYA5F82fKz" 
              alt="User" 
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
