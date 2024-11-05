import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      {!isLandingPage && (
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <Logo />
                </div>
                <span className="text-xl font-bold text-gray-900">VISIONAI</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/"
                  className="group inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary"
                >
                  Back to Home
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
}