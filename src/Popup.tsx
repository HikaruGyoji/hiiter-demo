import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/Popup.module.scss';
import exercise1 from './assets/video/その場かけ足.mp4';
import exercise2 from './assets/video/ギャロップ＆フロアタッチ.mp4';
import exercise3 from './assets/video/サイドステップ＆もも上げその場かけ足.mp4';
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

const exerciseDescription: { [key: string]: string } = {
  その場かけ足:
    'その場で高速に足踏みすることで、下半身の筋肉と心肺機能を鍛える運動。',
  'ギャロップ＆フロアタッチ':
    '横方向にジャンプしながら交互に手で床に触れることで、下半身の筋肉と心肺機能を鍛える運動。',
  'サイドステップ＆もも上げその場かけ足':
    '横に大きくステップするサイドステップと膝を高く上げるもも上げその場かけ足を組み合わせた運動で、下半身の筋肉と心肺機能を鍛える運動。',
  'ジャンピングジャック＆シザーズ':
    '両足を左右に開閉するジャンピングジャックと、交互に足を前後に開くシザーズを組み合わせた運動で、下半身の筋肉と心肺機能を鍛える運動。',
  シットアップ:
    '仰向けになり、膝を曲げて上半身を起こすことで、腹筋を鍛える運動。',
  スクワット:
    '足を肩幅に開き、腰を下ろして太ももが床と平行になるまで腰を下げることで、下半身の筋肉を強化する運動。',
  'スクワット＆ジャンプ':
    'スクワットの姿勢からジャンプし、着地時に再びスクワットの姿勢に戻ることで、下半身の筋肉と心肺機能を鍛える運動。',
  'スクワット＆フロントキック':
    'スクワットの姿勢から立ち上がりながら前方にキックすることで、下半身と体幹の筋肉、心肺機能を鍛える運動。',
  スケーターズランジ:
    '片足で跳び、反対側の足を後ろにクロスさせて着地する運動で、下半身と体幹の筋肉、心肺機能を鍛える運動。',
  バックエクステンション:
    'うつ伏せの状態から上半身を持ち上げることで、背中の筋肉を鍛える運動。',
  バーピージャンプ:
    'プッシュアップの姿勢から立ち上がり、ジャンプする動作を繰り返すことで、全身の筋力と心肺機能を鍛える運動。',
  プッシュアップ:
    'うつ伏せの状態から腕を伸ばして体を持ち上げ、胸や腕の筋肉を鍛える運動。',
  マウンテンクライマー:
    'プランクの姿勢から交互に膝を胸に引き寄せることで、腹筋や腕の筋肉を鍛える運動。',
};

// コンポーネント内で利用する部分
const exerciseNameToKey = {
  その場かけ足: 'その場かけ足',
  'ギャロップ＆フロアタッチ': 'ギャロップ＆フロアタッチ',
  'サイドステップ＆もも上げその場かけ足':
    'サイドステップ＆もも上げその場かけ足',
  'ジャンピングジャック＆シザーズ': 'ジャンピングジャック＆シザーズ',
  シットアップ: 'シットアップ',
  スクワット: 'スクワット',
  'スクワット＆ジャンプ': 'スクワット＆ジャンプ',
  'スクワット＆フロントキック': 'スクワット＆フロントキック',
  スケーターズランジ: 'スケーターズランジ',
  バックエクステンション: 'バックエクステンション',
  バーピージャンプ: 'バーピージャンプ',
  プッシュアップ: 'プッシュアップ',
  マウンテンクライマー: 'マウンテンクライマー',
};

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
      case exerciseNameToKey['その場かけ足']:
        return exercise1;
      case exerciseNameToKey['ギャロップ＆フロアタッチ']:
        return exercise2;
      case exerciseNameToKey['サイドステップ＆もも上げその場かけ足']:
        return exercise3;
      case exerciseNameToKey['ジャンピングジャック＆シザーズ']:
        return exercise4;
      case exerciseNameToKey['シットアップ']:
        return exercise5;
      case exerciseNameToKey['スクワット']:
        return exercise6;
      case exerciseNameToKey['スクワット＆ジャンプ']:
        return exercise7;
      case exerciseNameToKey['スクワット＆フロントキック']:
        return exercise8;
      case exerciseNameToKey['スケーターズランジ']:
        return exercise9;
      case exerciseNameToKey['バックエクステンション']:
        return exercise10;
      case exerciseNameToKey['バーピージャンプ']:
        return exercise11;
      case exerciseNameToKey['プッシュアップ']:
        return exercise12;
      case exerciseNameToKey['マウンテンクライマー']:
        return exercise13;
      default:
        return '';
    }
  };

  // コンポーネントの残りの部分は変更がありません

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
              width='100%'
              height='80%'
              playsinline
            />
          )}
          <span className={styles['description']}>
            {exerciseName && exerciseDescription[exerciseName]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
