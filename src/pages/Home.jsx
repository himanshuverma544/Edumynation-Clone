import Hero from '../components/pages/home/hero-section/Hero';
import Resources from '../components/pages/home/resources/Resources';
import SchoolByCities from '../components/pages/home/school-by-cities/SchoolByCities';
import StudentServices from '../components/pages/home/student-services/StudentServices';
import FeaturedSchools from '../components/pages/home/featured-schools/FeaturedSchools';
import AboutUs from '../components/pages/home/about-us/AboutUs';
import Testimonials from '../components/pages/home/testimonials/Testimonials';
import ContactUsForm from '../components/pages/home/contact-us-form/ContactUsForm';


export default function Home() {

  return (
    <>
      <Hero/>
      <Resources/>
      <SchoolByCities/>
      <StudentServices/>
      <FeaturedSchools/>
      <AboutUs/>
      <Testimonials/>
      <ContactUsForm/>
    </>
  );
}



  

     

