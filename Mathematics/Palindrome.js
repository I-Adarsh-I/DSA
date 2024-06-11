function palindrome(x) {
  let original = x
  let rev = 0;
  while (x !== 0) {
    let ld = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + ld;
    console.log(x, ld, rev);
  }
  if (rev == original) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

palindrome(121);
