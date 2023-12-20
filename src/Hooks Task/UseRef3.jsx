import { useState, useRef } from 'react';
import Video1 from '../Html/video/Rallye .mp4'

function App() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
   const nextIsPlaying = !playing;
    setPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{playing ? 'Pause' : 'Play'}</button>
      <video src={Video1} height={'500px'} width="100%" ref={ref} onPlay={() => setPlaying(true)}></video>
    </>
  );
}

export default App