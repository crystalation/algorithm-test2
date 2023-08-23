//약수의 개수와 덧셈
//문제 설명
//두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

var left = 13;
var right = 17; //13,14,15,16,17 수들의 약수를 구함.
//13,14,15,17은 +
//16은 - 처리 함.

//나의 접근 : left와 right 사이의 수를 배열로 구함,
//그 수의 약수의 갯수들을 구함, if문써서 짝수면 +
//약수의 갯수를 어떻게 구해야될지 모르겠다.. .

//제곱수인 숫자는 약수갯수가 홀수, 아닌수는 짝수이다.
//예를 들어 16의 경우, 약수는 [1,2,4,8,16]인데, [1,16], [2,8]은 각각 곱하면 16이 되는 짝이다. 4같은 경우는 4 스스로를 다시 곱해야 16이 되므로 짝이 없게 된다. 그래서 결국 제곱수는 홀수개의 약수를 갖게 된다.

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      //제곱수를 구하는 함수,  제곱수가 맞다면(약수의 갯수는 홀수)
      answer -= i;
    } else {
      answer += i; //제곱수가 아니라면(약수의 갯수는 짝수) false를 인출함.
    }
  }
  return answer;
}
console.log(solution(left, right));
