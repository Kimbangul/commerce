import { Section } from 'components/section';

const BottomVisual = () => {
  return (
    <Section className='bottom-visual'>
      <h2 className='blind'>비주얼 영역</h2>
      <div className='bottom-visual__shape'></div>
      <p className='bottom-visual__text'>Everything coool is here.</p>
    </Section>
  );
};

export default BottomVisual;
