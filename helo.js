const element = document.querySelector(".monaco-scrollable-element.editor-scrollable.vs-dark");
if (element) {
    element.style.opacity = "0";
}

document.getElementById("judge0-sign-in-btn")?.remove();
document.getElementById("judge0-logo")?.remove();
document.querySelectorAll(".lm_items")[1]?.remove();  // Removes the second element with class 'lm_items'
document.querySelectorAll(".lm_header")[1]?.remove();  // Removes the second element with class 'lm_header'


document.addEventListener("keydown", (event) => {
  // Disable Escape key
  if (event.key === 'Escape') {
    event.preventDefault();
    console.log("Escape key is disabled!");
  }

  // Disable Ctrl + R, Ctrl + Shift + R, F5, Cmd + R (macOS)
  if (
    (event.ctrlKey && event.key === 'r') || // Ctrl + R
    (event.ctrlKey && event.shiftKey && event.key === 'R') || // Ctrl + Shift + R
    (event.key === 'F5') || // F5
    (event.metaKey && event.key === 'r') // Cmd + R (macOS)
  ) {
    event.preventDefault();
    console.log("Page refresh is disabled!");
  }
});


document.addEventListener("keydown", (event) => {
  // Disable Escape key
  if (event.key === 'Escape') {
    event.preventDefault();
    console.log("Escape key is disabled!");
  }

  // Disable Refresh (Ctrl + R, F5, Cmd + R)
  if (
    (event.ctrlKey && event.key === 'r') || // Ctrl + R
    (event.key === 'F5') || // F5
    (event.metaKey && event.key === 'r') // Cmd + R (macOS)
  ) {
    event.preventDefault();
    console.log("Page refresh is disabled!");
  }
});


// Disable Right Click
document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  // Disable Ctrl + C (Copy), Ctrl + X (Cut), Ctrl + V (Paste)
  if (
    (event.ctrlKey && event.key === 'c') || // Ctrl + C (Copy)
    (event.ctrlKey && event.key === 'x') || // Ctrl + X (Cut)
    (event.ctrlKey && event.key === 'v')    // Ctrl + V (Paste)
  ) {
    event.preventDefault();
    console.log("Clipboard action disabled!");
  }
});
// Disable DevTools Shortcuts and Other Restricted Keys
document.addEventListener("keydown", (event) => {
  if (
    (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || // Ctrl+Shift+I, Ctrl+Shift+J
    (event.ctrlKey && (event.key === 'U' || event.key === 'C' || event.key === 'V')) || // Ctrl+U (View Source), Ctrl+C (Copy), Ctrl+V (Paste)
    (event.key === 'F12') || // F12 (DevTools)
    (event.key === 'Escape') // Escape (Esc)
  ) {
    event.preventDefault();
    console.log("Action Blocked!");
  }
});

// Force Full Screen on Click
document.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(console.log);
  }
});

console.log("Security Script Activated!");
