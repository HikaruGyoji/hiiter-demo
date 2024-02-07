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
        <header className={styles['userinfo-header']}>
          <VideoPlayer src={testVideo} width='350px' height='250px' />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default WarmingUp;
