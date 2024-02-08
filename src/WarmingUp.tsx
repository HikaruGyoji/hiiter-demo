import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/WarmingUp.module.scss';
import VideoPlayer from './VideoPlayer';
import trainingMenuData from './menu/trainingMenu.json';
import testVideo from './assets/video/test.mp4';

function WarmingUp() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='ウォーミングアップ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-header']}>
          <VideoPlayer src={testVideo} trainingMenu={trainingMenuData.menu} />;
        </div>
      </div>
      <div className={styles['userinfo-header']}>
        <Link
          to='/exercise'
          className={`${styles.button} ${styles['-primary']}`}
        >
          次へ
        </Link>
      </div>
    </div>
  );
}

export default WarmingUp;
