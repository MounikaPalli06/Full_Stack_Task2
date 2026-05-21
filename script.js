// Password Match Validation

const registerForm = document.getElementById("registerForm");
if(registerForm){
  registerForm.addEventListener("submit", function(e){
    e.preventDefault();
    const password =
      document.getElementById("password").value;
    const confirmPassword =
      document.getElementById("confirmPassword").value;
    const message =
      document.getElementById("message");
    if(password !== confirmPassword)
    {
      message.innerHTML =
        "Passwords do not match";
      message.style.color = "red";
    }
    else
    {
      message.innerHTML =
        "Registration Successful!";
      message.style.color = "green";
    }
  });
}

// Show/Hide Password

function togglePassword(id){
  const field = document.getElementById(id);
  if(field.type === "password"){
    field.type = "text";
  }
  else{
    field.type = "password";
  }
}

// Dummy AJAX Username Check

const username =
  document.getElementById("username");
if(username){
  username.addEventListener("keyup", function(){
    const value = username.value;
    fetch("check.php?username=" + value)
    .then(response => response.text())
    .then(data => {
      document.getElementById("userMsg").innerHTML = data;
    });
  });
}

// Login Success Message

const loginForm =
  document.getElementById("loginForm");
if(loginForm){
  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    document
      .getElementById("successMessage")
      .classList.remove("d-none");
  });
}