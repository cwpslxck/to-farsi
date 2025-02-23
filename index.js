function toFarsiNumbers(number) {
  return number.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

module.exports = toFarsiNumbers;
