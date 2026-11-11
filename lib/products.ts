export type Product = { id: number; name: string; price: number; emoji: string; description: string; category: string };
export const products: Product[] = [
  {id:1,name:'무선 헤드폰',price:89000,emoji:'🎧',description:'몰입감 있는 사운드와 편안한 착용감',category:'오디오'},
  {id:2,name:'기계식 키보드',price:129000,emoji:'⌨️',description:'타건감이 뛰어난 컴팩트 키보드',category:'주변기기'},
  {id:3,name:'스마트 워치',price:219000,emoji:'⌚',description:'일상과 운동을 기록하는 스마트 워치',category:'웨어러블'},
  {id:4,name:'무선 마우스',price:59000,emoji:'🖱️',description:'가벼운 무게와 정확한 트래킹',category:'주변기기'},
];
