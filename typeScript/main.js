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
let monster = {
    id: 'g001',
    name: '고블린',
    level: 22,
    skills: ['태권도', '특공무술'],
    createdAt: new Date(),
    updatedAt: new Date(),
};
console.log(`${monster.name}(${monster.id})의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join(', ')}입니다.` : ''}`);
