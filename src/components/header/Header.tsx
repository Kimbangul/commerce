const Header = () => {
  return (
    <header id='header'>
      <div className='header__inner'>
        <h1 className='logo'>
          <a href='#'> 티다문구점 </a>
        </h1>
        <button className='menu-btn'>
          <span className='blind'>메뉴 열기/닫기</span>
        </button>
        <ul className='action-menu'>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='blind'>검색</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='blind'>주문조회</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='blind'>장바구니</span>
            </a>
          </li>
          <li className='action-menu__item'>
            <a href='#'>
              <span className='blind'>로그인</span>
            </a>
          </li>
        </ul>
        <nav className='cate'>
          <ul className='cate__list'>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Home</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>티다 Made</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Mobile</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Life</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Digital</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Special Show</span>
              </a>
            </li>
            <li className='cate__item'>
              <a href='#'>
                <span className='cate__icon'></span>
                <span className='cate__name'>Event</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav className='menu'>
          <ul className='menu__list'>
            <li className='menu__item'>
              <a href='#'>티다 Made</a>
            </li>
            <li className='menu__item'>
              <a href='#'>Mobile</a>
            </li>
            <li className='menu__item'>
              <a href='#'>Life</a>
            </li>
            <li className='menu__item'>
              <a href='#'>Digital</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
