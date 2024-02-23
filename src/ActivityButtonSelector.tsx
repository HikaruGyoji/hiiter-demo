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

interface ActivityButtonSelectorProps {
  onSelectActivity: (activity: string) => void;
}

const ActivityButtonSelector: React.FC<ActivityButtonSelectorProps> = ({
  onSelectActivity,
}) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(
    () => {
      return localStorage.getItem('selectedActivity') || 'hiit';
    }
  );

  const handleButtonClick = (buttonLabel: string) => {
    setSelectedActivity(buttonLabel);
    localStorage.setItem('selectedActivity', buttonLabel);
    onSelectActivity(buttonLabel); // Call the onSelectActivity prop
  };

  return (
    <div className={styles['level-wrapper']}>
      <Button
        label='HIIT'
        onClick={() => handleButtonClick('hiit')}
        className={selectedActivity === 'hiit' ? styles['-selected'] : ''}
      />
      <Button
        label='低強度'
        onClick={() => handleButtonClick('training')}
        className={selectedActivity === 'training' ? styles['-selected'] : ''}
      />
    </div>
  );
};

export default ActivityButtonSelector;
