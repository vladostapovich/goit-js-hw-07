const fom = document.querySelector(".login-form");

fom.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email;
  const password = e.target.elements.password;

  if (!email.value || !password.value) {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  }
  e.target.reset();
});
