function clearErrors() {
  for (var i = 0; i < document.forms["numbersToParse"].elements.length; i++) {
    if (document.forms["numbersToParse"].elements[i].parentElement.className.indexOf("has-") != -1) {
      document.forms["numbersToParse"].elements[i].parentElement.className = "form-group";
    }
  }
}

function resetForm() {
   clearErrors();
   document.forms["numbersToParse"]["numStart"].value = "";
   document.forms["numbersToParse"]["numEnd"].value = "";
   document.forms["numbersToParse"]["numStep"].value = "";
   document.getElementById("results").style.display = "none";
   document.forms["numbersToParse"]["numStart"].focus();
 }

function validate() {
 clearErrors();
 var numStart = document.forms["numbersToParse"]["numStart"].value;
 var numEnd = document.forms["numbersToParse"]["numEnd"].value;
 var numStep = document.forms["numbersToParse"]["numStep"].value;

 if (numStart == "" || isNaN(numStart)) {
   alert("Starting Number must be filled in with a number.");
   document.forms["numbersToParse"]["numStart"].parentElement.className = "form-group has-error";
   document.forms["numbersToParse"]["numStart"].focus();
 }

 if (numEnd == "" || isNaN(numEnd)) {
   alert("Ending Number must be a number.");
   document.forms["numbersToParse"]["numEnd"].parentElement.className = "form-group has-error";
   document.forms["numbersToParse"]["numEnd"].focus();
   return false;
 }

 if (numEnd <= numStart) {
   alert("Ending Number must be greater than Starting Number.");
   document.forms["numbersToParse"]["numEnd"].parentElement.className = "form-group has-error";
   document.forms["numbersToParse"]["numEnd"].focus();
   return false;
 }

 if (numStep == "" || isNaN(numStep)) {
   alert("Step must be a number.");
   document.forms["numbersToParse"]["numStep"].parentElement.className = "form-group has-error";
   document.forms["numbersToParse"]["numStep"].focus();
   return false;
 }

 if (numStep < 0) {
   alert("Step must be a positive number.");
   document.forms["numbersToParse"]["numStep"].parentElement.className= "form-group has-error";
   document.forms["numbersToParse"]["numStep"].focus();
 }
}

function getEvens() {

  var numStart = document.forms["numbersToParse"]["numStart"].value;
  var numEnd = document.forms["numbersToParse"]["numEnd"].value;
  var numStep = document.forms["numbersToParse"]["numStep"].value;
  var intArray = new Array(numEnd - numStart); //array length of max int value subtracted by min int value
  intArray[0] = numStart; //push min int onto stack followed by increasing ints up to the max stack

  do{
    for(var j = 0; j < intArray.length; j++) {

    }
  }

  document.getElementById("results").style.display = "block";
  document.getElementById("desc").style.display = "inline";
  document.getElementById("desc").innerText = "Here are the even numbers between " + numStart + " and " + numEnd + " by " + numStep;
 //   document.getElementById("results").innerText = ;
    return false;
  }
