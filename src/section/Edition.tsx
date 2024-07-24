import { Section } from 'components/section';
import Item, { IItemProps } from 'components/shop/item/Item';
import { Text1, Text2, Text3 } from 'components/svg/editionText';

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
];

const Edition = () => {
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
        <Item {...itemData[0]} />
      </div>
    </Section>
  );
};

export default Edition;
