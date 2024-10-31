function checkSpam(str) {
  let strUp;
  strUp = str.toUpperCase();
  if (strUp.includes("1XBET") || strUp.includes("XXX")) {
    return true;
  } else {
    return false;
  }
}
