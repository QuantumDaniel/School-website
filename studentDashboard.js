
localStorage.getItem("studentDetails")
window.onload = function() {
      const user = JSON.parse(localStorage.getItem("studentDetails"));
      if (user) {
        document.querySelector(".name").textContent = user.name;
        document.querySelector(".class").textContent = user.class;
        document.querySelector(".admission-number").textContent = user.admissionNumber;
        document.querySelector(".profile-image").src = user.src;
      } else {
        document.body.innerHTML = "<h2>No user data found. Please log in.</h2>";
      }
    };