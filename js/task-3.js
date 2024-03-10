const inputEl = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");
inputEl.addEventListener("input", (e) => {
  console.log(e.currentTarget.value);
  outPut.innerHTML = e.currentTarget.value;

  if (inputEl.value.trim().length === 0) {
    outPut.innerHTML = "Anonymous";
  }
});
