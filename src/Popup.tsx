import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/Popup.module.scss';
import exercise1 from './assets/video/その場かけ足.mp4';
import exercise2 from './assets/video/ギャロップ＆フロアタッチ.mp4';
import exercise3 from './assets/video/サイドステップ＆その場かけ足.mp4';
import exercise4 from './assets/video/ジャンピングジャック＆シザーズ.mp4';
import exercise5 from './assets/video/シットアップ.mp4';
import exercise6 from './assets/video/スクワット.mp4';
import exercise7 from './assets/video/スクワット＆ジャンプ.mp4';
import exercise8 from './assets/video/スクワット＆フロントキック.mp4';
import exercise9 from './assets/video/スケーターズランジ.mp4';
import exercise10 from './assets/video/バックエクステンション.mp4';
import exercise11 from './assets/video/バーピージャンプ.mp4';
import exercise12 from './assets/video/プッシュアップ.mp4';
import exercise13 from './assets/video/マウンテンクライマー.mp4';

interface PopupProps {
  type: string;
  onClose: () => void;
  exerciseName?: string;
}

const Popup: React.FC<PopupProps> = ({ onClose, exerciseName }) => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    if (exerciseName) {
      const exercisePath = getExercisePath(exerciseName);
      setSrc(exercisePath);
    }
  }, [exerciseName]);

  const getExercisePath = (name: string) => {
    switch (name) {
      case 'その場かけ足':
        return exercise1;
      case 'ギャロップ＆フロアタッチ':
        return exercise2;
      case 'サイドステップ＆もも上げその場かけ足':
        return exercise3;
      case 'ジャンピングジャック＆シザーズ':
        return exercise4;
      case 'シットアップ':
        return exercise5;
      case 'スクワット':
        return exercise6;
      case 'スクワット＆ジャンプ':
        return exercise7;
      case 'スクワット＆フロントキック':
        return exercise8;
      case 'スケーターズランジ':
        return exercise9;
      case 'バックエクステンション':
        return exercise10;
      case 'バーピージャンプ':
        return exercise11;
      case 'プッシュアップ':
        return exercise12;
      case 'マウンテンクライマー':
        return exercise13;
      default:
        return '';
    }
  };

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedElement = event.target as HTMLElement;
      const isClickedElementOrParentPopup = checkPopupAncestor(clickedElement);

      if (!isClickedElementOrParentPopup) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const checkPopupAncestor = (element: HTMLElement | null): boolean => {
    if (!element) return false;
    if (element.classList.contains(styles.popup)) {
      return true;
    }
    return checkPopupAncestor(element.parentElement);
  };

  return (
    <div className={styles['popup']} ref={popupRef}>
      <div className={styles['popup-content']}>
        <div className={styles['popup-close']} onClick={onClose}>
          ×
        </div>
        <div>
          <p className={styles['exercise-name']}>{exerciseName}</p>
          {src && (
            <ReactPlayer
              url={src}
              playing={true}
              loop={true}
              controls={false}
              width='330px'
              height='200px'
              playsinline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
