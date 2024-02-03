import { Link } from 'react-router-dom';
import Header from './Header';
import styles from './styles/ExplainHiit.module.scss';

function ExplainHiit() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='Hiitって何' backPath='/userinfo4' icons={false} />
      <div className={styles['margin-area']}>
        <p className={styles['userinfo-text']}>Hiitとは</p>
        <div className={styles['explain-box']}>
          <p>
            HIIT（High Intensity Interval
            Training）は、短い時間の高強度な運動と、低強度運動または休息を交互に行うトレーニング方法です。
            <br />
            （図）
            <br />
            HIITは何が良いの？
            HIITは時間効率が良く、脂肪燃焼、心肺機能の向上、筋肉の増強などに有効です。
            特に、タバタトレーニングはわずか4分間のトレーニングで1時間のランニングに匹敵する体力の向上（最大酸素摂取量）効果が期待できます。
            忙しい現代人にとって短時間で高い効果が得られる点が魅力です。
            さらに、中等度の強度で長く続ける長距離ランニングような「有酸素性」運動の能力と、大きなパワーを出すが長く続けられない100ｍ走のような「無酸素性」運動の能力に対して同時に最大の効果を得ることができます。
            研究結果もいれる
            <br />
            （図）
            <br />
            HIITの注意点は？
            過度のHIITは過労や怪我のリスクを増加させる可能性があります。初心者や特定の健康状態にある人は、医師やフィットネスの専門家と相談しながら慎重に進める必要があります。
            <br />
            （図）
          </p>
        </div>
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
