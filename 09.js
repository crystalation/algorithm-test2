// 소수 만들기
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 나의 접근: 배열안의 숫자를 3개 더한 값을 구한 후 , 그 값이 %1 인 수를 센다.
// 막힘: 배열안의 서로 다른 인덱스 3개 더하는 방법이 뭘까

// var nums = [1, 2, 3, 4]; //result = 1
// //var nums2 = [1,2,7,6,4] result = 4

// function solution(nums) {
//   var answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       for (let k = 0; k < nums.length; k++) {
//         if (i !== j && j !== k && i !== k) {
//           answer.push(nums[i], nums[j], nums[k]);
//         }
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(nums));

// // //위의 방법으로 하면 배열안의 합이 아니라 배열 자체가 합쳐진 값이 나옴!!
// // //이제 그 안의 합을 구해야함.

// var nums = [1, 2, 3, 4]; //result = 1
// var nums2 = [1,2,7,6,4] result = 4

// function solution(nums) {
//   let answer = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       for (let k = 0; k < nums.length; k++) {
//         if (i !== j && j !== k && i !== k) {
//           const sum = nums[i] + nums[j] + nums[k];
//           answer = sum;
//         }
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(nums));
// 결과값을 배열이 아니라 숫자로 받으려고 식을 바꿨더니 이번엔 9가 나온다..실패

// var nums = [1, 2, 3, 4];

// i=0 1, j=1 2, k=2 3 (1,2,3)
// i=0 1, j=1 2, k=3   (1,2,4)
// i=0 1, j=2 3, k=3 4 (1,3,4)
// i=1 2, j=2 3, k=3 4 (2,3,4)//j k 조건문은 다끝남

var nums2 = [1, 2, 7, 6, 4]; //result = 4

// var nums = [1, 2, 3, 4]; //result = 1

function solution(nums) {
  let answer = 0; //소수의 개수
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sums = nums[i] + nums[j] + nums[k]; //중첩된 for문이 어떻게 동작하는지 잘 알고있어야함
        //6.7.8.9
        if (isPrime(sums)) answer += 1;
      }
    }
  }

  return answer;
}

function isPrime(sum) {
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) return false;
  }
  return true;
}

console.log(solution(nums2));
