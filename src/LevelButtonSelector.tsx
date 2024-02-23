import React, { useState } from 'react';
import styles from './styles/LevelButtonSelector.module.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`${styles.button} ${styles['-primary']} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface LevelButtonSelectorProps {
  onSelectCourse: (course: string) => void; // Define the onSelectCourse prop
}

const LevelButtonSelector: React.FC<LevelButtonSelectorProps> = ({
  onSelectCourse,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<string>(() => {
    return localStorage.getItem('selectedCourse') || '初級';
  });

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedCourse(buttonLabel);
    localStorage.setItem('selectedCourse', buttonLabel);
    onSelectCourse(buttonLabel); // Call the onSelectCourse prop with the selected course
  };

  return (
    <div className={styles['level-wrapper']}>
      <Button
        label='初級'
        onClick={() => handleButtonClick('初級')}
        className={selectedCourse === '初級' ? styles['-selected'] : ''}
      />
      <Button
        label='中級'
        onClick={() => handleButtonClick('中級')}
        className={selectedCourse === '中級' ? styles['-selected'] : ''}
      />
      <Button
        label='上級'
        onClick={() => handleButtonClick('上級')}
        className={selectedCourse === '上級' ? styles['-selected'] : ''}
      />
    </div>
  );
};

export default LevelButtonSelector;
