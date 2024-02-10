import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/LevelSetting.module.scss';
import ScrollableTable from './ScrollableTable';

const data = [
  {
    Lv: 1,
    A: ['背筋', 'スクワット', '腕立て伏せ'],
    B: ['腹筋', 'その場かけ足', 'ジャンピングジャック＆シザーズ'],
    C: [
      'スクワット＆ジャンプ',
      'サイドステップ＆もも上げ',
      'ギャロップ＆フロアタッチ',
    ],
  },
  {
    Lv: 2,
    A: ['背筋', '腕立て伏せ', 'その場かけ足'],
    B: ['スクワット＆ジャンプ', 'スケーターズランジ', 'マウンテンクライマー'],
    C: [
      'ジャンピングジャック＆シザーズ',
      'サイドステップ＆もも上げ',
      'スクワット＆フロントキック',
    ],
  },
  {
    Lv: 3,
    A: ['スクワット', '腹筋', 'ジャンピングジャック＆シザーズ'],
    B: ['腕立て伏せ', 'その場かけ足', 'サイドステップ＆もも上げ'],
    C: ['背筋', 'スクワット＆フロントキック', 'ギャロップ＆フロアタッチ'],
  },
  {
    Lv: 4,
    A: ['背筋', 'その場かけ足', 'スクワット＆ジャンプ'],
    B: ['腕立て伏せ', '腹筋', 'スケーターズランジ'],
    C: ['スクワット', 'ジャンピングジャック＆シザーズ', 'マウンテンクライマー'],
  },
  {
    Lv: 5,
    A: ['スクワット', '腹筋', 'サイドステップ＆もも上げ'],
    B: ['背筋', '腕立て伏せ', 'ギャロップ＆フロアタッチ'],
    C: [
      'その場かけ足',
      'スクワット＆フロントキック',
      'ジャンピングジャック＆シザーズ',
    ],
  },
  {
    Lv: 6,
    A: ['腹筋', 'ジャンピングジャック＆シザーズ', 'ギャロップ＆フロアタッチ'],
    B: ['スクワット', '腕立て伏せ', 'スケーターズランジ'],
    C: ['背筋', 'その場かけ足', 'スクワット＆ジャンプ'],
  },
  {
    Lv: 7,
    A: ['腕立て伏せ', '腹筋', 'ジャンピングジャック＆シザーズ'],
    B: ['背筋', 'スクワット', 'スケーターズランジ'],
    C: [
      'その場かけ足',
      'サイドステップ＆もも上げ',
      'スクワット＆フロントキック',
    ],
  },
  {
    Lv: 8,
    A: ['腹筋', 'その場かけ足', 'スクワット＆ジャンプ'],
    B: ['背筋', '腕立て伏せ', 'ジャンピングジャック＆シザーズ'],
    C: ['スクワット', 'スケーターズランジ', 'ギャロップ＆フロアタッチ'],
  },
  {
    Lv: 9,
    A: ['腕立て伏せ', 'スクワット＆ジャンプ', 'ギャロップ＆フロアタッチ'],
    B: ['背筋', '腹筋', 'サイドステップ＆もも上げ'],
    C: ['その場かけ足', 'スクワット', 'ジャンピングジャック＆シザーズ'],
  },
  {
    Lv: 10,
    A: ['腹筋', '背筋', 'スクワット＆フロントキック'],
    B: ['腕立て伏せ', 'その場かけ足', 'ジャンピングジャック＆シザーズ'],
    C: ['スクワット', 'サイドステップ＆もも上げ', 'ギャロップ＆フロアタッチ'],
  },
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
        <p className={styles['userinfo-text']}>運動レベルを選んでください</p>
        <span className={styles['userinfo-span']}>
          運動レベルはいつでも変更できます。
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
