import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/LevelSetting.module.scss';
import ScrollableTable from './ScrollableTable';

const data = [
  { Lv: 1, A: 'プッシュアップ', B: 'サイドランジ', C: 'クランチ' },
  { Lv: 2, A: 'チンアップ', B: 'スクワット', C: 'レッグレイズ' },
  { Lv: 3, A: 'ベンチプレス', B: 'デッドリフト', C: 'プランク' },
  { Lv: 4, A: 'ダンベルカール', B: 'ランニング', C: 'レッグカール' },
  { Lv: 5, A: 'トライセッププレス', B: 'バーベルロー', C: 'サイクリング' },
  {
    Lv: 6,
    A: 'ショルダープレス',
    B: 'レッグプレス',
    C: 'アブドミナルクランチ',
  },
  {
    Lv: 7,
    A: 'レッグエクステンション',
    B: 'フライ',
    C: 'バックエクステンション',
  },
  { Lv: 8, A: 'プルアップ', B: 'デッドリフト', C: 'シットアップ' },
  { Lv: 9, A: 'ラットプルダウン', B: 'レッグカール', C: 'ヒップスラスト' },
  { Lv: 10, A: 'ベンチダイプス', B: 'スクワット', C: 'ウォーキング' },
];

function LevelSetting() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const handleSelectLevel = (level: number) => {
    setSelectedLevel(level);
  };

  return (
    <div className={styles['userinfo1']}>
      <Header name='レベル設定・変更' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>レベルを選んでください</p>
        <span className={styles['userinfo-span']}>
          レベルはいつでも変更できます。
        </span>
        <ScrollableTable data={data} onSelectLevel={handleSelectLevel} />
        <div className={styles['userinfo-header']}>
          {selectedLevel ? (
            <Link
              to='/home'
              className={`${styles.button} ${styles['-primary']}`}
            >
              決定
            </Link>
          ) : (
            <button
              className={`${styles.button} ${styles['-primary']} ${styles['-disabled']}`}
              disabled
            >
              決定
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LevelSetting;
