export default function validateAge(birthDate) {
  const [day, month, year] = birthDate.split("/");
  const dateNow = new Date();

  if (dateNow.getFullYear() - Number(year) > 18) {
    return true;
  } else if (dateNow.getFullYear() - Number(year) === 18) {
    if (Number(month) < dateNow.getMonth()) {
      return true;
    } else if (Number(month) === dateNow.getMonth() + 1) {
      if (Number(day) < dateNow.getDate()) {
        return true;
      } else if(Number(day) === dateNow.getDate()){
        return true;
      } else {
       return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
