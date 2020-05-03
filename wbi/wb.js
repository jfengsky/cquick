/**
 * 解析页面结构，获取相关信息
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(request)
    let type = 'success'
    if (request.type === 'save') {

        //博主
        const name = $('.WB_info a').text()

        // 时间
        const time = $($('.WB_detail .WB_from a')[0]).text()

        // 图片
        let imageSrcList = []
        const imageList = $('.choose_box img')
        const tilte = $('title').text()

        if(imageList.length){
            $.map(imageList, function (item) {
                imageSrcList.push($(item).attr('src'))
            })
        } else {
            let bigImage = $('.media_show_box img')
            imageSrcList.push(bigImage.attr('src'))
        }

        chrome.runtime.sendMessage({ imageSrcList, tilte, name, time })
    } else {
        type = 'error'
    }
    sendResponse(type)
})