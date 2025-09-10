const openBtn = document.getElementById("openForm");
const closeBtn = document.getElementById("closeForm");
const formOverlay = document.getElementById("formOverlay");

openBtn.addEventListener("click", () => {
  formOverlay.style.display = "flex";
});
closeBtn.addEventListener("click", () => {
  formOverlay.style.display = "none";
});
formOverlay.addEventListener("click", (e) => {
  if (e.target === formOverlay) formOverlay.style.display = "none";
});
