'use client';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';

class SlideItem {
  src: string;
  title: string;
  desc: string;
  alt?: string;
  constructor(src: string, title: string, desc: string, alt?: string) {
    this.src = src;
    this.title = title;
    this.desc = desc;
    this.alt = alt;
  }
}

const slideList = [
  new SlideItem(
    'images/main-slider/slide1.jpg',
    'Time deal',
    '삼성 정품 액세서리 50% 할인 프로모션',
    'Galaxy Z Fold6 | Z Filp6, Time deal'
  ),
  new SlideItem(
    'images/main-slider/slide2.jpg',
    'Galaxy Watch7 | Watch Ultra',
    '나만의 운동 맞춤 코칭 AI 워치',
    'Galaxy AI, 워치 강화 필름 무료 증정'
  ),
  new SlideItem(
    'images/main-slider/slide3.jpg',
    'Galaxy Z Filp6 Wallpaper',
    '갤럭시 Z Filp6 배경화면 증정',
    '티다문구점 한정, Filp6 전용 배경화면'
  ),
  new SlideItem(
    'images/main-slider/slide4.jpg',
    'Accessories \nwith iphone',
    '아이폰과 함께 구매하면 좋은 액세서리'
  ),
  new SlideItem(
    'images/main-slider/slide5.jpg',
    'Special deal \n80% off',
    '토심이 토뭉이 다이어리를 단 1만 원에!',
    '재입고 특가!, 단 1만 원에 득템!'
  ),
  new SlideItem(
    'images/main-slider/slide6.png',
    'Special \noffer',
    '곽철이 피크닉 매트 재입고 특가',
    '1만 원대 득템 찬스!, 특별한 나들이템'
  ),
  new SlideItem(
    'images/main-slider/slide7.jpg',
    'Ready for \nthe cool summer',
    '카카오프렌즈 여름 특별 할인전 Open',
    '선착순 300명!, 사은품 제공'
  ),
  new SlideItem(
    'images/main-slider/slide8.jpg',
    'Jeongwaja \nedition',
    '티다문구점 x 전과자 베이비두부 에디션'
  ),
  new SlideItem(
    'images/main-slider/slide9.jpg',
    'Digital \ntype test',
    '테스트하고 디지털 부적 받기'
  ),
  new SlideItem(
    'images/main-slider/slide10.gif',
    'Digital life \nT gift zone',
    '인터넷 / Btv 가입하고 티다문구점 이용권 받았다면?'
  ),
  new SlideItem(
    'images/main-slider/slide11.gif',
    'We can buy all \nfor lovers',
    '깔끔하게 만족스러운 Big sale 2탄'
  ),
  new SlideItem(
    'images/main-slider/slide12.jpg',
    'Tida \nT gift zone',
    'T기프트(티다문구점 이용권)로 액세서리 알뜰하게 구매하기',
    'T 기프트 받았다면?'
  ),
];

const swiperOption: SwiperOptions = {
  modules: [Autoplay, Pagination],
  pagination: {
    type: 'progressbar',
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: false,
  },
  speed: 1000,
  loop: true,
};

const MainSlide = () => {
  return (
    <section className='main-slider'>
      <h2 className='blind'>메인 슬라이드 영역</h2>
      <Swiper className='main-slider__slide-container' {...swiperOption}>
        {slideList.map((el, idx) => (
          <SwiperSlide
            className='main-slider__slide'
            key={`main-slider-slider-${idx}`}
          >
            <a href='#'>
              <img
                className={`main-slider__img`}
                src={el.src}
                alt={el.alt || ''}
              />
              <h3 className={`main-slider__title ${idx <= 2 ? 'blind' : ''}`}>
                {el.title}
              </h3>
              <p className={`main-slider__desc ${idx <= 2 ? 'blind' : ''}`}>
                {el.desc}
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default MainSlide;
