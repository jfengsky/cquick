/**
 * 发送数据到本地node服务
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(request)
    $.ajax({
        url: 'http://localhost:3000/weiboimages',
        type: 'POST',
        data: JSON.stringify({
            ...request
        }),
        dataType: 'json',
        contentType: "application/json"
    }).then(function (data) {
        // console.log('200')
    })

    sendResponse({ tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~' });
})