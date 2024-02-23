import React, { useState } from 'react';
import styles from './styles/ScrollableTable.module.scss';
import { Link } from 'react-router-dom';

interface ScrollableTableProps {
  data: {
    Lv: number;
    type: string[];
    maxSelected: number;
    set: number;
    count: number;
    recommend: boolean;
  }[];
  selectedLevel: number | null;
  onSelectLevel: (level: number) => void;
}

const ScrollableTable: React.FC<ScrollableTableProps> = ({
  data,
  selectedLevel, // selectedLevelをpropsから受け取る
  onSelectLevel,
}) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(selectedLevel);

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
            <th className={styles['second-th']}>運動種目</th>
            <th>選択種目数</th>
            <th>回数</th>
            <th>セット数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              onClick={() => handleRowClick(row.Lv)}
              className={selectedRow === row.Lv ? styles['selectedRow'] : ''}
            >
              {row.recommend ? (
                <td>
                  <small className={styles['recommend-text']}>オススメ</small>
                  {row.Lv}
                </td>
              ) : (
                <td>{row.Lv}</td>
              )}

              <td className={styles['flex-box']}>
                {row.type.map((exercise, index) => (
                  <div className={styles['rounded']} key={index}>
                    {exercise}
                  </div>
                ))}
              </td>
              <td>
                <div key={index}>{row.maxSelected}</div>
              </td>
              <td>
                <div key={index}>{row.count === -1 ? '-' : row.count}</div>
              </td>
              <td>
                <div key={index}>{row.set === -1 ? '-' : row.set}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScrollableTable;
