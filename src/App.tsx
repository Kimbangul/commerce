import 'style/style.scss';

import { register } from 'swiper/element/bundle';

import React from 'react';
import logo from 'logo.svg';
import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';
import Section from 'components/section/Section';
import Footer from 'components/footer/Footer';
import { Title } from 'components/section';

import { Best, Edition, Sale, Pick, BottomVisual, NewArrival } from 'section';

function App() {
  register();
  return (
    <div className='App'>
      <Header />
      <main id='contents'>
        <MainSlide />
        <Edition />
        <Best />
        <Section className='event'>
          <div className='event__banner'>
            <p className='event__banner-title'>Digital life T gift zone</p>
          </div>
          <div className='event__banner'>
            <p className='event__banner-title'>Ready for the cool summer</p>
          </div>
          <div className='event__banner'>
            <Title text='Event' desc='티다문구점 이벤트' />
          </div>
        </Section>
        <Sale />
        <NewArrival />
        <Pick />
        <BottomVisual />
      </main>
      <Footer />
    </div>
  );
}

export default App;
