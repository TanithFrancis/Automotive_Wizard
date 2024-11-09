import React from 'react';
import { Car, CircleOff, History, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Car className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              AutoIntel
            </span>
          </div>
          <div className="flex space-x-2">
            <a href="#classic" className="nav-link">
              <History className="h-5 w-5" />
              <span>Classic</span>
            </a>
            <a href="#modern" className="nav-link">
              <CircleOff className="h-5 w-5" />
              <span>Modern</span>
            </a>
            <a href="#future" className="nav-link">
              <Sparkles className="h-5 w-5" />
              <span>Future</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}