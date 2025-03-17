/*
* 배열 뒤집기
* Q. 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 풀이
function solution(num_list) {
    var answer = [];
    for(let i=num_list.length-1; i >= 0; --i){
        answer.push(num_list[i]);
    }
    return answer;
}

/*
* 나는 반복문을 이용해서 파라미터의 length-1을 해서, 순차적으로 뒤에서부터 앞에까지 새로운 배열에 복사하는 방식으로 작성했다.
* 다른 사람 풀이를 보고나서 아차 싶었던게 배열 메서드 중 reverse() 메서드를 활용하면, 쉬웠을텐데 잊고있었다.
* 다음부터는 잊지말자..
*/
