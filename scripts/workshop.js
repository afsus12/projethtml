
function myFunction(a,b,c) {
  var dots = document.getElementById(c);
  var moreText = document.getElementById(b);
  var btnText = document.getElementById(a);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function validate()
{
return (verifyNull() && verifySubject());
}


function verifyNull(){
        var isValid = true;
        if(!document.getElementById('fname').value.trim().length){
            isValid = false;
            alert('Please enter username');
        }
        else if(!document.getElementById('Email').value.trim().length){
        isValid = false;
            alert('Please enter your email');
        }else if(!document.getElementById('subject').value.trim().length){
          isValid = false;
              alert('Please enter a subject');
          }
      return isValid;
    }
    function verifySubject(){
      var isValid = true;
      var x = document.getElementById('subject').value;
      if(x.length<15){
        isValid=false;
        alert("please enter at least 15 caracters");
      }
     return isValid;
  }