import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Information.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Information() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='お知らせ' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <header className={styles['userinfo-header']}>
          <ul className={styles['info-ul']}>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
            <li>
              <div>
                <span>2024/02/11</span>
                <p>アップデートのお知らせ</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles['control-button']}
              />
            </li>
          </ul>
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default Information;
