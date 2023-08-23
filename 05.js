//모의고사
//문제 설명: 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

//아래 규칙대로 찍음
//1번 수포자가 찍는 방식: 1, 2, 3, 4, 5...
//2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5...
//const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

//1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

//나의 접근: 같은 숫자(방식)이 반복되는 배열과
//주어진 정답의 배열을 비교해서 중복된 숫자가 많은것을 반환 시키자

//막힘: 문제를 찍는 특정 패턴과 답안지를 배열 비교하는 것 까진 알겠는데 방법을 모르겠다..

var answers = [2, 1, 2, 3, 5]; // result = [1]

function solution(answers) {
  //수포자들의 반복되는 규칙의 수를 배열로 지정
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let supo1 = 0;
  let supo2 = 0;
  let supo3 = 0;
  let answer = [];
  let fiNal = [];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) supo1++;
    if (two[i % one.length] === answers[i]) supo2++;
    if (three[i % one.length] === answers[i]) supo3++;
  }

  answer.push(supo1, supo2, supo3); //[5,0,0]
  let max = Math.max(...answer);
  if (max === supo1) {
    fiNal.push(1);
  }
  if (max === supo2) {
    fiNal.push(2);
  }
  if (max === supo3) {
    fiNal.push(3);
  }

  return fiNal;
}

console.log(solution(answers));
