import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
}

function VideoPlayer({src, poster}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      videoRef.current?.play();
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <video
      width={280}
      height={175}
      poster={poster}
      ref={videoRef}
      muted
    >
      <source src={src} />
    </video>
  );
}

export default VideoPlayer;
