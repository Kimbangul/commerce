export interface IItemProps {
  /** 썸네일 이미지 */
  img: string;
  /** 상세페이지 링크 */
  link: string;
  /** 상품명 */
  title: string;
  /** 가격 */
  price: number;
  /** 별점 */
  rate: number;
  /** 리뷰 갯수 */
  reviewCnt: number;
  /** 브랜드 */
  brand: string;
  /** 좋아요 갯수 */
  like?: number;
  /** 할인 가격 */
  discount?: number;
}

const Item = (props: IItemProps) => {
  const discountPercent = props.discount
    ? Math.floor(Number(((props.price - props.discount) / props.price) * 100))
    : '0%';

  return (
    <li className='item'>
      <div className='item__thumb-container'>
        <a href={props.link}>
          <img src={props.img} alt='' />
        </a>
      </div>
      <div className='item__text-container'>
        <h4 className='item__brand'>
          <a href='#'>{props.brand}</a>
        </h4>
        <h3 className='item__title'>
          <a href={props.link}>{props.title}</a>
        </h3>
        {!props.discount ? (
          <p className='item__price'>{props.price.toLocaleString('ko-KR')}</p>
        ) : (
          <>
            <div className='item__discount-box'>
              <p className='item__discount-percent'>{discountPercent}%</p>
              <p className='item__discount-price'>
                {props.discount.toLocaleString('ko-KR')}
              </p>
            </div>
            <p className='item__price'>{props.price.toLocaleString('ko-KR')}</p>
          </>
        )}
        <ul className='item__other-info'>
          <li className='item__other-rate'>
            <span className='blind'>평점</span>
            <span className='icon goods'></span>
            <span className='item__other-cnt'>
              {props.rate} <span className='blind'>점</span>
            </span>
            <span className='item__other-cnt'>
              {`(${props.reviewCnt})`}
              <span className='blind'>건</span>
            </span>
          </li>
          {typeof props.like !== 'undefined' && (
            <li className='item__other-rate'>
              <span className='blind'>좋아요</span>
              <span className='icon like'></span>
              <span className='item__other-cnt'>
                {props.like} <span className='blind'>개</span>
              </span>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default Item;
