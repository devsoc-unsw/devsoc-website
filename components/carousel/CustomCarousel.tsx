import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./embla.css";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../embla/EmblaCarouselArrowButtons";
import { Box, Typography } from "@mui/joy";

export function CustomCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: false },
    [Autoplay({ delay: 4500 })]
  );
  const slides = [
    { src: "/carousel/brainstorm.png", text: "Solve Unique Problems" },
    { src: "/carousel/starlight.jpg", text: "Showcase your projects" },
    { src: "/carousel/qa_panel.jpg", text: "Industry Events" },
    { src: "/carousel/workshops.png", text: "Learn Together" },
    { src: "/carousel/together.jpg", text: "Develop Together" },
    { src: "/carousel/projects.png", text: "Our Projects" },
    {
      src: "/projects/notangles/thumbnail.png",
      text: "Notangles",
      position: "50% 0%",
    },
    {
      src: "/projects/freerooms/thumbnail.png",
      text: "Freerooms",
      position: "50% 20%",
    },
    {
      src: "/carousel/unilectives.png",
      text: "Unilectives",
      position: "50% 0%",
    },
    {
      src: "/projects/circles/thumbnail.png",
      text: "Circles",
      position: "50% 20%",
    },
    {
      src: "/projects/structs/thumbnail.png",
      text: "Structs.sh",
      postion: "50% 80%",
    },
    { src: "/carousel/applications.png", text: "Join us!" },
  ];

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} />
          <NextButton onClick={onNextButtonClick} />
        </div>
      </div>
      <section className="embla" ref={emblaRef}>
        <Box
          className="embla__container"
          sx={{
            height: { xs: "200px", sm: "300px", md: "400px" },
          }}
        >
          {slides.map((e, index) => (
            <div className="embla__slide" key={index}>
              {e.src ? (
                <img
                  className="embla__image"
                  src={e.src}
                  style={{
                    objectPosition: `${e.position ? e.position : "50% 50%"}`,
                  }}
                />
              ) : null}
              <Typography
                className="embla__text"
                sx={{
                  color: "#EDEEF0",
                  fontSize: { xs: "1.5rem", sm: "3rem", md: "4rem" },
                  fontWeight: 500,
                }}
              >
                {e.text}
              </Typography>
            </div>
          ))}
        </Box>
      </section>
    </div>
  );
}
