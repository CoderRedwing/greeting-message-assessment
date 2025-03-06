async function getGreeting() {
    const nameInput = document.getElementById("nameInput");
    const responseElement = document.getElementById("response");
    const greetButton = document.getElementById("greetButton");

    const name = nameInput.value.trim();
    if (!name) {
        responseElement.textContent = "Please enter a name.";
        responseElement.style.color = "red";
        responseElement.classList.add("show");
        return;
    }

    greetButton.disabled = true;
    greetButton.textContent = "Fetching...";
    responseElement.textContent = "Fetching greeting...";
    responseElement.style.color = "black";
    responseElement.classList.add("show");

    try {
        const response = await fetch(`http://localhost:4000/api/greet?name=${encodeURIComponent(name)}`);

        if (!response.ok) {
            throw new Error("Server error. Please try again.");
        }

        const data = await response.json();
        responseElement.textContent = data.message || data.error;
        responseElement.style.color = data.error ? "red" : "green";

        nameInput.style.visibility = "hidden";
        greetButton.style.visibility = "hidden";

        setTimeout(() => {
            nameInput.style.visibility = "visible";
            greetButton.style.visibility = "visible";
            nameInput.value = "";
            responseElement.textContent = "";
            nameInput.focus();
            responseElement.classList.remove("show");
        }, 3000);

    } catch (error) {
        responseElement.textContent = "Error fetching greeting.";
        responseElement.style.color = "red";
        responseElement.classList.add("show");
        console.error("Error:", error);
    } finally {
        greetButton.disabled = false;
        greetButton.textContent = "Get Greeting";
    }
}

document.getElementById("nameInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getGreeting();
    }
});
