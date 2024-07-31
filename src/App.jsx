import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';
import { HOME, CONTACT, PAGE404 } from '../routes.js';

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Page404 from "./pages/Page404.jsx";


function App() {

  return (
    <HashRouter basename=''>
      <Routes>
        <Route path={HOME.pathname} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={CONTACT.pathname} element={<Contact/>}/>
          <Route path={PAGE404.pathname} element={<Page404/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
