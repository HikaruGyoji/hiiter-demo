import React, { useRef, useEffect, useState } from 'react';
import styles from './styles/Popup.module.scss'; // ポップアップのスタイリングを定義したファイル

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
            <span>オススメ</span>
            <ul className={styles['hiit-menu']}>
              <li
                className={selectedSet === 'SetA' ? styles.checked : ''}
                onClick={() => handleSetClick('SetA')}
              >
                スクワット＆ジャンプ
                <br />
                ジャンピングジャック＆シザーズ
                <br />
                その場かけ足
              </li>
              <li
                className={selectedSet === 'SetB' ? styles.checked : ''}
                onClick={() => handleSetClick('SetB')}
              >
                ジャンピングジャック＆シザーズ <br />
                ジャンピングジャック＆シザーズ
                <br />
                ジャンピングジャック＆シザーズ{' '}
              </li>
              <li
                className={selectedSet === 'SetC' ? styles.checked : ''}
                onClick={() => handleSetClick('SetC')}
              >
                スクワット＆ジャンプ
                <br />
                ジャンピングジャック＆シザーズ
                <br />
                その場かけ足
              </li>
            </ul>
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
