import 'style/style.scss';

import { register } from 'swiper/element/bundle';

import React from 'react';
import logo from 'logo.svg';
import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';
import Section from 'components/section/Section';
import Footer from 'components/footer/Footer';
import { Title } from 'components/section';

function App() {
  register();
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
        <Section className='best'>
          <div className='img-ticker'></div>
          <div className='cell'>
            <Title text='Best' desc='지금 뜨는 베스트' />
            <ul className='cate'>
              <li className='cate__item'>
                <button className='cate__btn'>Mobile</button>
                <button className='cate__btn'>Life</button>
                <button className='cate__btn'>Digital</button>
              </li>
            </ul>
          </div>
        </Section>
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
        <Section className='sale'>
          <Title text='Hot Sale' desc='놓치면 안될 특가 상품' />
        </Section>
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
