import React from 'react';
import { 
  LayoutDashboard, 
  Link, 
  Brain, 
  Truck, 
  Shield, 
  Activity,
  Database,
  Lock
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blockchain', label: 'Blockchain Monitor', icon: Link },
    { id: 'ai-threats', label: 'AI Threat Detection', icon: Brain },
    { id: 'supply-chain', label: 'Supply Chain', icon: Truck },
    { id: 'security', label: 'Security Settings', icon: Lock },
  ];

  return (
    <aside className="fixed left-0 top-16 h-full w-64 bg-black/20 backdrop-blur-md border-r border-white/10">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-walmart-blue text-white shadow-lg shadow-walmart-blue/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-walmart-yellow' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-cyber-green/10 to-cyber-purple/10 rounded-lg border border-cyber-green/20">
          <div className="flex items-center space-x-2 mb-2">
            <Activity className="h-4 w-4 text-cyber-green" />
            <span className="text-sm font-medium text-white">System Health</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-300">
              <span>Blockchain Sync</span>
              <span className="text-cyber-green">100%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-300">
              <span>AI Processing</span>
              <span className="text-cyber-green">98.7%</span>
            </div>
            <div className="flex justify-between text-xs text-gray-300">
              <span>Encryption</span>
              <span className="text-cyber-green">Active</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;