import React from 'react';
import { useSpreadsheet } from '../hooks/useSpreadsheet';
import Header from './Header';
import ProjectSpreadsheet from './ProjectSpreadsheet';

const Spreadsheet: React.FC = () => {
  const {
    state,
    getCell,
    selectCell,
    updateCell,
    startEditing,
    stopEditing,
    updateFormulaBar,
    commitEdit,
    addSheet,
    switchSheet,
  } = useSpreadsheet();

  const handleCellEdit = (row: number, col: number, value: string) => {
    updateCell(row, col, value);
    stopEditing();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProjectSpreadsheet
        getCell={getCell}
        selectedCell={state.selectedCell}
        isEditing={state.isEditing}
        onSelectCell={selectCell}
        onEditCell={handleCellEdit}
        onStartEditing={startEditing}
      />
    </div>
  );
};

export default Spreadsheet;