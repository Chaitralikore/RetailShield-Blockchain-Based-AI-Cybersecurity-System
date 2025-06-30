import React from 'react';
import { Shield, Bell, User, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-cyber-green animate-glow" />
            <div className="absolute inset-0 bg-cyber-green/20 rounded-full blur-xl"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">RetailShield</h1>
            <p className="text-sm text-blue-200">AI-Powered Blockchain Cybersecurity</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-walmart-blue/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
            <span className="text-sm text-white font-medium">System Active</span>
          </div>
          
          <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2">
            <User className="h-4 w-4 text-gray-300" />
            <span className="text-sm text-white">Security Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;