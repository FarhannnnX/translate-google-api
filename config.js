const status = document.querySelector('.response');
const language = document.getElementById('country');

var input = document.getElementById("input"); 
input.addEventListener("keyup", function (event) {
  if (event.key == 'Enter') { 
    event.preventDefault(); 
    document.getElementById("submit").click();
  }
});

function execute() {
  if (input.value == '') {
    swal("Info masseh", "Jangan dikosongin dong inputnya😒😒", "error");
  } else {
    $.getJSON(document.location.href +'tr?to='+ country.value +'&text='+ input.value, function(data) {
      if (data.status == true) {
        swal("info masseh", "sukses translate ya ayang🤭🤭", "success");
        status.innerHTML = data.result;
      } else {
        swal('', 'Ihh ayang maaf ya error😔😔', 'error');
      }
    });
  }
}
