import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/Complete.module.scss';
import { useEffect, useState } from 'react';

function Complete() {
  const [isLandscape, setIsLandscape] = useState<boolean>(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.orientation === 90 || window.orientation === -90);
    };

    // 初期化時にも実行
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className={styles['userinfo1']}>
      {!isLandscape && (
        <>
          <Header name='完了' backPath='/home' icons={true} />
          <div className={styles['userinfo-header']}>
            <div className={styles['container']}>
              <p>
                トレーニング終了です。
                <br />
                お疲れ様でした。
              </p>
            </div>
            <Link
              to='/progress'
              className={`${styles.button} ${styles['-secondary']}`}
            >
              進捗確認
            </Link>
            <Link
              to='/home'
              className={`${styles.button} ${styles['-primary']}`}
            >
              完了
            </Link>
          </div>
        </>
      )}

      {isLandscape && (
        <div className={styles['message-container']}>
          <p className={styles['message']}>画面を縦向きにしてください</p>
        </div>
      )}
    </div>
  );
}

export default Complete;
