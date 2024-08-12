export interface IBadgeNumberProps {
  number: number;
}

const BadgeNumber = (props: IBadgeNumberProps) => {
  return (
    <div className='badge number' aria-label={`${props.number}번째 상품`}>
      <div className='badge__inner'>
        <img src='/images/badge/star.gif' alt='' />
      </div>
    </div>
  );
};

export default BadgeNumber;