//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
            // Get the body element
            var bodyElement = document.body;

            // Ensure that the body is empty
            bodyElement.innerHTML = "";

            // Create a new text node with the content "DOM load success"
            var textNode = document.createTextNode("DOM load success");

            // Append the text node to the body
            bodyElement.appendChild(textNode);
        });