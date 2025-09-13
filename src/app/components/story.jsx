'use client'
import Stack from './Stack';
import SplitText from './SplitText';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";
import Music from './music';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, img: "/a1.jpeg" },
  { id: 2, img: "/a2.jpeg" },
  { id: 3, img: "/a3.jpeg" },
  { id: 4, img: "/a4.jpeg" }
];

const handleAnimationComplete = () => console.log('All letters have animated!');

export default function Story() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div id="story" className="w-screen  flex flex-col items-center gap-4">

      {/* Header */}
      <div className="text-center max-w-3xl px-4">
        <SplitText
          text="Our Story"
          className="text-gray-700 text-4xl font-extrabold font-dancing mb-6"
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

        <div ref={(el) => (sectionsRef.current[0] = el)} className="flex flex-col gap-6 text-gray-700 font-garamond text-justify  leading-relaxed">
          <p>She is the third child of fun and loving parents, an accountant who balances not just numbers but life with grace. Collected and practical, yet full of warmth and laughter, she’s the kind of woman who makes life feel steady and joyful at the same time. Her heart is soft for dogs, and her family and friends adore her for the fun energy she brings into every room.</p>
          <p>He is the only son of kind and humble parents, a high school teacher with a calm and easygoing charm. Polite and laid-back, he carries himself with a quiet confidence that instantly makes people comfortable. When he isn’t in the classroom, you’ll find him on the basketball court, his love for the game as steady as his love for life’s simple joys.</p>
        </div>
      </div>

    <div>
      <Music/>
    </div>

      <div className="flex justify-center max-w-screen gap-4 p-4 overflow-x-hidden">
        <motion.img
          src="a4.jpeg"
          alt=""
          className="w-1/2 md:w-full md:h-60 h-30 object-cover rounded-2xl shadow-sm"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.img
          src="a3.jpeg"
          alt=""
          className=" w-1/2 md:w-full md:h-60 h-30  object-cover rounded-2xl shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>



      {/* Second Text Block */}
      <div ref={(el) => (sectionsRef.current[2] = el)} className="flex flex-col gap-6 max-w-3xl px-4 text-gray-700 font-garamond text-justify leading-relaxed">
        <p>Different as their worlds may seem—hers filled with ledgers and balance sheets, his with chalkboards and students—they found in each other a natural harmony. She admired his chill and grounded presence; he adored her balance of practicality and fun. Together, they discovered they shared so many things: a love for good food, the excitement of travel, movie marathons, and even playful competition in mobile games.</p>
        <p>For them, building a relationship wasn’t about grand moments but about the countless little ones—sharing a meal, exploring a new place, holding hands during a movie, or laughing late into the night. They have always believed in investing in memories, in cherishing experiences as the true treasures of their love.</p>
        <p>Now, as they look forward to the day they say “I do,” everyone around them knows their journey is only just beginning. Their story isn’t only about an accountant and a teacher—it’s about two people who found their perfect teammate in each other. A love that’s steady, joyful, and filled with the promise of a lifetime of memories yet to come.</p>
      </div>

    </div>
  );
}
