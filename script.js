// chrome.runtime.sendMessage('Hello World!');
// chrome.runtime.onMessage.addListener(
//     (request, sender, sendResponse) => {
//       if (request.message === "hi")
//         alert('dziala');
//     });
// chrome.extension.onConnect.addListener(function(port) {
//     console.log("Connected .....");
//     port.onMessage.addListener(function(msg) {
//          console.log("message recieved" + msg);
//          port.postMessage("Hi Popup.js");
//     });
// })
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendReponse) {
    console.log(message);
}