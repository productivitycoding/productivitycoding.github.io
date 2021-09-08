var checkVar = 0;

function myFunction(){
  if (checkVar = 0) {
    document.getElementById('h21').style.color = 'white';
    checkVar = 1;
  }
  if (checkVar = 1) {
    document.getElementById('h21').style.color = 'black';
    checkVar = 0;
  }
}