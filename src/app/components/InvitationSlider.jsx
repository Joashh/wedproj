"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // import modules
import "swiper/css";
import "swiper/css/navigation"; // navigation styles
import "swiper/css/pagination"; // pagination styles

export default function InvitationSlider() {
  const invitations = ["/1.jfif", "/3.jfif", "/2.jfif"];

  return (
    <div className="max-w-md mx-auto">
      <Swiper
        modules={[Navigation, Pagination]} // enable modules
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-2xl shadow-lg"
      >
        {invitations.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Invitation ${i + 1}`}
              className="w-full rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
