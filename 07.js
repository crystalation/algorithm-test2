//로또의 최고 순위와 최저 순위

// var lottos = [44, 1, 0, 0, 31, 25];
// var win_nums = [38, 19, 20, 40, 15, 25];

function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  lottos.sort((a, b) => a - b);
  var zeroCount = 0;
  var matchCount = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCount++;
    }
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[i] === win_nums[j]) {
        matchCount++;
      }
    }
  }
  let x = zeroCount + matchCount; //맞출 수 있는 경우의 수
  var rank = [6, 6, 5, 4, 3, 2, 1]; //차례대로 등수 곧 0개 맞추면 6등

  if (zeroCount > 0) {
    //zeroCount = 2 + matchCount = 1 --->x=3
    switch (x) {
      case x:
        return [rank[x], rank[x - zeroCount]]; //최고는 4등이고, 최저는 6등
    }
  } else {
    switch (x) {
      case x:
        return [rank[x], rank[x]]; //최고, 최저를 맞춰야됌
    }
  }
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

//lottos = [0, 0, 1, 25, 31, 40]
//이 경우 0을 고려했을때 최고 3개, 최저 1
//win_nums = [15, 19, 20, 25, 38, 40]
