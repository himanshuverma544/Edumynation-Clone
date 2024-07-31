import { useRef } from "react";

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import Service from "./components/Service";

import useVisibleSlides from "../../../../../utilities/hooks/pure-react-carousel/useVisibleSlides";

import { 
  AcademicCounselling,
  PersonalCounselling,
  ResourcesAndInformation
} from "../../../../assets/home/student-services/images";


const services = [
  {
    id: 1,
    title: "Academic Counselling",
    text: "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring.",
    image: AcademicCounselling
  },
  {
    id: 2,
    title: "Personal Counselling",
    text: "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.",
    image: PersonalCounselling
  },
  {
    id: 3,
    title: "Resources and Information",
    text: "Designed to support and enhance the learning journey of our students, this invaluable platform provides easy access to a wide range of educational materials, helpful guides, research databases, and interactive tools.",
    image: ResourcesAndInformation
  },
  {
    id: 4,
    title: "Personal Counselling",
    text: "Provides support and resiliency skills to manage stress, anxiety, relationships and personal decision making. Students may also be connected to our Child and Youth Care staff, Social Worker, or Psychologists.",
    image: PersonalCounselling
  },
  {
    id: 5,
    title: "Academic Counselling",
    text: "Counsellors provide individual and group support in the areas of course selection, pathway planning, post secondary applications, scholarships, and access to study supports and peer tutoring.",
    image: AcademicCounselling
  }
];


export default function StudentServices() {

  const carouselRef = useRef(null);
 
  const [currentSlide, visibleSlidesCount] = useVisibleSlides({ carouselRef });

  
  return (
    <section id="student-services" className="flex flex-col items-center gap-5 sm:px-5 py-5 sm:items-start">
      <h2 className="text-3xl px-3 text-primaryBlue font-semibold">
        Comprehensive Student Services
      </h2>
      <CarouselProvider
        className="w-[97vw]"
        ref={carouselRef}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight
        currentSlide={currentSlide}
        visibleSlides={visibleSlidesCount}
        totalSlides={services.length}
      >
        <Slider className="services">
          {services.map((service, index) => 
            <Slide
              key={service.id}
              index={index}
              className={`
                flex items-end border-x-8 pt-[14%] border-white
                relative
                bg-cover bg-center bg-no-repeat
                overlay-black
                cursor-grab active:cursor-grabbing
              `}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <Service service={service}/>
            </Slide>
          )}
        </Slider>
      </CarouselProvider>
    </section>
  );
}
