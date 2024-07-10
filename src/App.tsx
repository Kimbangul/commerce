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
        <Section className='best'>
          <div className='img-ticker'></div>
          <div className='cell'>
            <div className='title__container'>
              <p className='title__desc'>지금 뜨는 베스트</p>
              <h2 className='title__text'>Best</h2>
            </div>
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
            <div className='title__container'>
              <p className='title__desc'>티다문구점 이벤트</p>
              <h2 className='title__text'>Event</h2>
            </div>
          </div>
        </Section>
        <Section className='new'>
          <div className=''></div>
        </Section>
      </main>
      <footer className='footer' id='footer'>
        <div className='footer__inner'>
          <div className='footer__row'>
            <div className='footer__cell'>
              <ul className='footer__link'>
                <li className='footer__link-item'>
                  <a href='#'>상품구매약관</a>
                </li>
                <li className='footer__link-item'>
                  <a href='#'>개인정보처리방침</a>
                </li>
              </ul>
              <nav className='footer__menu'>
                <ul className='footer__menu-list'>
                  <li className='footer__menu-item'>FAQ</li>
                  <li className='footer__menu-item'>공지사항</li>
                </ul>
              </nav>
            </div>
            <div className='footer__cell'>
              <p className='footer__tel'>1599-1932</p>
              <p className='footer__cs'>
                고객센터 평일 09:00 - 18:00 {`(토/일/공휴일 휴무)`}
                <br />
                점심시간 12:00 - 13:00
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
