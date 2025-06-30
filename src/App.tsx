import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BlockchainMonitor from './components/BlockchainMonitor';
import AIThreatDetection from './components/AIThreatDetection';
import SupplyChainTracker from './components/SupplyChainTracker';
import SecuritySettings from './components/SecuritySettings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'blockchain':
        return <BlockchainMonitor />;
      case 'ai-threats':
        return <AIThreatDetection />;
      case 'supply-chain':
        return <SupplyChainTracker />;
      case 'security':
        return <SecuritySettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;