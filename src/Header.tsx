import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/Header.module.scss';
import { Link } from 'react-router-dom';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';
import Hamburger from './Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Header(props: { name: string; backPath: string; icons: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <div className={styles['Header']}>
      <header className={styles['wrapper']}>
        <div className={styles['header-wrapper']}>
          {window.location.hash !== '#/home' ? (
            <Link to={props.backPath}>
              {' '}
              <FontAwesomeIcon icon={faAngleLeft} /> 戻る
            </Link>
          ) : (
            <div>　　　</div>
          )}
          <span>{props.name}</span>
          {props.icons ? (
            <div>
              <Link to='/information'>
                <img
                  src={icon1}
                  alt='icon1'
                  className={styles['icon-margin']}
                />
              </Link>
              <img src={icon2} alt='icon2' onClick={toggleMenu} />
              <div ref={menuRef}>
                <Hamburger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />{' '}
              </div>
            </div>
          ) : (
            <div>　　　</div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
