var s = "AB";
var n = 1; // result= "BC"

//접근; 각각의 요소로 생각해야댐

function solution(s, n) {
  var str1 = "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
  var str2 = "abcdefghijklmnopqrstuvxyzabcdefghijklmnopqrstuvxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (str1.indexOf(s[i]) !== -1) {
      //리턴하는 값은 위치 즉 INDEX를 반환 위치를 알려줌!!
      answer += str1[str1.indexOf(s[i]) + n]; //B
    }
    if (str2.indexOf(s[i]) !== -1) {
      answer += str2[str2.indexOf(s[i]) + n]; //주어진 s가 str1, str2에 포함되있는지 확인
    }
    if (s[i] === " ") {
      answer += " ";
    }
  }

  return answer;
}

console.log(solution(s, n));

//-1값은 왜 넣는건지 꼭 파악해라
