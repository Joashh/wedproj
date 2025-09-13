'use client';
import { useRef, forwardRef, useImperativeHandle } from "react";

const Music = forwardRef((props, ref) => {
  const audioRef = useRef(null);

  // Expose a play() function to parent via ref
  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked by browser, try clicking the arrow");
        });
      }
    },
    pause: () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }));

  return (
    <audio ref={audioRef} src="/forever.mp3" loop preload="auto" />
  );
});

export default Music;
