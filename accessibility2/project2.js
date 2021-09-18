$(document).ready(function() {

  // Form validation
  $("#signupbutton").click(function() {
    if($("#firstname").val()=="") {
      var container = document.getElementById("firstnamediv");
      container.textContent = "*Please fill out your first name";
    } else {
      var container = document.getElementById("firstnamediv");
      container.textContent = "";
    }

    if($("#lastname").val()=="") {
      var container = document.getElementById("lastnamediv");
      container.textContent = "*Please fill out your last name";
    } else {
      var container = document.getElementById("lastnamediv");
      container.textContent = "";
    }

    if($("#email").val()=="") {
      var container = document.getElementById("emaildiv");
      container.textContent = "*Please fill out your email";
    } else {
      var container = document.getElementById("emaildiv");
      container.textContent = "";
    }
    
    if($("#firstname").val()=="" || $("#lastname").val()=="" || $("#email").val()=="") {
      return;
    } else {
      alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
    }
    
  });
});


