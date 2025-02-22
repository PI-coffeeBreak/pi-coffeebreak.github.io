function closeDrawer() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.checked = false;
  }
}

// call closeDrawer when a <a> element is clicked
document.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    closeDrawer();
  }
});


// hide sidebar when it is resized to >= 768px (md breakpoint)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeDrawer();
  }
});
