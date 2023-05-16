import React, { useEffect, useRef, useState, useCallback } from "react";
import { Image } from "../../Components/Image";

export const HeroSection = () => {
  const slideRef = useRef();
  
  const [slides, setSlides] = useState([
    <IsfpSlide key="IsfpSlide" />,
    <MapSlide key="MapSlide" />,
    <PieSlide key="PieSlide" />,
    <OurTeamSlide key="OurTeamSlide" />,
    <InvestMent key="InvestMent" />,
  ]);
  const [BoundingClientRect, setBoundingClientRect] = useState();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const rightBtn = useRef()
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
      if (currentSlideIndex === 0) {
        addMoreSlidesToTheLeft()
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1);
      }
    } else if (id === "left") {
      currentSlideIndex === slides.length - 1
        ? addMoreSlidesToTheRight()
        : setCurrentSlideIndex(currentSlideIndex + 1);
    }
    e.preventDefault()
    clearInterval()
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
    slideWidth * currentSlideIndex
    }px)`;
    
  }, [currentSlideIndex, slides]);
useEffect(()=>{
  const interval = setInterval(()=>{rightBtn.current.click()},3000)
  return()=> clearInterval(interval)
})
  // colne the first and the last childes for infinite

  return (
    <section ref={heroRef} className="hero">
      <button  id="left" className="btn left" onClick={handelCarouselEventsBtns}>
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
        <div className="slides" ref={slideRef}>
          {Array.from(slides).map((slide) => slide)}
        </div>
      </div>
    </section>
  );
};

// slide -1
const MapSlide = () => {
  const locations = [];
  for (let i = 1; i < 12; i++) {
    locations.push(i);
  }
  return (
    <article className="slide">
      <div className="col">
        <div className="map">
          <Image url={"hero/shortmap.png"} alt={"map"} />
          {locations.map((index) => {
            return (
              <Image
                url={"hero/point.png"}
                className={"point"}
                alt={"point"}
                key={"point" + index}
              />
            );
          })}
        </div>
      </div>
      <div className="col content">
        <h2>We Do Not Need to Prove It.</h2>
        <p>just let you know Our Products & Services In most growing ports</p>
      </div>
    </article>
  );
};
// slide -2
const PieSlide = () => {
  return (
    <article className="slide">
      <div className="col">
        <div className="pie">
          <div className="pie-col">66%</div>
          <div className="pie-col">25%</div>
          <div className="pie-col">9%</div>
        </div>
      </div>
      <div className="col content">
        <h2>Shareholders</h2>
        <ul>
          <li>66% The Egyptian Ministry of Transport</li>
          <li>25% The Egyptian Ministry of Communication</li>
          <li>
            9% The Arab Academy for Science, Technology and Maritime Transport.
          </li>
        </ul>
      </div>
    </article>
  );
};
// slide -3 which is the center and start index
const IsfpSlide = () => {
  return (
    <article className="slide">
      <Image
        containerClassName={"col logo"}
        url={"logos/ISFP.png"}
        alt={"ISFP"}
      />

      <h2 className="col content">
        An Egyptian pioneer software house in the field of Transport Automation,
        Integration Solutions and Business Process Management
      </h2>
    </article>
  );
};
// slide -4
const OurTeamSlide = () => {
  return (
    <article className="slide">
      <div className="col our-teams"></div>
      <div className="col content">
        <h2>
          Confidence in our teams of experts to provide Innovative and Efficient
          solutions.
        </h2>
      </div>
    </article>
  );
};
// slide -5
const InvestMent = () => {
  return (
    <article className="slide">
      <div className="col">
        <h1>`123</h1>
      </div>
      <div className="col content">
        <h2>We Invest In Human Resource.</h2>
      </div>
    </article>
  );
};
