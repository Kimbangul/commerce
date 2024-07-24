import { Section, Title } from 'components/section';

const Best = () => {
  return (
    <Section className='best'>
      <div className='img-ticker'></div>
      <div className='cell'>
        <Title text='Best' desc='지금 뜨는 베스트' />
        <ul className='cate'>
          <li className='cate__item'>
            <button className='cate__btn'>Mobile</button>
            <button className='cate__btn'>Life</button>
            <button className='cate__btn'>Digital</button>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Best;
