//두 개 뽑아서 더하기
//정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

//나의 접근 : nums 안의 요소들을 더한 값을 더한 값과 비교하여 새 배열에 배치
//요소를 더했을때의 경우의 수 부터 생각하자 예를 들어 2,1,1이라면 경우의 수는 6이고 결과 값은 2, 3두가지다.

//막힌 부분: for 문안에서 2+1, 2+1을 어떻게 만드는건지 모르겠음..
//차라리 2,1,1이라는 같은 배열을 만들어서 비교한 후에 값을 내는건 어떨지?

var nums = [2, 1, 1]; //result = [2,3]

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      answer.push(numbers[i]);
    }
  }
  return answer;
}

console.log(nums);

//여기까지 만들었으나 더한 값도 안나오고 계속 [2,1,1]만 나옴. 왜일까?
//1. if문을 사용해 i와 j가 같지 않은 경우에만 합을 구할 수 있다.
//2. j가 무조건 i보다 1 큰수에서 시작하면 된다.
//3. i와 j를 더하는것 까진 했는데,

// i= 0일시 2+1=3
// i= 1일시 1+1=2, 다음 식이 성립이 안되잖아?
// i= 2일시 j= 3인데, 그럼 더하는 작업을 안한다는 것 아닌가?

//그래서 numbers.length-1로 수정했떠니,
//i= 0일시 함수 조건이 성립되어 2+1,
//i= 1일시 함수 조건이 성립되어 1+1
//i= 2일때 함수 조건이 성립되지 않아 멈춤. 결과 값은 3,2

//set은 중복을 허용하지 않는 자료구조입니다. set을 사용하여, numbers 배열의 서로 다른 두 요소를 더한 값을 중복 없이 저장하고, 이 값을 배열로 변환하여 answer에 저장하고 반환합니다.

//빈 set을 생성합니다.
//numbers 배열의 모든 요소를 순회하면서, 두 요소를 더한 값을 set에 추가합니다. (i번째 요소와 j번째 요소를 더한 값을 추가합니다. 단, i와 j가 같은 경우는 제외합니다.)
//set의 모든 요소를 forEach() 메소드를 사용하여 answer 배열에 추가합니다.
//answer 배열을 반환합니다.
//위 코드에서 set은 중복을 제거하고 유니크한 값을 저장하므로, set에 추가된 모든 값은 서로 다른 두 요소를 더한 결과입니다. set을 배열로 변환하여 answer에 저장하면, numbers 배열의 서로 다른 인덱스끼리 더한 값 중 중복이 제거된 값들이 저장되어 있습니다. 따라서 answer를 반환하면, 문제에서 요구한 결과를 얻을 수 있습니다.

var nums = [2, 1, 3, 4, 1]; //result = [2,3]

function solution(numbers) {
  var answer = [];
  const set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        set.add(numbers[i] + numbers[j]); //i와 j가 같지 않을 시 더한 값을 구함
      } // 값은 원래대로라면 3,3,3,2,3,2가 나올테지만 중복값을 없애주는 set를 이용
    }
  }
  set.forEach((numbers) => {
    //그래서 set로 정리된 2,3값을 각각 새로운 배열에 푸쉬해줌
    answer.push(numbers);
    //'set'객체의 'forEach()'메소드는 'set'객체에 저장된 값들을 순회하면서, 각 값에 대해 콜백함수를 실행한다. 콜백함수는 'forEach()'메소드를 호출할때 전달된 함수로서, 화살표함수 '(numbers)=>{answer.push(numbers)}가 이 부분에 해당함.
    //그래서 여기까지의 결과물은, 중복값을 제거한 값이 배열에 들어간 상태.
  });
  //이제 여기서 오름차순 정렬
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(solution(nums));
