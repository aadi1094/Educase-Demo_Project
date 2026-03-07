import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera } from 'lucide-react';

// --- Types ---
type Screen = 'welcome' | 'login' | 'signup' | 'profile';

// --- Components ---

const WelcomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col h-full px-6 pb-10 justify-end"
  >
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-popx-text-muted text-lg leading-relaxed">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
    </div>
    <div className="space-y-3">
      <button 
        onClick={() => onNavigate('signup')}
        className="w-full bg-popx-purple text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
      >
        Create Account
      </button>
      <button 
        onClick={() => onNavigate('login')}
        className="w-full bg-popx-secondary text-popx-text-dark py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
      >
        Already Registered? Login
      </button>
    </div>
  </motion.div>
);

const LoginScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex flex-col h-full px-6 pt-10"
  >
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Signin to your<br />PopX account</h1>
      <p className="text-popx-text-muted text-lg leading-relaxed">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>
    </div>
    
    <div className="space-y-6">
      <div className="floating-label-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>
      <div className="floating-label-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>
    </div>

    <div className="mt-4">
      <button 
        onClick={() => onNavigate('profile')}
        className="w-full bg-[#CBCBCB] text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
      >
        Login
      </button>
    </div>
  </motion.div>
);

const SignupScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void, key?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="flex flex-col h-full px-6 pt-10 overflow-y-auto pb-10"
  >
    <div className="mb-10">
      <h1 className="text-3xl font-bold mb-2">Create your<br />PopX account</h1>
    </div>
    
    <div className="space-y-6">
      <div className="floating-label-group">
        <label className="required">Full Name</label>
        <input type="text" placeholder="Marry Doe" />
      </div>
      <div className="floating-label-group">
        <label className="required">Phone number</label>
        <input type="tel" placeholder="Marry Doe" />
      </div>
      <div className="floating-label-group">
        <label className="required">Email address</label>
        <input type="email" placeholder="Marry Doe" />
      </div>
      <div className="floating-label-group">
        <label className="required">Password</label>
        <input type="password" placeholder="Marry Doe" />
      </div>
      <div className="floating-label-group">
        <label>Company name</label>
        <input type="text" placeholder="Marry Doe" />
      </div>
    </div>

    <div className="mt-2 mb-10">
      <p className="text-sm font-medium mb-3">Are you an Agency?<span className="text-red-500">*</span></p>
      <div className="flex items-center space-x-6">
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="agency" className="hidden peer" defaultChecked />
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-popx-purple">
            <div className="w-3 h-3 bg-popx-purple rounded-full scale-0 peer-checked:scale-100 transition-transform" />
          </div>
          <span className="ml-2 text-sm font-medium">Yes</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="agency" className="hidden peer" />
          <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center peer-checked:border-popx-purple">
            <div className="w-3 h-3 bg-popx-purple rounded-full scale-0 peer-checked:scale-100 transition-transform" />
          </div>
          <span className="ml-2 text-sm font-medium">No</span>
        </label>
      </div>
    </div>

    <div className="mt-auto">
      <button 
        onClick={() => onNavigate('login')}
        className="w-full bg-popx-purple text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
      >
        Create Account
      </button>
    </div>
  </motion.div>
);

const ProfileScreen = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col h-full bg-popx-gray"
  >
    <div className="bg-white px-6 py-6 shadow-sm">
      <h2 className="text-xl font-medium">Account Settings</h2>
    </div>
    
    <div className="p-6">
      <div className="flex items-start space-x-4 mb-8">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/marry/200" 
            alt="Profile" 
            className="w-20 h-20 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 right-0 bg-popx-purple p-1.5 rounded-full border-2 border-white">
            <Camera size={14} className="text-white" />
          </div>
        </div>
        <div className="pt-2">
          <h3 className="font-bold text-lg">Marry Doe</h3>
          <p className="text-sm text-popx-text-muted">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-popx-text-dark">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>

    <div className="mt-10 border-t border-dashed border-gray-300 w-full" />
    <div className="mt-auto border-t border-dashed border-gray-300 w-full mb-10" />
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-gray-900 relative">
        {/* Status Bar Mockup */}
        <div className="h-6 w-full flex justify-between px-8 pt-2 items-center">
          <span className="text-[10px] font-bold">9:41</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full border border-black/20" />
            <div className="w-3 h-3 rounded-full border border-black/20" />
            <div className="w-3 h-3 rounded-full border border-black/20" />
          </div>
        </div>

        <div className="h-[calc(100%-24px)] overflow-hidden">
          <AnimatePresence mode="wait">
            {currentScreen === 'welcome' && (
              <WelcomeScreen key="welcome" onNavigate={setCurrentScreen} />
            )}
            {currentScreen === 'login' && (
              <LoginScreen key="login" onNavigate={setCurrentScreen} />
            )}
            {currentScreen === 'signup' && (
              <SignupScreen key="signup" onNavigate={setCurrentScreen} />
            )}
            {currentScreen === 'profile' && (
              <ProfileScreen key="profile" />
            )}
          </AnimatePresence>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
