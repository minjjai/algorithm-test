// 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

function solution(n) {
  var array = [];
  for (let i = 3; i <= n; i++) {
    if (n % i == 1) {
      array.push(i);
    }
  }
  let answer = array[0];
  return answer;
}

//대현님이 알려준거
function solution(n) {
  for (let i = 3; i <= n; i++) {
    if (n % i == 1) {
      return (answer = i);
    }
  }
}
//return값을 반환하는 순간 반복문이 종료된다
