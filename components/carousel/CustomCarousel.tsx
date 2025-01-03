import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './embla.css';
import { NextButton, PrevButton, usePrevNextButtons } from '../embla/EmblaCarouselArrowButtons';

export function CustomCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false }, [Autoplay({delay: 5000})])
  const slides = [
    {src: "/carousel/brainstorm.png", text: "Solve Unique Problems"},
    {src: "/carousel/starlight.jpg", text: "Showcase your projects"},
    {src: "/carousel/qa_panel.jpg", text: "Industry Events"},
    {src: "/carousel/workshops.png", text: "Learn Together"},
    {src: "/carousel/together.jpg", text: "Develop Together"},
    {src: "/carousel/projects.png", text: "Our Projects"},
    {src: "/projects/notangles/thumbnail.png", text: "Notangles"},
    {src: "/projects/freerooms/thumbnail.png", text: "Freerooms"},
    {src: "/projects/unilectives/thumbnail.png", text: "Unilectives"},
    {src: "/projects/circles/thumbnail.png", text: "Circles"},
    {src: "/projects/structs/thumbnail.png", text: "Structs.sh"},
    {src: "/carousel/applications.png", text: "Join us!"},
  ]

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div>
      <div className="embla__controls">
        <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} />
            <NextButton onClick={onNextButtonClick} />
          </div>
      </div>
      <section className="embla" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((e, index) => (
              <div className="embla__slide" key={index}>
                  {e.src ? <img className="embla__image" src={e.src}/> : null}
                  <div className="embla__text">{e.text}</div>
              </div>
            ))}
          </div>
      </section>
    </div>
  )
}
