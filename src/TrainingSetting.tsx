import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/TrainingSetting.module.scss';
import DragDrop from './DragDrop';

function TrainingSetting() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='低強度メニュー' backPath='/home' icons={true} />
      <div className={styles['userinfo-header']}>
        <p>メニューのカスタマイズ</p>
        <span>ドラッグ&ドロップで設定してください。</span>
        <div className={styles['container']}>
          <DragDrop />
        </div>
      </div>
    </div>
  );
}

export default TrainingSetting;
