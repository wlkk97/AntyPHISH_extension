var table = new Array();

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === request.message) {
            // sendResponse({message: "Got it!"});
            // console.log(request.message);
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

            function handleData(data) {
                // console.log(data.result);
                table[request.message] = data.result;
                // console.log(table);
                chrome.runtime.sendMessage({
                    message: data.result
                }, (response) => {
                    console.log(response.message);
                });
            }
        }
    });

chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name == "knockknock");
    port.onMessage.addListener(function (msg) {
        if (msg.joke == "Knock knock")
            port.postMessage({
                question: "Who's there?"
            });
        else if (msg.domain === msg.domain)
            port.postMessage({
                status: table[msg.domain]
            });
        else if (msg.answer == "Madame... Bovary")
            port.postMessage({
                question: "I don't get it."
            });
    });
});
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     if (message.request === message.request) {
//         console.log(message.request)
//         sendResponse({message: table[message.request]});
//         console.log('wyslano: ' + table[message.request])
//     }
// });