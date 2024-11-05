import React, { useState, useEffect } from 'react';
import { Users, Activity } from 'lucide-react';

interface ActiveUser {
  id: number;
  location: string;
  action: string;
  timestamp: Date;
}

export function ActiveUsersTable() {
  const [activeUsers, setActiveUsers] = useState<ActiveUser[]>([]);

  const locations = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Berlin', 'Toronto', 'Singapore'];
  const actions = ['Generated Strategy', 'Viewing Dashboard', 'Creating Calendar', 'Analyzing Results'];

  useEffect(() => {
    // Initialize with some data
    setActiveUsers([
      { id: 1, location: 'New York', action: 'Generated Strategy', timestamp: new Date() },
      { id: 2, location: 'London', action: 'Viewing Dashboard', timestamp: new Date() },
      { id: 3, location: 'Tokyo', action: 'Creating Calendar', timestamp: new Date() }
    ]);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const newUsers = [...prev];
        
        // Randomly update or add new user
        if (Math.random() > 0.5 && newUsers.length < 5) {
          // Add new user
          newUsers.push({
            id: Date.now(),
            location: locations[Math.floor(Math.random() * locations.length)],
            action: actions[Math.floor(Math.random() * actions.length)],
            timestamp: new Date()
          });
        } else {
          // Update random user
          const indexToUpdate = Math.floor(Math.random() * newUsers.length);
          newUsers[indexToUpdate] = {
            ...newUsers[indexToUpdate],
            action: actions[Math.floor(Math.random() * actions.length)],
            timestamp: new Date()
          };
        }

        // Keep only last 5 users
        return newUsers.slice(-5);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-gray-700">Live Activity</span>
        </div>
        <div className="flex items-center space-x-1">
          <Activity className="h-4 w-4 text-green-500 animate-pulse" />
          <span className="text-xs text-gray-500">Live</span>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {activeUsers.map((user) => (
          <div key={user.id} className="px-4 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">{user.location}</span>
            </div>
            <span className="text-sm text-gray-500">{user.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}