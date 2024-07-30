import { Section, Title } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { SwiperOptions } from 'swiper/types/swiper-options';

const itemData: IItemProps[] = [
  {
    img: '/images/edition/item01.png',
    link: '#',
    title: '베이비두부 볼캡 + 부적 세트',
    price: 33900,
    rate: 5,
    reviewCnt: 2,
    brand: '티다문구점',
  },
  {
    img: '/images/edition/item02.png',
    link: '#',
    title: '베이비두부 인형 키링',
    price: 19000,
    rate: 5,
    reviewCnt: 3,
    brand: '티다문구점',
  },
  {
    img: '/images/edition/item03.png',
    link: '#',
    title: '두부 맥세이프 보조배터리',
    price: 35900,
    rate: 5,
    reviewCnt: 2,
    brand: '티다문구점',
  },
  {
    img: '/images/edition/item04.png',
    link: '#',
    title: '베이비두부 디지털 부적(16종)',
    price: 0,
    rate: 5,
    reviewCnt: 3,
    brand: '티다문구점',
  },
];

const Sale = () => {
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
    <Section className='sale'>
      <Title text='Hot Sale' desc='놓치면 안될 특가 상품' />

      <div className='sale__navigation'>
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
      <Swiper className='sale__shop' {...swiperOption}>
        {itemData.map((el, idx) => (
          <SwiperSlide key={`sale-item-${idx}`}>
            <Item {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Sale;
