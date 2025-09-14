'use client';
import React from "react";

const Banner = ({ images, speed = 5000 }) => {
  const sectionStyle = {
    display: "flex",
    animation: `swipe ${speed}ms linear infinite`,
  };

  const keyframes = `
    @keyframes swipe {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
  `;

  const imgStyle = {
    maxWidth: "150px",
    height: "10rem",
    padding: "2px",
    objectFit: "cover",
    borderRadius: "1rem"
  };

  const innerStyle = {
    position: "relative",
    width: "50rem",
    overflow: "hidden",
    height: "10rem"
  };

  const wrapperStyle = {
    display: "flex" // remove position: absolute
  };


  return (
    <div style={innerStyle}>
      <style>{keyframes}</style>
      <div style={wrapperStyle}>
        {[...Array(3)].map((_, i) => (
          <section style={sectionStyle} key={i}>
            {images.map(({ id, image }) => (
              <div key={id}>
                <img src={image} alt={id} style={imgStyle} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export { Banner };
