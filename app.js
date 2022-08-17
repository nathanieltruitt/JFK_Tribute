// grab items from DOM
const navigation = document.querySelector("nav");
const navContent = document.querySelector(".list");
const mainContent = document.querySelector(".main-content");
const collapse = document.getElementById("close-btn");
// functions

function toggleNavigation() {
  // check if nav width currently 0.
  if (navigation.clientWidth === 0) {
    navigation.style.width = null;
    navigation.style.right = null;
    collapse.style.right = null;
    navContent.style.display = null;
  } else {
    navigation.style.width = "0";
    navigation.style.right = "65px";
    collapse.style.right = "65px";
    navContent.style.display = "none";
  }
}

// event listeners
collapse.addEventListener("click", toggleNavigation);
