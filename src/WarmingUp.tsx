import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/WarmingUp.module.scss';
import VideoPlayer from './VideoPlayer';

import testVideo from './assets/video/test.mp4';

function WarmingUp() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='ウォーミングアップ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['userinfo-header']}>
          <VideoPlayer src={testVideo} />
        </div>
      </div>
      <div className={styles['userinfo-header']}>
        <Link
          to='/warmingup'
          className={`${styles.button} ${styles['-primary']}`}
        >
          次へ
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default WarmingUp;
