var link ='"' +  document.domain + '"';
$.ajax({
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    type: "POST",
    url: "http://192.168.0.87:50000/api/v1/verify/by_whois",
    data: '{"url":"weka.pwr.edu.pl"}',
    success: handleData
});
function handleData(data){
    alert(data['status']);
}
// chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
//     alert('dziala');
//     document.write('12345');
// });
