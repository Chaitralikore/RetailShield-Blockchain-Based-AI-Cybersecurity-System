import React from 'react';
import { 
  Truck, 
  MapPin, 
  Package, 
  CheckCircle, 
  AlertCircle,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  Verified
} from 'lucide-react';

const SupplyChainTracker = () => {
  const shipments = [
    {
      id: 'WM-SC-847293',
      product: 'Electronics Batch #4847',
      origin: 'Shenzhen, China',
      destination: 'Dallas, TX',
      status: 'In Transit',
      progress: 65,
      verifications: 847,
      lastUpdate: '2 hours ago',
      estimated: 'Dec 28, 2024'
    },
    {
      id: 'WM-SC-847294',
      product: 'Clothing Shipment #2341',
      origin: 'Mumbai, India',
      destination: 'Atlanta, GA',
      status: 'Verified',
      progress: 100,
      verifications: 1247,
      lastUpdate: '1 day ago',
      estimated: 'Delivered'
    },
    {
      id: 'WM-SC-847295',
      product: 'Food Products #9876',
      origin: 'São Paulo, Brazil',
      destination: 'Miami, FL',
      status: 'Customs',
      progress: 85,
      verifications: 623,
      lastUpdate: '4 hours ago',
      estimated: 'Dec 30, 2024'
    },
    {
      id: 'WM-SC-847296',
      product: 'Automotive Parts #5432',
      origin: 'Detroit, MI',
      destination: 'Houston, TX',
      status: 'Processing',
      progress: 25,
      verifications: 234,
      lastUpdate: '30 min ago',
      estimated: 'Jan 2, 2025'
    },
  ];

  const verificationStats = [
    { label: 'Total Verifications', value: '2,847,293', icon: Verified },
    { label: 'Active Shipments', value: '14,847', icon: Truck },
    { label: 'Global Partners', value: '847', icon: Globe },
    { label: 'Compliance Rate', value: '99.7%', icon: Shield },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified': return 'text-cyber-green bg-cyber-green/10 border-cyber-green/20';
      case 'In Transit': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'Customs': return 'text-walmart-yellow bg-walmart-yellow/10 border-walmart-yellow/20';
      case 'Processing': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Verified': return CheckCircle;
      case 'In Transit': return Truck;
      case 'Customs': return AlertCircle;
      case 'Processing': return Clock;
      default: return Package;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Supply Chain Tracker</h2>
        <div className="flex items-center space-x-2 bg-cyber-green/20 backdrop-blur-sm rounded-lg px-3 py-2">
          <Shield className="h-4 w-4 text-cyber-green" />
          <span className="text-sm text-white font-medium">Blockchain Verified</span>
        </div>
      </div>

      {/* Verification Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {verificationStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400 text-sm font-medium">{stat.label}</h3>
                <IconComponent className="h-5 w-5 text-walmart-blue" />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Supply Chain Flow Visualization */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-walmart-yellow" />
          Global Supply Chain Flow
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Origin Verification', 'Transit Monitoring', 'Customs Clearance', 'Delivery Confirmation'].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-gradient-to-br from-walmart-blue to-cyber-green p-4 rounded-lg border border-cyan-400/20 flex-1">
                <div className="text-white font-semibold text-sm mb-1">{step}</div>
                <div className="text-cyber-green text-xs">Blockchain Secured</div>
              </div>
              {index < 3 && (
                <ArrowRight className="h-5 w-5 text-walmart-blue mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Shipments */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Truck className="h-5 w-5 mr-2 text-walmart-blue" />
          Active Shipments
        </h3>
        <div className="space-y-4">
          {shipments.map((shipment) => {
            const StatusIcon = getStatusIcon(shipment.status);
            return (
              <div key={shipment.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-walmart-blue/20 p-2 rounded-lg">
                      <Package className="h-5 w-5 text-walmart-blue" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{shipment.product}</h4>
                      <p className="text-gray-400 text-sm">{shipment.id}</p>
                    </div>
                  </div>
                  <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(shipment.status)}`}>
                    <StatusIcon className="h-4 w-4 mr-1" />
                    {shipment.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">From: <span className="text-white">{shipment.origin}</span></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-cyber-green" />
                    <span className="text-gray-300 text-sm">To: <span className="text-white">{shipment.destination}</span></span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Progress</span>
                    <span className="text-white text-sm font-semibold">{shipment.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-walmart-blue to-cyber-green h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${shipment.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Shield className="h-3 w-3 text-cyber-green" />
                      <span>{shipment.verifications} verifications</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>Updated {shipment.lastUpdate}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    ETA: <span className="text-white font-medium">{shipment.estimated}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Blockchain Verification Details */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Verified className="h-5 w-5 mr-2 text-cyber-green" />
          Blockchain Verification Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
            <Shield className="h-8 w-8 text-cyber-green mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">Immutable Records</h4>
            <p className="text-gray-400 text-sm">All supply chain events are permanently recorded on the blockchain</p>
          </div>
          <div className="text-center p-4 bg-walmart-blue/10 rounded-lg border border-walmart-blue/20">
            <Globe className="h-8 w-8 text-walmart-blue mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">Global Transparency</h4>
            <p className="text-gray-400 text-sm">Real-time visibility across all stakeholders and partners</p>
          </div>
          <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
            <CheckCircle className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold mb-2">Smart Contracts</h4>
            <p className="text-gray-400 text-sm">Automated verification and compliance checking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainTracker;