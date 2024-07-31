import Carousel from "react-multi-carousel";

import Testimonial from "./components/Testimonial";

import getCarouselResponsive from "../../../../../utilities/functions/react-multi-carousel/getCarouselResponsive";
import getRandomInt from "../../../../../utilities/functions/general/getRandomInteger";

import { backgroundImage } from "../../../../assets/home/testimonials/images";
import { SebastianAvatar, DianaAvatar, MichelleAvatar } from "../../../../assets/general/avatars/images";


const responsive = getCarouselResponsive();

const testimonials = [
  {
    id: 1,
    personName: "Sebastian",
    personDesignation: "Graphic Design",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: SebastianAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 2,
    personName: "Diana",
    personDesignation: "Software Developer",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: DianaAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 3,
    personName: "Michelle",
    personDesignation: "Project Coordinator",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: MichelleAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 4,
    personName: "Sebastian",
    personDesignation: "Graphic Design",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: SebastianAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 5,
    personName: "Diana",
    personDesignation: "Software Developer",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: DianaAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 6,
    personName: "Michelle",
    personDesignation: "Project Coordinator",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: MichelleAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  }, 
  {
    id: 7,
    personName: "Sebastian",
    personDesignation: "Graphic Design",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: SebastianAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 8,
    personName: "Diana",
    personDesignation: "Software Developer",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: DianaAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  },
  {
    id: 9,
    personName: "Michelle",
    personDesignation: "Project Coordinator",
    ratingByPerson: getRandomInt({ min: 1, max: 5 }),
    avatar: MichelleAvatar,
    textByPerson: "Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sit faucibus ipsum a. Porttitor justo eu diam phasellus congue dignissim quis. In velit orci mi sem arcu. Placerat volutpat sit quis sed in ornare ipsum faucibus. Scelerisque viverra mattis blandit lacus sollicitudin dolor sagittis. Potenti leo duis orci bibendum."
  }
];


export default function Testimonials() {

  return (
    <section
      id="testimonials"
      className={`
        flex flex-col items-center justify-center gap-5 py-5
        relative
        bg-center bg-cover bg-no-repeat
        overlay-black
      `}
      style={{ backgroundImage: `url(${backgroundImage.image}` }}
    >
      <div className="wrapper w-[100vw] flex justify-between lg:w-[85vw]">
        <h2 className="heading px-5 py-1 z-10 text-3xl text-white font-semibold lg:text-4xl">
          Testimonials
        </h2>
      </div>
      <Carousel
        responsive={responsive}
        showDots
        keyBoardControl
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        containerClass="w-[100vw] pb-10 z-10 lg:w-[85vw]"
        itemClass="fix-drag cursor-grab active:cursor-grabbing select-none px-5"
      >
        {testimonials.map(testimonial => 
          <Testimonial key={testimonial.id} testimonial={testimonial}/>
        )}
      </Carousel>
    </section>
  );
}
