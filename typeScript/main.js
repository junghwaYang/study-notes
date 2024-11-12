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
function printEquipment(equipment) {
    console.log(`이름: ${equipment.name}`);
    // 무기인 경우 아래 코드를 실행합니다.
    if ('attack' in equipment) {
        console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
    }
    // 방어구인 경우 아래 코드를 실행합니다.
    if ('defence' in equipment) {
        console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
    }
}
const item1 = {
    id: 'w001',
    name: '전쟁 도끼',
    price: 100,
    attack: 15,
};
const item2 = {
    id: 'a001',
    name: '사슬 갑옷',
    price: 200,
    defence: 52,
};
printEquipment(item1);
printEquipment(item2);
