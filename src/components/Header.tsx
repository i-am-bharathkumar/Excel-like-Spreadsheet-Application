import React from 'react';
import { Search, Bell, Plus, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold text-gray-900">Spreadsheet 3</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900 text-sm">File</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Edit</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">View</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Insert</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Format</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Data</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Tools</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Extensions</button>
            <button className="text-gray-600 hover:text-gray-900 text-sm">Help</button>
          </nav>
        </div>

        {/* Right side - Actions and User */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Share</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">A</span>
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;