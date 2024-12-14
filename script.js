    // Fetch messages when the page loads
    document.addEventListener("DOMContentLoaded", fetchMessages);

    // Form submission handler
    const form = document.getElementById("messageForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      // Send data to the server
      fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to send message.");
          }
        })
        .then((data) => {
          console.log("Message sent successfully:", data);
          fetchMessages(); // Refresh messages
          form.reset(); // Clear the form
        })
        .catch((error) => {
          console.error(error);
        });
    });

    // Fetch and display messages
    function fetchMessages() {
      fetch("http://localhost:3000/messages")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch messages.");
          }
        })
        .then((data) => {
          const messagesDiv = document.getElementById("messages");
          messagesDiv.innerHTML = ""; // Clear existing messages

          // Add messages to the page
          data.forEach((message) => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            messageDiv.innerHTML = `<strong>${message.name}:</strong> ${message.message}`;
            messagesDiv.appendChild(messageDiv);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }