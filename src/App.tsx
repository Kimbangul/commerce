import React from 'react';
import logo from 'logo.svg';
import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';

function App() {
  return (
    <div className='App'>
      <Header />
      <main id='contents'>
        <MainSlide />
      </main>
    </div>
  );
}

export default App;
