console.log('hello from popup');
chrome.runtime.sendMessage('Hello from popup', (response) => {
    console.log(response);
});
