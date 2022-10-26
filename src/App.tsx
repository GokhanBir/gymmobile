import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './component/Header';
import { Daytab } from './component/Daytab';
import { Footer } from './component/Footer';
import { Content } from './component/Content';
import { Animation } from './component/Animation';
import { Main } from './component/Main';

function App() {

  var xlenght = window.outerWidth;
  var size = window.location;


  return (
    <>

      {
        xlenght > 500 ? (size.assign("https://www.google.com/")) : (
          <Routes>
            <Route path='/' element={<Animation />} />
            <Route path='main' element={<Main />} />
          </Routes>)
      }


      {/*       <Header />
      <Content/>
      <Footer/> */}
    </>
  );
}

export default App;
