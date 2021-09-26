const unsubscribe = document.querySelector(".unsubscribe");
const shadow = document.querySelector(".shadow");

btn1.addEventListener("click", () => {
  btn1.style = "display: none;";
  btn2.style = "display: flex;";
});

btn2.addEventListener("click", () => {
  unsubscribe.style = "display: block;";
  shadow.style = "display: block;";
});

unsubscribeNo.addEventListener("click", () => {
  btn1.style = "display: none;";
  btn2.style = "display: flex;";
  unsubscribe.style = "display: none;";
  shadow.style = "display: none;";
});

unsubscribeYes.addEventListener("click", () => {
  btn1.style = "display: flex;";
  btn2.style = "display: none;";
  unsubscribe.style = "display: none;";
  shadow.style = "display: none;";
});
