type =
  "text/javascript" >
  function fn() {
    myString = document.getElementById("atext").value;
    patt = /[A-z]/g;
    x = patt.test(myString);
    alert(x);
  };
