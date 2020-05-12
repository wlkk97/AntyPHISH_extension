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
//chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//    var tab = tabs[0];
 //   var url = new URL(tab.url)
  //  let domain = {
  //      url: url.hostname
//    }
//    console.log(domain.url);
//});

/*
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse)
{
    if( request.greeting === "GetURL" )
    {
        var tabURL = "Not set yet";
        chrome.tabs.query({active:true},function(tabs){
            if(tabs.length === 0) {
                sendResponse({});
                return;
            }
            tabURL = tabs[0].url;
            sendResponse( {navURL:tabURL} );
        });        
    }
})
*/

/*chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendReponse) {
    console.log(message);
}*/

/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.cmd == "any command") {
        sendResponse({ result: "any response from background" });
      } else {
        sendResponse({ result: "error", message: `Invalid 'cmd'` });
      }
      // Note: Returning true is required here!
      //  ref: http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
      return true; 
    });*/


// otrzymanie od popup.js adresu url i odeslanie wiadomosci o poprawnym przyjeciu
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
    if (request.message === request.message )
        sendResponse({message: "Got it!"});
        console.log(request.message);
        var link ='"' +  request.message + '"';
        let domain = {
            "url": request.message
        }
        $.ajax({
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        type: "POST",
        url: "https://phish.arqsz.net/api/v1/verify/all",
        data: JSON.stringify(domain),
        success: handleData
        });
        function handleData(data){
            console.log(data.result);
            chrome.runtime.sendMessage({message: data.result}, (response) => {
                console.log(response.message);
            });
        }
    }); 