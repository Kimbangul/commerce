const infoData = [
  [`대표이사/사장`, `유영상`],
  [`사업자등록번호`, `104-81-37225`],
  [`판매허가번호`, `중구 02923호`],
  [`주소`, `서울특별시 중구 을지로 65`],
];
const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer__inner'>
        <div className='footer__row'>
          <div className='footer__cell'>
            <ul className='footer__link'>
              <li className='footer__link-item'>
                <a href='#'>상품구매약관</a>
              </li>
              <li className='footer__link-item'>
                <a href='#'>개인정보처리방침</a>
              </li>
            </ul>
            <nav className='footer__menu'>
              <ul className='footer__menu-list'>
                <li className='footer__menu-item'>
                  <a href='#'>FAQ</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#'>공지사항</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#'>제휴문의</a>
                </li>
                <li className='footer__menu-item'>
                  <a href='#'>티다문구점 소개</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='footer__cell'>
            <p className='footer__tel'>1599-1932</p>
            <p className='footer__cs'>
              고객센터 평일 09:00 - 18:00 {`(토/일/공휴일 휴무)`}
              <br />
              점심시간 12:00 - 13:00
            </p>
          </div>
        </div>

        <div className='footer__row'>
          <div className='footer__info'>
            <p className='footer__company'>{`(주)에스케이텔레콤`}</p>
            <div className='footer__info-row'>
              <dl>
                <dt>대표이사/사장</dt>
                <dd>유영상</dd>
              </dl>
              <dl>
                <dt>사업자등록번호</dt>
                <dd>104-81-37225</dd>
              </dl>
              <dl>
                <dt>판매허가번호</dt>
                <dd>중구 02923호</dd>
              </dl>
              <dl>
                <dt className='blind'>주소</dt>
                <dd>서울특별시 중구 을지로 65</dd>
              </dl>
              <a className='btn' href='#' target='_blank'>
                사업자정보확인
              </a>
            </div>
            <div className='footer__info-row'>
              <p className='footer__company'>{`피에스앤마케팅(주)`}</p>
              <dl>
                <dt>수탁운영업체 :</dt>
                <dd>서울특별시 마포구 마포대로 144(공덕동, 마포티타운)</dd>
              </dl>
              <dl>
                <dt>사장</dt>
                <dd>이종호</dd>
              </dl>
              <dl>
                <dt>사업자등록번호</dt>
                <dd>104-86-20016</dd>
              </dl>
              <dl>
                <dt>판매허가번호</dt>
                <dd>2020-서울마포-1276</dd>
              </dl>
              <a className='btn' href='#' target='_blank'>
                사업자정보확인
              </a>
            </div>
            <small className='footer__copy'>
              <span className='icon copy'></span>티다문구점 Powered by T direct
              shop
            </small>
          </div>
          <button className='top-btn'>
            <span className='blind'>상단으로 이동하기</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
