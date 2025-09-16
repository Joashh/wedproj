"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import DressCode from "./DressCode";
import AnimatedCircles from "./AnimatedCircle";

gsap.registerPlugin(ScrollTrigger);


export default function WedDetails() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (!sectionsRef.current) return;

    sectionsRef.current.forEach((section) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none", // animate once
          },
        }
      );
    });
  }, []);

  const sections = [
    {
      title: "Attire & Color",
      content:
        "We would love to see you in your most comfortable yet elegant attire as we celebrate this special day together.",
    },
    {
      title: "For Sponsors (Principal & Secondary)",
      contentComponent: <DressCode />,
    },
    {
      title: "For Guests",
      content: "Kindly refer to our color palette."
    },
     {
      title: "Gift Guide",
      content:
        "Your presence at our wedding is the greatest gift of all. Should you wish to honor us with a gift, a contribution to our future together would be deeply appreciated.",
    },
    {
      title: "Unplugged Ceremony",
      content:
        "Welcome to our unplugged ceremony. We invite you to be fully present with us. Kindly turn off your phone and cameras during the ceremony and enjoy this special day with us.",
    },
    {
      title: "Special Request",
      content:
        "We kindly request that only the guests listed in our invitation join us in celebrating our special day. As much as we love your little ones, our celebration will be an adults-only occasion — with the exception of those participating in the program.",
    },
    {
      title: "Snap & Share",
      content:
        "Help us capture the love and laughter! Use our hashtag:",
      hashtag: "#NewCHApterWithPAT",
    },
   
  ];

  return (
    <section className="w-full min-h-screen px-4 py-16 flex flex-col items-center relative overflow-x-hidden">
      {/* Title */}
     

      {/* Sections */}
      <div className="w-full max-w-4xl flex flex-col gap-3">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            ref={(el) => (sectionsRef.current[idx] = el)}
            className="bg-white border dark:bg-gray-800 rounded-3xl shadow-xl px-8 py-6 transition-transform duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold font-garamond text-gray-700 dark:text-gray-200 mb-4 text-center">
              {sec.title}
            </h2>

            {sec.contentComponent ? (
              <div>{sec.contentComponent}</div>
            ) : (
              <div className={`flex flex-col items-center gap-6`}>
                {/* Text */}
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base text-center leading-relaxed sm:flex-1">
                  {sec.content}
                </p>

                {/* Animated circles only for Attire & Color */}
                {sec.title === "For Guests" && (
                  <div className="flex justify-center sm:justify-start ">
                    <AnimatedCircles />
                  </div>
                )}
              </div>
            )}

            {sec.hashtag && (
              <p className="mt-3 font-semibold text-gray-800 dark:text-gray-100 text-center ">
                {sec.hashtag}
              </p>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
