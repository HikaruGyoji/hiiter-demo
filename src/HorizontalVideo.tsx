import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './styles/HorizontalVideo.module.scss';
import exercise1 from './assets/video/その場かけ足.mp4';
import exercise2 from './assets/video/ギャロップ＆フロアタッチ.mp4';
import exercise3 from './assets/video/サイドステップ＆もも上げその場かけ足.mp4';
import exercise4 from './assets/video/ジャンピングジャック＆シザーズ.mp4';
import exercise5 from './assets/video/シットアップ.mp4';
import exercise6 from './assets/video/スクワット.mp4';
import exercise7 from './assets/video/スクワット＆ジャンプ.mp4';
import exercise8 from './assets/video/スクワット＆フロントキック.mp4';
import exercise9 from './assets/video/スケーターズランジ.mp4';
import exercise10 from './assets/video/バックエクステンション.mp4';
import exercise11 from './assets/video/バーピージャンプ.mp4';
import exercise12 from './assets/video/プッシュアップ.mp4';
import exercise13 from './assets/video/マウンテンクライマー.mp4';

interface HorizontalVideoProps {
  exerciseName: string;
}

const exerciseVideos: { [key: string]: string } = {
  その場かけ足: exercise1,
  'ギャロップ＆フロアタッチ': exercise2,
  'サイドステップ＆もも上げその場かけ足': exercise3,
  'ジャンピングジャック＆シザーズ': exercise4,
  シットアップ: exercise5,
  スクワット: exercise6,
  'スクワット＆ジャンプ': exercise7,
  'スクワット＆フロントキック': exercise8,
  スケーターズランジ: exercise9,
  バックエクステンション: exercise10,
  バーピージャンプ: exercise11,
  プッシュアップ: exercise12,
  マウンテンクライマー: exercise13,
};

const HorizontalVideo: React.FC<HorizontalVideoProps> = ({ exerciseName }) => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    if (exerciseName && exerciseVideos[exerciseName]) {
      setSrc(exerciseVideos[exerciseName]);
    }
  }, [exerciseName]);

  return (
    <div className={styles['horizontal-video']}>
      <div className={styles['video-container']}>
        {src && (
          <ReactPlayer
            url={src}
            playing={true}
            loop={true}
            controls={true}
            width='100%'
            height='100%'
          />
        )}
      </div>
    </div>
  );
};

export default HorizontalVideo;
