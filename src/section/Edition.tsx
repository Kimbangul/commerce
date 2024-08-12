'use client';
import { Section } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { Text1, Text2, Text3 } from 'components/svg/editionText';
import { Ticker01 } from 'components/svg/ticker';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { NavigationOptions } from 'swiper/types/modules/navigation';
import { Limited } from 'components/shop/badge';

const tagData = [
  { icon: 'unicorn', desc: '티끌 모아 티다문구점' },
  { icon: 'ghost', desc: '귀여운 것들만 모아서' },
  { icon: 'rocket', desc: '어머 저건 꼭 사야해!' },
];
const visualData = [<Text1 />, <Text2 />, <Text3 />];
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

const Edition = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperOption: SwiperOptions & SwiperProps = {
    modules: [Navigation],
    speed: 1000,
    slidesPerView: 2,
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
    <Section className='edition'>
      <h2 className='edition__title'>
        티다문구점 콜라보 <br />
        익스클루시브 에디션
      </h2>
      <div className='edition__visual'>
        <p className='blind'>Brand Exclusive Edition</p>
        {visualData.map((el, idx) => (
          <div className='edition__visual-text' key={`visual-text-${idx}`}>
            <div className='edition__visual-text-svg' data-svg={`${idx + 1}`}>
              {el}
            </div>
            <div
              className='tag'
              key={`visual-tag-${idx}`}
              data-tag={`${idx + 1}`}
            >
              <span className={`icon ${tagData[idx].icon}`}></span>
              <p className='tag__desc'>{tagData[idx].desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='edition__shop'>
        <div className='edition__subject'>
          <a href='#'>
            <div className='edition__subject-title-box'>
              <div className='edition__ticker'>
                <Ticker01 />
              </div>
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
        <div className='edition__shop-list'>
          <div className='edition__navigation'>
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
          <Swiper {...swiperOption}>
            {itemData.map((el, idx) => (
              <SwiperSlide key={`edition-item-${idx}`}>
                <Item {...el} badge={<Limited />} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default Edition;
