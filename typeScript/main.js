"use strict";
// 올바른 타입 지정하기
/* let monsterName: string;
let level : number;
let hasGold : boolean;
let skill : undefined;
let area : null;

monsterName = '코드잇 고블린';
level = 255;
hasGold = false;
skill = undefined;
area = null;

console.log(
  `${monsterName}의 레벨은 ${level}이고,\n` +
    `${hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${skill ? `가진 능력은 ${skill} 이고 \n` : ''}` +
    `${area ? `출현 지역은 ${area} 입니다.` : ''}`
); */
const 사과 = { 이름: "사과", 당도: 8 };
const 시금치 = { 이름: "시금치", 채소여부: true };
function 농산물정보(농산물이름) {
    if ('당도' in 농산물이름) {
        console.log(`${농산물이름.이름}는 과일입니다.`);
    }
    if ('채소여부' in 농산물이름) {
        console.log(`${농산물이름.이름}는 채소입니다.`);
    }
}
농산물정보(사과); // "사과는 과일입니다."
농산물정보(시금치); // "시금치는 채소입니다."
