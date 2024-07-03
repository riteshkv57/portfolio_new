const socket = io();

let name1;
let textarea = document.querySelector('#textarea');
let messageArea = document.querySelector('.message__area');

do {
    name1 = prompt('Please enter your name: ');
} while (!name1);

textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value);
    }
});

function sendMessage(message) {
    let msg = {
        user: name1,
        message: message
    };
    // Append
    appendMessage(msg, 'outgoing');
    textarea.value = '';
    scrolltobottom();

    // Send to server
    socket.emit('message', msg);
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div');
    let className = type === 'incoming' ? 'incoming' : 'outgoing';
    mainDiv.classList.add(className, 'message');


    // Get current time in HH:MM format
    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Create a temporary element to measure message width
    let tempDiv = document.createElement('div');
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.position = 'absolute';
    tempDiv.style.whiteSpace = 'nowrap';
    tempDiv.style.fontSize = 'inherit'; // Match the font size of the actual message
    tempDiv.innerHTML = `<p>${msg.message}</p>`;
    document.body.appendChild(tempDiv);

    // Get the width of the message
    let messageWidth = tempDiv.offsetWidth;
    document.body.removeChild(tempDiv); // Remove the temporary element

    // Limit the width to a maximum value, e.g., 70% of the message area width
    let maxMessageWidth = messageArea.offsetWidth * 0.7;
    messageWidth = Math.min(messageWidth, maxMessageWidth);

    let markup = `
        <h4>->${msg.user}</h4>
        <p style="width: ${messageWidth}px;">${msg.message}</p>
        <h6> <span>${time}</span></h6>
    `;
    mainDiv.innerHTML = markup;
    messageArea.appendChild(mainDiv);
    scrolltobottom();
}

// Receive message
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming');
    scrolltobottom();
});

function scrolltobottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
