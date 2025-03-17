// Quiz. 머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

// my answer
const solution = n => Math.ceil(n*1/7);
console.log(solution);

/*
* 해석
* 테스트에 통과는 했지만 결과를 보니 사실 n*1에서 1은 필요없었다.
* Math.ceil은 뒤 소수점이 발생하면, 무조건 올림을 하는 메서드 이다.
*/
