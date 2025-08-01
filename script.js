// Plane flying effect
const plane = document.getElementById("plane");
document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const offsetX = (e.clientX - centerX) / 40;
  const offsetY = (e.clientY - centerY) / 40;

  plane.style.transform = `translate(${offsetX}px, ${offsetY}px) rotateX(${-offsetY / 6}deg) rotateY(${offsetX / 6}deg)`;
});

// Booking class button selection
const classButtons = document.querySelectorAll(".class-select button");
let selectedClass = "Business"; // Default selected

classButtons.forEach(button => {
  button.addEventListener("click", () => {
    classButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    selectedClass = button.dataset.class;
    console.log("Selected class:", selectedClass);
  });
});


// Travel Support
const images = document.querySelectorAll('.images img');

document.querySelector('.images').addEventListener('mousemove', (e) => {
  images.forEach((img, i) => {
    const move = (e.clientX / window.innerWidth - 0.5) * (10 + i * 5);
    img.style.transform = `translateX(${move}px)`;
  });
});

document.querySelector('.images').addEventListener('mouseleave', () => {
  images.forEach(img => {
    img.style.transform = 'translateX(0)';
  });
});


  function openPopup() {
      document.getElementById("popupFrame").style.display = "block";
      document.getElementById("overlay").style.display = "block";
      document.getElementById("closeBtn").style.display = "block";
    }

    function closePopup() {
      document.getElementById("popupFrame").style.display = "none";
      document.getElementById("overlay").style.display = "none";
      document.getElementById("closeBtn").style.display = "none";
    }
