import React, { useState } from 'react';
import { ChevronDown, Filter, MoreVertical, Download, Share } from 'lucide-react';
import ProjectRow from './ProjectRow';

interface ProjectSpreadsheetProps {
  getCell: (row: number, col: number) => any;
  selectedCell: string | null;
  isEditing: boolean;
  onSelectCell: (row: number, col: number) => void;
  onEditCell: (row: number, col: number, value: string) => void;
  onStartEditing: () => void;
}

const ProjectSpreadsheet: React.FC<ProjectSpreadsheetProps> = ({
  getCell,
  selectedCell,
  isEditing,
  onSelectCell,
  onEditCell,
  onStartEditing,
}) => {
  const [activeTab, setActiveTab] = useState('All Orders');

  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  const projects = [
    {
      id: 1,
      title: 'Launch social media campaign for pro...',
      dueDate: '30-10-2024',
      status: 'Not started',
      assignee: 'Addie Patel',
      priority: 'High',
      budget: '$4,500.00'
    },
    {
      id: 2,
      title: 'Collect user feedback for company website',
      dueDate: '30-10-2024',
      status: 'Need to start',
      assignee: 'Addie Patel',
      priority: 'Medium',
      budget: '$4,500.00'
    },
    {
      id: 3,
      title: 'Finalize user testing feedback for app',
      dueDate: '08-10-2024',
      status: 'In progress',
      assignee: 'Mark Johnson',
      priority: 'Low',
      budget: '$4,750.00'
    },
    {
      id: 4,
      title: 'Design new features for the website',
      dueDate: '12-10-2024',
      status: 'Completed',
      assignee: 'Emily Green',
      priority: 'High',
      budget: '$5,200.00'
    },
    {
      id: 5,
      title: 'Prepare financial report for Q4',
      dueDate: '25-10-2024',
      status: 'Blocked',
      assignee: 'Jessica Brown',
      priority: 'Medium',
      budget: '$3,800.00'
    }
  ];

  return (
    <div className="bg-white mx-6 mt-4 rounded-lg border border-gray-200 shadow-sm">
      {/* Toolbar */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-900">Project Overview</h1>
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-600 hover:text-gray-900">Hide Fields</button>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                <Filter className="w-4 h-4" />
                <span>Sort</span>
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
                <span>Filter</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
              <Download className="w-4 h-4" />
              <span>Import</span>
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center space-x-1">
              <Share className="w-4 h-4" />
              <span>Export</span>
            </button>
            <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-green-700">
              New Record
            </button>
          </div>
        </div>
      </div>

      {/* Column Headers */}
      <div className="border-b border-gray-200">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-gray-700">
          <div className="col-span-1">
            <input type="checkbox" className="rounded border-gray-300" />
          </div>
          <div className="col-span-4">Task</div>
          <div className="col-span-1">Due Date</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Assignee</div>
          <div className="col-span-1">Priority</div>
          <div className="col-span-1">Budget</div>
          <div className="col-span-1">Actions</div>
        </div>
      </div>

      {/* Project Rows */}
      <div className="divide-y divide-gray-100">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            onSelectCell={onSelectCell}
            onEditCell={onEditCell}
            onStartEditing={onStartEditing}
            isSelected={selectedCell === `row-${index}`}
            isEditing={isEditing && selectedCell === `row-${index}`}
          />
        ))}
      </div>

      {/* Bottom Tabs */}
      <div className="border-t border-gray-200 px-6 py-2">
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm rounded-t ${
                activeTab === tab
                  ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSpreadsheet;