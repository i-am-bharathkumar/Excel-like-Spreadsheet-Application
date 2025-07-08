import { useState, useCallback } from 'react';

interface SpreadsheetState {
  selectedCell: string | null;
  isEditing: boolean;
  formulaBarValue: string;
}

const createInitialState = (): SpreadsheetState => ({
  selectedCell: null,
  isEditing: false,
  formulaBarValue: '',
});

export const useSpreadsheet = () => {
  const [state, setState] = useState<SpreadsheetState>(createInitialState);

  const getCell = useCallback((row: number, col: number) => {
    return {
      id: `${row}-${col}`,
      value: '',
      row,
      col,
    };
  }, []);

  const updateCell = useCallback((row: number, col: number, value: string) => {
    console.log(`Updating cell ${row}-${col} with value: ${value}`);
  }, []);

  const selectCell = useCallback((row: number, col: number) => {
    const cellId = `row-${row}`;
    setState(prev => ({
      ...prev,
      selectedCell: cellId,
      isEditing: false,
      formulaBarValue: '',
    }));
    console.log(`Selected cell: ${cellId}`);
  }, []);

  const startEditing = useCallback(() => {
    setState(prev => ({ ...prev, isEditing: true }));
    console.log('Started editing');
  }, []);

  const stopEditing = useCallback(() => {
    setState(prev => ({ ...prev, isEditing: false }));
    console.log('Stopped editing');
  }, []);

  const updateFormulaBar = useCallback((value: string) => {
    setState(prev => ({ ...prev, formulaBarValue: value }));
  }, []);

  const commitEdit = useCallback(() => {
    console.log('Committed edit');
    stopEditing();
  }, [stopEditing]);

  const addSheet = useCallback((name: string) => {
    console.log(`Added sheet: ${name}`);
  }, []);

  const switchSheet = useCallback((sheetId: string) => {
    console.log(`Switched to sheet: ${sheetId}`);
  }, []);

  return {
    state,
    getCell,
    updateCell,
    selectCell,
    startEditing,
    stopEditing,
    updateFormulaBar,
    commitEdit,
    addSheet,
    switchSheet,
  };
};