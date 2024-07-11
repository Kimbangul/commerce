export interface ITitleProps {
  /** 섹션 제목 */
  text: string;
  /** 섹션 설명 */
  desc: string;
}

const Title = (props: ITitleProps) => {
  return (
    <div className='title__container'>
      <p className='title__desc'>{props.desc}</p>
      <h2 className='title__text'>{props.text}</h2>
    </div>
  );
};

export default Title;
