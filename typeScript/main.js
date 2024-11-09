"use strict";
// 올바른 타입 지정하기
let monsterName;
let level;
let hasGold;
let skill;
let area;
monsterName = '코드잇 고블린';
level = 255;
hasGold = false;
skill = undefined;
area = null;
console.log(`${monsterName}의 레벨은 ${level}이고,\n` +
    `${hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${skill ? `가진 능력은 ${skill} 이고 \n` : ''}` +
    `${area ? `출현 지역은 ${area} 입니다.` : ''}`);
// 타입 배열 정하기
const current = [0, 0];
const target = [4, 5];
const dx = target[0] - current[0];
const dy = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
const items = [];
items.push('갑옷');
items.push('빨간 물약');
console.log(`${items.join(', ')}을/를 획득했다!`);
