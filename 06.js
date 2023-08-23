//문제설명: 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

//인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.

//나의 접근: 배열안의 요소를 돌며 예를 들며 index가 1이면 1자리의 알파벳을 단어 앞에 붙여서 오름차순 정렬하고,
//ex)usun, ebed, acar --> acar, ebed, usun --> car, bed sun

var str = ["sun", "bed", "car"];
var n = 1; //return = ["car", "bed", "sun"]

function solution(str, n) {
  var answer = [];
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][n] + str[i];
  }

  str.sort();

  for (let j = 0; j < str.length; j++) {
    str[j] = str[j].replace(str[j][0], "");
    answer.push(str[j]);
  }

  return answer;
}
console.log(solution(str, n));
