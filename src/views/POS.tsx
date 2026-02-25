import React, { useState } from 'react';
import { PARTS } from '../types';
import { Search, QrCode, ShoppingCart, Trash2, Plus, Minus, ArrowRight, CreditCard, Banknote, Building2, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const POSView: React.FC = () => {
  const [cart, setCart] = useState<{ item: typeof PARTS[0], qty: number }[]>([]);

  const addToCart = (item: typeof PARTS[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { item, qty: 1 }];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.item.id === id) {
        const newQty = Math.max(0, i.qty + delta);
        return { ...i, qty: newQty };
      }
      return i;
    }).filter(i => i.qty > 0));
  };

  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="flex h-[calc(100vh-64px)] -m-8 overflow-hidden">
      {/* Catalog */}
      <div className="flex-1 flex flex-col bg-background-light overflow-hidden border-r border-border-light">
        <div className="p-6 space-y-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary size-5" />
              <input 
                type="text" 
                placeholder="Search parts, services, or SKUs..." 
                className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="size-12 bg-white rounded-xl flex items-center justify-center text-text-secondary hover:text-primary transition-all shadow-sm border border-transparent hover:border-primary/20">
              <QrCode size={24} />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20">All Items</button>
            {['Parts', 'Fluids', 'Tires', 'Labor'].map(cat => (
              <button key={cat} className="px-5 py-2 bg-white border border-border-light text-text-main rounded-lg text-sm font-bold hover:border-primary transition-all">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-0">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {PARTS.map((part, idx) => (
              <motion.div 
                key={part.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => addToCart(part)}
                className="group bg-white rounded-xl p-3 border border-transparent hover:border-primary/30 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col h-full relative"
              >
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-white p-1.5 rounded-full shadow-lg">
                    <Plus size={14} />
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-lg bg-background-light mb-3 overflow-hidden">
                  <img src={part.image} alt={part.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-text-main leading-tight mb-1">{part.name}</h3>
                  <p className="text-[10px] text-text-secondary font-medium mb-2">Part #{part.partNumber}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary font-black">${part.price.toFixed(2)}</span>
                    <span className="text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      {part.quantity}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart */}
      <aside className="w-[400px] bg-white flex flex-col shadow-2xl z-10">
        <div className="p-5 border-b border-border-light flex justify-between items-center">
          <h2 className="text-lg font-black text-text-main">Current Order</h2>
          <button 
            onClick={() => setCart([])}
            className="text-text-secondary hover:text-red-500 transition-colors text-xs font-bold flex items-center gap-1"
          >
            <Trash2 size={14} />
            Clear
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <AnimatePresence mode="popLayout">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-40">
                <ShoppingCart size={48} className="mb-4" />
                <p className="text-sm font-bold">Your cart is empty</p>
                <p className="text-xs">Select items from the catalog to start an order.</p>
              </div>
            ) : (
              cart.map(({ item, qty }) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-3 bg-background-light p-3 rounded-xl border border-border-light group"
                >
                  <div className="size-16 rounded-lg bg-white overflow-hidden shrink-0 border border-border-light">
                    <img src={item.image} alt={item.name} className="size-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-text-main line-clamp-1">{item.name}</h4>
                      <span className="text-sm font-black text-text-main">${(item.price * qty).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center bg-white rounded-lg border border-border-light h-7">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="w-7 h-full flex items-center justify-center text-text-secondary hover:bg-background-light rounded-l-lg transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-[10px] font-black">{qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="w-7 h-full flex items-center justify-center text-primary hover:bg-background-light rounded-r-lg transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQty(item.id, -qty)}
                        className="text-text-secondary/40 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        <div className="p-5 border-t border-border-light bg-background-light/30">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs text-text-secondary font-medium">
              <span>Subtotal ({cart.reduce((a, c) => a + c.qty, 0)} items)</span>
              <span className="text-text-main font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-text-secondary font-medium">
              <span>Tax (8%)</span>
              <span className="text-text-main font-bold">${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6 pt-3 border-t border-dashed border-border-light">
            <span className="text-lg font-black text-text-main">Total</span>
            <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { icon: CreditCard, label: 'Card' },
              { icon: Banknote, label: 'Cash' },
              { icon: Building2, label: 'On Acc' },
              { icon: MoreHorizontal, label: 'Other' },
            ].map(method => (
              <button key={method.label} className="flex flex-col items-center justify-center bg-white border border-border-light hover:border-primary/50 hover:bg-primary/5 rounded-xl py-2.5 transition-all group">
                <method.icon size={18} className="text-text-secondary group-hover:text-primary mb-1" />
                <span className="text-[9px] font-black uppercase tracking-widest text-text-secondary group-hover:text-primary">{method.label}</span>
              </button>
            ))}
          </div>

          <button className="w-full bg-primary hover:bg-primary-dark text-white font-black text-lg rounded-2xl h-14 flex items-center justify-between px-6 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all">
            <span>Checkout</span>
            <div className="flex items-center gap-2">
              ${total.toFixed(2)}
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </aside>
    </div>
  );
};
