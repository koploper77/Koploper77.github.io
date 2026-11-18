
document.addEventListener("DOMContentLoaded", async () => {
  const header = await fetch("/partials/header.html");
  const footer = await fetch("/partials/footer.html");

  document.body.insertAdjacentHTML("afterbegin", await header.text());
  document.body.insertAdjacentHTML("beforeend", await footer.text());
});
