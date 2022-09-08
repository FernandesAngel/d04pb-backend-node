export default function validateAge(birthDate) {
  const [day, month, year] = birthDate.split("/");
  const dateNow = new Date();

  if (dateNow.getFullYear() - Number(year) > 18 && Number(year) >= 1900 && Number(month) <= 12 && Number(day) <= 31)  {
    return true;
  } else if (dateNow.getFullYear() - Number(year) === 18) {
    if (Number(month) < dateNow.getMonth() && Number(month) <= 12) {
      return true;
    } else if (Number(month) === dateNow.getMonth() + 1) {
      if (Number(day) < dateNow.getDate() && Number(day) <= 31) {
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
