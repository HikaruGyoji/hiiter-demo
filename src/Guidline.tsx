import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from './styles/Guidline.module.scss';

function Guidline() {
  return (
    <div className={styles['userinfo1']}>
      <Header name='ガイドライン' backPath='/home' icons={true} />
      <div className={styles['margin-area']}>
        <div className={styles['explain-box']}>
          <p>
            <span>医師の診断:</span>
            持病のある方は、運動を始める前に医師の診断を受けるようにしてください。
            <br />
            <span>体調の確認:</span>
            体調に不安がある場合は、運動を控え、必要に応じて専門家の助言を求めてください。
            <br />
            <span>個人の限界を認識:</span>
            自身の体力や運動能力に合わせて運動強度を調整しましょう。
            <br />
            <span>ウォーミングアップとクールダウン:</span>
            運動前後には、ウォーミングアップとクールダウンを行うことで、怪我のリスクを減らしましょう。
            <br />
            <span>適切な服装と靴:</span>
            運動には動きやすく、適切なサポートを提供する服装と靴を着用しましょう。
            <br />
            <span>適切な水分補給: </span>
            運動中は十分な水分を摂取することが重要です。
            <br />
            <span>適度な休息:</span>
            疲労や過度な筋肉痛を感じた場合は、適切な休息を取りましょう。
            <br />
            <span>機器の安全使用:</span>
            運動機器を使用する場合は、正しい使用方法を学び、安全に注意してください。
            <br />
            <span>栄養バランスの取れた食事:</span>
            運動効果を高めるために、栄養バランスの取れた食事を心掛けてください。
            <br />
            <span>目標設定の現実性:</span>
            現実的かつ達成可能な目標を設定し、無理のないペースで進めてください。
            <br />
            <span>リスク認識と事故防止:</span>
            特に屋外での運動時には、交通安全や周囲の環境に注意しましょう。
            <br />
            <span>個人データのプライバシー保護:</span>
            個人データは安全に管理し、他人との共有は慎重に行いましょう。
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Guidline;
