import 'react-multi-carousel/lib/styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-phone-input-2/lib/style.css';

import '../styles/react-multi-carousel.css';

import { Outlet } from 'react-router-dom';

import Header from '../components/pages/layout/Header';
import Footer from '../components/pages/layout/Footer';


export default function Layout() {

  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
