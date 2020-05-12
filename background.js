// var link ='"' +  document.domain + '"';
// $.ajax({
//     headers: { 
//         'Accept': 'application/json',
//         'Content-Type': 'application/json' 
//     },
//     type: "POST",
//     url: "http://192.168.0.87:50000/api/v1/verify/all",
//     data: '{"url":"weka.pwr.edu.pl"}',
//     success: handleData
// });
// function handleData(data){
//     console.log(data['status']);
// }
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendReponse) {
//     console.log(message.url);
// }
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var tab = tabs[0];
    var url = new URL(tab.url)
    let domain = {
        url: url.hostname
    }
    console.log(domain.url);
});
