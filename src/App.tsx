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
  Mail,
  Instagram
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
      <header className="flex items-center justify-between p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src ="/logo.png" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-sm" />
          <span className="text-lg sm:text-xl font-bold text-gray-900">Built<span className="text-[#f4bb18]">In</span>Exchange</span>
        </div>
        
         <div className="flex items-center gap-2 sm:gap-4">
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <a href='https://www.instagram.com/builtinexchange/'><Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /></a>
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
            <a
              href="https://mail.google.com/mail/?view=cm&to=builtinexchange@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </a>
          </button>
          <button className="hidden sm:flex w-10 h-10 rounded-lg border border-gray-200 bg-white/80 items-center justify-center hover:bg-white transition-colors">
            <Twitter className="w-5 h-5 text-gray-600" />
          </button>
          <button className="hidden sm:flex w-10 h-10 rounded-lg border border-gray-200 bg-white/80 items-center justify-center hover:bg-white transition-colors">
            <Share className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
        </div> 
      </header>

       {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Hero Text */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-blue-600">India's First</span>
                <br />
                <span className="text-gray-900">Trusted</span>
                <br />
                <span className="text-gray-900">Crypto Gateway</span>
              </h1>
              
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <div className="relative inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-white font-semibold overflow-hidden text-sm sm:text-base">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-spin-slow"></div>
                  <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse"></div>
                  <Zap className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Launching Soon</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We're building India's most secure and trusted platform for 
                cryptocurrency transactions. Join our waitlist to be among 
                the first to experience seamless crypto trading.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Bank-grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">Instant Transfers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">24/7 Support</span>
              </div>
            </div>

            {/* Email Signup */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Get Early Access</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Be the first to know when we launch and get 
                  exclusive benefits.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base"
                  >
                    Notify Me
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative transform rotate-6 sm:rotate-12 hover:rotate-3 sm:hover:rotate-6 transition-transform duration-500">
              {/* Laptop Frame */}
              <div className="bg-gray-900 rounded-t-lg sm:rounded-t-xl p-2 sm:p-4 shadow-2xl">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-md sm:rounded-lg aspect-[16/10] flex flex-col items-center justify-center text-white relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-16 h-16 sm:w-32 sm:h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-12 h-12 sm:w-24 sm:h-24 border border-white/20 rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <Globe className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Secure Trading</h3>
                    <p className="text-blue-100 text-xs sm:text-base">Advanced encryption & protection</p>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="bg-gray-800 h-2 sm:h-4 rounded-b-lg sm:rounded-b-xl shadow-lg"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-6 -left-3 sm:bottom-10 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 sm:py-8 text-gray-500 px-4">
        <p className="text-sm sm:text-base">© 2025 BuiltInExchange. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;