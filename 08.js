//문자열 내림차순으로 배치하기
//문제 설명
//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

//나의 접근 : s를 배열로 만들고 그 배열을 뒤에서부터 다시 정렬해준 후, 배열에 있는 문자를 끄내서 문자화시킨다.

//오류: 문자를 배열화 시킨후 반대로 정렬 sort().reverse(); 를 써줌, for문으로 결과값을 +=하면 완성 ~ ~

var s = "Zbcdefg"; //return = "gfedcbZ"
var s1 = "sWEFsdf";

function solution(s) {
  var answer = "";
  var arr = s.split("");
  arr.sort().reverse();
  for (let i = 0; i < arr.length; i++) {}

  return answer;
}
console.log(solution(s1));

//쉬운방법
function solution(s) {
  return s.split("").sort().reverse().join("");
}

// for (let i = arr.length - 1; i >= 0; i--) {
//     //i = 2, i가 0보다 크거나 같아질때까지만, 즉 2->0으로 작아진다, 조건에 충족하면 i는 1씩 작아진다.
//     //for 문의 let i= 는 처음 한번만 실행되는것임을 꼭 인지할 것 .
//     answer.push(Number(arr[i]));
//   }
//   return answer;
// }

// console.log(solution(n));

// result.push(newWord);
// }
// return result.join(" ");
// }
// console.log(solution(s));
