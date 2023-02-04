for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i + 3);
    i += 3;
  } else {
    console.log(i + 1);
    i += 1;
  }
}
