import React, { useState } from 'react';
import { 
  Zap, 
  Check, 
  ArrowRight, 
  Globe, 
  Repeat, 
  Share, 
  Twitter, 
  Github,
  Mail
} from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src ="/logo.png" alt="Logo" className="w-12 h-12 rounded-sm" />
          <span className="text-xl font-bold text-gray-900">BuiltInExchange</span>
        </div>
        
         <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <Repeat className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <Twitter className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <Github className="w-5 h-5 text-gray-600" />
          </button>
        </div> 
      </header>

       {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-blue-600">India's First</span>
                <br />
                <span className="text-gray-900">Trusted</span>
                <br />
                <span className="text-gray-900">Crypto Gateway</span>
              </h1>
              
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-white font-semibold overflow-hidden">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse"></div>
                  <Zap className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Launching Soon</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We're building India's most secure and trusted platform for 
                cryptocurrency transactions. Join our waitlist to be among 
                the first to experience seamless crypto trading.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Email Signup */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Get Early Access</h3>
                <p className="text-gray-600">
                  Be the first to know when we launch and get 
                  exclusive benefits.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                  >
                    Notify Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div className="relative">
            <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
              {/* Laptop Frame */}
              <div className="bg-gray-900 rounded-t-xl p-4 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg aspect-[16/10] flex flex-col items-center justify-center text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Secure Trading</h3>
                    <p className="text-blue-100">Advanced encryption & protection</p>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="bg-gray-800 h-4 rounded-b-xl shadow-lg"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 -left-6 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500">
        <p>© 2025 BuiltInExchange. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;