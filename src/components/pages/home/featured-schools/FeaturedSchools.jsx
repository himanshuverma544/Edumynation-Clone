import Carousel from "react-multi-carousel";

import School from "./components/School";

import getCarouselResponsive from "../../../../../utilities/functions/react-multi-carousel/getCarouselResponsive";

import { School1, School2, School3 } from "../../../../assets/home/featured-schools/images";


const responsive = getCarouselResponsive({ mobileItems: 2, tabletItems: 3, desktopItems: 4 });

const schools = [
  {
    id: 1,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: School1
  },
  {
    id: 2,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: School2
  },
  {
    id: 3,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: School3
  },
  {
    id: 4,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: School2
  },
  {
    id: 5,
    name: "Primus Private School, UAE",
    link: {
      url: "#",
      text: "Visit School",
    },
    image: School1
  }
];


export default function FeaturedSchools() {

  return (
    <section id="featured-schools" className="flex flex-col items-center justify-center gap-10 py-5 bg-primaryLight">
      <h2 className="w-[89vw] sm:w-[93vw] text-start text-3xl font-semibold text-primaryBlue">
        Featured Schools
      </h2>
      <Carousel
        responsive={responsive}
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        containerClass="w-[95vw]"
        itemClass="py-2 select-none fix-drag cursor-grab active:cursor-grabbing"
      >
        {schools.map(school =>
          <School key={school.id} school={school}/>
        )}
      </Carousel>
    </section>
  );
}