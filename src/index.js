function * run() {
  yield 1;
}

(async () => {
  const a = await Promise.resolve(10);
  console.log(a)
})()

console.log(run())
console.log('Pure');