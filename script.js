(function () {
  // Chat widget logic
  let i = 0;
  function createMessageElement(text, sender) {
    const messageContainer = document.createElement("div");
    const message = document.createElement("div");
    const messageText = document.createElement("span");
    const icon = document.createElement("i");
    const time = document.createElement("div");
    const innerDiv = document.createElement("div");
    let currentTime;

    if(sender === "You:"){
        icon.className = "fa-solid fa-user";
        icon.style.paddingRight = "10px"; 
        icon.style.color = "white";
        time.className = "get-time-user"
        message.className = "chat-widget-message-bubble-user";
        messageText.className = "chat-widget-message-text-user";
        currentTime = setTime();
    } else {
        time.className = "get-time-bot";
        message.className = "chat-widget-message-bubble-bot";
        messageText.className = "chat-widget-message-text-bot";
        currentTime = setTime();
    }
    messageContainer.className = "chat-widget-message";
    messageText.innerText = text;
    time.innerText = currentTime;
    innerDiv.appendChild(icon);
    innerDiv.appendChild(messageText);
    message.appendChild(innerDiv);
    messageContainer.appendChild(message);
    messageContainer.appendChild(time)

    return messageContainer;
  }

  function setTime() {
    let d = new Date();
    let m = d.getMinutes();
    return d.getHours() + ":" + m;
  }

 function sendMessage() {
        const responseText = [ 'Hi there, I\'m Wilbert and you?', 'Nice to meet you', 'How are you?', 'Not too bad, thanks', 'What do you do?', 'That\'s awesome', 'Codepen is a nice place to stay', 'I think you\'re a nice person', 'Why do you think that?', 'Can you explain?', 'Anyway I\'ve gotta go now', 'It was a pleasure chat with you', 'Time to make a new codepen', 'Bye', ':)' ]
        const input = document.getElementById("chat-widget-input");
        const messagesContainer = document.getElementById("chat-widget-messages");
        const messageText = input.value.trim();

        if (messageText !== "") {
          const message = createMessageElement(messageText, "You:");
          messagesContainer.appendChild(message);

          // Simulate a response from the server after 1 second
          setTimeout(function () {
            const response = createMessageElement(responseText[i], "");
            messagesContainer.appendChild(response);
            let objDiv = document.getElementById("chat-widget-messages");
            objDiv.scrollTop = objDiv.scrollHeight;
            i++;
          }, 1000);
          input.value = "";
          let objDiv = document.getElementById("chat-widget-messages");
        objDiv.scrollTop = objDiv.scrollHeight;
        }
      }

      function toggleChatWidget() {
        const chatWidgetContainer = document.getElementById("chat-widget-container");
        chatWidgetContainer.classList.toggle("chat-widget-open");
      }

      function setupEventListeners() {
        const sendBtn = document.getElementById("chat-widget-send-btn");
        const closeBtn = document.getElementById("chat-widget-close-btn");
        sendBtn.addEventListener("click", sendMessage);
        closeBtn.addEventListener("click", toggleChatWidget);
      }

      setupEventListeners();
    })();
