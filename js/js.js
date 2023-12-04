
function myFunction() {
  var txt;
  if (confirm("Sei sicuro di voler cancellare il tuo account?")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
