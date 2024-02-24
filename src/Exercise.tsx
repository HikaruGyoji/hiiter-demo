import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Exercise.module.scss';
import VideoPlayer from './VideoPlayer';
import trainingMenuData from './menu/trainingMenu.json';
import testVideo from './assets/video/プッシュアップ.mp4';

function Exercise() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='運動' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-header']}>
          <VideoPlayer src={testVideo} trainingMenu={trainingMenuData.menu} />
        </div>
      </div>
      <div className={styles['userinfo-header']}>
        <Link to='/break' className={`${styles.button} ${styles['-primary']}`}>
          次へ
        </Link>
      </div>
    </div>
  );
}

export default Exercise;
