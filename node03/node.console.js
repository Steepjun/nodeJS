// 시간 측정을 시작합니다.
console.time('alpha');

var output = 1;
for (var i = 1; i <= 10; i++) {
    output += i;
}
console.log('Result:', output);

console.log('\u001b[31m', 'Hello World .. !');
console.log('\u001b[32m', 'Hello World .. !');
console.log('\u001b[36m', 'Hello World .. !');
console.log('\u001b[1m');
console.log('\u001b[31m', 'Hello World .. !');
console.log('\u001b[32m', 'Hello World .. !');
console.log('\u001b[36m', 'Hello World .. !');
console.log('\u001b[0m');

// 시간 측정을 종료합니다.
console.timeEnd('alpha');