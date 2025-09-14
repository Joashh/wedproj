'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { motion } from "framer-motion";
import SplitText from './SplitText';
export default function Venue() {
  const enableMap = (iframeRef, buttonRef) => {
    if (iframeRef.current && buttonRef.current) {
      iframeRef.current.style.pointerEvents = 'auto';
      buttonRef.current.style.display = 'none';
    }
  };

  const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};


  const churchIframe = useRef(null);
  const churchBtn = useRef(null);

  const recepIframe = useRef(null);
  const recepBtn = useRef(null);

  return (
    <div className="min-h-screen w-screen p-6 bg-white shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] flex flex-col items-center">
      
       <SplitText
        text="Wedding Details"
        className="text-gray-800 dark:text-gray-100 text-4xl sm:text-5xl md:text-6xl mb-12 font-extrabold font-dancing text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <h1 className="  text-gray-600 font-lato text-3xl py-4 text-center">
        Venue
        <br />
        <motion.span
          className="text-xs font-sans font-light"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          Swipe left to view the map
        </motion.span>
        <br />

      </h1>

      {/* Church Card */}
      <div className="max-w-md w-full bg-white border shadow-md rounded-lg overflow-hidden ">
        <Swiper spaceBetween={0} slidesPerView={1}>
          {/* Image Slide */}
          <SwiperSlide>
            <img
              src="/church.jpg"
              alt="Church Venue"
              className="w-full h-64 object-cover"
            />
          </SwiperSlide>
          {/* Map Slide */}
          <SwiperSlide>
            <div className="relative w-full h-64">
              <iframe
                ref={churchIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3158074870253!2d120.83417976476525!3d14.071737497037049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd96b9fe598991%3A0xe1cbcb1f58a6135!2sCaleruega%20Chapel%20of%20Transfiguration!5e1!3m2!1sen!2sph!4v1757756921789!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-t-md"
              ></iframe>
              <button
                ref={churchBtn}
                onClick={() => enableMap(churchIframe, churchBtn)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-sm"
              >
                Tap to Interact with Map
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="p-4 text-center">
          <h2 className="font-garamond font-semibold text-lg">
            Caleruega Chapel of Transfiguration
          </h2>
          <p className="text-sm text-gray-600">
            4231 Caleruega Road, Nasugbu, Batangas, Philippines
          </p>

        </div>
      </div>

      <p className="text-sm text-center px-2 font-light py-6"> The design of the church and its surrounding areas evoke a sense of serenity and oneness with nature, <br />in keeping with the church’s goal of bringing its pilgrims close to nature and closer to God. </p>

      {/* Reception Card */}
      <div className="max-w-md w-full bg-white border shadow-md rounded-lg overflow-hidden">
        <Swiper spaceBetween={0} slidesPerView={1}>
          {/* Image Slide */}
          <SwiperSlide>
            <img
              src="/jardin.jfif"
              alt="Reception Venue"
              className="w-full h-64 object-cover pt-2"
            />
          </SwiperSlide>
          {/* Map Slide */}
          <SwiperSlide>
            <div className="relative w-full h-64">
              <iframe
                ref={recepIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5038.243602273508!2d120.85692647612359!3d14.114261086316473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9d8d6152e1ed%3A0xc5ae16cc9817f6d9!2sJardin%20De%20Amor%20Events%20Place!5e1!3m2!1sen!2sph!4v1757757011934!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-t-md"
              ></iframe>
              <button
                ref={recepBtn}
                onClick={() => enableMap(recepIframe, recepBtn)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-sm"
              >
                Tap to Interact with Map
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="p-4 text-center">
          <h2 className="font-garamond font-semibold text-lg">
            Jardin De Amor Events Place
          </h2>
          <p className="text-sm text-gray-600">
            4123 Kanluran, Alfonso, Cavite, Philippines
          </p>
        </div>
      </div>
    </div>
  );
}
