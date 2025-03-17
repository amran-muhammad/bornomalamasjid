document.addEventListener("DOMContentLoaded", function () {
    setupSidebarToggle();
    checkAuthStatus();
    loadSummaryData();
});

// Sidebar Toggle for Mobile
function setupSidebarToggle() {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("sidebar-toggle");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
}

// Check Authentication Status
function checkAuthStatus() {
    const user = localStorage.getItem("user");
    const authLink = document.getElementById("authLink");

    if (user) {
        authLink.innerText = "Logout";
        authLink.href = "#";
        authLink.addEventListener("click", logout);
    } else {
        authLink.innerText = "Login";
        authLink.href = "login.html";
    }
}

// Logout Function
function logout() {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}

// Load Summary Data (Total Incomes & Expenses)
async function loadSummaryData() {
    try {
        const incomes = await fetch("data/incomes.json").then(res => res.json());
        const expenses = await fetch("data/expenses.json").then(res => res.json());

        const totalIncome = incomes.reduce((sum, item) => sum + parseInt(item.amount), 0);
        const totalExpense = expenses.reduce((sum, item) => sum + parseInt(item.amount), 0);
        const netBalance = totalIncome - totalExpense;

        document.getElementById("total-income").innerText = `${totalIncome} BDT`;
        document.getElementById("total-expense").innerText = `${totalExpense} BDT`;
        document.getElementById("net-balance").innerText = `${netBalance} BDT`;
    } catch (error) {
        console.error("Error loading financial summary:", error);
    }
}
