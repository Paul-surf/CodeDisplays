function passwordGenerator() {
    var newPassword = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*^!#¤%&/()=?`+'";
  
    for (var i = 0; i < 20; i++)
      newPassword += possible.charAt(Math.floor(Math.random() * possible.length));
  
    document.getElementById('pass').innerHTML = newPassword;
  }
  
  // console.log(passwordGenerator());

function onBtnClick(){
  var num1 = document.getElementById('1').value;
  var num2 = document.getElementById('2').value;
  var result = (num1 * num2)

  document.getElementById('result').innerHTML = result;
}