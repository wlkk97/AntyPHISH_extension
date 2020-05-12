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


/*
//usuniete z powodu bo nie jest potrzebne, przynajmniej na razie ~Dawid   | to chyba pokazuje adres przy kliknieciu we wtyczke
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendReponse) {
    console.log(message);
}
*/

//----------------------------------------
/*
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => { 
    var tab = tabs[0];
    var url = new URL(tab.url)
    let domain = {
        url: url.hostname
    }
    document.getElementsByClassName("domain_hostname")[0].innerHTML= domain.url;  //wysyla do pliku html ktory wyswietla
    chrome.tabs.sendMessage(tab.id, domain.url);  //wysyla domene do script.js na klikniecie wtyczki. tab.url zamiast domaiin.url tez dziala
    
    //wysylanie do background.js adresu url
    chrome.runtime.sendMessage({message: domain.url}, (response) => {
        console.log(response.message);
    });
});
*/

//wysyla do background (lub ogolnie wszedzie)
console.log('ELO ELO: ' + document.URL)
chrome.runtime.sendMessage({message: 'od script.js:  ' + document.URL}, (response) => {
    console.log(document.URL);
});