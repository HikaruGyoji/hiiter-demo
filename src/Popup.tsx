import React, { useRef, useEffect, useState } from 'react';
import styles from './styles/Popup.module.scss';
import DragAndDropContainer from './DragDrop';
import DragDrop from './DragDrop';

interface PopupProps {
  type: string;
  onClose: () => void; // ポップアップを閉じる関数
}

const Popup: React.FC<PopupProps> = ({ type, onClose }) => {
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

  const handleSetClick = (set: string) => {
    setSelectedSet(set); // セットを選択
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const renderPopupContent = () => {
    switch (type) {
      case 'HIIT':
        return (
          <div>
            <p>HIITメニュー</p>
            <DragDrop />
          </div>
        );
      case '低強度':
        return (
          <div>
            <p>低強度メニュー</p>
            <ul className={styles['low-strength-menu']}>
              <li
                className={selectedSet === 'SetA' ? styles.checked : ''}
                onClick={() => handleSetClick('SetA')}
              >
                腕立て
                <br />
                腹筋 <br />
                背筋
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles['popup']} ref={popupRef}>
      <div className={styles['popup-content']}>{renderPopupContent()}</div>
    </div>
  );
};

export default Popup;
