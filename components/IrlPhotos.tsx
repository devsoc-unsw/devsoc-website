import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function IrlPhotos() {
  const images = [
    { src: "/carousel/qa_panel.jpg", text: "Industry Events" },
    { src: "/carousel/workshops.png", text: "Learn Together" },
    { src: "/carousel/together.jpg", text: "Develop Together" },
    { src: "/carousel/brainstorm.png", text: "Solve Unique Problems" },
    { src: "/carousel/starlight.jpg", text: "Showcase your projects" },
    { src: "/carousel/applications.png", text: "Join us!" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "150px",
        marginBottom: "50px",
      }}
    >
      {images.map((image, index) => {
        const fadeInOffset = Math.min((scrollPosition - (index * 450)) / 600, 1);
        const opacity = Math.min(Math.max(fadeInOffset, 0), 1); 
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "center",
              width: "100%",
              marginBottom: "20px",
              opacity: opacity,
              transition: "opacity 0.3s ease",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
                width: { xs: "100%", md: "50%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: opacity, 
              }}
            ></Box>
            <Typography
              sx={{
                fontSize: "1.5rem",
                width: { xs: "0", md: "50%" },
                textAlign: "center",
                opacity: opacity,
              }}
            >
              {image.text}
            </Typography>
          </div>
        );
      })}
    </div>
  );
}
