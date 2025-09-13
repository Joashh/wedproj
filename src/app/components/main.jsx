'use client';
import { useRef } from "react";
import Timer from "./timer";
import Music from "./music";

export default function Main() {
  const musicRef = useRef(null);

  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
    // Play music when arrow is clicked
    musicRef.current?.play();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      <Music ref={musicRef} />

      {/* Circle Section */}
      <div className="w-full relative flex flex-col items-center">
        <div
          className="w-full h-[30rem] relative overflow-hidden"
          style={{
            borderBottomLeftRadius: "200% 50%",
            borderBottomRightRadius: "200% 50%",
          }}
        >
          <img
            src="/download2.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
            <Timer />
          </div>
        </div>

        <div className="absolute bottom-0 transform translate-y-1/2 z-50 md:pt-15">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="rounded-full h-40 w-40 md:h-60 md:w-60 object-cover border-4 border-white shadow-md"
          />
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex items-center flex-col flex-1 justify-center pt-15">
       
        <div
          className="p-2 bg-white/40 backdrop-blur-xs border rounded-full animate-bounce shadow-md cursor-pointer"
          onClick={scrollToStory} // music plays here too
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <h1 className="py-10 font-bold text-xl absolute bottom-0 hide-on-short">
        . . .
      </h1>
    </div>
  );
}
