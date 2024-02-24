import React, { useRef, useEffect, useState } from 'react';
import styles from './styles/Popup.module.scss';

interface PopupProps {
  type: string;
  onClose: () => void;
  exerciseName?: string; // exerciseNameプロパティをオプショナルにする
}
const Popup: React.FC<PopupProps> = ({ type, onClose, exerciseName }) => {
  // exerciseNameをpropsから受け取る
  const popupRef = useRef<HTMLDivElement>(null);
  const [selectedSet, setSelectedSet] = useState<string>('SetA'); // 選択されたセットの状態

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedElement = event.target as HTMLElement;
      const isClickedElementOrParentPopup = checkPopupAncestor(clickedElement);

      if (!isClickedElementOrParentPopup) {
        onClose(); // ポップアップを閉じる
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const checkPopupAncestor = (element: HTMLElement | null): boolean => {
    if (!element) return false;

    // クリックされた要素がポップアップであるかをチェック
    if (element.classList.contains(styles.popup)) {
      return true;
    }

    // 親要素が存在する場合、その親要素もチェック
    return checkPopupAncestor(element.parentElement);
  };

  return (
    <div className={styles['popup']} ref={popupRef}>
      <div className={styles['popup-content']}>{exerciseName}</div>{' '}
      {/* exerciseName を表示 */}
    </div>
  );
};

export default Popup;
