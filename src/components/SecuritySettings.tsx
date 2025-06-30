import React from 'react';
import { 
  Lock, 
  Key, 
  Shield, 
  Eye, 
  EyeOff,
  Settings,
  CheckCircle,
  AlertTriangle,
  Database,
  Network,
  Fingerprint,
  Globe
} from 'lucide-react';

const SecuritySettings = () => {
  const encryptionMethods = [
    {
      name: 'Homomorphic Encryption',
      description: 'Enables computation on encrypted data without decrypting it',
      status: 'Active',
      strength: 'AES-256',
      lastUpdate: '2 min ago'
    },
    {
      name: 'Zero-Knowledge Proofs',
      description: 'Verify transactions without revealing sensitive information',
      status: 'Active',
      strength: 'zk-SNARKs',
      lastUpdate: '5 min ago'
    },
    {
      name: 'End-to-End Encryption',
      description: 'Secure communication channels between all nodes',
      status: 'Active',
      strength: 'RSA-4096',
      lastUpdate: '1 min ago'
    },
    {
      name: 'Quantum-Resistant Cryptography',
      description: 'Future-proof encryption against quantum computing threats',
      status: 'Testing',
      strength: 'CRYSTALS-Dilithium',
      lastUpdate: '1 hour ago'
    },
  ];

  const securityPolicies = [
    { name: 'Multi-Factor Authentication', enabled: true, critical: true },
    { name: 'Biometric Verification', enabled: true, critical: true },
    { name: 'IP Whitelisting', enabled: true, critical: false },
    { name: 'Session Timeout', enabled: true, critical: false },
    { name: 'Audit Logging', enabled: true, critical: true },
    { name: 'Real-time Monitoring', enabled: true, critical: true },
    { name: 'Automated Threat Response', enabled: true, critical: true },
    { name: 'Data Loss Prevention', enabled: false, critical: false },
  ];

  const networkSecurity = [
    { metric: 'Firewall Rules', value: '2,847', status: 'Active' },
    { metric: 'Intrusion Attempts Blocked', value: '15,492', status: 'Protected' },
    { metric: 'DDoS Attacks Mitigated', value: '847', status: 'Defended' },
    { metric: 'SSL/TLS Certificates', value: '247', status: 'Valid' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Security Settings</h2>
        <div className="flex items-center space-x-2 bg-cyber-green/20 backdrop-blur-sm rounded-lg px-3 py-2">
          <Shield className="h-4 w-4 text-cyber-green" />
          <span className="text-sm text-white font-medium">Security Level: Maximum</span>
        </div>
      </div>

      {/* Encryption Status Overview */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Lock className="h-5 w-5 mr-2 text-cyber-green" />
          Advanced Encryption Methods
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {encryptionMethods.map((method, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-semibold">{method.name}</h4>
                <div className={`flex items-center px-2 py-1 rounded-full text-xs ${
                  method.status === 'Active' ? 'bg-cyber-green/20 text-cyber-green' : 'bg-walmart-yellow/20 text-walmart-yellow'
                }`}>
                  {method.status === 'Active' ? <CheckCircle className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
                  {method.status}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Strength: <span className="text-cyber-green font-semibold">{method.strength}</span></span>
                <span className="text-gray-400">Updated: {method.lastUpdate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Policies */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Settings className="h-5 w-5 mr-2 text-walmart-blue" />
          Security Policies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityPolicies.map((policy, index) => (
            <div key={index} className={`bg-white/5 rounded-lg p-4 border ${
              policy.critical ? 'border-red-400/20 bg-red-400/5' : 'border-white/10'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {policy.critical && <AlertTriangle className="h-4 w-4 text-red-400" />}
                  <span className="text-white font-medium">{policy.name}</span>
                </div>
                <div className="flex items-center">
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    policy.enabled ? 'bg-cyber-green' : 'bg-gray-600'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      policy.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
              {policy.critical && (
                <p className="text-red-400 text-xs mt-2">Critical security feature - cannot be disabled</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Network Security */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Network className="h-5 w-5 mr-2 text-blue-400" />
          Network Security Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {networkSecurity.map((item, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-gray-400 text-sm mb-2">{item.metric}</div>
              <div className="text-cyber-green text-xs font-semibold">{item.status}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Access Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Fingerprint className="h-5 w-5 mr-2 text-purple-400" />
            Access Control
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Key className="h-4 w-4 text-walmart-yellow" />
                <span className="text-white">Administrator Keys</span>
              </div>
              <span className="text-cyber-green font-semibold">5 Active</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="h-4 w-4 text-blue-400" />
                <span className="text-white">Read-Only Access</span>
              </div>
              <span className="text-cyber-green font-semibold">247 Users</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Database className="h-4 w-4 text-red-400" />
                <span className="text-white">Database Access</span>
              </div>
              <span className="text-cyber-green font-semibold">12 Authorized</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="text-white">API Access</span>
              </div>
              <span className="text-cyber-green font-semibold">847 Tokens</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Shield className="h-5 w-5 mr-2 text-cyber-green" />
            Security Compliance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <span className="text-white">SOC 2 Type II</span>
              <CheckCircle className="h-5 w-5 text-cyber-green" />
            </div>
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <span className="text-white">ISO 27001</span>
              <CheckCircle className="h-5 w-5 text-cyber-green" />
            </div>
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <span className="text-white">PCI DSS Level 1</span>
              <CheckCircle className="h-5 w-5 text-cyber-green" />
            </div>
            <div className="flex items-center justify-between p-3 bg-cyber-green/10 rounded-lg border border-cyber-green/20">
              <span className="text-white">GDPR Compliant</span>
              <CheckCircle className="h-5 w-5 text-cyber-green" />
            </div>
            <div className="flex items-center justify-between p-3 bg-walmart-yellow/10 rounded-lg border border-walmart-yellow/20">
              <span className="text-white">NIST Framework</span>
              <AlertTriangle className="h-5 w-5 text-walmart-yellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;