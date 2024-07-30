import { Section, Title } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { SwiperOptions } from 'swiper/types/swiper-options';

const itemData: IItemProps[] = [
  {
    img: '/images/sale/item01.png',
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
    img: '/images/sale/item02.png',
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
    img: '/images/sale/item03.png',
    link: '#',
    title: 'iPhone 15 파인우븐 케이스',
    price: 85000,
    discount: 40000,
    rate: 0,
    reviewCnt: 0,
    brand: 'Apple',
    like: 1,
  },
  {
    img: '/images/sale/item04.png',
    link: '#',
    title: 'iPhone 15 Pro 파인우븐 케이스',
    price: 85000,
    discount: 40000,
    rate: 5,
    reviewCnt: 1,
    brand: 'Apple',
    like: 3,
  },
  {
    img: '/images/sale/item05.png',
    link: '#',
    title: 'iPhone 15 Pro Max 파인우븐 케이스',
    price: 85000,
    discount: 40000,
    rate: 3,
    reviewCnt: 2,
    brand: 'Apple',
    like: 0,
  },
  {
    img: '/images/sale/item06.png',
    link: '#',
    title: 'iPhone 14 실리콘 케이스',
    price: 69000,
    discount: 11500,
    rate: 5,
    reviewCnt: 7,
    brand: 'Apple',
    like: 19,
  },
  {
    img: '/images/sale/item07.png',
    link: '#',
    title: 'iPhone 14 Plus 투명 케이스',
    price: 69000,
    discount: 11500,
    rate: 0,
    reviewCnt: 0,
    brand: 'Apple',
    like: 10,
  },
  {
    img: '/images/sale/item08.png',
    link: '#',
    title: 'iPhone 14 Plus 실리콘 케이스',
    price: 69000,
    discount: 11500,
    rate: 0,
    reviewCnt: 0,
    brand: 'Apple',
    like: 7,
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
