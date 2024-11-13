

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

### 함수에 타입 정의하기
- 예제 코드
```typescript
// 상품명(키)과 재고수를 나타내는 파라미터 객체
const stock: {[id : string]: number} = {
  c001: 3,
  c002: 1,
};
// 사용자에게 담아서 보여줄 cart 배열
const cart: string[] = [];
```
- 함수 예제
```typescript
function addToCart (id: string, quantity: number):boolean {
  if(stock[id] < quantity){
    return false;
  }

  stock[id] -= quantity;
  for(let i = 0; i < quantity; i++){
    cart.push(id);
  }

  return true;
}
```
- 기본적으로 선언한 함수의 파라미터에 타입을 정해줄때는 직접 넣어주면 된다.
- :(콜론)뒤에는 리턴되는 값의 타입을 넣어주면 된다.
- 지금은 `return` 되는 값을 미리 `boolean`으로 명시가 되어있기때문에 사실 리턴되는 값의 타입을 지정해줄 필요는 없다.
> 여기서 추가적으로 `quantity`라는 파라미터를 쓸 수도 있고 안 쓸수도 있다고 할 경우, `quantity?: number` 옵셔널을 이용해서 작성해주면 되는데, 이때 해당 값이 없을 경우, 기본값을 지정해줄 필요가 있다.
> 함수 파라미터의 기본값을 정해줄때는 `quantity?: number = 1`과 같은 식으로 기본 값을 지정해주면 된다.
- 위 예제는 선언한 함수의 타입을 지정해줄 때 사용하는 방식이라 함은, 아래는 객체에서 함수 메서드에 타입을 지정해주는 예시를 보여주겠다
```typescript
// 새로 생성한 mall이라는 객체
const mall: {
  stock: {[id: string] : number};
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean; // 이렇게 stock이라는 객체의 메서드로 addToCard 함수의 타입을 지정해주었다. 일반 익명 함수를 사용하듯이 사용하면 되며, 화살표 함수의 리턴값도 동일하게 타입으로 지정해주면 된다.
} = {
  // 아래는 기본값 지정
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
};
```
- rest 파라미터를 사용하는 경우에 타입 지정하기
> 아래는 선언된 rest 파라미터에 타입을 지정해주는 방식이다.
```typescript
function addManyToCart(...id: string[]){
  for(const id of ids){
    addToCart(id);
  }
}
```
- 함수를 값으로 이용하는 경우
- > 위와 같이 함수 자체에 타입을 지정해주면된다. rest 파라미터의 경우는 항상 배열로 오기때문에 배열타입으로 지정해줘야한다.
```typescript
const mall: {
  stock: {[id: string] : number};
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean;
  addManyToCard: (...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
  addManyToCard,
};
```
- `void` 타입이란?
- > `void` 타입은 리털하는 값이 없을때 사용하는 타입이이다. 즉, 위 `addManyCart`는 리턴 하는 값이 없기때문에 없다는 표현인 `void`를 사용해주어야한다.

### Enum
- Enum이란 값의 종류를 나열할때 사용된다. 열거 타입이라고도 한다.
- 예제
```typescript
let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: ['M','L'],
}
```
- 위 예제처럼 `sizes`의 값이 문자열 배열로 지칭하기에 너무 범위가 광범위 할때, 값을 지정해서 나열해주고 싶을때 사용하면 된다.
- 사용 예제
```typescript
// 1. 이렇게 enum으로 객체형식으로 나열을 해서
enum Size: {
  S, M, L, XL,
}

let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[]; // 2. 배열 타입을 지정하듯 작성해준다
} = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: [Size.M, Size.L], // 3. 접근할때는 객체 접근 때 처럼 점 표기법을 이용해서 접근이 가능하다.
}
```
- ⚠️ 다만, 주의할 점으로는 해당 `enum`의 값을 실행시켜보면 `console.log(Size.S..L)` 결과값이 0부터 정수로 지정이 된다.
- 그렇기 때문에 해당 `enum`의 조건식을 사용하게 될 경우 '0'은 `false`에 해당하기 때문에 예상했던 output과 다르게 출력 될 수있다.
- 이를 방지 하기 위해서는 확실하게, 해당 값을 정해놓고 쓰는 것이 좋다.
```typescript
enum Size: {
  // =(이퀄)을 이용하여, 값을 지정해주자.
  S = 'S', M = 'M', L = 'L', XL = 'XL',
}
```

### interface
- 반복되는 타입을 여러번 지정해줄 필요없이, interface를 통해 커스텀 타입을 지정할 수 있다.
- 아래와 같이 사용할 경우 문자열 타입과, 숫자형 타입처럼 또다른 Product 타입 이라는 것을 생성한 것이다.
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// 사용 시에도 일반 타입을 지정할때 처럼 interface의 타입을 작성 해주면 된다.
const product: Product = {
  id: 'c001',
  name: '후드티',
  price: 129000,
}
// 함수도 동일하다.
function printProduct(product: Product){
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}
```
- interface의 상속
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// 아래와 같이 Product 타입에 ClothingProduct라는 추가 타입을 extends를 통해 Product에 상속 시켜 주었다.
interface ClothingProduct extends Product {
  sizes: Size[];
}


const product: ClothingProduct = {
  id: 'c001',
  name: '후드티',
  price: 129000,
  sizes: [Size.M, Size.L], // 위 예제들의 enum을 통해 만들어진 객체를 인용
}

// interface는 함수에 대한 타입도 지정할 수 있는데, 익명함수로 파라미터의 타입을 지정해주고, 리턴의 타입도 지정해주면 된다.
interface PrintProductFunction {
  (product: Product) : void;
}

// 지정한 함수 타입을 사용할때는 이런식으로 간략하게 사용이 가능하다.
const printProduct : PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
}
```

### 리터럴 타입
- 값 그 자체를 타입으로 가지는 것
- 예제
```typescript
let productName = '후드티';
const productName2 = '맨투맨';
```
- 위 예제를 타입 스크립트로 작성하고보면 `let`의 경우는 재할당이 가능한 변수이기에 `string`으로 타입이 추론되며, `const`는 재할당이 불가하기때문에 '맨투맨' 이라는 값 자체를 타입으로 가지게 된다.

### 타입 별칭
- 타입 별칭은 선언된 변수에 값을 타입으로 지정해주는 것이 아닌, 타입 그 자체를 변수명처럼 지정해서 사용하는 것을 뜻한다.
- 이 타입 별칭은 변수, 함수, 객체에도 동일하게 사용이 가능하지만 객체의 경우는 `interface`를 쓰는걸 추천한다.
- 타입 별칭을 지정해줄때는 앞 첫글짜를 대문자로 작성하는것 원칙이다.
- 예제
```typescript
type Cart = string[];
type CartResultCallback = (result: boolean) => void;
interface Product {
  id: string;
  name: string;
}
```

### Union 타입
- 한 타입이거나 또다른 타입이거나 or로 지정을 해줄때 사용하는 방식이다.
- 일반적으로 문자열의 배열을 담는 타입이라고 가정했을 경우, `exports`를 통해 확장된 타입이 있다고 가정해보자.
- 확장된 타입은 공통된 파라미터를 가지고있고, 그외에 다른 부분이 있는데 공통된 부분을 구분해서 쓰고싶을때 `a | b` 이런식으로 a 또는 b를 지정해주는 것을 유니온 타입이라고 한다.
- 일반적인 변수 타입에 사용하기보다는 리터럴 타입에서 사용된다.

### Intersection 타입
- 여러 객체 타입을 합치는 것을 `intersection` 타입이라고 한다.
- 에제(Intersection 사용 전)
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: string;
  productId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
```
- 이렇게 공통되는 타입들이 있을 경우에는 `interface`를 `type`으로 바꿔주고, 공통으로 사용할 `type`을 `interface`로 지정해준 후 재사용한다.
- 에제(Intersection 사용 후)
```typescript
interface Id {
  id: string;
}

interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

type Product = Id &  {
  name: string;
  price: number;
  membersOnly?: boolean;
}

type User = Id & Timestamp {
  username: string;
  email: string;
}

type Review = Id & Timestamp {
  productId: string;
  userId: string;
  content: string;
}
```
> `interface`의 상속을 이용해서 표현 해줄 수도 있지만, `intersection`과 `interface의 상속`의 비교에 대해서는 후에 다루도록 하겠다.

### keyof와 typeof 연산자
- keyof 연산자란 객체 타입의 키들로 이루어진 문저열 리터럴 유니온 타입을 반환 한다. 객체의 키들을 타입으로 사용하고싶을때 유용하다.
- 예제
```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

// type ProductProperty = 'id' | 'name' | 'price' | 'membersOnly';
// const productTableKeys: ProductProperty[] = ['name', 'price', 'membersOnly'];

/* 
위 처럼 사용하면, Product에 다른 key가 추가되었을때 수기로 작성해줘야한다는 불편함이 있다.
그렇기에 keyof를 이용해서 넣어주면 Product에 key가 추가되어도 수기로 작성해줄 필요없이 타입으로써 사용이 가능하다.
*/

const productTableKeys: (keyof Product)[] = ['name', 'price', 'membersOnly'];

```
- typeof 연산자란 javascript에서는 런타임에서 값의 자료형을 반환하고, 해당 값의 타입을 문자열로 반환하지만
typescript에서는 컴파일 타임에 사용되는 타입 추론 연산자로써, 변수의 타입을 가져와서 코드 내에 타입 선언에서 사용이 가능하다.
```typescript
// JavaScript에서의 typeof 사용
const value = 123;
console.log(typeof value); // "number"

// TypeScript에서의 typeof 사용
const num = 123;
type NumType = typeof num; // NumType은 'number' 타입

```
