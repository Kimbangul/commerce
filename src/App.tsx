import React from 'react';
import logo from 'logo.svg';
import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';
import Section from 'components/section/Section';

function App() {
  return (
    <div className='App'>
      <Header />
      <main id='contents'>
        <MainSlide />
        <Section className='edition'>
          <h2 className='edition__title'>
            티다문구점 콜라보 <br />
            익스클루시브 에디션
          </h2>
          <div className='edition__visual'>
            <p className='blind'>Brand Exclusive Edition</p>
            <div className='editin__visual-text'></div>
            <div className='tag'>
              <span className='tag__icon'></span>
              <p className='tag__desc'></p>
            </div>
          </div>
          <div className='edition__shop'>
            <div className='edition__subject'>
              <a href='#'>
                <div className='edition__subject-title-box'>
                  <h3 className='edition__subject-title'>
                    Jeongwaja
                    <br />
                    edition
                  </h3>
                  <p className='edition__subject-desc'>
                    티다문구점 × 전과자 <br /> 베이비두부 에디션
                  </p>
                </div>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
