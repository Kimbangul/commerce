import { menu, img } from 'data';
import { subMenu } from 'data/menu';

const mainNavMenu: menu.TMenuList = [
  { code: 0, title: `Home`, link: `#` },
  ...menu.menu,
  { code: 1, title: `Special Show`, link: `#` },
  { code: 2, title: `Event`, link: `#` },
];

const allMenu  : menu.TMenuList= [
  {code: 1, title: `티다 Made`, link: `#`, sub:subMenu[0] },
  {code: 2, title: `Mobile`, link: `#`, sub: subMenu[1]},
  {code: 3, title: `Life`, link: `#`, sub: subMenu[2]},
  {code: 4, title: `Digital`, link: `#`, sub: subMenu[3]},
];

const Header = () => {
  return (
    <header className='header' id='header'>
      <div className='header__inner'>
        <div className='header__top'>
          <h1 className='logo'>
            <a href='#'>
              <img src='/icon/logo.svg' alt='티다문구점' />
            </a>
          </h1>
          <button className='menu-btn'>
            <span className='icon menu-bar'></span>
            <span className='blind'>메뉴 열기/닫기</span>
          </button>
          <ul className='action-menu'>
            <li className='action-menu__item'>
              <a href='#'>
                <span className='icon search'></span>
                <span className='blind'>검색</span>
              </a>
            </li>
            <li className='action-menu__item'>
              <a href='#'>
                <span className='icon delivery'></span>
                <span className='blind'>주문조회</span>
              </a>
            </li>
            <li className='action-menu__item'>
              <a href='#'>
                <span className='icon cart'></span>
                <span className='blind'>장바구니</span>
              </a>
            </li>
            <li className='action-menu__item'>
              <a href='#'>
                <span className='icon login'></span>
                <span className='blind'>로그인</span>
              </a>
            </li>
          </ul>
        </div>
        <nav className='cate'>
          <ul className='cate__list'>
            {mainNavMenu.map((el, idx) => (
              <li className='cate__item' key={`mainNav_${idx}`}>
                <a href={el.link}>
                  <span className='cate__icon'>
                    <img src={img.mainNavImg[idx]} alt='' />
                  </span>
                  <span className='cate__name'>{el.title}</span>
                </a>
                {/* 서브메뉴 */}
                {el.sub && (
                  <div className='cate__sub'>
                    <ul className='cate__sub-list'>
                      {el.sub.map((subMenu, idx) => (
                        <li
                          key={`subMenu-${subMenu.title}-${idx}`}
                          className='cate__sub-item'
                        >
                          <a href={subMenu.link}>
                            <span className='cate__sub-name'>
                              {subMenu.title}
                            </span>
                          </a>
                          {/* depth 3 */}
                          {subMenu.sub && (
                            <div className='cate__third'>
                              <ul className='cate__third-list'>
                                {subMenu.sub.map((thirdMenu, idx) => (
                                  <li
                                    className='cate__third-item'
                                    key={`thirdMenu-${thirdMenu.title}-${idx}`}
                                  >
                                    <a href={thirdMenu.link}>
                                      <span className='cate__third-name'>
                                        {thirdMenu.title}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {/* // depth 3 */}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* // 서브메뉴 끝 */}
              </li>
            ))}
          </ul>
        </nav>
        <nav className='menu'>
          <ul className='menu__list'>
            {
              allMenu.map((el,first)=> {
                return(
                  <li className='menu__item' key={`all-${first}`}>
                    <a href='#'>{el.title}</a>
                  {
                    el.sub && 
                    <>
                    <ul className='menu__sub'>
                      {
                        el.sub.map((submenu, second) => 
                          <li className='menu__sub-item' key={`all-${first}-${second}`}>
                            {submenu.title}
                            {
                              submenu.sub &&
                              <ul className='menu__third'>
                                {
                                  submenu.sub.map((thirdmenu, third) =>
                                    <li className='menu__third-item' key={`all-${first}-${second}-${third}`}>
                                      {thirdmenu.title}
                                    </li>
                                  )
                                }
                              </ul>
                            }
                          </li>
                        )
                      }
                    </ul>
                    </>
                  }
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
