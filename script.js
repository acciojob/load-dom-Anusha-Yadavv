//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function() {
            // DOM has loaded, let's write a message to the web page
            var messageParagraph = document.createElement('p');
            messageParagraph.textContent = 'DOM load success';
            document.body.appendChild(messageParagraph);
        });
