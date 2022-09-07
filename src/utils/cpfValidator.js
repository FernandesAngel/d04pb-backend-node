export function validateCpf(documentNumberST) {
  const documentNumber = documentNumberST.replace(/[^\d]+/g, '');
  if (documentNumber === '') {
    return false;
  }

  if (
    documentNumber.length !== 11 ||
    documentNumber === '00000000000' ||
    documentNumber === '11111111111' ||
    documentNumber === '22222222222' ||
    documentNumber === '33333333333' ||
    documentNumber === '44444444444' ||
    documentNumber === '55555555555' ||
    documentNumber === '66666666666' ||
    documentNumber === '77777777777' ||
    documentNumber === '88888888888' ||
    documentNumber === '99999999999'
  ) {
    return false;
  }
  // Valida 1o digito
  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(documentNumber.charAt(i), 10) * (10 - i);
  }
  let rev = 11 - (add % 11);

  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(documentNumber.charAt(9), 10)) {
    return false;
  }
  // Valida 2o digito
  let addd = 0;
  for (let i = 0; i < 10; i++) {
    addd += parseInt(documentNumber.charAt(i), 10) * (11 - i);
  }
  let revv = 11 - (addd % 11);
  if (revv === 10 || revv === 11) {
    revv = 0;
  }
  if (revv !== parseInt(documentNumber.charAt(10), 10)) {
    return false;
  }
  return true;
}
