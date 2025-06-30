import React from 'react';
import { 
  Brain, 
  AlertTriangle, 
  TrendingDown, 
  Eye, 
  Target,
  Activity,
  Zap,
  Shield,
  CheckCircle,
  XCircle
} from 'lucide-react';

const AIThreatDetection = () => {
  const threatAlerts = [
    { 
      id: 1, 
      type: 'High', 
      title: 'Unusual Transaction Pattern Detected', 
      description: 'AI detected 347% increase in micro-transactions from IP range 192.168.x.x',
      time: '2 min ago',
      status: 'investigating',
      confidence: 94
    },
    { 
      id: 2, 
      type: 'Medium', 
      title: 'Anomalous Login Behavior', 
      description: 'Multiple failed authentication attempts with valid credentials',
      time: '15 min ago',
      status: 'resolved',
      confidence: 87
    },
    { 
      id: 3, 
      type: 'Low', 
      title: 'Data Access Pattern Change', 
      description: 'Employee accessing unusual database tables outside normal pattern',
      time: '1 hour ago',
      status: 'monitoring',
      confidence: 73
    },
    { 
      id: 4, 
      type: 'High', 
      title: 'Potential Data Exfiltration', 
      description: 'Large data transfer detected during off-hours',
      time: '2 hours ago',
      status: 'blocked',
      confidence: 96
    },
  ];

  const aiModels = [
    { name: 'Fraud Detection', status: 'Active', accuracy: '99.2%', lastUpdate: '2 min ago' },
    { name: 'Behavioral Analysis', status: 'Active', accuracy: '97.8%', lastUpdate: '5 min ago' },
    { name: 'Network Intrusion', status: 'Active', accuracy: '98.5%', lastUpdate: '1 min ago' },
    { name: 'Data Leak Prevention', status: 'Training', accuracy: '96.3%', lastUpdate: '30 min ago' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-walmart-yellow border-walmart-yellow bg-walmart-yellow/10';
      case 'resolved': return 'text-cyber-green border-cyber-green bg-cyber-green/10';
      case 'monitoring': return 'text-blue-400 border-blue-400 bg-blue-400/10';
      case 'blocked': return 'text-red-400 border-red-400 bg-red-400/10';
      default: return 'text-gray-400 border-gray-400 bg-gray-400/10';
    }
  };

  const getThreatColor = (type: string) => {
    switch (type) {
      case 'High': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'Medium': return 'text-walmart-yellow bg-walmart-yellow/10 border-walmart-yellow/20';
      case 'Low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">AI Threat Detection</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-cyber-green/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <Brain className="h-4 w-4 text-cyber-green animate-pulse" />
            <span className="text-sm text-white font-medium">AI Models Active</span>
          </div>
        </div>
      </div>

      {/* AI Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Threats Detected</h3>
            <Target className="h-5 w-5 text-red-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">47</div>
          <div className="flex items-center text-cyber-green text-sm">
            <TrendingDown className="h-3 w-3 mr-1" />
            <span>-23% from last week</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Response Time</h3>
            <Zap className="h-5 w-5 text-walmart-yellow" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">2.3s</div>
          <div className="flex items-center text-cyber-green text-sm">
            <TrendingDown className="h-3 w-3 mr-1" />
            <span>-0.7s improvement</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">AI Accuracy</h3>
            <Eye className="h-5 w-5 text-blue-400" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">98.7%</div>
          <div className="flex items-center text-cyber-green text-sm">
            <TrendingDown className="h-3 w-3 mr-1" />
            <span>+1.2% this month</span>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Blocked Attacks</h3>
            <Shield className="h-5 w-5 text-cyber-green" />
          </div>
          <div className="text-3xl font-bold text-white mb-2">1,847</div>
          <div className="flex items-center text-cyber-green text-sm">
            <TrendingDown className="h-3 w-3 mr-1" />
            <span>+15% prevention rate</span>
          </div>
        </div>
      </div>

      {/* AI Models Status */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Brain className="h-5 w-5 mr-2 text-walmart-blue" />
          AI Model Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiModels.map((model, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{model.name}</h4>
                <div className={`flex items-center px-2 py-1 rounded-full text-xs ${
                  model.status === 'Active' ? 'bg-cyber-green/20 text-cyber-green' : 'bg-walmart-yellow/20 text-walmart-yellow'
                }`}>
                  {model.status === 'Active' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Activity className="h-3 w-3 mr-1" />}
                  {model.status}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Accuracy: <span className="text-white font-semibold">{model.accuracy}</span></span>
                <span>Updated: {model.lastUpdate}</span>
              </div>
              <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
                <div 
                  className="bg-cyber-green h-1 rounded-full" 
                  style={{ width: model.accuracy }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Alerts */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
          Active Threat Alerts
        </h3>
        <div className="space-y-4">
          {threatAlerts.map((alert) => (
            <div key={alert.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getThreatColor(alert.type)}`}>
                    {alert.type}
                  </div>
                  <h4 className="text-white font-semibold">{alert.title}</h4>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">{alert.time}</span>
                  <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{alert.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400">AI Confidence:</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-20 bg-gray-700 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full ${alert.confidence > 90 ? 'bg-cyber-green' : alert.confidence > 70 ? 'bg-walmart-yellow' : 'bg-red-400'}`}
                        style={{ width: `${alert.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-white font-semibold">{alert.confidence}%</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-walmart-blue hover:bg-walmart-blue/80 text-white text-xs rounded-lg transition-colors">
                    Investigate
                  </button>
                  <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-xs rounded-lg transition-colors">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIThreatDetection;