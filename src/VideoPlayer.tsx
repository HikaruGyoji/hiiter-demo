import React from 'react';

interface SimpleVideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const SimpleVideoPlayer: React.FC<SimpleVideoPlayerProps> = ({
  src,
  width = '100%',
  height = 'auto',
}) => {
  return (
    <video src={src} autoPlay loop muted width={width} height={height}>
      Your browser does not support the video tag.
    </video>
  );
};

export default SimpleVideoPlayer;
