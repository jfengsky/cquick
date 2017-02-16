setTimeout(function(){
    document.getElementById('demo').innerHTML = 'aaaaa'
}, 1000)

// window.addEventListener("beforeunload", function (event) {
//     event.returnValue = "\o/"
//     // event.preventDefault()
// })
//
// window.onbeforeunload = null


window.onbeforeunload = function(e) {
    var e = e || window.event
    var dialogText = 'Dialog text here';
    e.returnValue = dialogText;
    return dialogText;
}