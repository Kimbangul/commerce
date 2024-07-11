export interface IMenuItem {
  /** 메뉴 코드 */
  code: number;
  /** 메뉴 이름 */
  title: string;
  /** 메뉴 링크 */
  link: string;
  /** 외부링크 여부 */
  external?: boolean;
  /** 서브메뉴 */
  sub?: IMenuItem;
  /** 서브메뉴 연결 코드 */
  subMenuCode?: number;
}

export type TMenuList = IMenuItem[];

const menu: TMenuList = [
  { code: 100, title: '티다 Made', link: '#' },
  { code: 200, title: 'Mobile', link: '#' },
  { code: 300, title: 'Life', link: '#' },
  { code: 400, title: 'Digital', link: '#' },
];

const subMenu: TMenuList = [
  { code: 1001, title: `Jeongwaja edition X 티다문구점`, link: '#' },
];
