//  const chatContainer = document.getElementById("chat-container");
//  const chatMessages = document.getElementById("chat-messages");
//  const chatInput = document.getElementById("chat-input");
//  const chatButton = document.getElementById("chat-button");


//   async function sendMessage() {
//     const message = chatInput.value;
//     chatInput.value = "";

//     const response = await fetch('http://localhost:3002/message', {
//      method: "POST",
//      headers: { "Content-Type": "application/json" },
//      body: JSON.stringify({ message }),
//    });
  
//     const data = await response.json();
//     if (data && data.message) {
//      const messageElement = document.createElement("div");

//      chatMessages.innerHTML+= `<div class="response"><p>${message}</p></div>`;
//      messageElement.innerHTML+= `<div class="response"><p>${data.message}</p></div>`
//      chatMessages.appendChild(messageElement);
//      chatContainer.scrollTop = chatContainer.scrollHeight;
//  } else {
//      console.log("Error: " , data);
//      const messageElement = document.createElement("div");
//      messageElement.innerText = `Error: ${console.log(data)}`;
//      chatMessages.appendChild(messageElement);
//      chatContainer.scrollTop = chatContainer.scrollHeight;
//  }
//   }

//   chatButton.addEventListener("click", sendMessage);
//   chatInput.addEventListener('keypress',function(event){
//          if(event.key==='Enter'){
//            sendMessage()
//        }
//     });


//  const chatContainer = document.getElementById("chat-container");
//   const chatMessages = document.getElementById("chat-messages");
//   const chatInput = document.getElementById("chat-input");
//   const chatButton = document.getElementById("chat-button");

//  chatButton.addEventListener('click',sendMessage);
//   chatInput.addEventListener('keypress',function(event){
//     if(event.key==='Enter'){
//       sendMessage()
//     }
//   });
//   function sendMessage(){
//     const message=chatInput.value;
//     chatInput.value=''
//     chatMessages.innerHTML += `<div class="message"><p>${message}<p><div>`;
//     chatMessages.innerHTML += `<div id="loading" class="response loading">.<div>`;
//     scrollToBottom();
//     window.dotsGoingUp = true;
//    var dots = window.setInterval( function() {
//        var wait = document.getElementById("loading");
//        if ( window.dotsGoingUp ) 
//            wait.innerHTML += ".";
//        else {
//            wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
//        if ( wait.innerHTML.length < 2)
//            window.dotsGoingUp = true;
//        }
//        if ( wait.innerHTML.length > 3 )
//            window.dotsGoingUp = false;
//        }, 250);
//         fetch('http://localhost:3002/message', {
//           method: 'POST',
//           headers: {  
//            accept: 'application.json',
//            'Content-Type': 'application/json',
        
//           }, 
//           body: JSON.stringify({message})
//         }).then(response => {
//          return response.json();
//        }).then(data => {
//          document.getElementById("loading").remove();
//          chatMessages.innerHTML += `<div class="response"><p>${data.message}</p></div>`;
//          scrollToBottom();
//        })
//      }
    
//      function scrollToBottom() {
//       chatMessages .scrollTop = chatMessages.scrollHeight;
//      }



//cheat material down
    
 const chatBox = document.querySelector(".chat-box");
 const inputField = chatBox.querySelector("input[type='text']");
 const button = chatBox.querySelector("button");
 const chatBoxBody = chatBox.querySelector(".chat-box-body");
 const secbutton=document.querySelector(".clear");




 button.addEventListener("click", sendMessage);
 inputField.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     sendMessage();
   }
 });

 function sendMessage() {
   const message = inputField.value;
   inputField.value = "";
   chatBoxBody.innerHTML += `<div class="message"><p>${message}</p></div>`;
   chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
   scrollToBottom();
   window.dotsGoingUp = true;
     var dots = window.setInterval( function() {
         var wait = document.getElementById("loading");
         if ( window.dotsGoingUp ) 
             wait.innerHTML += ".";
         else {
             wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
         if ( wait.innerHTML.length < 2)
             window.dotsGoingUp = true;
         }
         if ( wait.innerHTML.length > 3 )
             window.dotsGoingUp = false;
         }, 250);

   fetch('http://localhost:3002/message', {
     method: 'POST',
     headers: {
       accept: 'application.json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({message})
   }).then(response => {
     return response.json();
   }).then(data => {
     document.getElementById("loading").remove();
     chatBoxBody.innerHTML += `<div class="response"><p>${data.message}   </p></div>`;
     scrollToBottom();
   })
 }


 function scrollToBottom() {
   chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
 }