var list = [];
var div = document.getElementById("messages");

var autoReplies = [
    "Hi" ,
    "I am good" ,
    "Where are you" ,
    "how are you" ,
    "Hello" ,
    "I am intelligent BOY",    ]

function handleSend() {
      
      var msgText = document.getElementById("msg");
      if (msgText.value != "") {
        list.push({ text: msgText.value, admin:false });
        handleDisplay()

        msgText.value = ""; 
        setTimeout(() => {
            let getMsgIndex = Math.floor (Math.random() * autoReplies.length)
            list.push({ text: autoReplies[getMsgIndex], admin:true });
            handleDisplay();
        }, 1000);
      }       
}

function handleDisplay() {
    div.innerHTML = "";  
    for ( count = 0; count < list.length; count++) {
        div.innerHTML += `<div class="flex 
        ${list[count].admin ? "self-start" : "self-end"}
      bg-white inline-block p-2 px-6 rounded-lg border border-black mr-2 mt-2"> 
        ${list[count].text} </div>`;
    }
}
      msgText.value = "";
      setTimeout(() => {

      }, 1000);