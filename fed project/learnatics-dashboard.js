// learnatics-dashboard.js
// Enhances interactivity and adds dynamic dashboard updates for Learnatics

// --- Utility Functions ---
function getUserRole() {
  return localStorage.getItem("userRole") || "student"; // default role
}

function getUserName() {
  return localStorage.getItem("username") || "Guest";
}

function saveLogin(role, name) {
  localStorage.setItem("userRole", role);
  localStorage.setItem("username", name);
}

function logout() {
  localStorage.clear();
  window.location.href = "routing.html";
}

// --- Dashboard Customization ---
document.addEventListener("DOMContentLoaded", () => {
  const role = getUserRole();
  const name = getUserName();
  const heading = document.querySelector("h1");

  if (heading) {
    heading.textContent = `Welcome ${name} (${role.toUpperCase()})`;
  }

  // Add Logout button dynamically
  const logoutBtn = document.createElement("button");
  logoutBtn.textContent = "Logout";
  logoutBtn.style.cssText =
    "position:fixed;top:15px;right:20px;background:#f44336;color:#fff;padding:8px 14px;border:none;border-radius:6px;cursor:pointer;font-weight:600;";
  logoutBtn.addEventListener("click", logout);
  document.body.appendChild(logoutBtn);

  // If student page – simulate updates
  if (role === "student") {
    simulateStudentDashboard();
  } else {
    simulateTeacherDashboard();
  }
});

// --- Student Dashboard Simulation ---
function simulateStudentDashboard() {
  const performanceButton = document.querySelector(".button");
  if (performanceButton) {
    performanceButton.addEventListener("click", () => {
      alert("Fetching your performance analytics... (Demo Mode)");
    });
  }

  // Fake data visualization with console log
  console.log("📊 Loading student performance data...");
  const report = {
    attendance: "92%",
    CGPA: 8.6,
    topSubjects: ["Computer Science", "Maths", "English"],
  };
  console.table(report);
}

// --- Teacher Dashboard Simulation ---
function simulateTeacherDashboard() {
  console.log("📈 Loading teacher analytics dashboard...");
  const studentStats = [
    { name: "Alice", submissions: 5, attendance: "96%" },
    { name: "Bob", submissions: 4, attendance: "89%" },
    { name: "Charlie", submissions: 6, attendance: "91%" },
  ];
  console.table(studentStats);
}
