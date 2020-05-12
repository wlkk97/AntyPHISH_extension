// chrome.runtime.onMessage.addListener(messageReceived);
// function messageReceived(msg) {
//     document.getElementsByClassName("domain_result")[0].innerHTML=(msg);
// }
// document.getElementsByClassName("domain_result")[0].innerHTML= 'test';

// var port = chrome.extension.connect({
//     name: "Sample Communication"
// });
// port.postMessage("Hi BackGround");
// port.onMessage.addListener(function(msg) {
//     console.log("message recieved" + msg);
// });

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var tab = tabs[0];
    var url = new URL(tab.url)
    let domain = {
        url: url.hostname
    }
    document.getElementsByClassName("domain_hostname")[0].innerHTML= domain.url;
    chrome.tabs.sendMessage(tab.id, 'test');
});