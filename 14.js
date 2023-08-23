var d = [1, 3, 2, 5, 4];
var b = [9]; // result = 3

//접근; 주어진 각 부서의 요청금액을 오름차순 정렬; for문으로 더한 값이 budget을 초과할 때 정지;
//budget을 초과하는지를 판별할 값, 한번 for문돌때 몇팀이나 사줬는지(얼마나 더해졌는지)

function solution(d, budget) {
  var sum = 0; //예산 안에서 총 지원된 금액
  var cnt = 0; //지원받은 팀의 수
  var arrd = d.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < d.length; i++) {
    if (sum + arrd[i] <= budget) {
      sum = sum + arrd[i];
      cnt++;
    }
  }

  var answer = cnt;
  return answer;
}
