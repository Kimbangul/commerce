import 'style/style.scss';

import { register } from 'swiper/element/bundle';

import React from 'react';
import logo from 'logo.svg';
import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';
import Section from 'components/section/Section';
import Footer from 'components/footer/Footer';
import { Title } from 'components/section';

import { Best, Edition, Sale } from 'section';

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
        <Section className='new'>
          <Title text='New Arrival' desc='방금 나온 신제품' />
        </Section>
        <Section>
          <Title text='MD Pick' desc='티다문구점 MD 추천' />
        </Section>
        <Section className='bottom-visual'>
          <h2 className='blind'>비주얼 영역</h2>
          <div className='bottom-visual__shape'></div>
          <p className='bottom-visual__text'>Everything coool is here.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
