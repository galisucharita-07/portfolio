
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Open and close the mobile navigation menu
menuButton.addEventListener("click", function () {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");
  menuButton.textContent = isOpen ? "✕" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
const navigationLinks = navigation.querySelectorAll("a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Automatically display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
