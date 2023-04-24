// Add event listeners to buttons (normal code for website)
const buttons = document.querySelectorAll(".product .btn button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.target.parentNode.parentNode;
    const name = product.querySelector("h2").textContent;
    alert(`Added ${name} to cart`);
  });
});

//For adding to homescreen (add pwa to homescreen)
const addBtn = document.querySelector(".add_btn");
addBtn.style.display = "none";
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("Created User A2HS prompt");
  addBtn.style.display = "block";
  addBtn.addEventListener("click", (e) => {
    addBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

//service worker.js (for registering service worker)
navigator.serviceWorker.register("serviceworker.js");

//SW js additional code (for push notifications)
const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      randomNotification();
    }
  });
});

function randomNotification() {
  const randomItem = Math.floor(Math.random() * 12);
  const notifTitle = "Title";
  const notifBody = `Created by author.`;
  const notifImg = `images/icon-192x192.png`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  alert("This is a notification");
  setTimeout(randomNotification, 15000);
}
