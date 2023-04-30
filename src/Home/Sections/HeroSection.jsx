import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import shortmap from "../../assets/imgs/hero/shortmap.png";
import point from "../../assets/imgs/hero/point.png";
import logo from "../../assets/imgs/logos/ISFP.png";

export const HeroSection = () => {
  const [slides, setSlides] = useState([
    <IsfpSlide key="IsfpSlide"/>,
    <MapSlide key="MapSlide"/>,
    <PieSlide key="PieSlide"/>,
    <OurTeamSlide key="OurTeamSlide"/>,
  ]);
  const [BoundingClientRect, setBoundingClientRect] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

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
      setCurrentSlide(
        currentSlide === 0 ? slides.length - 1 : currentSlide - 1
      );
    } else if (id === "left") {
      setCurrentSlide(
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }
    if (currentSlide % 2 === 0 ) {
      reorderSlidesList()
    }
  };

  // reorder the order of the slides list
  const reorderSlidesList = ()=> {
    const colneFirst = slides.slice(0, 1);
    const colneLast = slides.slice(slides.length - 1);
    const restOfSlides = slides.slice(1,-1)
    
  }
  // useeffect to handle the slide transtion
  useEffect(() => {
    const slideWidth = slideRef.current.clientWidth;
    slideRef.current.style.transform = `translateX(-${
      slideWidth * currentSlide
    }px)`;
    
  }, [currentSlide]);

  // colne the first and the last childes for infinite

  return (
    <div ref={heroRef} className="hero">
      <button id="left" className="btn left" onClick={handelCarouselEventsBtns}>
        &lt;
      </button>
      <button
        id="right"
        className="btn right"
        onClick={handelCarouselEventsBtns}>
        &gt;
      </button>
      {/* {BoundingClientRect && generatCanves(BoundingClientRect)} */}
      <div className="carousel">
        <div className="slides" ref={slideRef}>
          {slides.map((slide) => slide)}
        </div>
      </div>
    </div>
  );
};

const IsfpSlide = () => {
  return (
    <div className="slide">
      <div className="col logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="col content">
        An Egyptian pioneer software house in the field of Transport Automation,
        Integration Solutions and Business Process Management
      </div>
    </div>
  );
};

const MapSlide = () => {
  return (
    <div className="slide">
      <div className="col">
        <div className="map">
          <img src={shortmap} alt="map" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
          <img src={point} alt="point" className="point" />
        </div>
      </div>
      <div className="col content">
        <h3>We need to prove it</h3>
        <p>just let you know Our Products & Services In most growing ports</p>
      </div>
    </div>
  );
};

const PieSlide = () => {
  return (
    <div className="slide">
      <div className="col">
        <div className="pie">
          <div className="pie-col">66%</div>
          <div className="pie-col">25%</div>
          <div className="pie-col">9%</div>
        </div>
      </div>
      <div className="col content">
        <h3>Shareholders</h3>
        <ul>
          <li>66% The Egyptian Ministry of Transport</li>
          <li>25% The Egyptian Ministry of Communication</li>
          <li>
            9% The Arab Academy for Science, Technology and Maritime Transport.
          </li>
        </ul>
      </div>
    </div>
  );
};

const OurTeamSlide = () => {
  return (
    <div className="slide">
      <div className="col our-teams"></div>
      <div className="col content">
        <p>
          Confidence in our teams of experts to provide Innovative and Efficient
          solutions
        </p>
      </div>
    </div>
  );
};
