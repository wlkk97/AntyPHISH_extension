chrome.runtime.sendMessage({message: window.location.hostname}, (response) => {
    console.log(window.location.hostname);
});