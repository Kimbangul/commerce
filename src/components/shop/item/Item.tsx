export interface IItemProps {
  img: string;
  link: string;
  title: string;
  price: number;
  rate: number;
  reviewCnt: number;
  discount?: number;
  brand?: string;
  like?: number;
}

const Item = (props: IItemProps) => {
  const discountPercent = props.discount
    ? Number(((props.price - props.discount) / props.price) * 100).toFixed(0)
    : '0%';

  return (
    <li className='item'>
      <div className='item__thumb-container'>
        <a href={props.link}></a>
      </div>
      <div className='item__text-container'>
        <h4 className='item__brand'>{props.brand}</h4>
        <h3 className='item__title'>
          <a href={props.link}>{props.title}</a>
        </h3>
        {!props.discount ? (
          <p className='item__price'>{props.price}</p>
        ) : (
          <>
            <div className='item__discount-box'>
              <p className='item__discount-percent'>{discountPercent}%</p>
              <p className='item__discount-price'>{props.discount}</p>
            </div>
            <p className='item__price'>{props.price}</p>
          </>
        )}
      </div>
      <ul className='item__other-info'>
        <li className='item__other-rate'>
          <span className='bliend'>평점</span>
          <span className='item__other-cnt'>
            {props.rate} <span className='blind'>점</span>
          </span>
          <span className='item__other-cnt'>
            {`(${props.reviewCnt})`}
            <span className='blind'>건</span>
          </span>
        </li>
        {props.like && (
          <li className='item__other-rate'>
            <span className='blind'>좋아요</span>
            <span className='item__other-cnt'>
              ${props.like} <span className='blind'>개</span>
            </span>
          </li>
        )}
      </ul>
    </li>
  );
};

export default Item;
