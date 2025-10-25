function changeBackground() {
  const selectedColor = document.getElementById("colorSelect").value;

  if (selectedColor) {
    document.body.style.background = selectedColor;
  }
}
