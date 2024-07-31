import { useState, useEffect } from "react";

import useWindowSize from "../general/useWindowSize";


const useVisibleSlides = ({
  carouselRef,
  desktopBreakpoint = 1024,
  desktopVisibleSlidesCount = 3,
  tabletBreakpoint = 640,
  tabletVisibleSlidesCount = 2,
  mobileBreakpoint = 0,
  mobileVisibleSlidesCount = 1,
}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlidesCount, setVisibleSlidesCount] = useState(mobileVisibleSlidesCount);

  const { screenWidth } = useWindowSize();


  useEffect(() => {

    const updateCarouselSlide = slideToBeVisible => {

      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselRef.current.carouselStore.state;

      setVisibleSlidesCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth >= desktopBreakpoint) { 
      updateCarouselSlide(desktopVisibleSlidesCount);
    }
    else if (screenWidth >= tabletBreakpoint) { 
      updateCarouselSlide(tabletVisibleSlidesCount);
    }
    else if (screenWidth >=  mobileBreakpoint) { 
      updateCarouselSlide(mobileVisibleSlidesCount);
    }
  },
    [
      carouselRef,
      screenWidth,
      desktopBreakpoint,
      desktopVisibleSlidesCount,
      tabletBreakpoint,
      tabletVisibleSlidesCount,
      mobileBreakpoint,
      mobileVisibleSlidesCount,
      setVisibleSlidesCount,
      setCurrentSlide
    ]
  );

  return [currentSlide, visibleSlidesCount];
}

export default useVisibleSlides;