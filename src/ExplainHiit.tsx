import { Link } from 'react-router-dom';
import Header from './Header';
import React, { useState } from 'react';
import styles from './styles/ExplainHiit.module.scss';

function ExplainHiit() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='Hiitとは' backPath='/userinfo4' />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>Hiitとは</p>
        <span className={styles['userinfo-span']}>Hiitとは○○</span>
        <header className={styles['userinfo-header']}>
          <Link to='/' className={`${styles.button} ${styles['-primary']}`}>
            次へ
          </Link>
        </header>
      </div>
    </div>
  );
}

export default ExplainHiit;
