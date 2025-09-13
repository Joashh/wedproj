"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Timer() {

    const targetDate = new Date("2025-11-25T09:00:00");


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col  text-center pb-20">

                <div>
                    <div className="flex flex-col items-center justify-center ">
                        <img src="icon2.png" alt="" className="w-20  h-auto"/>
                        <div className="w-24 border-b-2 border-white my-4"></div>
                        
                    </div>
                    <motion.h1 
                        className="text-5xl md:text-6xl md:font-medium font-style text-center text-white mb-2 border-y-1 p-2 font-extrabold"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Patrixia and Charlo
                    </motion.h1>


                </div>




                <h2 className="text-center md:text-sm font-lato text-xs mb-2 text-white">
                    November 25, 2025 - Nasugbu, Batangas, Philippines
                </h2>

                <div className="flex justify-center items-center bg-white/10 backdrop-blur-xs rounded-2xl px-4 py-2 shadow-md text-white text-sm font-bold gap-2 ">
                    <div className="flex flex-col items-center">
                        <span className="md:text-base ">{timeLeft.days.toString().padStart(2, "0")}</span>
                        <span className="text-xs md:text-base">Days</span>
                    </div>
                    <span className="mx-1">:</span>

                    <div className="flex flex-col items-center">
                        <span className="md:text-base ">{timeLeft.hours.toString().padStart(2, "0")}</span>
                        <span className="text-xs md:text-base">Hours</span>
                    </div>
                    <span className="mx-1">:</span>

                    <div className="flex flex-col items-center">
                        <span className="md:text-base ">{timeLeft.minutes.toString().padStart(2, "0")}</span>
                        <span className="text-xs md:text-base">Minutes</span>
                    </div>
                    <span className="mx-1">:</span>

                    <div className="flex flex-col items-center">
                        <span className="md:text-base ">{timeLeft.seconds.toString().padStart(2, "0")}</span>
                        <span className="text-xs md:text-base">Seconds</span>
                    </div>
                </div>


            </div>


        </div>
    );
}