/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar, Header } from './components/Layout';
import { WorkOrdersView } from './views/WorkOrders';
import { InvoicesView } from './views/Invoices';
import { POSView } from './views/POS';
import { FleetView } from './views/Fleet';
import { CRMView } from './views/CRM';
import { PaymentsView } from './views/Payments';
import { DashboardView } from './views/Dashboard';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardView />;
      case 'work-orders': return <WorkOrdersView />;
      case 'pos': return <POSView />;
      case 'invoices': return <InvoicesView />;
      case 'fleet': return <FleetView />;
      case 'crm': return <CRMView />;
      case 'payments': return <PaymentsView />;
      default: return <DashboardView />;
    }
  };

  const getTitle = () => {
    switch (currentView) {
      case 'dashboard': return 'Dashboard';
      case 'work-orders': return 'Work Orders';
      case 'pos': return 'Counter Sales';
      case 'invoices': return 'Billing & Invoices';
      case 'fleet': return 'Fleet Management';
      case 'crm': return 'Customer CRM';
      case 'payments': return 'Payments Recovery';
      default: return 'Sianty';
    }
  };

  return (
    <div className="flex min-h-screen bg-background-light">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={getTitle()} />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
