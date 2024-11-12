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

// 타입 배열 정하기
/* const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
const dx = target[0] - current[0];
const dy = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);

const items: string[]= [];
items.push('갑옷');
items.push('빨간 물약');
console.log(`${items.join(', ')}을/를 획득했다!`); */

// 표를 참고해 타입 지정하기

/* const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
} = {
  name: '고블린',
  level: 22,
  skills: [
    '태권도','특공무술'
  ]
}

console.log(
  `${monster.name}의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join (', ')}입니다.` : ''}`
); */

// 함수의 타입 정하기

/* function getDiff(fromPoint: [number, number], toPoint: [number, number]): [number, number] {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: [number, number], toPoint: [number, number]) => void;
} = {
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint)
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  }
}

const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];
monster.move(current, target); */

// 게임 캐릭터 직업 정하기(Enum 사용하기)

/* enum Job {
  Knight = 'Knight',
  Archer = 'Archer',
  Mage = 'Mage',
  Priest = 'Priest',
  Thief = 'Thief'
}

console.log(Job); */

// Monster 타입 재사용하기(interface 사용하기)

/* interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
}

let monster: Monster = {
  id: 'g001',
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  createdAt: new Date(),
  updatedAt: new Date(),
}

console.log(
  `${monster.name}(${monster.id})의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? '해치우면 골드를 얻는' : '해치워도 골드를 주지 않는'} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join (', ')}입니다.` : ''}`
); */

// 반복되는 코드 줄이기

/* type Point = [number, number];
interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: Point, toPoint: Point) => void
}



function getDiff(fromPoint: Point, toPoint: Point) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: Monster = {
  id: 'g001',
  name: '고블린',
  level: 22,
  skills: ['태권도', '특공무술'],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
  createdAt: new Date(),
  updatedAt: new Date(),
}

const current: Point = [0, 0];
const target: Point = [4, 5];
monster.move(current, target); */

// 무기냐 방어구나(유니온 타입 사용하기)

interface Equipment {
  id: string;
  name: string;
  price: number;
}

interface Weapon extends Equipment {
  attack: number
}

interface Armor extends Equipment {
  defence: number
}

function printEquipment(equipment: Weapon | Armor ) {
  console.log(`이름: ${equipment.name}`);
  // 무기인 경우 아래 코드를 실행합니다.
  if('attack' in equipment){
    console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
  }
  // 방어구인 경우 아래 코드를 실행합니다.
  if('defence' in equipment){
    console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
  }

}

const item1: Weapon = {
  id: 'w001',
  name: '전쟁 도끼',
  price: 100,
  attack: 15,
};

const item2: Armor = {
  id: 'a001',
  name: '사슬 갑옷',
  price: 200,
  defence: 52,
};

printEquipment(item1);
printEquipment(item2);
