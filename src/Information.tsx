import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Information.module.scss';
import AccordionExpandDefault from './AccordionExpandDefault';

function Information() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='お知らせ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <AccordionExpandDefault />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Information;
