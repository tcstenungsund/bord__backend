function square(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}
async function output(a, b) {
  const ans = await square(a, b);
  console.log(ans);
}
output(10, 20);
