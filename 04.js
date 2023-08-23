//최소직사각형
//문제 설명: 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

//가장 큰 명함을 수납할 수 있는 가장 작은 지갑을 만들떄
//첫번째가 가로, 두번째가 세로
//result = 4000
//나의 접근 : 전혀 감이 안잡히지만..배열안의 가장 큰 수와 비교하면 되는거 아닐까 ..
//명함은 가로로 눕힐 수 있기 때문에 가로를 큰 쪽, 세로를 작은 쪽으로 돌린다
//가로를 제일 긴 변으로 설정 후 회전

//아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

var sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

function solution(sizes) {
  var answer = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }
  }
  let max_width = Math.max(...sizes.map((size) => size[0]));
  let max_height = Math.max(...sizes.map((size) => size[1]));
  answer = max_width * max_height;
  return answer;
}

console.log(solution(sizes));
