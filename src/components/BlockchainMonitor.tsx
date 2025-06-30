import React from 'react';
import { 
  Link, 
  Hash, 
  Clock, 
  Database, 
  CheckCircle, 
  Users,
  Globe,
  Shield
} from 'lucide-react';

const BlockchainMonitor = () => {
  const recentBlocks = [
    { id: '0x7f4a2...c8e9', height: 847293, transactions: 4847, timestamp: '2 mins ago', validator: 'Node-Alpha-7' },
    { id: '0x9b3c5...d7a2', height: 847292, transactions: 5123, timestamp: '4 mins ago', validator: 'Node-Beta-12' },
    { id: '0x2e8a1...f4b6', height: 847291, transactions: 4689, timestamp: '6 mins ago', validator: 'Node-Gamma-3' },
    { id: '0x8d7c3...e9a5', height: 847290, transactions: 5847, timestamp: '8 mins ago', validator: 'Node-Delta-9' },
    { id: '0x4f2b9...a1c8', height: 847289, transactions: 4392, timestamp: '10 mins ago', validator: 'Node-Epsilon-5' },
  ];

  const networkStats = [
    { label: 'Total Blocks', value: '847,293', change: '+1,247' },
    { label: 'Network Hash Rate', value: '2.4 PH/s', change: '+5.2%' },
    { label: 'Active Validators', value: '1,247', change: '+12' },
    { label: 'Block Time', value: '2.3s', change: '-0.1s' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Blockchain Monitor</h2>
        <div className="flex items-center space-x-2 bg-cyber-green/20 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
          <span className="text-sm text-white font-medium">Network Synchronized</span>
        </div>
      </div>

      {/* Network Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {networkStats.map((stat, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
              <Database className="h-4 w-4 text-walmart-blue" />
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-cyber-green text-sm">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Consensus Status */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Shield className="h-5 w-5 mr-2 text-cyber-green" />
          Consensus Mechanism Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
            <CheckCircle className="h-8 w-8 text-cyber-green mx-auto mb-2" />
            <h4 className="text-white font-semibold">Proof of Stake</h4>
            <p className="text-gray-400 text-sm mt-1">Active & Secure</p>
          </div>
          <div className="text-center p-4 bg-walmart-blue/10 rounded-lg border border-walmart-blue/20">
            <Users className="h-8 w-8 text-walmart-blue mx-auto mb-2" />
            <h4 className="text-white font-semibold">Validator Network</h4>
            <p className="text-gray-400 text-sm mt-1">1,247 Active Nodes</p>
          </div>
          <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Global Distribution</h4>
            <p className="text-gray-400 text-sm mt-1">47 Countries</p>
          </div>
        </div>
      </div>

      {/* Recent Blocks */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Link className="h-5 w-5 mr-2 text-walmart-blue" />
          Recent Blocks
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Block Hash</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Height</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Transactions</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Validator</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentBlocks.map((block, index) => (
                <tr key={block.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Hash className="h-4 w-4 text-cyber-green" />
                      <span className="text-cyber-green font-mono text-sm">{block.id}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white font-semibold">{block.height.toLocaleString()}</td>
                  <td className="py-3 px-4 text-walmart-yellow">{block.transactions.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-300">{block.validator}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span className="text-sm">{block.timestamp}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blockchain Visualization */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4">Block Chain Visualization</h3>
        <div className="flex items-center space-x-4 overflow-x-auto pb-4">
          {recentBlocks.slice(0, 5).map((block, index) => (
            <div key={block.id} className="flex items-center">
              <div className="flex-shrink-0 bg-gradient-to-br from-walmart-blue to-cyber-green p-4 rounded-lg border border-cyan-400/20 min-w-[150px]">
                <div className="text-white font-semibold text-sm mb-1">Block #{block.height}</div>
                <div className="text-cyber-green text-xs font-mono mb-2">{block.id}</div>
                <div className="text-gray-300 text-xs">{block.transactions} txns</div>
              </div>
              {index < 4 && (
                <div className="flex items-center mx-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyber-green to-walmart-blue"></div>
                  <div className="w-2 h-2 bg-walmart-blue rounded-full ml-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainMonitor;