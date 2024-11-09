

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
