import React from 'react';
import { MoreVertical, Calendar, User } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  dueDate: string;
  status: string;
  assignee: string;
  priority: string;
  budget: string;
}

interface ProjectRowProps {
  project: Project;
  index: number;
  onSelectCell: (row: number, col: number) => void;
  onEditCell: (row: number, col: number, value: string) => void;
  onStartEditing: () => void;
  isSelected: boolean;
  isEditing: boolean;
}

const ProjectRow: React.FC<ProjectRowProps> = ({
  project,
  index,
  onSelectCell,
  onEditCell,
  onStartEditing,
  isSelected,
  isEditing,
}) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'not started':
        return 'bg-gray-100 text-gray-700';
      case 'need to start':
        return 'bg-yellow-100 text-yellow-700';
      case 'in progress':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'blocked':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCellClick = (col: number) => {
    onSelectCell(index, col);
  };

  return (
    <div 
      className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 ${
        isSelected ? 'bg-blue-50' : ''
      }`}
    >
      <div className="col-span-1 flex items-center">
        <input 
          type="checkbox" 
          className="rounded border-gray-300"
          onChange={() => console.log(`Checkbox clicked for project ${project.id}`)}
        />
      </div>
      
      <div 
        className="col-span-4 flex items-center cursor-pointer"
        onClick={() => handleCellClick(1)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm text-gray-900 truncate">{project.title}</span>
        </div>
      </div>
      
      <div 
        className="col-span-1 flex items-center text-sm text-gray-600 cursor-pointer"
        onClick={() => handleCellClick(2)}
      >
        {project.dueDate}
      </div>
      
      <div 
        className="col-span-1 flex items-center cursor-pointer"
        onClick={() => handleCellClick(3)}
      >
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
      </div>
      
      <div 
        className="col-span-2 flex items-center space-x-2 cursor-pointer"
        onClick={() => handleCellClick(4)}
      >
        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-medium">
            {project.assignee.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <span className="text-sm text-gray-900">{project.assignee}</span>
      </div>
      
      <div 
        className="col-span-1 flex items-center cursor-pointer"
        onClick={() => handleCellClick(5)}
      >
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
          {project.priority}
        </span>
      </div>
      
      <div 
        className="col-span-1 flex items-center text-sm text-gray-900 cursor-pointer"
        onClick={() => handleCellClick(6)}
      >
        {project.budget}
      </div>
      
      <div className="col-span-1 flex items-center">
        <button 
          className="p-1 hover:bg-gray-100 rounded"
          onClick={() => console.log(`Actions clicked for project ${project.id}`)}
        >
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default ProjectRow;