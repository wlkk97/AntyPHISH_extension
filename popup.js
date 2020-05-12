  chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
  }, tabs => {
      var tab = tabs[0];
      var url = new URL(tab.url)
      let domain = {
          url: url.hostname
      }
      document.getElementsByClassName("domain_hostname")[0].innerHTML = domain.url; //wysyla do pliku html ktory wyswietla
      //   chrome.tabs.sendMessage(tab.id, domain.url); //wysyla domene do script.js na klikniecie wtyczki. tab.url zamiast domaiin.url tez dziala
      var port = chrome.runtime.connect({
          name: "knockknock"
      });
      port.postMessage({
          joke: "Knock knock"
      });
      port.onMessage.addListener(function (msg) {
          if (msg.question == "Who's there?")
              port.postMessage({
                  domain: domain.url
              });
          else if (msg.status == 'suspicious') {
              console.log('kurwa dziala');
              document.getElementById('result').style.color = 'yellow';
              document.getElementById('result').innerHTML = msg.status;
          } else if (msg.status == 'good') {
              console.log('kurwa dziala');
              document.getElementById('result').style.color = 'green';
              document.getElementById('result').innerHTML = msg.status;
          } else if (msg.status == 'malicious') {
              console.log('kurwa dziala');
              document.getElementById('result').style.color = 'red';
              document.getElementById('result').innerHTML = msg.status;
          }
      });
      //     chrome.runtime.sendMessage(laserExtensionId, {request: domain.url}, function(response) {
      //         console.log("prosze o var" + domain.url)
      //         console.log('siemanko ' + response.message)
      // });
      /*
      //wysylanie do background.js adresu url
      chrome.runtime.sendMessage({message: domain.url}, (response) => {
          console.log(response.message);
      });
      */
  });
  chrome.runtime.onMessage.addListener(
      (request, sender, sendResponse) => {
          if (request.message === request.message) {
              document.getElementById('result').style.color = 'yellow';
              document.getElementById('result').innerHTML = request.message;
          }
          //   sendResponse({
          //       message: "Send!"
          //   });
          //   console.log(request.message);
      });
  window.onload = function () {
      document.getElementsByClassName('btn_scan')[0].onclick = function () {
          document.getElementsByClassName('gif')[0].style.display = 'block';
          document.getElementsByClassName('btn_scan')[0].style.display = 'none';
      }
  }