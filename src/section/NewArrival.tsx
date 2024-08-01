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
    img: '/images/edition/item01.png',
    link: '#',
    title: '베이비두부 볼캡 + 부적 세트',
    price: 33900,
    rate: 5,
    reviewCnt: 2,
    brand: '티다문구점',
  },
];

const NewArrival = () => {
  return (
    <Section className='new'>
      <Title text='New Arrival' desc='방금 나온 신제품' />
      <Swiper className='new__shop' {...swiperOption}>
        {itemData.map((el, idx) => (
          <SwiperSlide key={`new-item-${idx}`}>
            <Item {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default NewArrival;
