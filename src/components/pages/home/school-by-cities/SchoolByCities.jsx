import Carousel from "react-multi-carousel";

import City from "./components/City";

import getCarouselResponsive from "../../../../../utilities/functions/react-multi-carousel/getCarouselResponsive";

import { City1, City2, City3 } from "../../../../assets/home/school-by-cities/images";


const responsive = getCarouselResponsive({ desktopItems: 4, tabletItems: 3, mobileItems: 2 });

const cities = [
  {
    id: 1,
    cityName: "Delhi",
    image: City1
  },
  {
    id: 2,
    cityName: "Dehradun",
    image: City2
  },
  {
    id: 3,
    cityName: "Banglore",
    image: City3
  },
  {
    id: 4,
    cityName: "Chandigarh",
    image: City1
  },
  {
    id: 5,
    cityName: "Gurugram",
    image: City2
  },
];


export default function SchoolByCities() {

  return (
    <section id="school-by-cities" className="flex flex-col items-center justify-center gap-7 py-5 bg-secondaryLight">
      <h1 className="w-[91vw] sm:w-[93.5vw] text-start text-3xl text-primaryBlue font-semibold">
        School by Cities
      </h1>
      
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        containerClass="w-[95vw]"
        itemClass="h-[50vw] px-[0.625rem] select-none fix-drag cursor-grab active:cursor-grabbing sm:h-[35vw] lg:h-[25vw] xl:h-[25vw] 2xl:h-[400px] "
      >
        {cities.map(city => 
          <City key={city.id} city={city}/>
        )}
      </Carousel>
    </section>
  );
}