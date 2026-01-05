const statusText = document.getElementById("status");

function updateStatus() {
  if (navigator.onLine) {
    statusText.textContent = "You are Online";
    statusText.className = "online";
  } else {
    statusText.textContent = "You are Offline";
    statusText.className = "offline";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

updateStatus();
