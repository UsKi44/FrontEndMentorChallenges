var hambBtn = document.getElementById("hamburger_btn");
var closeBtn = document.getElementById("close_hamb");

closeBtn.addEventListener("click", function () {
  let hamburgerContent = document.getElementById("hambCont");
  let fullContent = document.getElementById("full_content");
  hamburgerContent.style.display = "none";
  fullContent.style.display = "block";
});

hambBtn.addEventListener("click", function () {
  let hamburgerContent = document.getElementById("hambCont");
  let fullContent = document.getElementById("full_content");
  fullContent.style.display = "none";
  hamburgerContent.style.display = "block";
});
