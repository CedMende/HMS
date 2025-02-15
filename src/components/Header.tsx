import React from "react";
import { Bell, Search } from "lucide-react";
export const Header = () => {
  return <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium">Dr. Sarah Wilson</p>
            <p className="text-xs text-gray-500">Head of Department</p>
          </div>
          <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" alt="Profile" className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </header>;
};