const status = document.querySelector('.response'); 
var input = document.getElementById("input"); 
input.addEventListener("keyup", function (event) {
  if (event.key == 'Enter') { 
    event.preventDefault(); 
    document.getElementById("submit").click();
  }
});

function execute() {
  if (input.value == '') {
    status.innerHTML = 'loh ayanggg kenapa inputnya kosongg??😒😒';
  } else {
    $.getJSON(document.location.href +'tr?text='+ input.value, function(data) {
      if (data.status) {
        status.innerHTML = data.result;
      } else {
        status.innerHTML = 'Ihh ayang maaf ya error😔😔';
      }
    });
  }
}