document.addEventListener("DOMContentLoaded", () => {
            const toggle = document.getElementById("settings-toggle");
            const dropdown = document.getElementById("settings-dropdown");

            toggle.addEventListener("click", () => {
            dropdown.classList.toggle("hidden");
            });

            document.addEventListener("click", (e) => {
            if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add("hidden");
            }
            });
 });