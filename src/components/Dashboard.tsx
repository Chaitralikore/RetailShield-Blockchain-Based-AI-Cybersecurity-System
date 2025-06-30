import React from 'react';
import { 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Activity,
  Database,
  Users,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Security Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <Clock className="h-4 w-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Transactions Secured</p>
              <p className="text-2xl font-bold text-white mt-1">2,847,293</p>
              <div className="flex items-center mt-2 text-cyber-green text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="bg-cyber-green/20 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-cyber-green" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Threats Detected</p>
              <p className="text-2xl font-bold text-white mt-1">47</p>
              <div className="flex items-center mt-2 text-walmart-yellow text-sm">
                <ArrowDown className="h-3 w-3 mr-1" />
                <span>-8.2%</span>
              </div>
            </div>
            <div className="bg-red-500/20 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Blockchain Nodes</p>
              <p className="text-2xl font-bold text-white mt-1">1,247</p>
              <div className="flex items-center mt-2 text-cyber-green text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+3.1%</span>
              </div>
            </div>
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <Database className="h-6 w-6 text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Active Users</p>
              <p className="text-2xl font-bold text-white mt-1">94,352</p>
              <div className="flex items-center mt-2 text-cyber-green text-sm">
                <ArrowUp className="h-3 w-3 mr-1" />
                <span>+5.7%</span>
              </div>
            </div>
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <Users className="h-6 w-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Activity and Security Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Activity className="h-5 w-5 mr-2 text-cyber-green" />
            Real-time Activity
          </h3>
          <div className="space-y-4">
            {[
              { time: '14:32:15', event: 'Blockchain verification completed', status: 'success' },
              { time: '14:31:42', event: 'AI anomaly detection scan finished', status: 'success' },
              { time: '14:30:18', event: 'Supply chain update verified', status: 'success' },
              { time: '14:29:33', event: 'Suspicious transaction flagged', status: 'warning' },
              { time: '14:28:07', event: 'Zero-knowledge proof generated', status: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-cyber-green' : 
                    activity.status === 'warning' ? 'bg-walmart-yellow' : 'bg-red-400'
                  }`}></div>
                  <span className="text-gray-300 text-sm">{activity.event}</span>
                </div>
                <span className="text-gray-500 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-walmart-blue" />
            Security Status
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-green" />
                <span className="text-white font-medium">Homomorphic Encryption</span>
              </div>
              <span className="text-cyber-green text-sm font-semibold">ACTIVE</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-green" />
                <span className="text-white font-medium">Zero-Knowledge Proofs</span>
              </div>
              <span className="text-cyber-green text-sm font-semibold">ACTIVE</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-green" />
                <span className="text-white font-medium">Blockchain Consensus</span>
              </div>
              <span className="text-cyber-green text-sm font-semibold">SECURE</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-cyber-green" />
                <span className="text-white font-medium">AI Threat Monitoring</span>
              </div>
              <span className="text-cyber-green text-sm font-semibold">ONLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Intelligence */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-walmart-yellow" />
          Threat Intelligence Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-green mb-2">99.7%</div>
            <div className="text-gray-400 text-sm">Fraud Prevention Rate</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-cyber-green h-2 rounded-full" style={{ width: '99.7%' }}></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-walmart-yellow mb-2">2.3s</div>
            <div className="text-gray-400 text-sm">Average Response Time</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-walmart-yellow h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">847</div>
            <div className="text-gray-400 text-sm">Patterns Analyzed</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;