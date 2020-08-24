function Divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('0으로 나눌 수 없습니다.');
      return;
    }

    resolve(a / b);
  });
}

const main = async () => {
  try {
    const res = await Divide(4, 3);
    console.log(res);
  } catch (e) {
    console.log(e);
  }

  // resolve('완료')
  return '완료';
};

main().then((res) => {
  console.log(res);
});
