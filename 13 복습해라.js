function solution(new_id) {
  let answer = new_id
    .toLowerCase() // 대문자 > 소문자 변환
    .replace(/[^\w-_.]/g, "") // /[^\w-_.]/g 제외한 모든 문자 제거
    .replace(/\.{2,}/g, ".") // 마침표(.)가 2번 이상 연속된 부분을 마침표(.)하나로 치환
    .replace(/^\.|\.$/g, "") // 시작 또는 마지막 문자가 마침표(.)일 경우 제거
    .replace(/^$/g, "a") // 문자열이 공백이라면 a를 대입
    .slice(0, 15) // new_id의 길이를 15로 제한
    .replace(/\.$/g, ""); // 길이를 15로 줄인 후 마지막 문자가 마침표(.)일 경우 제거

  // 문자열의 길이가 2 이하면 길이가 3이 될 때까지 마지막 문자를 반복해서 붙여주기
  if (answer.length <= 2) {
    const lastWord = answer[answer.length - 1];
    while (answer.length <= 2) {
      answer += lastWord;
    }
  }
  return answer;
}
