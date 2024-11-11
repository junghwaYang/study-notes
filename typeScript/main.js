"use strict";
// 올바른 타입 지정하기
// let monsterName: string;
// let level : number;
// let hasGold : boolean;
// let skill : undefined;
// let area : null;
// monsterName = '코드잇 고블린';
// level = 255;
// hasGold = false;
// skill = undefined;
// area = null;
// console.log(
//   `${monsterName}의 레벨은 ${level}이고,\n` +
//     `${hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
//     `${skill ? `가진 능력은 ${skill} 이고 \n` : ''}` +
//     `${area ? `출현 지역은 ${area} 입니다.` : ''}`
// );
// 타입 배열 정하기
// const current: [number, number] = [0, 0];
// const target: [number, number] = [4, 5];
// const dx = target[0] - current[0];
// const dy = target[1] - current[1];
// console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
// const items: string[]= [];
// items.push('갑옷');
// items.push('빨간 물약');
// console.log(`${items.join(', ')}을/를 획득했다!`);
// 표를 참고해 타입 지정하기
// const monster: {
//   name: string;
//   level: number;
//   hasGold?: boolean;
//   skills: string[];
// } = {
//   name: '고블린',
//   level: 22,
//   skills: [
//     '태권도','특공무술'
//   ]
// }
// console.log(
//   `${monster.name}의 레벨은 ${monster.level}이고,\n` +
//     `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
//     `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join (', ')}입니다.` : ''}`
// );
// 함수의 타입 정하기
function getDiff(fromPoint, toPoint) {
    let dx = toPoint[0] - fromPoint[0];
    let dy = toPoint[1] - fromPoint[1];
    return [dx, dy];
}
const monster = {
    name: '고블린',
    level: 22,
    skills: ['태권도', '특공무술'],
    move(fromPoint, toPoint) {
        let [dx, dy] = getDiff(fromPoint, toPoint);
        console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
    }
};
const current = [0, 0];
const target = [4, 5];
monster.move(current, target);
