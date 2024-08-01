import { Section, Title } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { SwiperOptions } from 'swiper/types/swiper-options';

const itemData: IItemProps[] = [
  {
    img: '/images/pick/item04.png',
    link: '#',
    title: '곽철이 피크닉 매트',
    price: 30000,
    discount: 15000,
    rate: 0,
    reviewCnt: 0,
    brand: '티다문구점',
    like: 0,
  },
  {
    img: '/images/pick/item05.png',
    link: '#',
    title: '토심이 토뭉이 몰스킨 다이어리',
    price: 48800,
    discount: 10000,
    rate: 0,
    reviewCnt: 0,
    brand: '티다문구점',
    like: 1,
  },
  {
    img: '/images/pick/item06.png',
    link: '#',
    title: '카카오프렌즈 80L 소형 미니 냉장고',
    price: 339000,
    discount: 300000,
    rate: 0,
    reviewCnt: 0,
    brand: '카카오프렌즈',
    like: 3,
  },
  {
    img: '/images/pick/item07.png',
    link: '#',
    title: '12L 대용량 에어프라이어 EV-AF9000',
    price: 199000,
    discount: 139000,
    rate: 0,
    reviewCnt: 0,
    brand: '에버홈',
    like: 1,
  },
  {
    img: '/images/pick/item08.png',
    link: '#',
    title: '라떼 캠핑미니버너 MINI-A',
    price: 59900,
    discount: 45900,
    rate: 0,
    reviewCnt: 0,
    brand: '맥스',
    like: 4,
  },
  {
    img: '/images/pick/item09.png',
    link: '#',
    title: '바리스타 캡슐 커피머신 페블',
    price: 149000,
    discount: 119000,
    rate: 0,
    reviewCnt: 0,
    brand: '카누',
    like: 6,
  },
  {
    img: '/images/pick/item10.png',
    link: '#',
    title: '무선 온열 목어꺠 마사지기 말랑말랑',
    price: 99000,
    discount: 62100,
    rate: 0,
    reviewCnt: 0,
    brand: '보국',
    like: 7,
  },
  {
    img: '/images/pick/item11.png',
    link: '#',
    title: '벨킨 듀얼 USB-C 고속충전기(20W+20W)',
    price: 32900,
    discount: 30000,
    rate: 0,
    reviewCnt: 0,
    brand: '벨킨',
    like: 15,
  },
  {
    img: '/images/pick/item12.png',
    link: '#',
    title: '접이식 고속충전 시계 달력 NEO FLIP',
    price: 59000,
    discount: 34900,
    rate: 0,
    reviewCnt: 0,
    brand: '인켈',
    like: 5,
  },
];

const Pick = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperOption: SwiperOptions & SwiperProps = {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 4,
    spaceBetween: 4,
    navigation: {
      enabled: true,
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    },
    onBeforeInit: (swiper: SwiperClass) => {
      const navigation = swiper.params.navigation as NavigationOptions;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
    },
  };

  return (
    <Section className='pick'>
      <Title text='MD Pick' desc='티다문구점 MD 추천' />

      <div className='pick__navigation'>
        <button
          className='btn-navigation'
          ref={navigationPrevRef}
          aria-label='prev'
        >
          <span className='icon prev'></span>
        </button>
        <button
          className='btn-navigation'
          aria-label='next'
          ref={navigationNextRef}
        >
          <span className='icon next'></span>
        </button>
      </div>
      <Swiper className='pick__shop' {...swiperOption}>
        {itemData.map((el, idx) => (
          <SwiperSlide key={`pick-item-${idx}`}>
            <Item {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Pick;
