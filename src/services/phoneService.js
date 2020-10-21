function formatNumber(num) {
  var formattedNum = '';
  formattedNum = num.split('-').join('');
  if (formattedNum.charAt(0) === '0' && formattedNum.length === 10) {
      formattedNum = '972' + formattedNum.substr(1);
  }
  return formattedNum;
}

function validateNumber(num) {
  if (!num || num.length < 10) return;
  const validDigits = '0123456789+';
  return num.split('').every((digit) => {
      return validDigits.includes(digit);
  });
}

function formatTxt(txt){
  var newTxt = txt.replaceAll(/\n/g, '%0D%0A');
  console.log('New Txt', newTxt);
  return newTxt
}

export const phoneService = {
  formatNumber,
  validateNumber,
  formatTxt
}