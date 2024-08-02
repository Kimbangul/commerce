import { Section, Title } from 'components/section';

import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import Item, { IItemProps } from 'components/shop/item/Item';

const swiperOption: SwiperOptions & SwiperProps = {
  //modules: [Navigation],
  speed: 1000,
  slidesPerView: 1,
};
const itemData: IItemProps[] = [
  {
    img: '/images/new/item01.png',
    link: '#',
    title: '삼성 갤럭시워치7 40mm 블루투스',
    price: 349000,
    discount: 331000,
    rate: 0,
    reviewCnt: 0,
    like: 1,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item02.png',
    link: '#',
    title: '삼성 갤럭시워치7 44mm 블루투스',
    price: 389000,
    discount: 369000,
    rate: 0,
    reviewCnt: 0,
    like: 0,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item03.png',
    link: '#',
    title: '삼성 갤럭시워치 울트라 LTE 블루투스',
    price: 899800,
    discount: 836800,
    rate: 0,
    reviewCnt: 0,
    like: 0,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item04.png',
    link: '#',
    title: '갤럭시워치7 스포츠 밴드 슬림사이즈',
    price: 59400,
    discount: 42000,
    rate: 5,
    reviewCnt: 1,
    like: 6,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item05.png',
    link: '#',
    title: '갤럭시워치7 스포츠 밴드 와이드',
    price: 59400,
    discount: 42000,
    rate: 0,
    reviewCnt: 0,
    like: 4,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item06.png',
    link: '#',
    title: '갤럭시 Z폴드6 스크린 프로텍터',
    price: 22000,
    discount: 17000,
    rate: 0,
    reviewCnt: 0,
    like: 4,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item07.png',
    link: '#',
    title: '갤럭시 Z플립6 스크린 프로텍터',
    price: 22000,
    discount: 17000,
    rate: 2,
    reviewCnt: 1,
    like: 15,
    brand: '삼성전자',
  },
  {
    img: '/images/new/item08.png',
    link: '#',
    title: '갤럭시Z폴드6 실리콘그립 with 스탠드',
    price: 77000,
    discount: 51800,
    rate: 0,
    reviewCnt: 0,
    like: 10,
    brand: '삼성전자',
  },
];

const NewArrival = () => {
  return (
    <Section className='new'>
      <Title text='New Arrival' desc='방금 나온 신제품' />
      <Swiper className='new__shop' {...swiperOption}>
        {itemData.map((el, idx) => (
          <SwiperSlide key={`new-item-${idx}`}>
            <Item {...el} isOnlyThumb={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default NewArrival;
