import React, { useEffect, useRef, useState, useCallback } from "react";
import { Image } from "../../Components/Image";
import {carousel} from './../../Utiles/carousel';
export const HeroSection = () => {
  const slideRef = useRef();
  const [slides, setSlides] = useState(carousel)
  
  const [BoundingClientRect, setBoundingClientRect] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const rightBtn = useRef();
  const heroRef = useCallback((container) => {
    if (container) {
      setBoundingClientRect(container.getBoundingClientRect());
    }
  }, []);

  const generatCanves = useCallback((BoundingClientRect) => {
    const sizeOfColumn = 40;
    const numberOfColmun = Math.floor(BoundingClientRect.width / sizeOfColumn);
    const numberOfRows = Math.floor(BoundingClientRect.height / sizeOfColumn);
    const totalOfChildes = numberOfColmun * numberOfRows;
    const style = {
      gridTemplateColumns: `repeat(${numberOfColmun}, 1fr)`,
    };
    const childes = [];
    for (let i = 0; i < totalOfChildes; i++) {
      childes.push(
        <span
          key={`span${i}`}
          style={{
            width: `${sizeOfColumn - 5}px`,
            aspectRatio: 1,
            animationDelay:
              i < numberOfColmun
                ? i + "ms"
                : i - numberOfColmun - 1 < numberOfColmun
                ? i - numberOfColmun + "ms"
                : i - numberOfColmun * 2 + "ms",
          }}
        ></span>
      );
    }

    return (
      <div className="media-container" style={style}>
        {childes.map((child) => child)}
      </div>
    );
  }, []);

  // to handle the Next and Previous Btns of the carousel
  const handelCarouselEventsBtns = (e) => {
    const id = e.target.id;
    if (id === "right") {
      currentSlideIndex === 0
        ? addMoreSlidesToTheLeft()
        : setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (id === "left") {
      currentSlideIndex === slides.length - 1
        ? addMoreSlidesToTheRight()
        : setCurrentSlideIndex(currentSlideIndex + 1);
    }
    
    e.preventDefault();
  };

  // grap the first slide and add to the end of the slides array
  const addMoreSlidesToTheRight = () => {
    const cloneFirst = slides.at(0);
    const cloneSlidesAfterFirst = slides.filter(
      (ele) => slides.indexOf(ele) !== 0
    );
    setSlides([...cloneSlidesAfterFirst, cloneFirst]);
  };

  // grap the last slide and add it to the beginning of the slides array
  const addMoreSlidesToTheLeft = () => {
    const cloneLast = slides.at(slides.length - 1);
    const cloneSlidesBeforeLast = slides.filter(
      (ele) => slides.indexOf(ele) !== slides.length - 1
    );
    setSlides([cloneLast, ...cloneSlidesBeforeLast]);
  };

  // useeffect to handle the slide transtion
  useEffect(() => {
    const slideWidth = slideRef.current.clientWidth;
    slideRef.current.style.transform = `translateX(-${
      (slideWidth - 0.90) * currentSlideIndex
    }px)`;
    console.log(slides[currentSlideIndex])
  }, [currentSlideIndex,slides]);

  // auto movement carousel
  useEffect(() => {
    // const interval = setInterval(() => {
    //   rightBtn.current.click();
    // }, 4000);
    // return () => clearInterval(interval);
  });

  return (
    <section ref={heroRef} className="hero">
      <button id="left" className="btn left" onClick={handelCarouselEventsBtns}>
        &lt;
      </button>
      <button
        ref={rightBtn}
        id="right"
        className="btn right"
        onClick={handelCarouselEventsBtns}
      >
        &gt;
      </button>
      {/* {BoundingClientRect && generatCanves(BoundingClientRect)} */}
      <div className="carousel">
        <ul className="slides" ref={slideRef}>
          {slides.map((slide, index) => <CarouselSlide isActive={currentSlideIndex === index} slide={slide} key={slide.name}/>)}
        </ul>
      </div>
    </section>
  );
};

const CarouselSlide = ({slide, isActive}) => {

  return (
    <li className={`slide ${isActive ? "animi" : ""}`} name={slide.name} >
      <div className="col">
        <div className= {`slide-thumbnail`} >
          <Image url={slide.thumbnail} alt={slide.thumbnail.slice(5,-4)} />
          {
          slide.images?.map((image,index) => {
            return (
              <Image
                url={image}
                className={"point"}
                alt={"point"}
                key={"point" + index}
              />
            );
          })}
        </div>
      </div>
      <div className="col content">
        <h2 className="slideh2">{slide.h2}</h2>
        {
          slide.p.map((p, index) => <p key={slide.name + "paragraph" + index} className="slide-paragraph">{p}</p>)
        }
      </div>
    </li>
  )
}