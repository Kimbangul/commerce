import { Section, Title } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { Ticker02 } from 'components/svg/ticker';

const itemData: IItemProps[] = [
  {
    img: '/images/best/item01.png',
    link: '#',
    title: '갤럭시 Z폴드6 슬림 S펜 케이스',
    price: 110000,
    discount: 55000,
    rate: 3,
    reviewCnt: 2,
    brand: '삼성전자',
    like: 33,
  },
  {
    img: '/images/best/item02.png',
    link: '#',
    title: '갤럭시 Z폴드6 카인드수트 케이스',
    price: 88000,
    discount: 44000,
    rate: 5,
    reviewCnt: 3,
    brand: '삼성전자',
    like: 11,
  },
  {
    img: '/images/best/item03.png',
    link: '#',
    title: '갤럭시 Z플립6 플립수트 케이스',
    price: 49500,
    discount: 24750,
    rate: 5,
    reviewCnt: 1,
    brand: '삼성전자',
    like: 20,
  },
  {
    img: '/images/best/item04.png',
    link: '#',
    title: '갤럭시 Z플립6 카인드 수트 케이스',
    price: 69000,
    discount: 11500,
    rate: 5,
    reviewCnt: 1,
    brand: '삼성전자',
    like: 20,
  },
  {
    img: '/images/best/item05.png',
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
    img: '/images/best/item06.png',
    link: '#',
    title: 'iPhone 14 Plus 실리콘 케이스',
    price: 69000,
    discount: 11500,
    rate: 0,
    reviewCnt: 0,
    brand: 'Apple',
    like: 7,
  },
  {
    img: '/images/best/item07.png',
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
    img: '/images/best/item08.png',
    link: '#',
    title: '벨킨 듀얼 USB-C 고속충전기(20W+20W)',
    price: 32900,
    discount: 30000,
    rate: 0,
    reviewCnt: 0,
    brand: '벨킨',
    like: 14,
  },
  {
    img: '/images/best/item09.png',
    link: '#',
    title: '폴드 3in1 접이식 무선 고속 충전기',
    price: 31500,
    discount: 27000,
    rate: 0,
    reviewCnt: 0,
    brand: '오아',
    like: 16,
  },
];

const Best = () => {
  return (
    <Section className='best'>
      <div className='img-ticker'>
        <Ticker02 />
      </div>
      <div className='cell'>
        <div className='best__title-container'>
          <Title text='Best' desc='지금 뜨는 베스트' />
          <ul className='item-cate'>
            <li className='item-cate__item'>
              <button className='item-cate__btn'>Mobile</button>
            </li>
            <li className='item-cate__item'>
              <button className='item-cate__btn'>Life</button>
            </li>
            <li className='item-cate__item'>
              <button className='item-cate__btn'>Digital</button>
            </li>
          </ul>
        </div>
        <div className='best__shop'>
          <div className='best__category'>
            {itemData.map((el, idx) => (
              <Item {...el} key={`best-item-${idx}`} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Best;
