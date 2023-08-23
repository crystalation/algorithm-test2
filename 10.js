//숫자 문자열과 영단어
//네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

//다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"

// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
//숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine

//접근: 숫자에 영어 단어를 할당해주고, 출력값을 정해준다?
//배열을 두개 만든 후에 for문을 돌며 입력해준다
//zero를 치면 0이 나오게 해야함. 곧 index값을 출력해주면되겠네?!!?
//for 문을 돌면서 영단어에 순서를 배정해준다.

var s = "1fiveseveneight"; //result = 1478

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    //다시 한번 꼭 볼것!!!!!

    let arr = answer.split(numbers[i]); //split이 어떻게 동작하는지 명심할것
    // split으로 쪼개면 쪼갠 기준점은 사라지고 나머지 문자열이 배열화 되서 나옴;
    //그 '사라진 자리'에 구분자로 매치되는 숫자를 넣은 후 다시 문자열로 반환하는 것.
    answer = arr.join(i);
  }

  return Number(answer);
}
console.log(solution(s));
