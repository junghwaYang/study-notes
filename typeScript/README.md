

# 타입스크립트

- 타입 스크립트 공부 노트 입니다.
- 기초 지식부터 실습까지  정리한 노트 입니다.

## 타입 스크립트 기초

### 설치 방법

1. `npm init`
2. `npm install --save-dev typescript`
3. `npx tsc --init` (tsc : 타입 스크립트 컴파일러)
4. `build` 명령어로 tsc 실행하기 및 `start` 명령어로 js 파일 실행하기
   ```javascript
   // package.json
    "scripts": {
      "build": "tsc",
      "start": "node main.js"
    },
   ```

### 추천 JS 런타임 라이브러리

- [deno](https://deno.com/)

### TS 타입 지정 방법

- 변수에 타입이 정해지면 그 타입을 지켜야한다. (정적 타이핑 언어)
- 아래에 타입을 지정해주지않고, 값을 넣는것을 '타입 추론' 이라고 한다.

```typescript
let size = 100;
```

- :(콜론)을 써서 타입을 지정해주면 된다.

```typescript
let size: number = 100;
```

- 값을 할당하지 않고 타입을 지정할때에는 아래와 같이 작성한다.

```typescript
let size:number;
```

### 타입의 종류

```typescript
let itemName: string = '코드잇 블랙 후드';
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;
```

### 배열과 튜플
- 배열의 타입을 지정해줄때는 아래와 같이 작성해준다.
```typescript
const cart: strong[] = [];
const carts string[][] = [
  ['c001', 'c002'],
  ['c003'],
];
```
- 위는 배열의 크기가 정해지지않았지만, 아래는 배열의 크기를 정하고 싶을때 사용한다 -> 튜플 타입
```typescript
let mySize: [number, number] = [167, 28];
```
- 튜플의 경우 모든 요소가 같은 타입일 필요는 없다.
```typescript
let mySize: [number, number, string] = [167, 28, '홍길동'];
```

### 객체 타입 정하기
- 객체는 기존에 ,(콤마)를 쓰는게 아닌 ;(콜론)을 사용한다.
```typescript
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly: boolean;
  sizes: string[];
} = {
  // 여기서 cmd + I를 입력하면 알아서 이름을 추천해준다.
}
```
- 필수가 아닌 프로퍼티는 옵셔널(?)을 이용해서 표현한다.
```typescript
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  
}
```
- 객체 프로퍼티의 키네임을 지정하고싶지 않을때는 타입만 지정하게끔 작성도 가능하다.
```typescript
let stock : {
  [id: string]: number; // 여기서 id는 어떤 이름이 들어가든 상관없다.
}
```

### any
- any라는 타입은 명시적으로 타입을 지정할 수 없을때 사용하며 JS와 같은 형태로 타입을 검사하지않는 상태로 만들 때 사용이 된다. 그렇다고해서 typescript 자체가 타입 검사를 위해 사용되는 문법이기에 any를 자주 사용하는 것은 좋지 않다. 하지만 어쩔 수 없이 any 타입으로 받아야하는 경우가 생긴다.
- any 타입 인 경우 예시
```typescript
const parsedProduct = JSON.parse(
  '{"name": "상품명", "price": 12000}'
)

```
- 위와 같이 JSON 문자열을 파싱하는 경우에는 어떤 타입이 들어올지 정확히 판별할수 없기에, 자동으로 any 타입이 배졍 받는다.
- 그렇기 때문에 위 JSON 문자열 파싱의 경우는 `as`를 이용하여, 타입을 명시적으로 지정해주거나, :(콜론)을 이용하여, 타입을 지정해주어야 한다.
- :(콜론) 예시
```typescript
const parsedProduct: {
  name: string;
  price: number;
} = JSON.parse(
  '{"name": "상품명", "price": 12000}'
)
```
- `as` 예시 
```typescript
const parsedProduct = JSON.parse(
  '{"name": "상품명", "price": 12000}'
) as {
  name: string;
  price: number;
}
```