import React, { useState } from 'react';
import styles from './styles/ScrollableTable.module.scss';
import { Link } from 'react-router-dom';

interface RowData {
  Lv: number;
  A: string[];
  B: string[];
  C: string[];
}

interface ScrollableTableProps {
  data: RowData[];
  onSelectLevel: (level: number) => void;
}

const ScrollableTable: React.FC<ScrollableTableProps> = ({
  data,
  onSelectLevel,
}) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(4);

  const handleRowClick = (level: number) => {
    setSelectedRow(level);
    onSelectLevel(level);
  };

  return (
    <div className={styles['tableContainer']}>
      <table className={styles['scrollableTable']}>
        <thead>
          <tr>
            <th>Lv</th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(row.Lv)}
              className={selectedRow === row.Lv ? styles['selectedRow'] : ''}
            >
              <td>{row.Lv}</td>
              <td>
                {row.A.map((exercise, index) => (
                  <div key={index}>{exercise}</div>
                ))}
              </td>
              <td>
                {row.B.map((exercise, index) => (
                  <div key={index}>{exercise}</div>
                ))}
              </td>
              <td>
                {row.C.map((exercise, index) => (
                  <div key={index}>{exercise}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;
