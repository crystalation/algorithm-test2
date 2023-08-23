// //접근 방식: 10진법의 n을 3진법으로 바꿈 -> 배열화->앞뒤 반전-> 10진법으로 다시 바꿈
//막힘: 3진법으로 바꾼 후 앞뒤반전 한 배열까진 만들었으나,
//0021이 10진법을 통해 어떻게 변화되는지의 과정을 몰라서 검색해봄.

//0021은 4자리 3진수입니다. 각 자리의 값은 다음과 같이 구할 수 있습니다.

//첫 번째 자리: 0 × 3³ = 0
//두 번째 자리: 0 × 3² = 0
//세 번째 자리: 2 × 3¹ = 6
//네 번째 자리: 1 × 3⁰ = 1
//따라서 0021은 10진수로 변환하면 7이 됩니다.

//즉 내 생각엔 0021의 각 요소를 10진수로 변화 시킨 후 , 그 요소를 전부 더하면 된다.

var n = 45; // result = 7

function solution(n) {
  var teRnary = n.toString(3).split(""); //45->1200->[1,2,0,0]
  var answer = [];
  for (let i = teRnary.length - 1; i >= 0; i--) {
    answer.push(Number(teRnary[i])); // [0,0,2,1]
  }

  var sum = 0; //[0,0,2,1]의 각 요소를 10진수 화 한다.
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i] * Math.pow(3, answer.length - i - 1); //이 부분이 이해가 안감!!, 아마도 10진수를 구하는 방법에서 비롯된 것 같아서 그냥 외우는게 나을듯.
  }

  return sum;
}
console.log(solution(n));