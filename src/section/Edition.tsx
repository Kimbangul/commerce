import { Section } from 'components/section';

import { Text1, Text2, Text3 } from 'components/svg/editionText';

const Edition = () => {
  return (
    <Section className='edition'>
      <h2 className='edition__title'>
        티다문구점 콜라보 <br />
        익스클루시브 에디션
      </h2>
      <div className='edition__visual'>
        <p className='blind'>Brand Exclusive Edition</p>
        <div className='edition__visual-text'>
          <Text1 />
        </div>
        <div className='edition__visual-text'>
          <Text2 />
        </div>
        <div className='edition__visual-text'>
          <Text3 />
        </div>
        <div className='tag'>
          <span className='tag__icon'></span>
          <p className='tag__desc'></p>
        </div>
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
      </div>
    </Section>
  );
};

export default Edition;
