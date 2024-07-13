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
  sub?: IMenuItem[];
  /** 서브메뉴 연결 코드 */
  subMenuCode?: number;
}

export type TMenuList = IMenuItem[];

export const thirdMenu: TMenuList[] = [
  [{ code: 2001001, title: `아이폰/갤럭시 전모델`, link: '#' }],
  [
    { code: 2002001, title: `유/무선 이어폰`, link: '#' },
    { code: 2002002, title: `에어팟/버즈 케이스`, link: '#' },
  ],
  [
    { code: 2003001, title: `SAMSUNG`, link: '#' },
    { code: 2003002, title: `Apple`, link: '#' },
  ],
  [
    { code: 2004001, title: `보호필름`, link: '#' },
    { code: 2004002, title: `보조배터리`, link: '#' },
    { code: 2004003, title: `태블릿 Acc`, link: '#' },
    { code: 2004004, title: `충전기/어댑터/케이블`, link: '#' },
    { code: 2004005, title: `스마트워치 스트랩`, link: '#' },
    { code: 2004006, title: `스마트톡`, link: '#' },
  ],
  [{ code: 2005001, title: `T다이렉트샵`, link: '#', external: true }],
  [
    { code: 3001001, title: `즉석카메라/카메라용품`, link: '#' },
    { code: 3001002, title: `컴퓨터 주변기기`, link: '#' },
    { code: 3001003, title: `헤드셋`, link: '#' },
    { code: 3001004, title: `디지털 주변기기`, link: '#' },
    { code: 3001005, title: `생활가전`, link: '#' },
    { code: 3001006, title: `디지털미용/헬스케어기기`, link: '#' },
  ],
  [
    { code: 3002001, title: `방수팩`, link: '#' },
    { code: 3002002, title: `텀블러/머그컵`, link: '#' },
    { code: 3002003, title: `패션 악세사리`, link: '#' },
    { code: 3002004, title: `파우치`, link: '#' },
    { code: 3002005, title: `인센스/디퓨저`, link: '#' },
    { code: 3002006, title: `홈패브릭`, link: '#' },
    { code: 3002007, title: `캠핑용품`, link: '#' },
  ],
  [{ code: 3003001, title: `기타문구`, link: '#' }],
  [
    { code: 3004001, title: `댕댕이꺼`, link: '#' },
    { code: 3004002, title: `냥냥이꺼`, link: '#' },
    { code: 3004003, title: `댕냥이 의류/용품`, link: '#' },
    { code: 3004004, title: `댕냥이 IOT기기`, link: '#' },
  ],
  [
    { code: 3005001, title: `닌텐도 게임기`, link: '#' },
    { code: 3005002, title: `닌텐도 타이틀`, link: '#' },
    { code: 3005003, title: `닌텐도 주변기기`, link: '#' },
    { code: 3005004, title: `플스 게임기`, link: '#' },
    { code: 3005005, title: `플스 타이틀`, link: '#' },
    { code: 3005006, title: `플스 주변기기`, link: '#' },
  ],
  [
    { code: 4001001, title: `휴대폰 배경화면`, link: '#' },
    { code: 4001002, title: `PC/태블릿 배경화면`, link: '#' },
  ],
  [
    { code: 4002001, title: `iOS 테마`, link: '#' },
    { code: 4002002, title: `Android 테마`, link: '#' },
  ],
  [
    { code: 4003001, title: `먼슬리`, link: '#' },
    { code: 4003002, title: `위클리`, link: '#' },
    { code: 4003003, title: `데일리`, link: '#' },
    { code: 4003004, title: `스터디`, link: '#' },
    { code: 4003005, title: `가계부`, link: '#' },
    { code: 4003006, title: `만년형`, link: '#' },
    { code: 4003007, title: `기타 다이어리`, link: '#' },
  ],
  [
    { code: 4004001, title: `노트커버`, link: '#' },
    { code: 4004002, title: `기획/업무`, link: '#' },
    { code: 4004003, title: `독서/리뷰`, link: '#' },
    { code: 4004004, title: `기타노트`, link: '#' },
  ],
  [
    { code: 4005001, title: `캐릭터`, link: '#' },
    { code: 4005002, title: `심플`, link: '#' },
    { code: 4005003, title: `마스킹테이프`, link: '#' },
    { code: 4005004, title: `기타 스티커`, link: '#' },
  ],
];

export const subMenu: TMenuList[] = [
  [
    { code: 1001, title: `Jeongwaja edition X 티다문구점`, link: '#' },
    { code: 1002, title: `Archive`, link: '#' },
  ],
  [
    { code: 2001, title: `휴대폰 케이스`, link: '#', sub: thirdMenu[0] },
    { code: 2002, title: `이어폰 및 케이스`, link: '#', sub: thirdMenu[1] },
    { code: 2003, title: `제조사정품 Acc`, link: '#', sub: thirdMenu[3] },
    { code: 2004, title: `모바일 Acc`, link: '#', sub: thirdMenu[4] },
    { code: 2005, title: `휴대폰.유무선상품`, link: '#', sub: thirdMenu[5] },
  ],
  [
    { code: 3001, title: `디지털 라이프`, link: '#', sub: thirdMenu[6] },
    { code: 3002, title: `생활`, link: '#', sub: thirdMenu[7] },
    { code: 3003, title: `디자인 문구`, link: '#', sub: thirdMenu[8] },
    { code: 3004, title: `반려라이프`, link: '#', sub: thirdMenu[9] },
    { code: 3005, title: `게임`, link: '#', sub: thirdMenu[10] },
  ],
  [
    { code: 4001, title: `모바일 배경화면`, link: '#', sub: thirdMenu[11] },
    { code: 4002, title: `카카오톡 테마`, link: '#', sub: thirdMenu[12] },
    { code: 4003, title: `다이어리/플래너`, link: '#', sub: thirdMenu[13] },
    { code: 4004, title: `노트`, link: '#', sub: thirdMenu[14] },
    { code: 4005, title: `스티커`, link: '#', sub: thirdMenu[15] },
  ],
];

export const menu: TMenuList = [
  { code: 100, title: '티다 Made', link: '#', sub: subMenu[0] },
  { code: 200, title: 'Mobile', link: '#', sub: subMenu[1] },
  { code: 300, title: 'Life', link: '#', sub: subMenu[2] },
  { code: 400, title: 'Digital', link: '#', sub: subMenu[3] },
];
