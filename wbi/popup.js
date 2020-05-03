$('#save').click(() => {

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'save' }, function (response) {
            console.log(response)
            $('#save').hide()
        });

    })
})

/*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request)
    $.post('localhost:3000/weiboimages',request)
    sendResponse({ tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~' });
})
*/