(function () {
  const sum = (param) => {
    let result = param;
    return (number) => {
      result += number;
      return result;
    };
  };
  const exemple = sum(11);
  console.log(exemple(21));
  alert(exemple(8));
}());
