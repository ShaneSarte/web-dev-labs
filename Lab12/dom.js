let titles = [
  "Welcome to My Web Page ",
  "Hello, JavaScript World! ",
  "DOM Manipulation is Fun ",
  "Learning Web Development ",
  "Let's Code Something Awesome ",
  "Keep Clicking for More! "
];

let index = 0

function changeTitle() {
  const heading = document.getElementById('page-title');
  index = (index + 1) % titles.length;
  heading.innerText = titles[index];

  // Add a small animation effect
  heading.style.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
  heading.style.transform = "scale(1.1)";
  setTimeout(() => heading.style.transform = "scale(1)", 200);
}
