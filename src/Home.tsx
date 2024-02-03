import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Home.module.scss';

function Home() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='Home' backPath='/explainhiit' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <Link to='/' className={`${styles.button} ${styles['-primary']}`}>
            次へ
          </Link>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
